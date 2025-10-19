#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

async function restoreRoutes() {
  console.log('🔄 Restoring routes after static build...');
  
  const tempDir = path.join(process.cwd(), 'temp-routes');
  const apiDir = path.join(process.cwd(), 'src', 'app', 'api');
  const adminDir = path.join(process.cwd(), 'src', 'app', 'admin');
  
  try {
    // Restore API routes
    try {
      await fs.access(path.join(tempDir, 'api'));
      await fs.rename(path.join(tempDir, 'api'), apiDir);
      console.log('📁 Restored API routes');
    } catch (error) {
      console.log('ℹ️  No API routes to restore');
    }
    
    // Restore admin routes
    try {
      await fs.access(path.join(tempDir, 'admin'));
      await fs.rename(path.join(tempDir, 'admin'), adminDir);
      console.log('📁 Restored admin routes');
    } catch (error) {
      console.log('ℹ️  No admin routes to restore');
    }
    
    // Clean up temp directory
    try {
      await fs.rmdir(tempDir);
      console.log('🧹 Cleaned up temp directory');
    } catch (error) {
      console.log('ℹ️  No temp directory to clean up');
    }
    
    console.log('✅ Route restoration complete');
    
  } catch (error) {
    console.error('❌ Error restoring routes:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  restoreRoutes();
}

module.exports = { restoreRoutes };
