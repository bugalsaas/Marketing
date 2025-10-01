"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import SchemaMarkup from "@/components/SchemaMarkup";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { BREADCRUMB_CONFIGS } from "@/components/BreadcrumbNavigation";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import {
  Search,
  Star,
  Quote,
  Users,
  Building,
  Award,
  Heart,
  ArrowRight,
  Filter,
  MapPin,
  Calendar,
  ThumbsUp,
  MessageCircle,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  photo: string;
  category: string;
  visible: boolean;
  featured: boolean;
  createdAt: Date;
}

export default function TestimonialsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch testimonials from database
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        } else {
          console.error('Failed to fetch testimonials');
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const categories = [
    { id: "all", name: "All Categories", icon: Users, color: "text-blue-600", bgColor: "bg-blue-100" },
    { id: "independent", name: "Independent Workers", icon: Shield, color: "text-green-600", bgColor: "bg-green-100" },
    { id: "teams", name: "Team Leaders", icon: Building, color: "text-purple-600", bgColor: "bg-purple-100" },
    { id: "coordinators", name: "Support Coordinators", icon: Award, color: "text-orange-600", bgColor: "bg-orange-100" }
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : "text-gray-600";
  };

  const getCategoryName = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.name : category;
  };

  // Filter testimonials based on search term and category
  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || testimonial.category === selectedCategory;
    return matchesSearch && matchesCategory && testimonial.visible;
  });

  // Generate testimonials schema for SEO
  const testimonialsSchema = {
    testimonials: testimonials.map(testimonial => ({
      name: testimonial.name,
      role: testimonial.role,
      company: testimonial.company,
      content: testimonial.content,
      rating: testimonial.rating
    }))
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#2563eb] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Schema Markup for SEO */}
      <SchemaMarkup type="testimonials" data={testimonialsSchema} />
      
      <div className="min-h-screen">
        {/* Breadcrumb Navigation */}
        <BreadcrumbNavigation 
          items={BREADCRUMB_CONFIGS.testimonials} 
          className="container mx-auto px-4 py-4" 
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                ⭐ Real Stories from Real Providers
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                See How Bugal is{" "}
                <span className="text-[#2563eb]">Transforming</span>{" "}
                NDIS Support Work
              </h1>
              
              <p className="text-xl text-[#1f2937] mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover how independent support workers, team leaders, and coordinators 
                are using Bugal to streamline their practice and deliver better care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                  <Link href="https://app.bugal.com.au/sign-up">
                    Start Free Trial
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
                  <Link href="/contact">
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#2563eb] mb-2">
                  {testimonials.length}+
                </div>
                <div className="text-gray-600">Happy Providers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2563eb] mb-2">
                  {testimonials.filter(t => t.rating === 5).length}
                </div>
                <div className="text-gray-600">5-Star Reviews</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2563eb] mb-2">
                  {testimonials.filter(t => t.featured).length}
                </div>
                <div className="text-gray-600">Featured Stories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#2563eb] mb-2">
                  {Math.round(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length * 10) / 10}
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search testimonials..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 ${
                        selectedCategory === category.id 
                          ? "bg-[#2563eb] text-white" 
                          : "border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
              {(searchTerm || selectedCategory !== "all") && (
                <p className="text-center text-sm text-gray-600 mt-4">
                  Found {filteredTestimonials.length} testimonial{filteredTestimonials.length !== 1 ? 's' : ''}
                  {searchTerm && ` for "${searchTerm}"`}
                  {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        {filteredTestimonials.filter(t => t.featured).length > 0 && (
          <section className="py-20 bg-[#f9fafb]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
                  Featured Success Stories
                </h2>
                <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
                  These providers have seen exceptional results with Bugal
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {filteredTestimonials
                  .filter(t => t.featured)
                  .slice(0, 4)
                  .map((testimonial, index) => (
                  <Card key={testimonial.id} className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {testimonial.name.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-[#1e3a8a] mb-2">
                            {testimonial.name}
                          </CardTitle>
                          <CardDescription className="text-[#1f2937] font-medium mb-1">
                            {testimonial.role}
                          </CardDescription>
                          {testimonial.company && (
                            <CardDescription className="text-[#6b7280]">
                              {testimonial.company}
                            </CardDescription>
                          )}
                        </div>
                        <Badge className={`${getCategoryColor(testimonial.category)} bg-opacity-10`}>
                          {getCategoryName(testimonial.category)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {testimonial.rating}/5
                        </span>
                      </div>
                      <blockquote className="text-[#1f2937] leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
                All Testimonials
              </h2>
              <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
                Real feedback from NDIS support providers using Bugal
              </p>
            </div>
            
            {filteredTestimonials.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No testimonials found
                </h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm 
                    ? `No testimonials match "${searchTerm}"`
                    : `No testimonials found in ${categories.find(c => c.id === selectedCategory)?.name}`
                  }
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                <TestimonialCarousel 
                  testimonials={filteredTestimonials}
                  className="w-full"
                />
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#2563eb]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Join These Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how Bugal can transform your NDIS support practice
            </p>
            <div className="flex justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-[#2563eb] hover:bg-gray-100" asChild>
                <Link href="https://app.bugal.com.au/sign-up">
                  Start Free Trial
                </Link>
              </Button>
            </div>
            <p className="text-blue-200 mt-4 text-sm">
              No credit card required • 30-day free trial • Full feature access
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
