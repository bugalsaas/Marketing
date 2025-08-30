const bcrypt = require('bcryptjs');

async function testSpecificHash() {
  try {
    console.log('🧪 Testing Specific Password Hash...');
    
    const storedHash = '$2b$12$Jr7iayDnXyU3r8y1Z3mrluJgIRN1kjri0YuYVAjNeu1bzxpkrHXKy';
    const testPassword = 'admin123';
    
    console.log('🔑 Stored hash:', storedHash);
    console.log('🔑 Testing password:', testPassword);
    
    // Test if the password matches the hash
    const isPasswordValid = await bcrypt.compare(testPassword, storedHash);
    
    console.log('\n🎯 Result:');
    if (isPasswordValid) {
      console.log('✅ Password "admin123" MATCHES the stored hash!');
      console.log('💡 The database is correct - the issue is elsewhere.');
    } else {
      console.log('❌ Password "admin123" does NOT match the stored hash!');
      console.log('💡 This explains the login failure!');
      
      // Let's see what password this hash actually represents
      console.log('\n🔍 The stored hash is for a DIFFERENT password than "admin123"');
      console.log('💡 We need to either:');
      console.log('   1. Find the correct password, or');
      console.log('   2. Update the hash to match "admin123"');
    }
    
  } catch (error) {
    console.error('❌ Error testing hash:', error);
  }
}

testSpecificHash();
