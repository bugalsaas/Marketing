const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function debugProduction() {
  try {
    console.log('🔍 Debugging Bugal Production Environment...\n');
    
    // Check environment variables
    console.log('📋 Environment Variables Check:');
    console.log('   DATABASE_URL:', process.env.DATABASE_URL ? '✅ Set' : '❌ Missing');
    console.log('   NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET ? '✅ Set' : '❌ Missing');
    console.log('   NEXTAUTH_URL:', process.env.NEXTAUTH_URL ? '✅ Set' : '❌ Missing');
    console.log('   ADMIN_EMAIL:', process.env.ADMIN_EMAIL ? '✅ Set' : '❌ Missing');
    console.log('   ADMIN_PASSWORD:', process.env.ADMIN_PASSWORD ? '✅ Set' : '❌ Missing');
    
    // Test database connection
    console.log('\n🔌 Database Connection Test:');
    try {
      await prisma.$connect();
      console.log('   ✅ Database connection successful');
      
      // Check if admin users exist
      const adminUsers = await prisma.adminUser.findMany({
        select: { id: true, email: true, name: true, role: true, createdAt: true }
      });
      
      console.log(`   📊 Admin users found: ${adminUsers.length}`);
      adminUsers.forEach(user => {
        console.log(`      - ${user.email} (${user.role}) - Created: ${user.createdAt}`);
      });
      
    } catch (dbError) {
      console.log('   ❌ Database connection failed:', dbError.message);
      if (dbError.code === 'P1001') {
        console.log('      💡 This usually means DATABASE_URL is incorrect or database is not accessible');
      }
    }
    
    // Check NextAuth configuration
    console.log('\n🔐 NextAuth Configuration:');
    if (!process.env.NEXTAUTH_SECRET) {
      console.log('   ❌ NEXTAUTH_SECRET is missing - this will cause authentication to fail');
    }
    if (!process.env.NEXTAUTH_URL) {
      console.log('   ❌ NEXTAUTH_URL is missing - this may cause callback issues');
    }
    
    // Recommendations
    console.log('\n💡 Recommendations:');
    if (!process.env.DATABASE_URL) {
      console.log('   1. Set DATABASE_URL in Vercel environment variables');
    }
    if (!process.env.NEXTAUTH_SECRET) {
      console.log('   2. Generate and set NEXTAUTH_SECRET (run: node scripts/generate-secret.js)');
    }
    if (!process.env.NEXTAUTH_URL) {
      console.log('   3. Set NEXTAUTH_URL to your production domain (e.g., https://your-app.vercel.app)');
    }
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
      console.log('   4. Set ADMIN_EMAIL and ADMIN_PASSWORD for admin user creation');
    }
    
  } catch (error) {
    console.error('❌ Debug error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

debugProduction();
