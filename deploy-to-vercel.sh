#!/bin/bash

# 🚀 Bugal Marketing Website - Vercel Deployment Script
# This script automates the deployment process to Vercel

echo "🚀 Starting Bugal Marketing Website deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please log in to Vercel..."
    vercel login
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment complete!"
echo "📱 Your temporary URL will be displayed above."
echo "🔗 Share this URL with stakeholders for feedback."
echo ""
echo "📋 Next steps:"
echo "1. Test the temporary URL thoroughly"
echo "2. Share with stakeholders for feedback"
echo "3. Set up Vercel Postgres database"
echo "4. Deploy to bugal.com.au when ready"
