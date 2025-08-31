require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

async function testAPILogic() {
  const prisma = new PrismaClient();
  
  try {
    console.log('🧪 Testing Blog API Logic...\n');
    console.log('=' .repeat(60));
    
    // Test database connection
    console.log('🔌 Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connection successful');
    
    // Test the exact query from the API
    console.log('\n🔍 Testing blog posts query...');
    const posts = await prisma.blogPost.findMany({
      orderBy: [
        { featured: 'desc' },
        { publishedAt: 'desc' },
        { createdAt: 'desc' }
      ],
      take: 10,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        tags: true,
        featured: true,
        publishedAt: true,
        createdAt: true,
        author: {
          select: {
            name: true,
          }
        }
      }
    });
    
    console.log(`✅ Fetched ${posts.length} blog posts`);
    
    // Test category counts query
    console.log('\n🔍 Testing category counts query...');
    const categoryCounts = await prisma.blogPost.groupBy({
      by: ['category'],
      _count: {
        category: true
      }
    });
    
    console.log(`✅ Fetched category counts for ${categoryCounts.length} categories`);
    console.log('\n📊 Category breakdown:');
    categoryCounts.forEach(cat => {
      console.log(`   • ${cat.category}: ${cat._count.category} posts`);
    });
    
    // Test formatting
    console.log('\n🔍 Testing response formatting...');
    const formattedPosts = posts.map(post => ({
      ...post,
      author: post.author?.name || 'Bugal Team',
      readTime: calculateReadTime(post.excerpt || ''),
      image: post.coverImage || '/api/placeholder/600/400'
    }));
    
    console.log(`✅ Formatted ${formattedPosts.length} posts`);
    
    // Test final response structure
    const response = {
      posts: formattedPosts,
      categories: categoryCounts.map(cat => ({
        id: cat.category || 'unknown',
        name: formatCategoryName(cat.category || 'unknown'),
        count: cat._count.category
      })),
      total: posts.length
    };
    
    console.log('\n✅ Final response structure:');
    console.log(`   • Posts: ${response.posts.length}`);
    console.log(`   • Categories: ${response.categories.length}`);
    console.log(`   • Total: ${response.total}`);
    
    console.log('\n🎉 All API logic tests passed!');
    
  } catch (error) {
    console.error('❌ API logic test failed:', error.message);
    console.error('Full error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

function calculateReadTime(text) {
  const wordsPerMinute = 200;
  const words = text.split(' ').length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function formatCategoryName(category) {
  const categoryMap = {
    'business-setup': 'Business Setup',
    'compliance': 'Compliance',
    'financial': 'Financial',
    'operations': 'Operations',
    'marketing': 'Marketing',
    'technology': 'Technology',
    'ndis': 'NDIS Guides',
    'practice': 'Practice Management',
    'tips': 'Tips & Tricks',
    'unknown': 'Other'
  };
  
  return categoryMap[category] || category;
}

testAPILogic();
