#!/bin/bash

# AWS Infrastructure Setup Script for Bugal Marketing Website
# This script creates the necessary AWS resources for static site hosting

set -e

# Configuration
BUCKET_NAME="bugal-marketing-static"
AWS_REGION="ap-southeast-2"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

echo "🏗️ Setting up AWS infrastructure for Bugal Marketing Website..."
echo "📍 Account ID: $ACCOUNT_ID"
echo "📍 Region: $AWS_REGION"
echo "📍 Bucket: $BUCKET_NAME"

# 1. Create S3 bucket
echo "📦 Creating S3 bucket..."
aws s3 mb "s3://$BUCKET_NAME" --region "$AWS_REGION" || echo "Bucket may already exist"

# 2. Configure bucket for static website hosting
echo "🌐 Configuring bucket for static website hosting..."
aws s3 website "s3://$BUCKET_NAME" --index-document index.html --error-document 404.html

# 3. Set bucket policy for public read access
echo "🔒 Setting bucket policy..."
cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket "$BUCKET_NAME" --policy file://bucket-policy.json
rm bucket-policy.json

# 4. Create CloudFront distribution
echo "☁️ Creating CloudFront distribution..."
cat > cloudfront-config.json << EOF
{
    "CallerReference": "bugal-marketing-$(date +%s)",
    "Comment": "Bugal Marketing Website Distribution",
    "DefaultRootObject": "index.html",
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-$BUCKET_NAME",
                "DomainName": "$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com",
                "CustomOriginConfig": {
                    "HTTPPort": 80,
                    "HTTPSPort": 443,
                    "OriginProtocolPolicy": "http-only"
                }
            }
        ]
    },
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-$BUCKET_NAME",
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
        "MaxTTL": 31536000
    },
    "Enabled": true,
    "PriceClass": "PriceClass_100"
}
EOF

DISTRIBUTION_ID=$(aws cloudfront create-distribution --distribution-config file://cloudfront-config.json --query 'Distribution.Id' --output text)
rm cloudfront-config.json

echo "✅ AWS infrastructure setup complete!"
echo "🌐 S3 Website URL: https://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com"
echo "☁️ CloudFront Distribution ID: $DISTRIBUTION_ID"
echo ""
echo "📝 Next steps:"
echo "1. Wait 10-15 minutes for CloudFront distribution to deploy"
echo "2. Run: npm run deploy:aws:static"
echo "3. Set up custom domain (optional)"
echo ""
echo "💾 Save this information:"
echo "BUCKET_NAME=$BUCKET_NAME"
echo "DISTRIBUTION_ID=$DISTRIBUTION_ID"
echo "AWS_REGION=$AWS_REGION"
