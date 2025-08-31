import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log('🔍 Simple Blog API called');
    
    // Just get basic post count first
    const postCount = await prisma.blogPost.count();
    console.log(`✅ Total posts in database: ${postCount}`);
    
    // Try to get just one post with minimal fields
    const samplePost = await prisma.blogPost.findFirst({
      select: {
        id: true,
        title: true,
        slug: true
      }
    });
    
    console.log('✅ Sample post:', samplePost);
    
    return NextResponse.json({
      status: 'ok',
      totalPosts: postCount,
      samplePost,
      message: 'Simple blog API is working'
    });
    
  } catch (error) {
    console.error('❌ Simple Blog API Error:', error);
    return NextResponse.json(
      { 
        error: 'Simple blog API failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
