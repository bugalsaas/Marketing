import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight
} from "lucide-react";
import { PrismaClient } from '@prisma/client';
import BlogSearch from '@/components/BlogSearch';
import BlogFilters from '@/components/BlogFilters';
import BlogPagination from '@/components/BlogPagination';

// Make this page static with revalidation
export const revalidate = 3600; // Revalidate every hour

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

  interface BlogData {
    posts: BlogPost[];
    categories: Array<{
      id: string;
      name: string;
      count: number;
    }>;
  totalPages: number;
  currentPage: number;
}

const POSTS_PER_PAGE = 10;

async function getBlogData(page: number = 1, searchTerm: string = '', category: string = ''): Promise<BlogData> {
  try {
    const skip = (page - 1) * POSTS_PER_PAGE;
    
    // Build where clause for filtering
    const whereClause: any = { published: true };
    
    if (searchTerm) {
      whereClause.OR = [
        { title: { contains: searchTerm, mode: 'insensitive' } },
        { excerpt: { contains: searchTerm, mode: 'insensitive' } },
        { content: { contains: searchTerm, mode: 'insensitive' } },
        { tags: { contains: searchTerm, mode: 'insensitive' } }
      ];
    }
    
    if (category) {
      whereClause.category = category;
    }
    
    const [posts, totalCount, categories] = await Promise.all([
      prisma.blogPost.findMany({
        where: whereClause,
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
        orderBy: { publishedAt: 'desc' },
        skip,
        take: POSTS_PER_PAGE
      }),
      prisma.blogPost.count({
        where: whereClause
      }),
      prisma.blogPost.groupBy({
        by: ['category'],
        where: { published: true },
        _count: { category: true }
      })
    ]);

    const formattedPosts = posts.map(post => ({
      ...post,
      author: post.author?.name || 'Bugal Team',
      publishedAt: post.publishedAt?.toISOString() || new Date().toISOString()
    }));

    const formattedCategories = categories.map(cat => ({
      id: cat.category || 'uncategorized',
      name: cat.category || 'Uncategorized',
      count: cat._count.category
    }));

    const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);

    return {
      posts: formattedPosts,
      categories: formattedCategories,
      totalPages,
      currentPage: page
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return { posts: [], categories: [], totalPages: 0, currentPage: 1 };
  } finally {
    await prisma.$disconnect();
  }
}

export async function generateStaticParams() {
  const totalCount = await prisma.blogPost.count({
    where: { published: true }
  });
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);
  
  const pages = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString()
  }));
  
  await prisma.$disconnect();
  return pages;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string; category?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || '1', 10);
  const searchTerm = resolvedSearchParams.search || '';
  const selectedCategory = resolvedSearchParams.category || '';
  
  const blogData = await getBlogData(currentPage, searchTerm, selectedCategory);
  const { posts, categories, totalPages } = blogData;

  // Featured posts (always show 2-3, get from all posts, not just current page)
  const allFeaturedPosts = await prisma.blogPost.findMany({
    where: { published: true, featured: true },
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
    orderBy: { publishedAt: 'desc' },
    take: 3
  });

  const featuredPosts = allFeaturedPosts.map(post => ({
    ...post,
    author: post.author?.name || 'Bugal Team',
    publishedAt: post.publishedAt?.toISOString() || new Date().toISOString()
  }));
  
  // Regular posts (excluding featured)
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              NDIS Practice Management
              <span className="block text-[#2563eb]">Blog & Resources</span>
            </h1>
            <p className="text-xl text-[#1f2937] mb-8 max-w-3xl mx-auto">
              Discover practical tips, industry insights, and best practices to help you 
              run a successful NDIS practice and provide exceptional support to your clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                <Link href="https://app.bugal.com.au/sign-up">
                  Start Free Trial
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
                <Link href="/contact">
                  Subscribe to Updates
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-[#f9fafb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
                Hand-picked articles to help you excel in your NDIS practice
            </p>
          </div>
          
            <div className={`grid gap-8 max-w-7xl mx-auto ${
              featuredPosts.length === 1 
                ? 'grid-cols-1 max-w-md' 
                : featuredPosts.length === 2 
                ? 'grid-cols-1 md:grid-cols-2 max-w-4xl' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {featuredPosts.map((post, index) => (
                <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                      src={post.coverImage || '/images/blog/default-blog.jpg'}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={index === 0} // Priority only for first image
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#2563eb] text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-3">
                      <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-AU', { 
                          day: 'numeric', 
                          month: 'short', 
                          year: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime || '5 min read'}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-[#1e3a8a] group-hover:text-[#2563eb] transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-[#1f2937] line-clamp-3">
                      {post.excerpt || 'No excerpt available'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#6b7280]" />
                        <span className="text-sm text-[#6b7280]">{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-[#2563eb] hover:text-[#1e3a8a]" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                  </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              All Articles
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Explore our complete collection of NDIS practice management resources
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <BlogSearch searchTerm={searchTerm} />
            <BlogFilters categories={categories} selectedCategory={selectedCategory} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {regularPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                    src={post.coverImage || '/images/blog/default-blog.jpg'}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-[#6b7280] mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-AU', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}</span>
                        </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime || '5 min read'}</span>
                      </div>
                  </div>
                  <CardTitle className="text-xl text-[#1e3a8a] group-hover:text-[#2563eb] transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-[#1f2937] line-clamp-3">
                    {post.excerpt || 'No excerpt available'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#6b7280]" />
                      <span className="text-sm text-[#6b7280]">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#2563eb] hover:text-[#1e3a8a]" asChild>
                      <Link href={`/blog/${post.slug}`}>
                          Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                  </div>
                </CardContent>
                </Card>
              ))}
            </div>

          {/* Pagination */}
          <div className="mt-12">
            <BlogPagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
            />
            </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-[#2563eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your NDIS Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of NDIS support workers who trust Bugal to manage their practice efficiently 
            and stay compliant with all requirements.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-[#2563eb] hover:bg-gray-100" asChild>
              <Link href="https://app.bugal.com.au/sign-up">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
          <p className="text-blue-200 mt-4 text-sm">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}