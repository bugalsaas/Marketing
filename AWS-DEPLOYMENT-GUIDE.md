# AWS Deployment Guide for Bugal Marketing Website

## 🎯 Overview
This guide will help you deploy the Bugal marketing website to AWS S3 + CloudFront for optimal performance and cost-effectiveness.

## ✅ Prerequisites
- AWS CLI installed and configured
- AWS account with appropriate permissions
- Domain name (optional, for custom domain setup)

## 🚀 Quick Start

### Step 1: Install AWS CLI (if not already installed)
```bash
# macOS
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /

# Verify installation
aws --version
```

### Step 2: Configure AWS Credentials
```bash
aws configure
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Enter your default region (e.g., ap-southeast-2)
# Enter your default output format (e.g., json)
```

### Step 3: Set Up AWS Infrastructure
```bash
# Run the infrastructure setup script
./scripts/setup-aws-infrastructure.sh
```

This will create:
- S3 bucket for static hosting
- CloudFront distribution for CDN
- Proper bucket policies for public access

### Step 4: Deploy the Website
```bash
# Deploy to AWS
npm run deploy:aws:static
```

## 📊 What Gets Deployed

### Static Files (64 pages total):
- ✅ Homepage
- ✅ Blog (37 posts)
- ✅ Features page
- ✅ Pricing page
- ✅ FAQ page
- ✅ Testimonials page
- ✅ Contact page
- ✅ Support Provider Journey (15 pages)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ All static assets (CSS, JS, images)

### Performance Features:
- ✅ CloudFront CDN for global distribution
- ✅ Gzip compression
- ✅ Proper caching headers
- ✅ HTTPS redirect
- ✅ Optimized images

## 🌐 Access Your Website

After deployment, your website will be available at:
- **S3 Website URL**: `https://bugal-marketing-static.s3-website-ap-southeast-2.amazonaws.com`
- **CloudFront URL**: `https://[DISTRIBUTION_ID].cloudfront.net`

## 🔧 Configuration

### Environment Variables
Set these in your deployment environment:
```bash
export CLOUDFRONT_DISTRIBUTION_ID="your-distribution-id"
export AWS_REGION="ap-southeast-2"
```

### Custom Domain (Optional)
1. Create SSL certificate in AWS Certificate Manager
2. Update CloudFront distribution with custom domain
3. Update DNS records to point to CloudFront

## 📈 Monitoring

### CloudWatch Metrics
- Request count
- Error rates
- Cache hit ratio
- Data transfer

### Performance Monitoring
- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Custom analytics events

## 🔄 Updates and Maintenance

### Deploy Updates
```bash
# Make changes to your code
git add .
git commit -m "Update website content"
git push

# Deploy to AWS
npm run deploy:aws:static
```

### Cache Invalidation
```bash
# Invalidate CloudFront cache after updates
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 💰 Cost Optimization

### S3 Costs
- Storage: ~$0.023 per GB per month
- Requests: ~$0.0004 per 1,000 requests

### CloudFront Costs
- Data transfer: ~$0.085 per GB (first 10TB)
- Requests: ~$0.0075 per 10,000 requests

### Estimated Monthly Cost
For a typical marketing website:
- **Low traffic** (< 10,000 visitors): ~$5-10/month
- **Medium traffic** (10,000-100,000 visitors): ~$20-50/month
- **High traffic** (> 100,000 visitors): ~$50-200/month

## 🛠️ Troubleshooting

### Common Issues

1. **Build Errors**
   - Ensure all dependencies are installed: `npm install`
   - Check Node.js version compatibility
   - Verify environment variables

2. **Deployment Errors**
   - Check AWS credentials: `aws sts get-caller-identity`
   - Verify S3 bucket permissions
   - Check CloudFront distribution status

3. **Website Not Loading**
   - Check S3 bucket policy
   - Verify CloudFront distribution is deployed
   - Check DNS settings (if using custom domain)

### Debug Commands
```bash
# Check AWS configuration
aws sts get-caller-identity

# List S3 buckets
aws s3 ls

# Check CloudFront distributions
aws cloudfront list-distributions

# Test S3 website
curl -I https://bugal-marketing-static.s3-website-ap-southeast-2.amazonaws.com
```

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review AWS CloudWatch logs
3. Check the deployment logs in your terminal
4. Verify all environment variables are set correctly

## 🎉 Success!

Once deployed, your Bugal marketing website will be:
- ✅ Fast and globally distributed via CloudFront
- ✅ Secure with HTTPS
- ✅ SEO optimized with proper meta tags
- ✅ Mobile responsive
- ✅ Cost-effective hosting solution
