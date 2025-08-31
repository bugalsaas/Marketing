require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

async function testConnection() {
  const prisma = new PrismaClient();
  
  try {
    console.log('🔌 Testing database connection...');
    console.log('Environment variables:');
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    
    await prisma.$connect();
    console.log('✅ Database connection successful');
    
    // Test a simple query
    const postCount = await prisma.blogPost.count();
    console.log(`📊 Blog posts in database: ${postCount}`);
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.error('Full error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
