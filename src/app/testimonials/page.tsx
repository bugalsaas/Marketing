"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Filter, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Heart,
  Quote,
  Award,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  const categories = [
    { id: "all", name: "All Categories", count: 28 },
    { id: "independent", name: "Independent Workers", count: 15 },
    { id: "teams", name: "Small Teams", count: 8 },
    { id: "coordinators", name: "Support Coordinators", count: 5 }
  ];

  const ratings = [
    { id: "all", name: "All Ratings", count: 28 },
    { id: "5", name: "5 Stars", count: 25 },
    { id: "4", name: "4+ Stars", count: 3 }
  ];

  const stats = [
    { label: "Happy Users", value: "1000+", icon: Users, color: "text-[#2563eb]" },
    { label: "Average Rating", value: "4.9/5", icon: Star, color: "text-yellow-500" },
    { label: "Success Rate", value: "98%", icon: TrendingUp, color: "text-green-500" },
    { label: "Recommend Bugal", value: "99%", icon: Heart, color: "text-red-500" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Independent Support Worker",
      company: "Sarah's Support Services",
      location: "Sydney, NSW",
      rating: 5,
      category: "independent",
      content: "Bugal has completely transformed how I manage my NDIS practice. The time tracking and invoicing features save me hours every week, and the compliance tools give me peace of mind. I can't imagine running my practice without it!",
      photo: "/api/placeholder/80/80",
      featured: true,
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Support Coordinator",
      company: "Chen Care Coordination",
      location: "Melbourne, VIC",
      rating: 5,
      category: "coordinators",
      content: "As a support coordinator, I need to manage multiple clients and ensure everything is compliant. Bugal makes this effortless with its comprehensive client management and reporting features. Highly recommended!",
      photo: "/api/placeholder/80/80",
      featured: false,
      verified: true
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Occupational Therapist",
      company: "Davis Therapy Services",
      location: "Brisbane, QLD",
      rating: 5,
      category: "independent",
      content: "The shift management and documentation features are exactly what I needed. Bugal has streamlined my entire workflow and helped me provide better service to my clients. The mobile app is fantastic too!",
      photo: "/api/placeholder/80/80",
      featured: false,
      verified: true
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Team Leader",
      company: "Wilson Support Team",
      location: "Perth, WA",
      rating: 5,
      category: "teams",
      content: "Managing a team of support workers used to be a nightmare. Bugal has simplified everything from scheduling to reporting. My team loves how easy it is to use, and I love the comprehensive analytics.",
      photo: "/api/placeholder/80/80",
      featured: false,
      verified: true
    },
    {
      id: 5,
      name: "Lisa Brown",
      role: "Independent Support Worker",
      company: "Brown Care Services",
      location: "Adelaide, SA",
      rating: 5,
      category: "independent",
      content: "I was spending so much time on admin tasks before Bugal. Now I can focus on what I do best - supporting my clients. The financial reporting has also helped me understand my business better.",
      photo: "/api/placeholder/80/80",
      featured: false,
      verified: true
    },
    {
      id: 6,
      name: "James Miller",
      role: "Support Worker",
      company: "Miller Support Services",
      location: "Hobart, TAS",
      rating: 5,
      category: "independent",
      content: "Bugal's incident reporting and compliance features have been a lifesaver. I always know I'm meeting NDIS requirements, and the system guides me through any complex situations.",
      photo: "/api/placeholder/80/80",
      featured: false,
      verified: true
    },
    {
      id: 7,
      name: "Rachel Green",
      role: "Team Coordinator",
      company: "Green Support Group",
      location: "Canberra, ACT",
      rating: 5,
      category: "teams",
      content: "Coordinating multiple support workers across different locations was challenging until we found Bugal. The centralized system and real-time updates have made our operations so much more efficient.",
      photo: "/api/placeholder/80/80",
      featured: false,
      verified: true
    },
    {
      id: 8,
      name: "Thomas Anderson",
      role: "Independent Support Worker",
      company: "Anderson Care",
      location: "Darwin, NT",
      rating: 5,
      category: "independent",
      content: "Living in a remote area, I need reliable software that works anywhere. Bugal's cloud-based system and mobile app have been perfect for my needs. The offline capabilities are impressive too.",
      photo: "/api/placeholder/80/80",
      featured: false,
      verified: true
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesCategory = selectedCategory === "all" || testimonial.category === selectedCategory;
    const matchesRating = selectedRating === "all" || testimonial.rating.toString() === selectedRating;
    return matchesCategory && matchesRating;
  });

  const featuredTestimonial = testimonials.find(t => t.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              ⭐ Customer Success Stories
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              Loved by{" "}
              <span className="text-[#2563eb]">NDIS Support Workers</span>{" "}
              Across Australia
            </h1>
            
            <p className="text-xl text-[#1f2937] mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover how Bugal is transforming NDIS practice management for independent support workers, 
              small teams, and support coordinators across the country.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                <Link href="/pricing">
                  Start Free Trial
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
                <Link href="/contact">
                  Share Your Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-[#1e3a8a] mb-2">{stat.value}</div>
                <div className="text-[#1f2937]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      {featuredTestimonial && (
        <section className="py-20 bg-[#f9fafb]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
                Featured Success Story
              </h2>
              <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
                Meet Sarah Johnson, an independent support worker whose practice has been transformed by Bugal
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] text-white">
                <CardContent className="p-12 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(featuredTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-16 h-16 mx-auto mb-6 opacity-20" />
                  <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
                    "{featuredTestimonial.content}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-xl">{featuredTestimonial.name}</div>
                      <div className="text-blue-100">{featuredTestimonial.role}</div>
                      <div className="text-blue-100 text-sm">{featuredTestimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Filters Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#6b7280]" />
              <span className="text-sm font-medium text-[#1f2937]">Category:</span>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "bg-[#2563eb] hover:bg-[#1e3a8a]" : "border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>

            {/* Rating Filter */}
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#6b7280]" />
              <span className="text-sm font-medium text-[#1f2937]">Rating:</span>
              <div className="flex gap-2">
                {ratings.map((rating) => (
                  <Button
                    key={rating.id}
                    variant={selectedRating === rating.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedRating(rating.id)}
                    className={selectedRating === rating.id ? "bg-[#2563eb] hover:bg-[#1e3a8a]" : "border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"}
                  >
                    {rating.name} ({rating.count})
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Real stories from NDIS support workers who have transformed their practice with Bugal
            </p>
          </div>
          
          {filteredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                          <Users className="w-8 h-8 text-[#2563eb]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#1e3a8a]">{testimonial.name}</div>
                          <div className="text-sm text-[#6b7280]">{testimonial.role}</div>
                          <div className="text-xs text-[#6b7280]">{testimonial.company}</div>
                        </div>
                      </div>
                      {testimonial.verified && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-[#6b7280] ml-2">{testimonial.rating}/5</span>
                    </div>
                    
                    <Badge className={getCategoryColor(testimonial.category)}>
                      {getCategoryName(testimonial.category)}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <blockquote className="text-[#1f2937] leading-relaxed mb-4">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between text-sm text-[#6b7280]">
                      <span>{testimonial.location}</span>
                      {testimonial.featured && (
                        <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                          <Award className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-[#6b7280] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">No testimonials found</h3>
              <p className="text-[#1f2937] mb-6">Try adjusting your filters to see more testimonials.</p>
              <Button onClick={() => { setSelectedCategory("all"); setSelectedRating("all"); }} variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2563eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of NDIS support workers who have already transformed their practice with Bugal. 
            Start your free trial today and see the difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-[#2563eb] hover:bg-gray-100" asChild>
              <Link href="/pricing">
                Start Free Trial
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

  function getCategoryColor(category: string) {
    switch (category) {
      case "independent": return "bg-blue-100 text-blue-800";
      case "teams": return "bg-green-100 text-green-800";
      case "coordinators": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  }

  function getCategoryName(category: string) {
    switch (category) {
      case "independent": return "Independent Workers";
      case "teams": return "Small Teams";
      case "coordinators": return "Support Coordinators";
      default: return category;
    }
  }
}
