# AWS CloudFront + S3 Static Site Deployment Guide

This guide walks you through deploying the Bugal marketing website as a static site on AWS CloudFront + S3.

## Prerequisites

- AWS CLI installed and configured
- AWS account with appropriate permissions
- Domain name (bugal.com.au) ready for configuration

## Step 1: Create S3 Bucket

### 1.1 Create the Bucket

```bash
# Create S3 bucket for static site
aws s3 mb s3://bugal-marketing-static --region ap-southeast-2

# Enable static website hosting
aws s3 website s3://bugal-marketing-static \
  --index-document index.html \
  --error-document 404.html
```

### 1.2 Configure Bucket Policy

Create `s3-bucket-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::bugal-marketing-static/*"
    }
  ]
}
```

Apply the policy:

```bash
aws s3api put-bucket-policy \
  --bucket bugal-marketing-static \
  --policy file://s3-bucket-policy.json
```

## Step 2: Create CloudFront Distribution

### 2.1 Create Distribution Configuration

Create `cloudfront-config.json`:

```json
{
  "CallerReference": "bugal-marketing-2024",
  "Comment": "Bugal Marketing Website",
  "DefaultRootObject": "index.html",
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "S3-bugal-marketing-static",
        "DomainName": "bugal-marketing-static.s3.ap-southeast-2.amazonaws.com",
        "S3OriginConfig": {
          "OriginAccessIdentity": ""
        }
      }
    ]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-bugal-marketing-static",
    "ViewerProtocolPolicy": "redirect-to-https",
    "TrustedSigners": {
      "Enabled": false,
      "Quantity": 0
    },
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": {
        "Forward": "none"
      }
    },
    "MinTTL": 0,
    "DefaultTTL": 86400,
    "MaxTTL": 31536000,
    "Compress": true
  },
  "CacheBehaviors": {
    "Quantity": 2,
    "Items": [
      {
        "PathPattern": "*.html",
        "TargetOriginId": "S3-bugal-marketing-static",
        "ViewerProtocolPolicy": "redirect-to-https",
        "ForwardedValues": {
          "QueryString": false,
          "Cookies": {
            "Forward": "none"
          }
        },
        "MinTTL": 0,
        "DefaultTTL": 0,
        "MaxTTL": 0,
        "Compress": true
      },
      {
        "PathPattern": "*.json",
        "TargetOriginId": "S3-bugal-marketing-static",
        "ViewerProtocolPolicy": "redirect-to-https",
        "ForwardedValues": {
          "QueryString": false,
          "Cookies": {
            "Forward": "none"
          }
        },
        "MinTTL": 0,
        "DefaultTTL": 3600,
        "MaxTTL": 86400,
        "Compress": true
      }
    ]
  },
  "CustomErrorResponses": {
    "Quantity": 2,
    "Items": [
      {
        "ErrorCode": 404,
        "ResponsePagePath": "/404.html",
        "ResponseCode": "404",
        "ErrorCachingMinTTL": 300
      },
      {
        "ErrorCode": 403,
        "ResponsePagePath": "/404.html",
        "ResponseCode": "404",
        "ErrorCachingMinTTL": 300
      }
    ]
  },
  "Enabled": true,
  "PriceClass": "PriceClass_100"
}
```

### 2.2 Create Distribution

```bash
aws cloudfront create-distribution \
  --distribution-config file://cloudfront-config.json
```

Note the Distribution ID from the output - you'll need it for cache invalidation.

## Step 3: Setup SSL Certificate

### 3.1 Request Certificate

```bash
# Request certificate for bugal.com.au and www.bugal.com.au
aws acm request-certificate \
  --domain-name bugal.com.au \
  --subject-alternative-names www.bugal.com.au \
  --validation-method DNS \
  --region us-east-1
```

### 3.2 Validate Certificate

1. Check the certificate status:
```bash
aws acm list-certificates --region us-east-1
```

2. Get validation records:
```bash
aws acm describe-certificate \
  --certificate-arn <CERTIFICATE_ARN> \
  --region us-east-1
```

3. Add the DNS validation records to your domain's DNS settings.

## Step 4: Configure Custom Domain

### 4.1 Update CloudFront Distribution

Once the certificate is validated, update your CloudFront distribution to use the custom domain:

1. Go to CloudFront console
2. Select your distribution
3. Edit distribution settings
4. Add `bugal.com.au` and `www.bugal.com.au` to Alternate Domain Names
5. Select your SSL certificate
6. Save changes

### 4.2 Configure DNS

Add these DNS records to your domain:

```
Type: A
Name: bugal.com.au
Value: <CloudFront Distribution Domain Name>

Type: CNAME
Name: www.bugal.com.au
Value: <CloudFront Distribution Domain Name>
```

## Step 5: Deploy Static Site

### 5.1 Build and Deploy

```bash
# Build the static site
npm run build:static

# Deploy to S3
npm run deploy:static
```

### 5.2 Verify Deployment

1. Check S3 bucket contents:
```bash
aws s3 ls s3://bugal-marketing-static --recursive
```

2. Test CloudFront URL:
```bash
curl -I https://<DISTRIBUTION_ID>.cloudfront.net
```

3. Test custom domain:
```bash
curl -I https://bugal.com.au
```

## Step 6: Setup Monitoring and Alerts

### 6.1 CloudWatch Alarms

Create alarms for:
- High error rates
- High latency
- Low cache hit ratio

### 6.2 Logging

Enable CloudFront access logs:
1. Go to CloudFront console
2. Select your distribution
3. Go to "Behaviors" tab
4. Edit default behavior
5. Enable "Logging" and specify S3 bucket

## Troubleshooting

### Common Issues

1. **403 Forbidden**: Check S3 bucket policy
2. **404 Not Found**: Verify index.html exists and CloudFront error pages are configured
3. **SSL Issues**: Ensure certificate is validated and properly configured
4. **Cache Issues**: Use cache invalidation for immediate updates

### Cache Invalidation

```bash
# Invalidate all files
aws cloudfront create-invalidation \
  --distribution-id <DISTRIBUTION_ID> \
  --paths "/*"

# Invalidate specific files
aws cloudfront create-invalidation \
  --distribution-id <DISTRIBUTION_ID> \
  --paths "/blog/*" "/index.html"
```

## Cost Optimization

### S3 Costs
- Use S3 Intelligent Tiering for automatic cost optimization
- Enable lifecycle policies for old versions

### CloudFront Costs
- Monitor data transfer costs
- Use appropriate price class for your audience
- Optimize cache behaviors to reduce origin requests

## Security Best Practices

1. **S3 Bucket Security**:
   - Block public access except for CloudFront
   - Use Origin Access Identity (OAI) or Origin Access Control (OAC)

2. **CloudFront Security**:
   - Enable AWS WAF for additional protection
   - Use security headers
   - Configure proper CORS policies

3. **SSL/TLS**:
   - Use TLS 1.2 or higher
   - Enable HSTS headers
   - Use strong cipher suites

## Performance Optimization

1. **Compression**: Already enabled in CloudFront config
2. **Caching**: Optimized cache behaviors for different content types
3. **HTTP/2**: Automatically enabled by CloudFront
4. **Image Optimization**: Use Next.js Image component with CloudFront

## Backup and Recovery

1. **S3 Versioning**: Enable versioning for rollback capability
2. **Cross-Region Replication**: Consider for disaster recovery
3. **Regular Backups**: Automated backup of static files

## Next Steps

After successful deployment:
1. Test all pages and functionality
2. Monitor performance metrics
3. Set up automated deployments
4. Configure monitoring and alerting
5. Plan for admin panel deployment (Phase 5)
