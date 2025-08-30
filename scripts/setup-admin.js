const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function setupAdmin() {
  try {
    console.log('🚀 Setting up Bugal Admin System...');

    // Check if admin user already exists
    const existingAdmin = await prisma.adminUser.findUnique({
      where: { email: process.env.ADMIN_EMAIL || 'admin@bugal.com.au' }
    });

    if (existingAdmin) {
      console.log('✅ Admin user already exists');
      return;
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD || 'admin123', 
      12
    );

    const adminUser = await prisma.adminUser.create({
      data: {
        email: process.env.ADMIN_EMAIL || 'admin@bugal.com.au',
        password: hashedPassword,
        name: process.env.ADMIN_NAME || 'Bugal Admin',
        role: 'admin'
      }
    });

    console.log('✅ Admin user created successfully:', adminUser.email);
    console.log('🔑 Default password: admin123 (change this immediately!)');

  } catch (error) {
    console.error('❌ Error setting up admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

setupAdmin();
