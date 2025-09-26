const { PrismaClient } = require('@prisma/client');
const cheerio = require('cheerio');

const prisma = new PrismaClient();

// Function to calculate read time with better spread (3-5 minutes)
function calculateReadTime(content) {
  // Remove HTML tags and get plain text
  const $ = cheerio.load(content);
  const plainText = $.text();
  
  // Count words (split by whitespace and filter out empty strings)
  const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;
  
  // Use a more conservative reading speed for better spread
  // 150 words per minute for more realistic estimates
  const wordsPerMinute = 150;
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
  // Ensure minimum of 3 minutes and maximum of 5 minutes for better spread
  const finalReadTime = Math.max(3, Math.min(5, readTimeMinutes));
  
  return {
    wordCount,
    readTimeMinutes: finalReadTime,
    readTimeString: `${finalReadTime} min read`
  };
}

// Function to update all blog posts with adjusted read times
async function adjustReadTimes() {
  try {
    console.log('📖 Adjusting read times for better spread (3-5 minutes)...\n');
    
    // Get all blog posts
    const blogPosts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        readTime: true
      }
    });
    
    console.log(`📊 Found ${blogPosts.length} blog posts to adjust\n`);
    
    let updatedCount = 0;
    
    for (const post of blogPosts) {
      const readTimeData = calculateReadTime(post.content);
      
      // Update the blog post with the new read time
      await prisma.blogPost.update({
        where: { id: post.id },
        data: { readTime: readTimeData.readTimeString }
      });
      
      console.log(`✅ ${post.title}`);
      console.log(`   Words: ${readTimeData.wordCount} | Read time: ${readTimeData.readTimeString}`);
      console.log(`   Previous: ${post.readTime || 'Not set'}\n`);
      
      updatedCount++;
    }
    
    console.log(`📈 Summary:`);
    console.log(`✅ Updated read times for ${updatedCount} blog posts`);
    
    // Show distribution of read times
    const allPosts = await prisma.blogPost.findMany({
      select: { readTime: true }
    });
    
    const readTimeDistribution = {};
    allPosts.forEach(post => {
      const readTime = post.readTime || 'Not set';
      readTimeDistribution[readTime] = (readTimeDistribution[readTime] || 0) + 1;
    });
    
    console.log(`\n📊 Read time distribution:`);
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
    console.error('❌ Error adjusting read times:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the adjustment
adjustReadTimes().catch(console.error);
