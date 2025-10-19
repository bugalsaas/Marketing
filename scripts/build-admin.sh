#!/bin/bash

# Admin Panel Build Script
# This script builds the admin panel for AWS deployment

set -e

echo "🔧 Building admin panel for AWS deployment..."

# Set build target
export BUILD_TARGET=admin

# Load admin environment variables if they exist
if [ -f .env.admin ]; then
    echo "📋 Loading admin environment variables..."
    export $(cat .env.admin | grep -v '^#' | xargs)
fi

# Generate Prisma client
echo "🗄️ Generating Prisma client..."
npx prisma generate

# Build the admin panel
echo "🏗️ Building admin panel..."
BUILD_TARGET=admin next build --no-lint --config next.config.admin.ts

# Create admin-specific output directory
echo "📁 Creating admin output directory..."
mkdir -p dist-admin

# Copy built files to admin directory
echo "📦 Copying built files..."
cp -r .next dist-admin/
cp -r public dist-admin/
cp package.json dist-admin/
cp package-lock.json dist-admin/
cp next.config.ts dist-admin/
cp tsconfig.json dist-admin/

# Copy admin-specific files
echo "📋 Copying admin-specific files..."
if [ -f .env.admin ]; then
    cp .env.admin dist-admin/.env.local
fi

# Create admin-specific package.json
echo "📝 Creating admin package.json..."
cat > dist-admin/package.json << EOF
{
  "name": "bugal-admin-panel",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "next start",
    "dev": "next dev"
  },
  "dependencies": {
    "next": "15.5.2",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "@prisma/client": "^6.15.0",
    "next-auth": "^4.24.11",
    "nodemailer": "^6.10.1",
    "bcryptjs": "^3.0.2",
    "zod": "^4.1.5",
    "axios": "^1.12.2",
    "react-hook-form": "^7.62.0",
    "@hookform/resolvers": "^5.2.1",
    "lucide-react": "^0.542.0",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-icons": "^1.3.2",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-toast": "^1.2.15",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.1",
    "sonner": "^2.0.7"
  }
}
EOF

# Create Dockerfile for admin
echo "🐳 Creating Dockerfile for admin..."
cat > dist-admin/Dockerfile << EOF
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy built application
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
EOF

# Create docker-compose for local testing
echo "🐳 Creating docker-compose for admin testing..."
cat > dist-admin/docker-compose.yml << EOF
version: '3.8'

services:
  admin:
    build: .
    ports:
      - "3001:3000"
    environment:
      - NODE_ENV=production
      - BUILD_TARGET=admin
    env_file:
      - .env.local
    depends_on:
      - postgres

  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: bugal_admin
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: password
    ports:
      - "5433:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
EOF

echo "✅ Admin panel build complete!"
echo "📁 Output directory: dist-admin/"
echo "🐳 Docker files created for deployment"
echo ""
echo "To test locally:"
echo "  cd dist-admin && docker-compose up"
echo ""
echo "To deploy to AWS:"
echo "  1. Build Docker image: docker build -t bugal-admin ."
echo "  2. Push to ECR: aws ecr push bugal-admin"
echo "  3. Deploy to ECS/EC2"
