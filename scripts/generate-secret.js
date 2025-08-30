const crypto = require('crypto');

// Generate a secure random secret
const secret = crypto.randomBytes(32).toString('hex');
console.log('🔐 Generated NEXTAUTH_SECRET:');
console.log(secret);
console.log('\n📋 Copy this value and set it as NEXTAUTH_SECRET in your Vercel environment variables');
console.log('\n⚠️  Keep this secret secure and never commit it to version control!');
