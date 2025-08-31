const fs = require('fs');
const path = require('path');

// Blog post image paths from the database
const blogImagePaths = [
  'getting-started',
  'abn-tfn-registration', 
  'business-plan',
  'certifications',
  'gst-guide',
  'invoicing-essentials',
  'financial-year-preparation',
  'new-financial-year',
  'milestones-achievements',
  'ndis-review',
  'end-financial-year',
  'federal-budget-2024',
  'wedding-tax-ethical-pricing',
  'ethical-landscape',
  'innovative-marketing',
  'refer-earn-program',
  'effective-business-plan',
  'time-management-tips',
  'self-care-guide',
  'financial-management-tips',
  'crafting-hourly-rate',
  'qualifications-online-courses',
  'starting-out-series',
  'business-foundation-growth',
  'superannuation-guide',
  'mastering-schedule',
  'ndis-elearning-modules',
  'essential-certifications',
  'understanding-gst',
  'importance-insurance',
  'social-media-marketing',
  'choose-bugal-software',
  'service-agreements',
  'irresistible-profile',
  'ndis-registration-guide',
  'ndis-registration-decision',
  'business-flow-optimization',
  'start-independent-support-provider',
  'getting-started-support-provider',
  'new-financial-year-planning',
  'business-structure-options'
];

function createImageDirectories() {
  console.log('🖼️ Setting up blog image directories...\n');
  
  const baseDir = 'public/images/blog';
  
  // Create base directory if it doesn't exist
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    console.log(`✅ Created base directory: ${baseDir}`);
  }
  
  let createdCount = 0;
  let existingCount = 0;
  
  blogImagePaths.forEach(imagePath => {
    const fullPath = path.join(baseDir, imagePath);
    
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`✅ Created: ${fullPath}`);
      createdCount++;
    } else {
      console.log(`⏭️ Exists: ${fullPath}`);
      existingCount++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`   • Created: ${createdCount} directories`);
  console.log(`   • Already existed: ${existingCount} directories`);
  console.log(`   • Total: ${blogImagePaths.length} directories`);
}

function createPlaceholderImages() {
  console.log('\n🎨 Creating placeholder images...\n');
  
  const baseDir = 'public/images/blog';
  let createdCount = 0;
  let existingCount = 0;
  
  blogImagePaths.forEach(imagePath => {
    const imageDir = path.join(baseDir, imagePath);
    const placeholderPath = path.join(imageDir, 'hero-image.webp');
    
    if (!fs.existsSync(placeholderPath)) {
      // Create a simple SVG placeholder since we can't create WebP files
      const svgPlaceholder = createSVGPlaceholder(imagePath);
      const svgPath = path.join(imageDir, 'hero-image.svg');
      
      fs.writeFileSync(svgPath, svgPlaceholder);
      console.log(`✅ Created SVG placeholder: ${svgPath}`);
      createdCount++;
    } else {
      console.log(`⏭️ Image exists: ${placeholderPath}`);
      existingCount++;
    }
  });
  
  console.log(`\n📊 Placeholder Summary:`);
  console.log(`   • Created: ${createdCount} SVG placeholders`);
  console.log(`   • Already existed: ${existingCount} images`);
}

function createSVGPlaceholder(title) {
  const cleanTitle = title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1E40AF;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#grad1)"/>
  <text x="300" y="200" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
    ${cleanTitle}
  </text>
  <text x="300" y="230" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">
    Hero Image Placeholder
  </text>
</svg>`;
}

function updateImagePaths() {
  console.log('\n🔄 Updating image paths in database...\n');
  
  // This would require a database update script
  // For now, we'll just note what needs to be done
  console.log('📝 Next steps for image paths:');
  console.log('   1. Update database coverImage paths to use .svg instead of .webp');
  console.log('   2. Or create actual WebP images for each blog post');
  console.log('   3. Consider using a CDN for production images');
}

// Main execution
console.log('🚀 Blog Image Setup Script\n');
console.log('=' .repeat(50));

createImageDirectories();
createPlaceholderImages();
updateImagePaths();

console.log('\n🎉 Blog image setup complete!');
console.log('\n💡 Next steps:');
console.log('   1. Replace SVG placeholders with actual blog post images');
console.log('   2. Optimize images for web (WebP format recommended)');
console.log('   3. Update database coverImage paths if needed');
console.log('   4. Test blog page to ensure images load correctly');
