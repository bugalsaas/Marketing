'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Search,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import BlogSearch from '@/components/BlogSearch';
import BlogFilters from '@/components/BlogFilters';
import BlogPagination from '@/components/BlogPagination';

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

interface StaticBlogPageProps {
  initialPosts: BlogPost[];
  categories: Category[];
  featuredPosts: BlogPost[];
}

export default function StaticBlogPage({ 
  initialPosts, 
  categories, 
  featuredPosts 
}: StaticBlogPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [totalPages, setTotalPages] = useState(1);

  const POSTS_PER_PAGE = 10;

  // Filter posts based on search and category
  useEffect(() => {
    let filtered = [...posts];

    // Apply category filter
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt?.toLowerCase().includes(searchLower) ||
        post.tags.toLowerCase().includes(searchLower)
      );
    }

    setFilteredPosts(filtered);
    setTotalPages(Math.ceil(filtered.length / POSTS_PER_PAGE));
    setCurrentPage(1);
  }, [posts, searchTerm, selectedCategory]);

  // Get posts for current page
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const term = formData.get('search') as string;
    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              📚 Knowledge Hub
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              NDIS Practice Management{" "}
              <span className="text-[#2563eb]">Resources</span>
            </h1>
            
            <p className="text-xl text-[#1f2937] mb-8 max-w-2xl mx-auto leading-relaxed">
              Expert insights, best practices, and practical guides to help you 
              excel as an NDIS support provider and grow your practice.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <Image
                        src={post.coverImage || '/api/placeholder/400/225'}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#2563eb] text-white">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-[#6b7280] mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category || 'General'}
                        </Badge>
                        <span>•</span>
                        <span>{post.readTime || '5 min read'}</span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-[#2563eb] transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-[#6b7280] line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                          <span>•</span>
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
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
          </div>
        </section>
      )}

      {/* Search and Filters - Moved here and improved layout */}
      <section className="py-8 bg-white/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar - Centered on its own row */}
            <div className="flex justify-center mb-6">
              <form onSubmit={handleSearch} className="w-full max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-5 h-5" />
                  <Input
                    type="text"
                    name="search"
                    placeholder="Search articles, topics, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 text-lg border-2 border-[#e5e7eb] focus:border-[#2563eb] rounded-lg w-full"
                  />
                </div>
              </form>
            </div>
            
            {/* Filter Buttons - Centered on their own row */}
            <div className="flex justify-center">
              <div className="flex flex-wrap items-center gap-4 justify-center">
                <span className="text-sm font-medium text-[#1f2937]">Filter by category:</span>
                {categories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    className={`cursor-pointer transition-colors ${
                      selectedCategory === category.name
                        ? "bg-[#2563eb] text-white hover:bg-[#1e3a8a]"
                        : "border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                    }`}
                    onClick={() => handleCategoryChange(category.name)}
                  >
                    {category.name} ({category.count})
                  </Badge>
                ))}
                {selectedCategory && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCategoryChange('')}
                    className="text-[#6b7280] hover:text-[#1f2937]"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear filters
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#1e3a8a]">
                All Articles
              </h2>
              <div className="text-sm text-[#6b7280]">
                Showing {paginatedPosts.length} of {filteredPosts.length} articles
              </div>
            </div>

            {paginatedPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-[#6b7280] mb-4">
                  No articles found matching your criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <Image
                        src={post.coverImage || '/api/placeholder/400/225'}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-[#6b7280] mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category || 'General'}
                        </Badge>
                        <span>•</span>
                        <span>{post.readTime || '5 min read'}</span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-[#2563eb] transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-[#6b7280] line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                          <span>•</span>
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
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
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <div className="flex justify-center items-center space-x-2">
                  {/* Previous Button */}
                  {currentPage > 1 ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="border-gray-300 text-gray-400 cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </Button>
                  )}

                  {/* Page Numbers */}
                  <div className="flex space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                        className={
                          currentPage === page
                            ? "bg-[#2563eb] text-white hover:bg-[#1e3a8a]"
                            : "border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                        }
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  {/* Next Button */}
                  {currentPage < totalPages ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="border-gray-300 text-gray-400 cursor-not-allowed"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
