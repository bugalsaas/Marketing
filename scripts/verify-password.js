const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function verifyPassword() {
  try {
    console.log('🔍 Verifying Admin Password in Production...');
    
    // Test database connection
    console.log('🔌 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful');
    
    // Get the admin user with password
    console.log('👤 Getting admin user details...');
    const adminUser = await prisma.adminUser.findUnique({
      where: { email: 'admin@bugal.com.au' },
      select: { id: true, email: true, password: true, name: true, role: true }
    });
    
    if (!adminUser) {
      console.log('❌ Admin user not found!');
      return;
    }
    
    console.log('✅ Found admin user:', adminUser.email);
    console.log('🔑 Current password hash:', adminUser.password.substring(0, 20) + '...');
    
    // Test the password we're trying to use
    const testPassword = 'admin123';
    console.log('\n🧪 Testing password authentication...');
    
    const isPasswordValid = await bcrypt.compare(testPassword, adminUser.password);
    
    if (isPasswordValid) {
      console.log('✅ Password "admin123" is CORRECT!');
      console.log('💡 The issue might be elsewhere...');
    } else {
      console.log('❌ Password "admin123" is INCORRECT!');
      console.log('💡 The password hash wasn\'t updated properly.');
      
      // Let's update it again
      console.log('\n🔄 Updating password again...');
      const newHashedPassword = await bcrypt.hash(testPassword, 12);
      
      await prisma.adminUser.update({
        where: { email: 'admin@bugal.com.au' },
        data: { password: newHashedPassword }
      });
      
      console.log('✅ Password updated again!');
      
      // Test again
      const newAdminUser = await prisma.adminUser.findUnique({
        where: { email: 'admin@bugal.com.au' }
      });
      
      const isNewPasswordValid = await bcrypt.compare(testPassword, newAdminUser.password);
      console.log('🧪 Testing new password:', isNewPasswordValid ? '✅ CORRECT' : '❌ INCORRECT');
    }
    
  } catch (error) {
    console.error('❌ Error verifying password:', error);
  } finally {
    await prisma.$disconnect();
  }
}

verifyPassword();
