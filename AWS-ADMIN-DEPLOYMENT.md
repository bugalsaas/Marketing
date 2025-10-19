# AWS Admin Panel Deployment Guide

This guide walks you through deploying the Bugal admin panel as a dynamic Next.js application on AWS.

## Prerequisites

- AWS CLI installed and configured
- Docker installed locally
- AWS account with appropriate permissions
- Domain name (admin.bugal.com.au) ready for configuration

## Step 1: Create AWS Resources

### 1.1 Create ECR Repository

```bash
# Create ECR repository for admin panel
aws ecr create-repository \
  --repository-name bugal-admin \
  --region ap-southeast-2

# Get login token
aws ecr get-login-password --region ap-southeast-2 | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.ap-southeast-2.amazonaws.com
```

### 1.2 Create ECS Cluster

```bash
# Create ECS cluster
aws ecs create-cluster \
  --cluster-name bugal-admin-cluster \
  --region ap-southeast-2
```

### 1.3 Create VPC and Security Groups

```bash
# Create VPC
aws ec2 create-vpc \
  --cidr-block 10.0.0.0/16 \
  --region ap-southeast-2

# Create security group for admin panel
aws ec2 create-security-group \
  --group-name bugal-admin-sg \
  --description "Security group for Bugal admin panel" \
  --vpc-id vpc-xxxxxxxxx \
  --region ap-southeast-2

# Allow HTTP and HTTPS traffic
aws ec2 authorize-security-group-ingress \
  --group-id sg-xxxxxxxxx \
  --protocol tcp \
  --port 80 \
  --cidr 0.0.0.0/0 \
  --region ap-southeast-2

aws ec2 authorize-security-group-ingress \
  --group-id sg-xxxxxxxxx \
  --protocol tcp \
  --port 443 \
  --cidr 0.0.0.0/0 \
  --region ap-southeast-2
```

## Step 2: Create Docker Configuration

### 2.1 Create Dockerfile for Admin

Create `Dockerfile.admin`:

```dockerfile
# Use Node.js 18 Alpine image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set build target for admin
ENV BUILD_TARGET=admin

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN npm run build:admin

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the built application
COPY --from=builder /app/dist-admin/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

# Create nextjs user
USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["npm", "start:admin"]
```

### 2.2 Create Docker Compose for Local Testing

Create `docker-compose.admin.yml`:

```yaml
version: '3.8'

services:
  admin:
    build:
      context: .
      dockerfile: Dockerfile.admin
    ports:
      - "3001:3000"
    environment:
      - NODE_ENV=production
      - BUILD_TARGET=admin
      - DATABASE_URL=${DATABASE_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
      - NEXTAUTH_URL=http://localhost:3001
    volumes:
      - ./prisma:/app/prisma
    restart: unless-stopped
```

## Step 3: Create ECS Task Definition

### 3.1 Create Task Definition

Create `ecs-task-definition.json`:

```json
{
  "family": "bugal-admin",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "executionRoleArn": "arn:aws:iam::ACCOUNT_ID:role/ecsTaskExecutionRole",
  "containerDefinitions": [
    {
      "name": "bugal-admin",
      "image": "ACCOUNT_ID.dkr.ecr.ap-southeast-2.amazonaws.com/bugal-admin:latest",
      "portMappings": [
        {
          "containerPort": 3000,
          "protocol": "tcp"
        }
      ],
      "essential": true,
      "environment": [
        {
          "name": "NODE_ENV",
          "value": "production"
        },
        {
          "name": "BUILD_TARGET",
          "value": "admin"
        },
        {
          "name": "PORT",
          "value": "3000"
        }
      ],
      "secrets": [
        {
          "name": "DATABASE_URL",
          "valueFrom": "arn:aws:secretsmanager:ap-southeast-2:ACCOUNT_ID:secret:bugal/database-url"
        },
        {
          "name": "NEXTAUTH_SECRET",
          "valueFrom": "arn:aws:secretsmanager:ap-southeast-2:ACCOUNT_ID:secret:bugal/nextauth-secret"
        },
        {
          "name": "NEXTAUTH_URL",
          "valueFrom": "arn:aws:secretsmanager:ap-southeast-2:ACCOUNT_ID:secret:bugal/nextauth-url"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/bugal-admin",
          "awslogs-region": "ap-southeast-2",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

### 3.2 Create CloudWatch Log Group

```bash
aws logs create-log-group \
  --log-group-name /ecs/bugal-admin \
  --region ap-southeast-2
