#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

async function prepareStaticBuild() {
  console.log('🔧 Preparing for static build...');
  
  const apiDir = path.join(process.cwd(), 'src', 'app', 'api');
  const adminDir = path.join(process.cwd(), 'src', 'app', 'admin');
  const tempDir = path.join(process.cwd(), 'temp-routes');
  
  try {
    // Create temp directory
    await fs.mkdir(tempDir, { recursive: true });
    
    // Move API routes to temp directory
    try {
      await fs.access(apiDir);
      await fs.rename(apiDir, path.join(tempDir, 'api'));
      console.log('📁 Moved API routes to temp directory');
    } catch (error) {
      console.log('ℹ️  No API routes to move');
    }
    
    // Move admin routes to temp directory
    try {
      await fs.access(adminDir);
      await fs.rename(adminDir, path.join(tempDir, 'admin'));
      console.log('📁 Moved admin routes to temp directory');
    } catch (error) {
      console.log('ℹ️  No admin routes to move');
    }
    
    console.log('✅ Static build preparation complete');
    
  } catch (error) {
    console.error('❌ Error preparing static build:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  prepareStaticBuild();
}

module.exports = { prepareStaticBuild };
