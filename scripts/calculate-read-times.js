const { PrismaClient } = require('@prisma/client');
const cheerio = require('cheerio');

const prisma = new PrismaClient();

// Function to calculate read time based on content
function calculateReadTime(content) {
  // Remove HTML tags and get plain text
  const $ = cheerio.load(content);
  const plainText = $.text();
  
  // Count words (split by whitespace and filter out empty strings)
  const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;
  
  // Average reading speed is about 200-250 words per minute
  // We'll use 225 words per minute as a reasonable average
  const wordsPerMinute = 225;
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
  // Minimum read time should be 1 minute
  const finalReadTime = Math.max(1, readTimeMinutes);
  
  return {
    wordCount,
    readTimeMinutes: finalReadTime,
    readTimeString: `${finalReadTime} min read`
  };
}

// Function to update all blog posts with calculated read times
async function updateReadTimes() {
  try {
    console.log('📖 Calculating read times for all blog posts...\n');
    
    // Get all blog posts
    const blogPosts = await prisma.blogPost.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        readTime: true
      }
    });
    
    console.log(`📊 Found ${blogPosts.length} blog posts to analyze\n`);
    
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
    console.error('❌ Error updating read times:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the update
updateReadTimes().catch(console.error);
