"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, User, ArrowRight } from 'lucide-react';

interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  category: string;
  readTime: string;
  author: string;
  publishedAt: string;
  tags: string[];
}

interface RelatedPostsProps {
  currentPostId: string;
  currentCategory: string;
  currentTags: string[];
  posts: RelatedPost[];
  maxPosts?: number;
  className?: string;
}

export default function RelatedPosts({ 
  currentPostId, 
  currentCategory, 
  currentTags, 
  posts, 
  maxPosts = 3,
  className = '' 
}: RelatedPostsProps) {
  // Filter out current post and get related posts
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className={`mt-12 ${className}`}>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Related Articles
        </h2>
        <p className="text-gray-600">
          Continue reading to learn more about NDIS practice management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Card 
            key={post.id} 
            className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime}
                </div>
              </div>
              <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-0">
              <CardDescription className="text-sm text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </CardDescription>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-gray-500">
                  <User className="h-3 w-3 mr-1" />
                  {post.author}
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Posts CTA */}
      <div className="mt-8 text-center">
        <Link 
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          View All Blog Posts
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </section>
  );
}

// Helper function to find related posts based on category and tags
export function findRelatedPosts(
  currentPost: RelatedPost,
  allPosts: RelatedPost[],
  maxPosts: number = 3
): RelatedPost[] {
  // Score posts based on relevance
  const scoredPosts = allPosts
    .filter(post => post.id !== currentPost.id)
    .map(post => {
      let score = 0;
      
      // Category match (highest weight)
      if (post.category === currentPost.category) {
        score += 10;
      }
      
      // Tag matches
      const currentTags = currentPost.tags || [];
      const postTags = post.tags || [];
      const tagMatches = currentTags.filter(tag => postTags.includes(tag));
      score += tagMatches.length * 5;
      
      // Recent posts get bonus points
      const daysSincePublished = Math.floor(
        (Date.now() - new Date(post.publishedAt).getTime()) / (1000 * 60 * 60 * 24)
      );
      if (daysSincePublished < 30) score += 2;
      if (daysSincePublished < 7) score += 3;
      
      return { ...post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, maxPosts);

  return scoredPosts;
}

// Helper function to get posts by category
export function getPostsByCategory(
  posts: RelatedPost[],
  category: string,
  excludeId?: string,
  maxPosts: number = 3
): RelatedPost[] {
  return posts
    .filter(post => post.category === category && post.id !== excludeId)
    .slice(0, maxPosts);
}

// Helper function to get posts by tags
export function getPostsByTags(
  posts: RelatedPost[],
  tags: string[],
  excludeId?: string,
  maxPosts: number = 3
): RelatedPost[] {
  return posts
    .filter(post => {
      if (post.id === excludeId) return false;
      const postTags = post.tags || [];
      return tags.some(tag => postTags.includes(tag));
    })
    .slice(0, maxPosts);
}
