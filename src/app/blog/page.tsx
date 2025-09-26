"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  BookOpen,
  TrendingUp,
  Lightbulb,
  Shield,
  Users,
  FileText
} from "lucide-react";
import React, { useState, useEffect, useLayoutEffect } from "react";


export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);
  interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage?: string;
    category: string;
    tags: string;
    featured: boolean;
    publishedAt: string;
    author: string;
    readTime: string | null;
    image: string;
  }

  interface BlogData {
    posts: BlogPost[];
    categories: Array<{
      id: string;
      name: string;
      count: number;
    }>;
    total: number;
  }

  const [blogData, setBlogData] = useState<BlogData>({
    posts: [],
    categories: [],
    total: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog data from database
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }
        const data = await response.json();
        setBlogData(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
        console.error('Error fetching blog data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  // Standardized categories with post counts
  const getCategoryCount = (categoryName: string) => {
    return blogData.posts.filter(post => post.category === categoryName).length;
  };

  const categories = [
    { id: "Starting Out", name: "Starting Out", count: getCategoryCount("Starting Out") },
    { id: "Best Practice", name: "Best Practice", count: getCategoryCount("Best Practice") },
    { id: "Education", name: "Education", count: getCategoryCount("Education") },
    { id: "Growth", name: "Growth", count: getCategoryCount("Growth") }
  ];

  // Toggle category selection with scroll position preservation
  const toggleCategory = (categoryId: string) => {
    // Store current scroll position
    const currentScrollY = window.scrollY;
    
    // Set filtering state
    setIsFiltering(true);
    
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
    
    // Use requestAnimationFrame for smoother scroll restoration
    requestAnimationFrame(() => {
      window.scrollTo({
        top: currentScrollY,
        behavior: 'instant'
      });
      
      // Reset filtering state after a short delay
      setTimeout(() => {
        setIsFiltering(false);
      }, 100);
    });
  };

  // Filter ALL articles based on search and categories
  const filteredArticles = blogData.posts.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(article.category);
    return matchesSearch && matchesCategory;
  });

  // Get featured and latest articles from filtered results
  const featuredArticles = filteredArticles.filter(post => post.featured).slice(0, 2);
  const latestArticles = filteredArticles.filter(post => !post.featured);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#2563eb] mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-2">Loading Blog Posts...</h2>
          <p className="text-[#1f2937]">Fetching the latest content from our database</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-auto max-w-md">
            <h2 className="text-xl font-semibold mb-2">Error Loading Blog Posts</h2>
            <p className="text-sm">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="mt-3 bg-red-600 hover:bg-red-700"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Starting Out": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Best Practice": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Education": return "bg-purple-100 text-purple-800 border-purple-200";
      case "Growth": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryButtonColor = (category: string, isSelected: boolean) => {
    const baseClasses = "px-6 py-3 h-auto font-medium transition-all duration-200";
    
    if (isSelected) {
      switch (category) {
        case "Starting Out": return `${baseClasses} bg-emerald-600 text-white hover:bg-emerald-700 shadow-md border-emerald-600`;
        case "Best Practice": return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 shadow-md border-blue-600`;
        case "Education": return `${baseClasses} bg-purple-600 text-white hover:bg-purple-700 shadow-md border-purple-600`;
        case "Growth": return `${baseClasses} bg-orange-600 text-white hover:bg-orange-700 shadow-md border-orange-600`;
        default: return `${baseClasses} bg-gray-600 text-white hover:bg-gray-700 shadow-md border-gray-600`;
      }
    } else {
      switch (category) {
        case "Starting Out": return `${baseClasses} border-emerald-300 text-emerald-700 hover:border-emerald-500 hover:text-emerald-800 hover:bg-emerald-50`;
        case "Best Practice": return `${baseClasses} border-blue-300 text-blue-700 hover:border-blue-500 hover:text-blue-800 hover:bg-blue-50`;
        case "Education": return `${baseClasses} border-purple-300 text-purple-700 hover:border-purple-500 hover:text-purple-800 hover:bg-purple-50`;
        case "Growth": return `${baseClasses} border-orange-300 text-orange-700 hover:border-orange-500 hover:text-orange-800 hover:bg-orange-50`;
        default: return `${baseClasses} border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-800 hover:bg-gray-50`;
      }
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case "ndis": return "NDIS Guides";
      case "practice": return "Practice Management";
      case "compliance": return "Compliance";
      case "tips": return "Tips & Tricks";
      default: return category;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              📚 NDIS Practice Management Blog
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              Expert Insights for{" "}
              <span className="text-[#2563eb]">NDIS Success</span>
            </h1>
            
            <p className="text-xl text-[#1f2937] mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover practical tips, industry insights, and best practices to help you 
              run a successful NDIS practice and provide exceptional support to your clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                <Link href="/pricing">
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

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Our most popular and comprehensive guides for NDIS practice management
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col h-full">
                <div className="aspect-video relative overflow-hidden">
                  {article.coverImage ? (
                    <>
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center fallback-placeholder" style={{ display: 'none' }}>
                        <BookOpen className="w-16 h-16 text-[#2563eb]" />
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-[#2563eb]" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`${getCategoryColor(article.category)} border`}>
                      {article.category}
                    </Badge>
                    <span className="text-sm text-[#6b7280]">Featured</span>
                  </div>
                  <h3 className="text-2xl text-[#1e3a8a] leading-tight font-semibold mb-3">
                    {article.title}
                  </h3>
                  <p className="text-base text-[#1f2937] leading-relaxed flex-grow mb-6">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-sm text-[#6b7280] mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.publishedAt).toLocaleDateString('en-GB', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime || '1 min read'}
                      </span>
                    </div>
                    <Button className="w-full bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                      <Link href={`/blog/${article.slug}`}>
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-[#f9fafb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb] h-12"
                />
              </div>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  variant="outline"
                  className={getCategoryButtonColor(category.name, selectedCategories.includes(category.id))}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Clear Filters */}
            {selectedCategories.length > 0 && (
              <div className="text-center mt-4">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedCategories([])}
                  className="text-[#6b7280] hover:text-[#2563eb] text-sm"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Stay updated with the latest insights and best practices for NDIS practice management
            </p>
          </div>
          
          {filteredArticles.length > 0 ? (
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto min-h-[600px] transition-all duration-300 ease-in-out ${isFiltering ? 'opacity-75' : 'opacity-100'}`}>
              {filteredArticles.map((article) => (
                <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col h-full">
                  <div className="aspect-video relative overflow-hidden">
                    {article.coverImage ? (
                      <>
                        <Image
                          src={article.coverImage}
                          alt={article.title}
                          fill
                          className="object-cover"
                          priority={article.featured}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={() => {
                            // Fallback handled by Next.js Image component
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center fallback-placeholder" style={{ display: 'none' }}>
                          <FileText className="w-12 h-12 text-[#2563eb]" />
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <FileText className="w-12 h-12 text-[#2563eb]" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={`${getCategoryColor(article.category)} border`}>
                        {article.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl text-[#1e3a8a] leading-tight font-semibold mb-3">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#1f2937] leading-relaxed flex-grow mb-6">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-sm text-[#6b7280] mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(article.publishedAt).toLocaleDateString('en-GB', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime || '1 min read'}
                        </span>
                      </div>
                      <Button variant="outline" className="w-full border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
                        <Link href={`/blog/${article.slug}`}>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-[#6b7280] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">No articles found</h3>
              <p className="text-[#1f2937] mb-6">Try adjusting your search terms or category filter.</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategories([]); }} variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] rounded-2xl p-12 text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stay Updated with NDIS Best Practices
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get the latest insights, tips, and industry updates delivered directly to your inbox. 
                Never miss an important NDIS development again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 border-white text-[#1f2937] placeholder:text-[#6b7280] focus:border-white focus:ring-white"
                />
                <Button className="bg-white text-[#2563eb] hover:bg-gray-100 px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-[#2563eb] hover:bg-gray-100" asChild>
              <Link href="/pricing">
                Start Your Free Trial
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white bg-transparent hover:bg-white hover:text-[#2563eb]" asChild>
              <Link href="/contact">
                Schedule Demo
              </Link>
            </Button>
          </div>
          <p className="text-blue-200 mt-4 text-sm">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
      {/* Schema Markup for SEO - Phase 4 Feature (Ready for Implementation) */}
    </div>
  );
}
