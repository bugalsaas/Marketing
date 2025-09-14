import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Create a new Prisma client instance for this API route
// Use globalThis to prevent multiple instances in development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Blog API called');
    
    // Test database connection first
    try {
      await prisma.$connect();
      console.log('✅ Database connection successful');
    } catch (dbError) {
      console.error('❌ Database connection failed:', dbError);
      throw new Error(`Database connection failed: ${dbError instanceof Error ? dbError.message : 'Unknown error'}`);
    }
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '50');
    
    console.log('📋 API Parameters:', { category, search, featured, limit });
    
    // Build where clause
    const where: any = {
      published: true // Only get published posts
    };
    
    if (category && category !== 'all') {
      where.category = category;
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    if (featured === 'true') {
      where.featured = true;
    }
    
        console.log('🔍 Where clause:', JSON.stringify(where, null, 2));
    
    // Check total post count first
    try {
      const totalCount = await prisma.blogPost.count();
      console.log(`📊 Total posts in database: ${totalCount}`);
    } catch (countError) {
      console.error('❌ Error counting posts:', countError);
      // Continue anyway
    }
    
    console.log('🔍 Fetching blog posts with where clause:', where);
    
    // Fetch blog posts with safer author handling
    let posts;
    try {
      posts = await prisma.blogPost.findMany({
        where,
        orderBy: [
          { featured: 'desc' },
          { publishedAt: 'desc' },
          { createdAt: 'desc' }
        ],
        take: limit,
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
          authorId: true, // Include authorId for fallback
          author: {
            select: {
              name: true,
            }
          }
        }
      });
      
      console.log(`✅ Fetched ${posts.length} blog posts`);
    } catch (postsError) {
      console.error('❌ Error fetching blog posts:', postsError);
      throw new Error(`Failed to fetch blog posts: ${postsError instanceof Error ? postsError.message : 'Unknown error'}`);
    }

    console.log('🔍 Fetching category counts...');
    
    // Get category counts
    let categoryCounts: any[] = [];
    try {
      categoryCounts = await prisma.blogPost.groupBy({
        by: ['category'],
        where: { published: true },
        _count: {
          category: true
        }
      });
      console.log(`✅ Fetched category counts for ${categoryCounts.length} categories`);
    } catch (categoryError) {
      console.error('❌ Error fetching category counts:', categoryError);
      categoryCounts = [];
    }

    // Format response with safer author handling
    let formattedPosts;
    try {
      formattedPosts = posts.map(post => ({
        ...post,
        author: post.author?.name || 'Bugal Team', // Fallback if author relation fails
        readTime: calculateReadTime(post.excerpt || ''),
        image: post.coverImage || '/api/placeholder/600/400'
      }));
      
      console.log(`✅ Formatted ${formattedPosts.length} posts`);
    } catch (formatError) {
      console.error('❌ Error formatting posts:', formatError);
      // Use basic formatting if the full formatting fails
      formattedPosts = posts.map(post => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || '',
        coverImage: post.coverImage,
        category: post.category,
        tags: post.tags,
        featured: post.featured,
        publishedAt: post.publishedAt,
        createdAt: post.createdAt,
        author: 'Bugal Team',
        readTime: '2 min read',
        image: post.coverImage || '/api/placeholder/600/400'
      }));
    }

    // Final response with safety checks
    const response = {
      posts: formattedPosts || [],
      categories: (categoryCounts || []).map(cat => ({
        id: cat.category || 'unknown',
        name: formatCategoryName(cat.category || 'unknown'),
        count: cat._count.category
      })),
      total: posts.length
    };
    
    console.log('✅ Final response prepared:', {
      postsCount: response.posts.length,
      categoriesCount: response.categories.length,
      total: response.total
    });
    
    return NextResponse.json(response);

  } catch (error) {
    console.error('Blog API Error:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : 'Unknown'
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch blog posts',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  } finally {
    // Clean up Prisma client
    await prisma.$disconnect();
  }
}

function calculateReadTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.split(' ').length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function formatCategoryName(category: string): string {
  const categoryMap: { [key: string]: string } = {
    'Starting Out': 'Starting Out',
    'Best Practice': 'Best Practice',
    'Education': 'Education',
    'Growth': 'Growth',
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
