const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function setupProductionDatabase() {
  try {
    console.log('🚀 Setting up Production Database Tables...');
    
    // Test database connection
    console.log('🔌 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful');
    
    // Check if tables exist
    console.log('📊 Checking existing tables...');
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `;
    
    console.log(`📋 Found ${tables.length} tables:`, tables.map(t => t.table_name));
    
    if (tables.length === 0) {
      console.log('🔄 No tables found. Creating database schema...');
      
      // Push the schema to create all tables
      const { execSync } = require('child_process');
      execSync('npx prisma db push --accept-data-loss', { 
        stdio: 'inherit',
        env: { ...process.env }
      });
      
      console.log('✅ Database schema created successfully!');
    } else {
      console.log('✅ Tables already exist');
    }
    
    // Check if admin user exists
    console.log('👤 Checking admin user...');
    const adminUser = await prisma.adminUser.findUnique({
      where: { email: 'admin@bugal.com.au' }
    });
    
    if (!adminUser) {
      console.log('🔄 Creating admin user...');
      const bcrypt = require('bcryptjs');
      const hashedPassword = await bcrypt.hash('admin123', 12);
      
      await prisma.adminUser.create({
        data: {
          email: 'admin@bugal.com.au',
          password: hashedPassword,
          name: 'Bugal Admin',
          role: 'admin'
        }
      });
      
      console.log('✅ Admin user created successfully!');
    } else {
      console.log('✅ Admin user already exists');
    }
    
    console.log('\n🎉 Production database is ready!');
    console.log('🔑 Login credentials: admin@bugal.com.au / admin123');
    
  } catch (error) {
    console.error('❌ Error setting up production database:', error);
    
    if (error.code === 'P1001') {
      console.log('\n💡 Database connection failed. Check your DATABASE_URL environment variable.');
    } else if (error.code === 'P2002') {
      console.log('\n💡 Email already exists. Try a different email or delete the existing user.');
    }
  } finally {
    await prisma.$disconnect();
  }
}

setupProductionDatabase();