```

## Step 4: Create Application Load Balancer

### 4.1 Create ALB

```bash
# Create application load balancer
aws elbv2 create-load-balancer \
  --name bugal-admin-alb \
  --subnets subnet-xxxxxxxxx subnet-yyyyyyyyy \
  --security-groups sg-xxxxxxxxx \
  --region ap-southeast-2
```

### 4.2 Create Target Group

```bash
# Create target group
aws elbv2 create-target-group \
  --name bugal-admin-tg \
  --protocol HTTP \
  --port 3000 \
  --vpc-id vpc-xxxxxxxxx \
  --target-type ip \
  --health-check-path /api/health \
  --region ap-southeast-2
```

### 4.3 Create Listener

```bash
# Create HTTP listener
aws elbv2 create-listener \
  --load-balancer-arn arn:aws:elasticloadbalancing:ap-southeast-2:ACCOUNT_ID:loadbalancer/app/bugal-admin-alb/xxxxxxxxx \
  --protocol HTTP \
  --port 80 \
  --default-actions Type=forward,TargetGroupArn=arn:aws:elasticloadbalancing:ap-southeast-2:ACCOUNT_ID:targetgroup/bugal-admin-tg/xxxxxxxxx \
  --region ap-southeast-2
```

## Step 5: Deploy Admin Panel

### 5.1 Build and Push Docker Image

```bash
# Build Docker image
docker build -f Dockerfile.admin -t bugal-admin .

# Tag for ECR
docker tag bugal-admin:latest $ACCOUNT_ID.dkr.ecr.ap-southeast-2.amazonaws.com/bugal-admin:latest

# Push to ECR
docker push $ACCOUNT_ID.dkr.ecr.ap-southeast-2.amazonaws.com/bugal-admin:latest
```

### 5.2 Create ECS Service

```bash
# Create ECS service
aws ecs create-service \
  --cluster bugal-admin-cluster \
  --service-name bugal-admin-service \
  --task-definition bugal-admin:1 \
  --desired-count 1 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-xxxxxxxxx,subnet-yyyyyyyyy],securityGroups=[sg-xxxxxxxxx],assignPublicIp=ENABLED}" \
  --load-balancers "targetGroupArn=arn:aws:elasticloadbalancing:ap-southeast-2:ACCOUNT_ID:targetgroup/bugal-admin-tg/xxxxxxxxx,containerName=bugal-admin,containerPort=3000" \
  --region ap-southeast-2
```

## Step 6: Setup SSL Certificate

### 6.1 Request Certificate

```bash
# Request certificate for admin.bugal.com.au
aws acm request-certificate \
  --domain-name admin.bugal.com.au \
  --validation-method DNS \
  --region ap-southeast-2
```

### 6.2 Configure HTTPS Listener

Once certificate is validated:

```bash
# Create HTTPS listener
aws elbv2 create-listener \
  --load-balancer-arn arn:aws:elasticloadbalancing:ap-southeast-2:ACCOUNT_ID:loadbalancer/app/bugal-admin-alb/xxxxxxxxx \
  --protocol HTTPS \
  --port 443 \
  --certificates CertificateArn=arn:aws:acm:ap-southeast-2:ACCOUNT_ID:certificate/xxxxxxxxx \
  --default-actions Type=forward,TargetGroupArn=arn:aws:elasticloadbalancing:ap-southeast-2:ACCOUNT_ID:targetgroup/bugal-admin-tg/xxxxxxxxx \
  --region ap-southeast-2
