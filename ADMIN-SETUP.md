# 🚀 Bugal Admin Panel Setup Guide

## Overview

The Bugal Admin Panel is a secure, hidden administration interface that allows you to manage all website content without any public access. It's completely invisible to regular visitors and only accessible to authorized administrators.

## 🔐 Security Features

- **Hidden Routes**: Admin URLs are not discoverable through normal navigation
- **Authentication Required**: All admin pages require valid credentials
- **Session Management**: Secure login/logout with proper session handling
- **Protected API**: All admin operations are secured behind authentication

## 📋 Prerequisites

Before setting up the admin panel, you need:

1. **PostgreSQL Database** (local or hosted)
2. **Node.js 18+** and npm
3. **Environment Variables** configured

## 🛠️ Setup Steps

### Step 1: Environment Variables

Create a `.env.local` file in your project root with:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/bugal_admin"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-here"

# Admin User (optional - will use defaults if not set)
ADMIN_EMAIL="admin@bugal.com.au"
ADMIN_PASSWORD="your-secure-admin-password"
ADMIN_NAME="Bugal Admin"
```

**Important**: Generate a secure NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### Step 2: Database Setup

1. **Create PostgreSQL Database**:
```sql
CREATE DATABASE bugal_admin;
```

2. **Run Database Migrations**:
```bash
npx prisma migrate dev --name init
```

3. **Generate Prisma Client**:
```bash
npx prisma generate
```

### Step 3: Create Admin User

Run the setup script to create your admin account:

```bash
node scripts/setup-admin.js
```

**Default Credentials**:
- Email: `admin@bugal.com.au`
- Password: `admin123`

**⚠️ IMPORTANT**: Change the default password immediately after first login!

## 🚪 Accessing the Admin Panel

### Login URL
```
http://localhost:3000/admin/login
```

### Dashboard URL
```
http://localhost:3000/admin/dashboard
```

## 🎯 Admin Features

### 1. **Dashboard Overview**
- Content statistics
- Quick actions
- Recent activity
- Performance metrics

### 2. **Blog Management**
- Create, edit, delete blog posts
- Manage categories and tags
- Upload cover images
- Rich text editing

### 3. **Testimonial Management**
- Add customer testimonials
- Upload profile photos
- Manage visibility and featured status
- Category organization

### 4. **FAQ Management**
- Create and edit FAQs
- Organize by categories
- Reorder questions
- Toggle visibility

### 5. **Offer Management**
- Create promotional offers
- Set validity dates
- Manage active/inactive status
- Featured offer selection

### 6. **Homepage Management**
- Manage homepage highlights
- Content pinning
- Rotation system
- Image management

## 🔒 Security Best Practices

1. **Strong Passwords**: Use complex, unique passwords
2. **Regular Updates**: Keep dependencies updated
3. **Environment Variables**: Never commit secrets to version control
4. **Session Timeout**: Log out when not in use
5. **Access Control**: Limit admin access to essential personnel only

## 🚨 Troubleshooting

### Common Issues

1. **"Cannot connect to database"**
   - Check DATABASE_URL in .env.local
   - Ensure PostgreSQL is running
   - Verify database exists

2. **"Invalid credentials"**
   - Run setup script again
   - Check environment variables
   - Verify database migrations

3. **"Session expired"**
   - Log in again
   - Check NEXTAUTH_SECRET
   - Clear browser cookies

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Verify all environment variables are set
3. Ensure database is accessible
4. Check Prisma migration status

## 📱 Mobile Access

The admin panel is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔄 Updates & Maintenance

- **Regular Backups**: Backup your database regularly
- **Content Updates**: Keep content fresh and relevant
- **Performance Monitoring**: Monitor admin panel performance
- **Security Audits**: Regular security reviews

## 🎉 You're All Set!

Once setup is complete, you'll have a powerful, secure admin panel to manage your Bugal marketing website. The panel is completely hidden from public users and provides you with full control over your content.

**Next Steps**:
1. Test all admin functions
2. Create your first blog post
3. Add customer testimonials
4. Set up promotional offers
5. Customize homepage highlights

---

**Need Help?** Check the development plan or create an issue in your project repository.
