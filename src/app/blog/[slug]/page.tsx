import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PrismaClient } from '@prisma/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import SchemaMarkup from '@/components/SchemaMarkup';
import BreadcrumbNavigation from '@/components/BreadcrumbNavigation';
import { DynamicBlogPostSharing, DynamicStickyTableOfContents } from '@/components/DynamicComponents';

const prisma = new PrismaClient();

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  content: string;
  slug: string;
  publishedAt: Date | null;
  updatedAt: Date;
  authorId: string;
  author?: {
    id: string;
    name: string;
    email: string;
  };
  readTime: string | null;
  category: string | null;
  tags: string;
  coverImage: string | null;
  published: boolean;
  featured: boolean;
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    // During development, include both published and unpublished posts
    // In production, you might want to only include published posts
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    const blogPosts = await prisma.blogPost.findMany({
      where: isDevelopment ? {} : { published: true },
      select: { slug: true }
    });

    console.log(`📝 Generating static params for ${blogPosts.length} blog posts (development mode: ${isDevelopment})`);

    return blogPosts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    // During development, allow access to unpublished posts
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    const post = await prisma.blogPost.findUnique({
      where: { slug: slug, ...(isDevelopment ? {} : { published: true }) },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    if (!post) {
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.'
      };
    }

    return {
      title: `${post.title} | Bugal Blog`,
      description: post.excerpt || post.title,
      openGraph: {
        title: post.title,
        description: post.excerpt || post.title,
        type: 'article',
        publishedTime: post.publishedAt?.toISOString() || post.updatedAt.toISOString(),
        modifiedTime: post.updatedAt.toISOString(),
        authors: [post.author?.name || 'Bugal Admin'],
        tags: post.tags ? post.tags.split(',').map(tag => tag.trim()) : [],
        images: [
          {
            url: post.coverImage || '/api/placeholder/1200/630',
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt || post.title,
        images: [post.coverImage || '/api/placeholder/1200/630'],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post | Bugal Blog',
      description: 'Read our latest insights and guides for NDIS support providers.'
    };
  } finally {
    await prisma.$disconnect();
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  let post: BlogPost | null = null;
  let isUnpublished = false;

  try {
    // During development, allow access to both published and unpublished posts
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // First try to find a published post
    post = await prisma.blogPost.findUnique({
      where: { slug: slug, published: true },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    // If no published post found and in development, try to find unpublished post
    if (!post && isDevelopment) {
      post = await prisma.blogPost.findUnique({
        where: { slug: slug, published: false },
        include: {
          author: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      });
      if (post) {
        isUnpublished = true;
      }
    }

    if (!post) {
      notFound();
    }

  } catch (error) {
    console.error('Error fetching blog post:', error);
  } finally {
    await prisma.$disconnect();
  }

  if (!post) {
    notFound();
  }

  // Generate schema markup for SEO
  const blogPostSchema = {
    title: post.title,
    description: post.excerpt || post.title,
    author: post.author?.name || 'Bugal Admin',
    publishedAt: post.publishedAt?.toISOString() || post.updatedAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
    image: post.coverImage || '/api/placeholder/1200/630',
    url: `/blog/${post.slug}`,
    readTime: post.readTime || '5 min read',
    category: post.category || 'General',
    tags: post.tags ? post.tags.split(',').map(tag => tag.trim()) : ['NDIS', 'Support']
  };

  return (
    <>
      {/* Schema Markup for SEO */}
      <SchemaMarkup type="blog-post" data={blogPostSchema} />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <BreadcrumbNavigation 
          items={[
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` }
          ]} 
          className="container mx-auto px-4 py-4" 
        />

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Development Notice for Unpublished Posts */}
              {isUnpublished && (
                <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
                  <div className="flex items-center gap-2 text-yellow-800">
                    <span className="text-sm font-medium">🚧 Development Mode</span>
                    <span className="text-xs">This is an unpublished draft post</span>
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <Button variant="outline" size="sm" asChild className="mb-4">
                  <Link href="/blog">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Link>
                </Button>
                
                {post.category && (
                  <Badge variant="secondary" className="mb-4">
                    {post.category}
                  </Badge>
                )}
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4 leading-tight">
                  {post.title}
                </h1>
                
                {post.excerpt && (
                  <p className="text-xl text-[#1f2937] mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#6b7280]">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author?.name || 'Bugal Admin'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    }) : new Date(post.updatedAt).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>
                  {post.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                  {/* Featured Image */}
                  {post.coverImage && (
                    <div className="mb-8">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-64 sm:h-80 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
                  {/* Blog Content */}
                  <div className="prose prose-lg max-w-none prose-headings:text-[#1e3a8a] prose-strong:text-[#1e3a8a]">
                    <div 
                      className="[&_a]:text-[#2563eb] [&_a]:underline [&_a:hover]:text-[#1e3a8a] [&_ul]:ml-6 [&_ol]:ml-6 [&_li]:my-1 [&_ol]:list-decimal [&_ul]:list-disc [&_ol]:list-outside [&_ul]:list-outside"
                      dangerouslySetInnerHTML={{ __html: post.content }} 
                    />
                  </div>
                  
                  {/* Tags */}
                  {post.tags && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-[#1e3a8a] mb-3">Tags:</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.split(',').map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-sm">
                            {tag.trim()}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Social Sharing */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <DynamicBlogPostSharing
                      title={post.title}
                      url={`/blog/${post.slug}`}
                      description={post.excerpt || ''}
                      image={post.coverImage || ''}
                      author={post.author?.name || 'Bugal Admin'}
                      publishedAt={post.publishedAt?.toISOString() || post.updatedAt.toISOString()}
                    />
                  </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar with Table of Contents */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <DynamicStickyTableOfContents content={post.content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#f9fafb]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-4">
              Ready to Transform Your NDIS Practice?
            </h2>
            <p className="text-lg text-[#1f2937] mb-6 max-w-2xl mx-auto">
              Start your 30-day free trial today and see how Bugal can streamline your practice management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                <Link href="https://app.bugal.com.au/sign-up">
                  Start Free Trial
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
