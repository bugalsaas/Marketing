const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkReadTimes() {
  try {
    console.log('📖 Checking current read times in database...\n');
    
    // Get all blog posts with their read times
    const blogPosts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        readTime: true,
        content: true
      },
      orderBy: {
        publishedAt: 'desc'
      }
    });
    
    console.log(`📊 Found ${blogPosts.length} blog posts in database\n`);
    
    // Show first 10 posts with their read times
    console.log('📅 Blog posts with read times:');
    blogPosts.slice(0, 10).forEach((post, index) => {
      const wordCount = post.content.split(/\s+/).filter(word => word.length > 0).length;
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   Read time: ${post.readTime || 'Not set'}`);
      console.log(`   Word count: ${wordCount}`);
      console.log(`   Calculated time: ${Math.max(1, Math.ceil(wordCount / 225))} min read\n`);
    });
    
    // Count read time distribution
    const readTimeDistribution = {};
    blogPosts.forEach(post => {
      const readTime = post.readTime || 'Not set';
      readTimeDistribution[readTime] = (readTimeDistribution[readTime] || 0) + 1;
    });
    
    console.log(`📊 Read time distribution:`);
    Object.entries(readTimeDistribution)
      .sort((a, b) => {
        const aTime = parseInt(a[0].match(/\d+/)?.[0] || '0');
        const bTime = parseInt(b[0].match(/\d+/)?.[0] || '0');
        return aTime - bTime;
      })
      .forEach(([readTime, count]) => {
        console.log(`  ${readTime}: ${count} posts`);
      });
    
  } catch (error) {
    console.error('❌ Error checking read times:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the check
checkReadTimes().catch(console.error);
