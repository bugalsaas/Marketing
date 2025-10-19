import { PrismaClient } from '@prisma/client';
import StaticBlogPage from '@/components/StaticBlogPage';

// Required for static export
export const dynamic = 'force-static';

const prisma = new PrismaClient();

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage?: string | null;
  category: string | null;
  tags: string;
  featured: boolean;
  publishedAt: string;
  author: string;
  readTime: string | null;
}

interface Category {
  id: string;
  name: string;
  count: number;
}

async function getBlogData(): Promise<{ posts: BlogPost[]; categories: Category[] }> {
  try {
    // Try to load from static data first
    const fs = require('fs');
    const path = require('path');
    
    const blogPostsPath = path.join(process.cwd(), 'public', 'data', 'blog-posts.json');
    const categoriesPath = path.join(process.cwd(), 'public', 'data', 'categories.json');
    
    if (fs.existsSync(blogPostsPath) && fs.existsSync(categoriesPath)) {
      const blogPosts = JSON.parse(fs.readFileSync(blogPostsPath, 'utf8'));
      const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
      
      return {
        posts: blogPosts,
        categories
      };
    }
    
    // Fallback to database if static data not available
    const [posts, categoryGroups] = await Promise.all([
      prisma.blogPost.findMany({
        where: { published: true },
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
          authorId: true,
          readTime: true,
          author: {
            select: {
              name: true
            }
          }
        },
        orderBy: [
          { featured: 'desc' },
          { publishedAt: 'desc' },
          { createdAt: 'desc' }
        ]
      }),
      prisma.blogPost.groupBy({
        by: ['category'],
        where: { published: true },
        _count: { category: true }
      })
    ]);
    
    const categories = categoryGroups.map(group => ({
      id: group.category || 'uncategorized',
      name: group.category || 'Uncategorized',
      count: group._count.category
    }));
    
    return {
      posts: posts.map(post => ({
        ...post,
        author: post.author?.name || 'Bugal Team',
        publishedAt: post.publishedAt?.toISOString() || new Date().toISOString()
      })),
      categories
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      posts: [],
      categories: []
    };
  } finally {
    await prisma.$disconnect();
  }
}

export default async function BlogPage() {
  // Load all data for static generation
  const { posts, categories } = await getBlogData();

  // Get featured posts
  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);

  return (
    <StaticBlogPage 
      initialPosts={posts}
      categories={categories}
      featuredPosts={featuredPosts}
    />
  );
}