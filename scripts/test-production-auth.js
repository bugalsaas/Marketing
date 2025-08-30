const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function testProductionAuth() {
  try {
    console.log('🧪 Testing Production Authentication Flow...');
    
    // Check environment variables
    console.log('\n📋 Environment Variables Check:');
    console.log('   DATABASE_URL:', process.env.DATABASE_URL ? '✅ Set' : '❌ Missing');
    console.log('   NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET ? '✅ Set' : '❌ Missing');
    console.log('   NEXTAUTH_URL:', process.env.NEXTAUTH_URL ? '✅ Set' : '❌ Missing');
    
    // Test database connection
    console.log('\n🔌 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful');
    
    // Test the exact authentication logic from your auth.ts file
    console.log('\n🔐 Testing authentication logic...');
    
    const testEmail = 'admin@bugal.com.au';
    const testPassword = 'admin123';
    
    // Step 1: Find the admin user (this is what NextAuth does)
    console.log('   Step 1: Finding admin user...');
    const admin = await prisma.adminUser.findUnique({
      where: { email: testEmail }
    });
    
    if (!admin) {
      console.log('   ❌ Admin user not found!');
      return;
    }
    
    console.log('   ✅ Admin user found:', admin.email);
    
    // Step 2: Compare password (this is what NextAuth does)
    console.log('   Step 2: Comparing password...');
    const isPasswordValid = await bcrypt.compare(testPassword, admin.password);
    
    if (isPasswordValid) {
      console.log('   ✅ Password is valid!');
      console.log('   ✅ Authentication should succeed!');
    } else {
      console.log('   ❌ Password is invalid!');
      console.log('   ❌ This explains the login failure!');
    }
    
    // Step 3: Check what NextAuth would return
    console.log('\n🎯 NextAuth would return:');
    if (isPasswordValid) {
      console.log('   ✅ SUCCESS - User object with id, email, name, role');
    } else {
      console.log('   ❌ FAILURE - null (causing "Invalid email or password")');
    }
    
  } catch (error) {
    console.error('❌ Error testing production auth:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testProductionAuth();
