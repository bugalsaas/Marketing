const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkProductionUsers() {
  try {
    console.log('🔍 Checking Production Database Users...');
    
    // Test database connection
    console.log('🔌 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful');
    
    // Check if admin_users table exists and has data
    console.log('📊 Checking admin_users table...');
    const adminUsers = await prisma.adminUser.findMany({
      select: { 
        id: true, 
        email: true, 
        name: true, 
        role: true, 
        createdAt: true 
      }
    });
    
    console.log(`📋 Found ${adminUsers.length} admin users:`);
    adminUsers.forEach(user => {
      console.log(`   - ${user.email} (${user.role}) - Created: ${user.createdAt}`);
    });
    
    if (adminUsers.length === 0) {
      console.log('\n❌ No admin users found!');
      console.log('💡 We need to create an admin user in production.');
    } else {
      console.log('\n✅ Admin users exist in production database.');
      console.log('💡 Try logging in with one of the emails above.');
    }
    
    // Check if the specific admin user exists
    console.log('\n🔍 Checking for specific admin user...');
    const specificAdmin = await prisma.adminUser.findUnique({
      where: { email: 'admin@bugal.com.au' }
    });
    
    if (specificAdmin) {
      console.log('✅ admin@bugal.com.au exists in production database');
      console.log('💡 The password might be different from what we set locally.');
    } else {
      console.log('❌ admin@bugal.com.au does NOT exist in production database');
      console.log('💡 We need to create this user in production.');
    }
    
  } catch (error) {
    console.error('❌ Error checking production users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkProductionUsers();
