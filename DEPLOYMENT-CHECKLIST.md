# Deployment Checklist

This checklist ensures a smooth deployment of the Bugal marketing website and admin panel.

## Pre-Deployment Checklist

### ✅ Code Preparation
- [ ] All code committed to version control
- [ ] Static site builds successfully (`npm run build:static`)
- [ ] Admin panel builds successfully (`npm run build:admin`)
- [ ] All tests pass
- [ ] No linting errors
- [ ] Environment variables configured

### ✅ AWS Resources
- [ ] AWS CLI installed and configured
- [ ] AWS account has appropriate permissions
- [ ] S3 bucket created for static site
- [ ] CloudFront distribution created
- [ ] ECR repository created for admin panel
- [ ] ECS cluster created
- [ ] Application Load Balancer created
- [ ] Security groups configured

### ✅ SSL Certificates
- [ ] SSL certificate requested for `bugal.com.au`
- [ ] SSL certificate requested for `www.bugal.com.au`
- [ ] SSL certificate requested for `admin.bugal.com.au`
- [ ] All certificates validated
- [ ] Certificates attached to CloudFront and ALB

### ✅ Database
- [ ] Production database accessible
- [ ] Database migrations applied
- [ ] Database backups configured
- [ ] Connection strings updated

## Phase 1: Static Site Deployment

### ✅ Build and Deploy
- [ ] Run `npm run build:static`
- [ ] Run `npm run generate:static-data`
- [ ] Deploy to S3 using `scripts/aws-deploy-static.sh`
- [ ] Verify files uploaded to S3
- [ ] Invalidate CloudFront cache

### ✅ DNS Configuration
- [ ] Add A record for `bugal.com.au` → CloudFront
- [ ] Add CNAME record for `www.bugal.com.au` → CloudFront
- [ ] Verify DNS propagation
- [ ] Test both domains resolve correctly

### ✅ SSL Configuration
- [ ] Attach SSL certificate to CloudFront
- [ ] Configure HTTPS redirect
- [ ] Test SSL certificate validity
- [ ] Verify HTTPS works for both domains

### ✅ Testing
- [ ] Test homepage loads correctly
- [ ] Test blog pages load correctly
- [ ] Test search and filtering works
- [ ] Test contact form (should fail until admin is deployed)
- [ ] Test mobile responsiveness
- [ ] Test page load speeds

## Phase 2: Admin Panel Deployment

### ✅ Build and Deploy
- [ ] Build Docker image for admin panel
- [ ] Push image to ECR
- [ ] Deploy to ECS
- [ ] Verify service is running
- [ ] Check ECS task logs

### ✅ DNS Configuration
- [ ] Add A record for `admin.bugal.com.au` → ALB
- [ ] Verify DNS propagation
- [ ] Test admin domain resolves correctly

### ✅ SSL Configuration
- [ ] Attach SSL certificate to ALB
- [ ] Configure HTTPS redirect
- [ ] Test SSL certificate validity
- [ ] Verify HTTPS works for admin domain

### ✅ Testing
- [ ] Test admin login page loads
- [ ] Test admin authentication works
- [ ] Test admin dashboard loads
- [ ] Test blog management functions
- [ ] Test FAQ management functions
- [ ] Test testimonial management functions

## Phase 3: Integration Testing

### ✅ Cross-Origin Communication
- [ ] Test contact form submits to admin API
- [ ] Verify CORS headers are correct
- [ ] Test from different browsers
- [ ] Test from different devices

### ✅ End-to-End Testing
- [ ] Test complete user journey
- [ ] Test admin workflow
- [ ] Test data synchronization
- [ ] Test error handling

### ✅ Performance Testing
- [ ] Test page load speeds
- [ ] Test Core Web Vitals
- [ ] Test mobile performance
- [ ] Test CDN performance

## Phase 4: Go-Live Preparation

### ✅ Monitoring Setup
- [ ] CloudWatch alarms configured
- [ ] Log aggregation setup
- [ ] Error tracking configured
- [ ] Performance monitoring setup