```

## Step 7: Configure DNS

### 7.1 Update DNS Records

Add these DNS records to your domain:

```
Type: A
Name: admin.bugal.com.au
Value: <ALB DNS Name>
```

### 7.2 Test Deployment

```bash
# Test admin panel
curl -I https://admin.bugal.com.au

# Test health endpoint
curl https://admin.bugal.com.au/api/health
```

## Step 8: Setup Secrets Management

### 8.1 Create Secrets in AWS Secrets Manager

```bash
# Create database URL secret
aws secretsmanager create-secret \
  --name bugal/database-url \
  --description "Database URL for Bugal admin panel" \
  --secret-string "postgresql://user:password@host:port/database" \
  --region ap-southeast-2

# Create NextAuth secret
aws secretsmanager create-secret \
  --name bugal/nextauth-secret \
  --description "NextAuth secret for Bugal admin panel" \
  --secret-string "your-nextauth-secret" \
  --region ap-southeast-2

# Create NextAuth URL secret
aws secretsmanager create-secret \
  --name bugal/nextauth-url \
  --description "NextAuth URL for Bugal admin panel" \
  --secret-string "https://admin.bugal.com.au" \
  --region ap-southeast-2
```

## Step 9: Configure CORS

### 9.1 Update Admin API Routes

Add CORS headers to admin API routes to allow requests from the static site:

```typescript
// In each API route file
export async function POST(request: Request) {
  const response = await handleRequest(request);
  
  // Add CORS headers
  response.headers.set('Access-Control-Allow-Origin', 'https://bugal.com.au');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return response;
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://bugal.com.au',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
```

## Step 10: Monitoring and Logging

### 10.1 Setup CloudWatch Alarms

Create alarms for:
- High error rates
- High response times
- Low CPU utilization
- Memory usage

### 10.2 Setup Log Aggregation

Configure CloudWatch Logs Insights for:
- Error tracking
- Performance monitoring
- User activity logging

## Troubleshooting

### Common Issues

1. **Service won't start**: Check ECS task logs in CloudWatch
2. **Database connection issues**: Verify secrets and network connectivity
3. **CORS errors**: Check CORS headers in API routes
4. **SSL issues**: Verify certificate validation and ALB configuration

### Useful Commands

```bash
# Check ECS service status
aws ecs describe-services \
  --cluster bugal-admin-cluster \
  --services bugal-admin-service \
  --region ap-southeast-2

# Check task logs
aws logs get-log-events \
  --log-group-name /ecs/bugal-admin \
  --log-stream-name ecs/bugal-admin/xxxxxxxxx \
  --region ap-southeast-2

# Update service
aws ecs update-service \
  --cluster bugal-admin-cluster \
  --service bugal-admin-service \
  --task-definition bugal-admin:2 \
  --region ap-southeast-2
```

## Cost Optimization

### ECS Fargate Costs
- Use appropriate CPU/memory allocation
- Enable auto-scaling based on CPU/memory usage
- Use Spot instances for non-critical workloads

### ALB Costs
- Monitor data transfer costs
- Use appropriate target group health checks
- Optimize listener rules

## Security Best Practices

1. **Network Security**:
   - Use private subnets for ECS tasks
   - Configure security groups with minimal access
   - Use VPC endpoints for AWS services

2. **Application Security**:
   - Use HTTPS everywhere
   - Implement proper authentication
   - Regular security updates

3. **Secrets Management**:
   - Use AWS Secrets Manager
   - Rotate secrets regularly
   - Monitor secret access

## Next Steps

After successful deployment:
1. Test all admin functionality
2. Configure monitoring and alerting
3. Set up automated deployments
4. Plan for database migration
5. Configure backup and disaster recovery
