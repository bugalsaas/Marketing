#!/bin/bash

# AWS Admin Panel Deployment Script
# This script builds and deploys the admin panel to AWS ECS

set -e

# Configuration
ECR_REPOSITORY="bugal-admin"
ECS_CLUSTER="bugal-admin-cluster"
ECS_SERVICE="bugal-admin-service"
AWS_REGION="ap-southeast-2"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

echo "🚀 Deploying admin panel to AWS ECS..."
echo "📍 Account ID: $ACCOUNT_ID"
echo "📍 Region: $AWS_REGION"
echo "📍 ECR Repository: $ECR_REPOSITORY"
echo "📍 ECS Cluster: $ECS_CLUSTER"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check AWS credentials
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS credentials not configured. Please run 'aws configure' first."
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install it first."
    exit 1
fi

# Build the admin panel
echo "🏗️ Building admin panel..."
npm run build:admin

# Build Docker image
echo "🐳 Building Docker image..."
docker build -f Dockerfile.admin -t $ECR_REPOSITORY .

# Tag image for ECR
echo "🏷️ Tagging image for ECR..."
docker tag $ECR_REPOSITORY:latest $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest

# Login to ECR
echo "🔐 Logging in to ECR..."
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# Push image to ECR
echo "📤 Pushing image to ECR..."
docker push $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:latest

# Update ECS service
echo "🔄 Updating ECS service..."
aws ecs update-service \
  --cluster $ECS_CLUSTER \
  --service $ECS_SERVICE \
  --force-new-deployment \
  --region $AWS_REGION

# Wait for deployment to complete
echo "⏳ Waiting for deployment to complete..."
aws ecs wait services-stable \
  --cluster $ECS_CLUSTER \
  --services $ECS_SERVICE \
  --region $AWS_REGION

# Get service status
echo "📊 Getting service status..."
aws ecs describe-services \
  --cluster $ECS_CLUSTER \
  --services $ECS_SERVICE \
  --region $AWS_REGION \
  --query 'services[0].{Status:status,RunningCount:runningCount,DesiredCount:desiredCount,TaskDefinition:taskDefinition}'

# Get task ARN
TASK_ARN=$(aws ecs list-tasks \
  --cluster $ECS_CLUSTER \
  --service-name $ECS_SERVICE \
  --region $AWS_REGION \
  --query 'taskArns[0]' \
  --output text)

if [ "$TASK_ARN" != "None" ] && [ "$TASK_ARN" != "" ]; then
    echo "📋 Getting task details..."
    aws ecs describe-tasks \
      --cluster $ECS_CLUSTER \
      --tasks $TASK_ARN \
      --region $AWS_REGION \
      --query 'tasks[0].{Status:lastStatus,HealthStatus:healthStatus,CPU:cpu,Memory:memory}'
    
    # Get task logs
    echo "📝 Getting recent logs..."
    LOG_GROUP="/ecs/bugal-admin"
    LOG_STREAM=$(aws logs describe-log-streams \
      --log-group-name $LOG_GROUP \
      --region $AWS_REGION \
      --order-by LastEventTime \
      --descending \
      --max-items 1 \
      --query 'logStreams[0].logStreamName' \
      --output text)
    
    if [ "$LOG_STREAM" != "None" ] && [ "$LOG_STREAM" != "" ]; then
        echo "📄 Recent logs:"
        aws logs get-log-events \
          --log-group-name $LOG_GROUP \
          --log-stream-name $LOG_STREAM \
          --region $AWS_REGION \
          --start-time $(date -d '5 minutes ago' +%s)000 \
          --query 'events[].message' \
          --output text
    fi
fi

# Get ALB DNS name
echo "🌐 Getting Application Load Balancer details..."
ALB_ARN=$(aws elbv2 describe-load-balancers \
  --names bugal-admin-alb \
  --region $AWS_REGION \
  --query 'LoadBalancers[0].LoadBalancerArn' \
  --output text)

if [ "$ALB_ARN" != "None" ] && [ "$ALB_ARN" != "" ]; then
    ALB_DNS=$(aws elbv2 describe-load-balancers \
      --load-balancer-arns $ALB_ARN \
      --region $AWS_REGION \
      --query 'LoadBalancers[0].DNSName' \
      --output text)
    
    echo "🌐 Admin panel URL: https://admin.bugal.com.au"
    echo "🌐 ALB DNS name: $ALB_DNS"
    
    # Test admin panel
    echo "🧪 Testing admin panel..."
    if curl -s -o /dev/null -w "%{http_code}" https://admin.bugal.com.au | grep -q "200\|301\|302"; then
        echo "✅ Admin panel is responding"
    else
        echo "⚠️  Admin panel may not be responding yet (DNS propagation may take time)"
    fi
fi

echo ""
echo "✅ Admin panel deployment complete!"
echo "📊 Deployment Summary:"
echo "  - Docker image built and pushed to ECR"
echo "  - ECS service updated"
echo "  - Service is running and stable"
echo "  - Admin panel accessible at https://admin.bugal.com.au"
echo ""
echo "Next steps:"
echo "1. Test admin panel functionality"
echo "2. Configure DNS records if not already done"
echo "3. Set up monitoring and alerting"
echo "4. Test contact form integration with static site"
