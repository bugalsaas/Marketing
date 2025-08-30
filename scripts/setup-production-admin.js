const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function setupProductionAdmin() {
  try {
    console.log('🚀 Setting up Bugal Admin System for Production...');
    
    // Check required environment variables
    const requiredEnvVars = ['DATABASE_URL', 'ADMIN_EMAIL', 'ADMIN_PASSWORD'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.error('❌ Missing required environment variables:', missingVars.join(', '));
      console.log('📋 Please set these in your Vercel environment variables:');
      missingVars.forEach(varName => {
        console.log(`   - ${varName}`);
      });
      return;
    }

    // Test database connection
    console.log('🔌 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful');

    // Check if admin user already exists
    const existingAdmin = await prisma.adminUser.findUnique({
      where: { email: process.env.ADMIN_EMAIL }
    });

    if (existingAdmin) {
      console.log('✅ Admin user already exists:', existingAdmin.email);
      console.log('🔄 To update password, delete the user first and run this script again');
      return;
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);

    const adminUser = await prisma.adminUser.create({
      data: {
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        name: process.env.ADMIN_NAME || 'Bugal Admin',
        role: 'admin'
      }
    });

    console.log('✅ Admin user created successfully:', adminUser.email);
    console.log('🔑 Email:', adminUser.email);
    console.log('🔑 Password: [HIDDEN - check your environment variables]');
    console.log('\n🎉 You can now log in to the admin dashboard!');

  } catch (error) {
    console.error('❌ Error setting up admin:', error);
    
    if (error.code === 'P1001') {
      console.log('\n💡 Database connection failed. Check your DATABASE_URL environment variable.');
    } else if (error.code === 'P2002') {
      console.log('\n💡 Email already exists. Try a different email or delete the existing user.');
    }
  } finally {
    await prisma.$disconnect();
  }
}

setupProductionAdmin();
