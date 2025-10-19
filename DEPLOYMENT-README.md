# Bugal Marketing Website - Deployment Guide

This guide provides step-by-step instructions for deploying the Bugal marketing website as a static site on AWS CloudFront + S3, with the admin panel running on AWS ECS.

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Static Site   │    │   Admin Panel    │    │    Database     │
│                 │    │                  │    │                 │
│ • bugal.com.au  │    │ • admin.bugal.   │    │ • PostgreSQL    │
│ • www.bugal.    │    │   com.au         │    │ • Prisma ORM    │
│                 │    │                  │    │                 │
│ • CloudFront    │    │ • ECS Fargate    │    │ • AWS RDS       │
│ • S3 Bucket     │    │ • ALB            │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 📋 Prerequisites

- AWS CLI installed and configured
- Docker installed (for admin panel)
- Node.js 18+ installed
- Domain name (bugal.com.au) ready for configuration
- AWS account with appropriate permissions

## 🚀 Quick Start

### 1. Build and Test Locally

```bash
# Install dependencies
npm install

# Build static site
npm run build:static

# Build admin panel
npm run build:admin

# Test admin panel locally
npm run docker:admin:run
```

### 2. Deploy Static Site

```bash
# Deploy to AWS S3 + CloudFront
npm run deploy:aws:static
```

### 3. Deploy Admin Panel

```bash
# Deploy to AWS ECS
npm run deploy:aws:admin
```

## 📚 Detailed Documentation

### Static Site Deployment
- [AWS CloudFront + S3 Setup Guide](AWS-CLOUDFRONT-DEPLOYMENT.md)
- [DNS Configuration Guide](DNS-CONFIGURATION.md)

### Admin Panel Deployment
- [AWS Admin Panel Deployment Guide](AWS-ADMIN-DEPLOYMENT.md)
- [Docker Configuration](Dockerfile.admin)

### General
- [Deployment Checklist](DEPLOYMENT-CHECKLIST.md)
- [Static Site Migration Plan](static-site-migration-plan.plan.md)

## 🛠️ Available Scripts

### Build Scripts
```bash
npm run build:static     # Build static site for CloudFront
npm run build:admin      # Build admin panel for AWS
npm run build:all        # Build both static and admin
```

### Deployment Scripts
```bash
npm run deploy:aws:static    # Deploy static site to AWS
npm run deploy:aws:admin     # Deploy admin panel to AWS
```

### Docker Scripts
```bash
npm run docker:admin:build   # Build Docker image for admin
npm run docker:admin:run     # Run admin panel locally
npm run docker:admin:stop    # Stop local admin panel
```

### Data Generation
```bash
npm run generate:static-data # Generate static data files
```

## 🔧 Configuration

### Environment Variables

#### Static Site (Build Time)
- `BUILD_TARGET=static` - Builds static site
- `DATABASE_URL` - Database connection for data generation

#### Admin Panel (Runtime)
- `BUILD_TARGET=admin` - Builds admin panel
- `DATABASE_URL` - Database connection
- `NEXTAUTH_SECRET` - NextAuth secret
- `NEXTAUTH_URL` - Admin panel URL

### AWS Configuration

#### S3 Bucket
- **Name**: `bugal-marketing-static`
- **Region**: `ap-southeast-2`
- **Purpose**: Static file hosting

#### CloudFront Distribution
- **Origin**: S3 bucket
- **Domains**: `bugal.com.au`, `www.bugal.com.au`
- **SSL**: AWS Certificate Manager

#### ECS Cluster
- **Name**: `bugal-admin-cluster`
- **Service**: `bugal-admin-service`
- **Task Definition**: `bugal-admin`

## 🌐 DNS Configuration

### Required DNS Records

```
Type: A
Name: bugal.com.au
Value: <CloudFront Distribution Domain>

Type: CNAME
Name: www.bugal.com.au
Value: <CloudFront Distribution Domain>

Type: A
Name: admin.bugal.com.au
Value: <Application Load Balancer DNS>
```

## 🔒 Security

