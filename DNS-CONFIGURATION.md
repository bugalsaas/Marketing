# DNS Configuration Guide

This guide walks you through configuring DNS records for the Bugal marketing website and admin panel.

## Overview

After deployment, you'll have:
- **Static Site**: `bugal.com.au` and `www.bugal.com.au` → CloudFront
- **Admin Panel**: `admin.bugal.com.au` → AWS Application Load Balancer

## Step 1: CloudFront DNS Configuration

### 1.1 Get CloudFront Distribution Details

After creating your CloudFront distribution, note these details:
- **Distribution ID**: Found in CloudFront console
- **Domain Name**: `d1234567890.cloudfront.net` (example)

### 1.2 Configure DNS Records

In your DNS provider (wherever `bugal.com.au` is managed), add these records:

```
Type: A
Name: bugal.com.au
Value: <CloudFront Distribution Domain Name>
TTL: 300

Type: CNAME
Name: www.bugal.com.au
Value: <CloudFront Distribution Domain Name>
TTL: 300
```

**Example:**
```
Type: A
Name: bugal.com.au
Value: d1234567890.cloudfront.net
TTL: 300

Type: CNAME
Name: www.bugal.com.au
Value: d1234567890.cloudfront.net
TTL: 300
```

### 1.3 Verify CloudFront Configuration

1. Go to CloudFront console
2. Select your distribution
3. Go to "Behaviors" tab
4. Ensure default behavior is configured
5. Go to "Error Pages" tab
6. Ensure 404 errors redirect to `/404.html`

## Step 2: Admin Panel DNS Configuration

### 2.1 Get Application Load Balancer Details

After creating your ALB, note these details:
- **DNS Name**: `bugal-admin-alb-1234567890.ap-southeast-2.elb.amazonaws.com`
- **Hosted Zone ID**: `Z1D633PJN98FT9` (for ap-southeast-2)

### 2.2 Configure DNS Records

Add this DNS record for the admin panel:

```
Type: A
Name: admin.bugal.com.au
Value: <ALB DNS Name>
TTL: 300
```

**Example:**
```
Type: A
Name: admin.bugal.com.au
Value: bugal-admin-alb-1234567890.ap-southeast-2.elb.amazonaws.com
TTL: 300
```

### 2.3 Alternative: Use ALIAS Record (if supported)

If your DNS provider supports ALIAS records (like Route 53), use:

```
Type: ALIAS
Name: admin.bugal.com.au
Value: <ALB DNS Name>
Hosted Zone ID: Z1D633PJN98FT9
```

## Step 3: SSL Certificate Configuration

### 3.1 CloudFront SSL Certificate

1. Go to AWS Certificate Manager (ACM)
2. Ensure certificate is in `us-east-1` region (required for CloudFront)
3. Verify domain ownership
4. Update CloudFront distribution to use the certificate

### 3.2 Admin Panel SSL Certificate

1. Go to AWS Certificate Manager (ACM)
2. Ensure certificate is in `ap-southeast-2` region
3. Verify domain ownership
4. Update Application Load Balancer to use the certificate

## Step 4: DNS Propagation Testing

### 4.1 Test DNS Resolution

```bash
# Test main domain
nslookup bugal.com.au

# Test www subdomain
nslookup www.bugal.com.au

# Test admin subdomain
nslookup admin.bugal.com.au
```

### 4.2 Test Website Access

```bash
# Test static site
curl -I https://bugal.com.au
curl -I https://www.bugal.com.au

# Test admin panel
curl -I https://admin.bugal.com.au
```

### 4.3 Test SSL Certificates

```bash
# Test SSL for main site
openssl s_client -connect bugal.com.au:443 -servername bugal.com.au

# Test SSL for admin panel
openssl s_client -connect admin.bugal.com.au:443 -servername admin.bugal.com.au
```

## Step 5: Redirect Configuration

### 5.1 CloudFront Redirects

Configure redirects in CloudFront to handle common URL patterns:

1. Go to CloudFront console
2. Select your distribution
3. Go to "Behaviors" tab
4. Create new behavior for redirects

**Example redirects:**
- `/blog/old-post` → `/blog/new-post` (301 redirect)
- `/old-page` → `/new-page` (301 redirect)

### 5.2 Application Load Balancer Redirects

Configure redirects in ALB for admin panel:

1. Go to EC2 console
2. Select your load balancer
3. Go to "Listeners" tab
4. Add redirect rules

**Example redirects:**
- `http://admin.bugal.com.au` → `https://admin.bugal.com.au` (301 redirect)

## Step 6: Monitoring DNS Health

### 6.1 Setup DNS Monitoring

Use tools like:
- **Pingdom**: Monitor DNS resolution
- **UptimeRobot**: Monitor website availability
- **AWS Route 53 Health Checks**: Monitor DNS health

### 6.2 CloudWatch Alarms

Create CloudWatch alarms for:
- DNS resolution failures
- Website availability
- SSL certificate expiration

## Step 7: Common DNS Issues

### 7.1 DNS Propagation Delays

- **TTL**: Lower TTL values (300 seconds) for faster propagation
- **Propagation Time**: Can take up to 48 hours globally
- **Testing**: Use tools like `dig` or `nslookup` to test specific DNS servers

### 7.2 CNAME vs A Records

- **CNAME**: Use for subdomains (www.bugal.com.au)
- **A Records**: Use for root domain (bugal.com.au) - some providers don't support CNAME for root
- **ALIAS**: Use if supported (Route 53, Cloudflare)

### 7.3 SSL Certificate Issues

- **Certificate Validation**: Ensure DNS validation records are added
- **Certificate Regions**: CloudFront requires certificates in `us-east-1`
- **Certificate Expiration**: Set up monitoring for certificate renewal

## Step 8: Performance Optimization

### 8.1 DNS Caching

- **TTL Values**: Balance between performance and flexibility
- **CDN Integration**: Use CloudFront for global DNS resolution
- **DNS Providers**: Consider using AWS Route 53 for better integration

### 8.2 Geographic DNS

- **Route 53**: Use geolocation routing for better performance
- **CloudFront**: Automatically routes to nearest edge location
- **Health Checks**: Monitor DNS health across regions

## Step 9: Security Considerations

### 9.1 DNS Security

- **DNSSEC**: Enable if supported by your DNS provider
- **DNS Filtering**: Use DNS filtering to block malicious domains
- **DNS Monitoring**: Monitor for DNS hijacking attempts

### 9.2 SSL/TLS Security

- **Certificate Pinning**: Consider implementing certificate pinning
- **HSTS**: Enable HTTP Strict Transport Security
- **TLS Version**: Use TLS 1.2 or higher

## Step 10: Backup and Recovery

### 10.1 DNS Backup

- **Export DNS Records**: Regularly export DNS configuration
- **Documentation**: Keep detailed records of all DNS changes
- **Testing**: Test DNS failover procedures

### 10.2 Disaster Recovery

- **Multiple DNS Providers**: Consider using multiple DNS providers
- **Failover**: Configure automatic failover for critical services
- **Recovery Time**: Plan for DNS recovery time in disaster scenarios

## Troubleshooting Commands

```bash
# Check DNS resolution
dig bugal.com.au
dig www.bugal.com.au
dig admin.bugal.com.au

# Check specific DNS server
dig @8.8.8.8 bugal.com.au
dig @1.1.1.1 bugal.com.au

# Check DNS propagation
dig +trace bugal.com.au

# Check SSL certificate
openssl s_client -connect bugal.com.au:443 -servername bugal.com.au

# Check website headers
curl -I https://bugal.com.au
curl -I https://admin.bugal.com.au
```

## Next Steps

After DNS configuration:
1. Test all domains and subdomains
2. Verify SSL certificates are working
3. Test redirects and error pages
4. Monitor DNS health and performance
5. Set up automated monitoring and alerting
