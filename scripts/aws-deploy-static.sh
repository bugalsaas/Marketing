#!/bin/bash

# AWS CloudFront + S3 Static Site Deployment Script
# This script builds and deploys the static site to AWS

set -e

# Configuration
BUCKET_NAME="bugal-marketing-static"
DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-}"
AWS_REGION="ap-southeast-2"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

echo "🚀 Deploying static site to AWS CloudFront + S3..."
echo "📍 Account ID: $ACCOUNT_ID"
echo "📍 Region: $AWS_REGION"
echo "📍 Bucket: $BUCKET_NAME"

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

# Build the static site
echo "🏗️ Building static site..."
npm run build:static

# Generate static data
echo "📊 Generating static data..."
npm run generate:static-data

# Check if S3 bucket exists, create if not
echo "🪣 Checking S3 bucket..."
if aws s3 ls "s3://$BUCKET_NAME" 2>&1 | grep -q 'NoSuchBucket'; then
    echo "📦 Creating S3 bucket..."
    aws s3 mb "s3://$BUCKET_NAME" --region "$AWS_REGION"
    
    # Configure bucket for static website hosting
    echo "🌐 Configuring bucket for static website hosting..."
    aws s3 website "s3://$BUCKET_NAME" --index-document index.html --error-document 404.html
    
    echo "✅ S3 bucket created and configured"
else
    echo "✅ S3 bucket exists"
fi

# Sync files to S3 with proper caching
echo "📤 Uploading files to S3..."

# Upload static assets with long cache
echo "  📁 Uploading static assets (CSS, JS, images)..."
aws s3 sync out/ "s3://$BUCKET_NAME" \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" \
  --exclude "*.json" \
  --exclude "sitemap.xml" \
  --exclude "robots.txt"

# Upload HTML files with no cache
echo "  📄 Uploading HTML files..."
aws s3 sync out/ "s3://$BUCKET_NAME" \
  --delete \
  --cache-control "public, max-age=0, must-revalidate" \
  --include "*.html"

# Upload JSON data files with short cache
echo "  📊 Uploading data files..."
aws s3 sync out/ "s3://$BUCKET_NAME" \
  --delete \
  --cache-control "public, max-age=3600" \
  --include "*.json"

# Upload sitemap and robots.txt
echo "  🗺️ Uploading sitemap and robots.txt..."
aws s3 sync out/ "s3://$BUCKET_NAME" \
  --delete \
  --cache-control "public, max-age=86400" \
  --include "sitemap.xml" \
  --include "robots.txt"

# Set proper content types
echo "📝 Setting content types..."
aws s3 cp "s3://$BUCKET_NAME" "s3://$BUCKET_NAME" \
  --recursive \
  --metadata-directive REPLACE \
  --content-type "text/html" \
  --exclude "*" \
  --include "*.html"

aws s3 cp "s3://$BUCKET_NAME" "s3://$BUCKET_NAME" \
  --recursive \
  --metadata-directive REPLACE \
  --content-type "application/json" \
  --exclude "*" \
  --include "*.json"

aws s3 cp "s3://$BUCKET_NAME" "s3://$BUCKET_NAME" \
  --recursive \
  --metadata-directive REPLACE \
  --content-type "text/css" \
  --exclude "*" \
  --include "*.css"

aws s3 cp "s3://$BUCKET_NAME" "s3://$BUCKET_NAME" \
  --recursive \
  --metadata-directive REPLACE \
  --content-type "application/javascript" \
  --exclude "*" \
  --include "*.js"

aws s3 cp "s3://$BUCKET_NAME" "s3://$BUCKET_NAME" \
  --recursive \
  --metadata-directive REPLACE \
  --content-type "text/xml" \
  --exclude "*" \
  --include "sitemap.xml"

aws s3 cp "s3://$BUCKET_NAME" "s3://$BUCKET_NAME" \
  --recursive \
  --metadata-directive REPLACE \
  --content-type "text/plain" \
  --exclude "*" \
  --include "robots.txt"

# Set up bucket policy for CloudFront access
echo "🔒 Setting up bucket policy..."
if [ ! -z "$DISTRIBUTION_ID" ]; then
    cat > bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowCloudFrontServicePrincipal",
            "Effect": "Allow",
            "Principal": {
                "Service": "cloudfront.amazonaws.com"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$BUCKET_NAME/*",
            "Condition": {
                "StringEquals": {
                    "AWS:SourceArn": "arn:aws:cloudfront::$ACCOUNT_ID:distribution/$DISTRIBUTION_ID"
                }
            }
        }
    ]
}
EOF
    
    aws s3api put-bucket-policy --bucket "$BUCKET_NAME" --policy file://bucket-policy.json
    rm bucket-policy.json
    echo "✅ Bucket policy updated for CloudFront access"
fi

# Invalidate CloudFront cache
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*"
    echo "✅ CloudFront cache invalidated"
else
    echo "⚠️  DISTRIBUTION_ID not set. Skipping cache invalidation."
    echo "   Set CLOUDFRONT_DISTRIBUTION_ID environment variable or update the script."
fi

# Display results
echo ""
echo "✅ Static site deployment complete!"
echo "🌐 S3 Website URL: https://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com"
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "☁️  CloudFront URL: https://$DISTRIBUTION_ID.cloudfront.net"
fi
echo ""
echo "📊 Deployment Summary:"
echo "  - Static files uploaded to S3"
echo "  - Proper caching headers set"
echo "  - Content types configured"
echo "  - Bucket policy updated"
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "  - CloudFront cache invalidated"
fi
echo ""
echo "Next steps:"
echo "1. Configure your domain to point to CloudFront"
echo "2. Set up SSL certificate in AWS Certificate Manager"
echo "3. Update CloudFront distribution with custom domain"
echo "4. Test the deployment thoroughly"