### SSL Certificates
- **Static Site**: AWS Certificate Manager (us-east-1)
- **Admin Panel**: AWS Certificate Manager (ap-southeast-2)

### CORS Configuration
- Admin API allows requests from `bugal.com.au`
- Contact form submits to `admin.bugal.com.au/api/contact`

### Access Control
- S3 bucket: CloudFront only
- Admin panel: Authentication required
- Database: VPC security groups

## 📊 Monitoring

### CloudWatch Metrics
- ECS service health
- ALB response times
- CloudFront cache hit ratio
- S3 request metrics

### Logs
- ECS task logs: `/ecs/bugal-admin`
- CloudFront access logs: S3 bucket
- Application logs: CloudWatch Logs

## 🚨 Troubleshooting

### Common Issues

#### Static Site Issues
- **403 Forbidden**: Check S3 bucket policy
- **404 Not Found**: Verify index.html exists
- **SSL Issues**: Check certificate configuration

#### Admin Panel Issues
- **Service won't start**: Check ECS task logs
- **Database connection**: Verify secrets and network
- **CORS errors**: Check API route headers

### Debug Commands

```bash
# Check ECS service status
aws ecs describe-services --cluster bugal-admin-cluster --services bugal-admin-service

# Check task logs
aws logs get-log-events --log-group-name /ecs/bugal-admin --log-stream-name <stream-name>

# Test DNS resolution
nslookup bugal.com.au
nslookup admin.bugal.com.au

# Test SSL certificates
openssl s_client -connect bugal.com.au:443 -servername bugal.com.au
```

## 💰 Cost Estimation

### Monthly Costs (Approximate)
- **S3 Storage**: $1-5 (depending on content)
- **CloudFront**: $1-10 (depending on traffic)
- **ECS Fargate**: $15-30 (depending on usage)
- **ALB**: $20-25
- **RDS**: $20-50 (depending on instance size)
- **Total**: $60-120/month

### Cost Optimization
- Use S3 Intelligent Tiering
- Optimize CloudFront cache behaviors
- Right-size ECS tasks
- Use Reserved Instances for RDS

## 🔄 Updates and Maintenance

### Static Site Updates
1. Make changes to code
2. Run `npm run build:static`
3. Run `npm run deploy:aws:static`
4. CloudFront cache will be invalidated automatically

### Admin Panel Updates
1. Make changes to code
2. Run `npm run deploy:aws:admin`
3. ECS will perform rolling deployment
4. Monitor deployment in ECS console

### Database Updates
1. Create migration files
2. Run migrations in admin panel
3. Test functionality
4. Monitor for issues

## 📞 Support

### AWS Support
- **Basic Support**: Included with AWS account
- **Developer Support**: $29/month
- **Business Support**: $100/month

### Documentation
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [AWS ECS Documentation](https://docs.aws.amazon.com/ecs/)
- [Next.js Documentation](https://nextjs.org/docs)

### Emergency Contacts
- **Primary Developer**: [Your contact info]
- **AWS Support**: [AWS support contact]
- **DNS Provider**: [DNS provider contact]

## 📈 Performance Optimization

### Static Site
- CloudFront CDN for global distribution
- Gzip/Brotli compression
- Optimized images and assets
- Proper cache headers

### Admin Panel
- ECS Fargate for serverless scaling
- Application Load Balancer for high availability
- Database connection pooling
- Optimized Docker images

### Database
- Read replicas for read-heavy workloads
- Connection pooling
- Query optimization
- Regular maintenance

## 🔐 Security Best Practices

### Infrastructure
- VPC with private subnets
- Security groups with minimal access
- WAF for additional protection
- Regular security updates

### Application
- HTTPS everywhere
- Secure authentication
- Input validation
- Regular dependency updates

### Data
- Encryption at rest and in transit
- Regular backups
- Access logging
- Data retention policies

---

## 📝 Notes

- This deployment uses AWS services in the `ap-southeast-2` (Sydney) region
- All costs are estimates and may vary based on usage
- Regular monitoring and maintenance are recommended
- Keep documentation updated as changes are made

For questions or issues, please refer to the detailed documentation files or contact the development team.