### ✅ Backup Configuration
- [ ] Database backups scheduled
- [ ] Static site backups configured
- [ ] Admin panel backups configured
- [ ] Disaster recovery plan documented

### ✅ Security Review
- [ ] Security headers configured
- [ ] CORS policies reviewed
- [ ] Authentication security reviewed
- [ ] SSL/TLS configuration reviewed

## Phase 5: Go-Live

### ✅ DNS Switch
- [ ] Update DNS records to point to new infrastructure
- [ ] Monitor DNS propagation
- [ ] Test all domains work correctly
- [ ] Verify SSL certificates work

### ✅ Final Testing
- [ ] Test all pages load correctly
- [ ] Test all functionality works
- [ ] Test from multiple locations
- [ ] Test from multiple devices

### ✅ Monitoring
- [ ] Monitor error rates
- [ ] Monitor performance metrics
- [ ] Monitor user feedback
- [ ] Monitor system health

## Post-Deployment Checklist

### ✅ Verification
- [ ] All pages load correctly
- [ ] All functionality works
- [ ] Performance is acceptable
- [ ] No errors in logs
- [ ] SSL certificates are valid

### ✅ Documentation
- [ ] Update deployment documentation
- [ ] Document any issues encountered
- [ ] Update runbooks
- [ ] Document rollback procedures

### ✅ Team Communication
- [ ] Notify team of successful deployment
- [ ] Share monitoring dashboards
- [ ] Provide access credentials
- [ ] Schedule follow-up review

## Rollback Plan

### ✅ Rollback Preparation
- [ ] Document rollback procedures
- [ ] Test rollback procedures
- [ ] Prepare rollback scripts
- [ ] Identify rollback triggers

### ✅ Rollback Execution
- [ ] Stop new deployments
- [ ] Revert DNS changes
- [ ] Restore previous infrastructure
- [ ] Verify rollback success
- [ ] Communicate rollback to team

## Emergency Contacts

### ✅ Team Contacts
- [ ] Primary developer contact
- [ ] Secondary developer contact
- [ ] AWS support contact
- [ ] DNS provider contact
- [ ] Domain registrar contact

### ✅ Escalation Procedures
- [ ] Define escalation levels
- [ ] Document escalation triggers
- [ ] Prepare escalation templates
- [ ] Test escalation procedures

## Success Criteria

### ✅ Performance
- [ ] Page load times < 3 seconds
- [ ] Core Web Vitals scores > 90
- [ ] Mobile performance score > 90
- [ ] SEO score > 90

### ✅ Functionality
- [ ] All pages load without errors
- [ ] All forms work correctly
- [ ] Search and filtering work
- [ ] Admin panel functions correctly

### ✅ Security
- [ ] SSL certificates valid
- [ ] Security headers present
- [ ] No security vulnerabilities
- [ ] Authentication works correctly

### ✅ Monitoring
- [ ] All monitoring systems active
- [ ] Alerts configured correctly
- [ ] Logs being collected
- [ ] Performance metrics tracked

## Post-Deployment Tasks

### ✅ Immediate (First 24 hours)
- [ ] Monitor system health
- [ ] Check error rates
- [ ] Verify all functionality
- [ ] Monitor user feedback

### ✅ Short-term (First week)
- [ ] Performance optimization
- [ ] Bug fixes
- [ ] User feedback collection
- [ ] Documentation updates

### ✅ Long-term (First month)
- [ ] Performance analysis
- [ ] Cost optimization
- [ ] Feature enhancements
- [ ] Security review

## Notes

### Deployment Notes
- Record any issues encountered during deployment
- Document any configuration changes made
- Note any performance optimizations applied
- Record any security considerations

### Lessons Learned
- What went well during deployment
- What could be improved for next time
- Any process improvements needed
- Any tool or automation improvements needed

---

**Deployment Date**: ___________
**Deployed By**: ___________
**Version**: ___________
**Status**: ___________
