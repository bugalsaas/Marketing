"use client";

import Link from "next/link";
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
  Filter,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Shield,
  Users,
  FileText
} from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "ndis", name: "NDIS Guides", count: 4 },
    { id: "practice", name: "Practice Management", count: 3 },
    { id: "compliance", name: "Compliance", count: 2 },
    { id: "tips", name: "Tips & Tricks", count: 3 }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Complete Guide to NDIS Practice Management in 2025",
      excerpt: "Everything you need to know about running a successful NDIS practice, from compliance to client management and everything in between.",
      author: "Bugal Team",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "ndis",
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "10 Essential Features Every NDIS Software Should Have",
      excerpt: "Discover the must-have features that will streamline your practice and ensure NDIS compliance without the headache.",
      author: "Sarah Johnson",
      date: "2025-01-12",
      readTime: "6 min read",
      category: "practice",
      featured: true,
      image: "/api/placeholder/600/400"
    }
  ];

  const latestArticles = [
    {
      id: 3,
      title: "How to Streamline Your Client Documentation Process",
      excerpt: "Learn proven strategies to reduce documentation time while maintaining quality and compliance standards.",
      author: "Michael Chen",
      date: "2025-01-10",
      readTime: "5 min read",
      category: "tips",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "NDIS Compliance Checklist for 2025",
      excerpt: "Stay ahead of the curve with our comprehensive compliance checklist covering all the latest NDIS requirements.",
      author: "Emma Davis",
      date: "2025-01-08",
      readTime: "7 min read",
      category: "compliance",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Maximizing Your NDIS Practice Revenue",
      excerpt: "Strategic approaches to increase your practice income while providing better value to your clients.",
      author: "David Wilson",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "practice",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Building Strong Client Relationships in NDIS",
      excerpt: "Essential communication and relationship-building strategies for long-term client success.",
      author: "Lisa Brown",
      date: "2025-01-03",
      readTime: "4 min read",
      category: "tips",
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      title: "Digital Transformation for NDIS Practices",
      excerpt: "How technology is revolutionizing NDIS service delivery and what it means for your practice.",
      author: "Bugal Team",
      date: "2025-01-01",
      readTime: "9 min read",
      category: "ndis",
      image: "/api/placeholder/400/250"
    },
    {
      id: 8,
      title: "Time Management Strategies for Support Workers",
      excerpt: "Practical tips to help you manage your time effectively while maintaining quality client care.",
      author: "James Miller",
      date: "2024-12-30",
      readTime: "5 min read",
      category: "tips",
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredArticles = latestArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ndis": return "bg-blue-100 text-blue-800";
      case "practice": return "bg-green-100 text-green-800";
      case "compliance": return "bg-purple-100 text-purple-800";
      case "tips": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
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
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-4 h-4" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-[#6b7280] rounded-md focus:border-[#2563eb] focus:ring-[#2563eb] bg-white appearance-none cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
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
              <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-[#2563eb]" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getCategoryColor(article.category)}>
                      {getCategoryName(article.category)}
                    </Badge>
                    <span className="text-sm text-[#6b7280]">Featured</span>
                  </div>
                  <CardTitle className="text-2xl text-[#1e3a8a] leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-base text-[#1f2937] leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-[#6b7280] mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                  <Button className="w-full bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                    <Link href={`/blog/${article.id}`}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-[#2563eb]" />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getCategoryColor(article.category)}>
                        {getCategoryName(article.category)}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-[#1e3a8a] leading-tight">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-[#1f2937] leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-[#6b7280] mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <Button variant="outline" className="w-full border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
                      <Link href={`/blog/${article.id}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-[#6b7280] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">No articles found</h3>
              <p className="text-[#1f2937] mb-6">Try adjusting your search terms or category filter.</p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }} variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
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
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-[#2563eb]" asChild>
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
    </div>
  );
}
