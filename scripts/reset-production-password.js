const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function resetProductionPassword() {
  try {
    console.log('🔐 Resetting Production Admin Password...');
    
    // Test database connection
    console.log('🔌 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful');
    
    // Find the admin user
    console.log('👤 Finding admin user...');
    const adminUser = await prisma.adminUser.findUnique({
      where: { email: 'admin@bugal.com.au' }
    });
    
    if (!adminUser) {
      console.log('❌ Admin user not found!');
      return;
    }
    
    console.log('✅ Found admin user:', adminUser.email);
    
    // Generate new password hash
    const newPassword = 'admin123';
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    
    // Update the password
    console.log('🔄 Updating password...');
    await prisma.adminUser.update({
      where: { email: 'admin@bugal.com.au' },
      data: { password: hashedPassword }
    });
    
    console.log('✅ Password updated successfully!');
    console.log('\n🎉 New login credentials:');
    console.log('   Email: admin@bugal.com.au');
    console.log('   Password: admin123');
    console.log('\n💡 Try logging in now with these credentials!');
    
  } catch (error) {
    console.error('❌ Error resetting password:', error);
  } finally {
    await prisma.$disconnect();
  }
}

resetProductionPassword();
