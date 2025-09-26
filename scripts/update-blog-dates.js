const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

// Load the extracted dates
const extractedDates = JSON.parse(fs.readFileSync('extracted-blog-dates.json', 'utf8'));

// Create a mapping from URL to published date
const urlToDateMap = {};
extractedDates.forEach(item => {
  if (item.success && item.publishedDate) {
    // Extract the slug from the URL
    const urlParts = item.url.split('/');
    const slug = urlParts[urlParts.length - 1];
    urlToDateMap[slug] = item.publishedDate;
  }
});

console.log('📊 Found dates for', Object.keys(urlToDateMap).length, 'blog posts');

// Function to update blog post dates
async function updateBlogDates() {
  try {
    console.log('\n🔄 Starting blog post date updates...\n');
    
    // Get all blog posts from the database
    const blogPosts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        publishedAt: true
      }
    });
    
    console.log(`📝 Found ${blogPosts.length} blog posts in database`);
    
    let updatedCount = 0;
    let notFoundCount = 0;
    
    for (const post of blogPosts) {
      const publishedDate = urlToDateMap[post.slug];
      
      if (publishedDate) {
        // Convert date string to Date object
        const dateObj = new Date(publishedDate + 'T00:00:00.000Z');
        
        // Update the blog post
        await prisma.blogPost.update({
          where: { id: post.id },
          data: { publishedAt: dateObj }
        });
        
        console.log(`✅ Updated: ${post.title} -> ${publishedDate}`);
        updatedCount++;
      } else {
        console.log(`❌ No date found for: ${post.title} (${post.slug})`);
        notFoundCount++;
      }
    }
    
    console.log(`\n📊 Update Summary:`);
    console.log(`✅ Successfully updated: ${updatedCount} blog posts`);
    console.log(`❌ Not found in extracted data: ${notFoundCount} blog posts`);
    
    // Show which URLs we have dates for but don't have in the database
    const dbSlugs = blogPosts.map(p => p.slug);
    const missingInDb = Object.keys(urlToDateMap).filter(slug => !dbSlugs.includes(slug));
    
    if (missingInDb.length > 0) {
      console.log(`\n⚠️  Found dates for ${missingInDb.length} URLs that don't exist in database:`);
      missingInDb.forEach(slug => {
        console.log(`  - ${slug} (${urlToDateMap[slug]})`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error updating blog dates:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the update
updateBlogDates().catch(console.error);
