import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Shield, Clock, FileText, BarChart3, Zap, Star } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Client Management",
      description: "Easily manage your NDIS clients, their goals, and support plans in one centralized system.",
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Accurate time tracking for support sessions with automatic billing calculations.",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Streamlined documentation and reporting for NDIS compliance and client progress tracking.",
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description: "Comprehensive reports and insights to help you optimize your support services.",
    },
    {
      icon: Shield,
      title: "NDIS Compliant",
      description: "Built specifically for NDIS requirements with built-in compliance checks and validation.",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "Lightning-fast performance with 99.9% uptime to keep your business running smoothly.",
    },
  ];

  const testimonials = [
    {
      quote: "Bugal has transformed how I manage my NDIS practice. It's intuitive, reliable, and saves me hours every week.",
      author: "Sarah Johnson",
      role: "Independent Support Worker",
      rating: 5,
    },
    {
      quote: "The best NDIS software I've used. Simple to use but powerful enough for all my needs.",
      author: "Michael Chen",
      role: "Support Coordinator",
      rating: 5,
    },
    {
      quote: "Finally, a practice management tool that understands NDIS workers. Highly recommended!",
      author: "Emma Davis",
      role: "Occupational Therapist",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Woman on Bus.jpeg"
            alt="Woman on bus representing accessibility and support"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/95 text-[#1e3a8a] hover:bg-white font-semibold shadow-lg">
              🚀 Trusted by 1000+ NDIS Support Workers
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              The Most Trusted{" "}
              <span className="text-[#93c5fd] drop-shadow-2xl">NDIS Practice Management</span>{" "}
              Tool in Australia
            </h1>
            
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-xl font-medium">
              Streamline your NDIS practice with our comprehensive, easy-to-use software. 
              Manage clients, track time, handle billing, and stay compliant - all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-[#2563eb] hover:bg-[#1e3a8a] shadow-2xl font-semibold" asChild>
                <Link href="/pricing">
                  Start Free Trial - No Credit Card Required
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] shadow-2xl font-semibold bg-transparent" asChild>
                <Link href="/features">
                  See How It Works
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-white/90 mt-6 drop-shadow-lg font-medium">
              ✓ 30-day free trial • ✓ No setup fees • ✓ Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Everything You Need to Run Your NDIS Practice
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Powerful features designed specifically for NDIS support workers, 
              helping you focus on what matters most - supporting your clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <CardTitle className="text-xl text-[#1e3a8a]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#1f2937]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Loved by NDIS Support Workers
            </h2>
            <p className="text-xl text-[#1f2937]">
              Join thousands of satisfied users who trust Bugal with their practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-[#1f2937] mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-[#1e3a8a]">{testimonial.author}</p>
                    <p className="text-sm text-[#6b7280]">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            Join hundreds of NDIS support workers who have already streamlined their practice with Bugal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-[#2563eb] hover:bg-gray-100" asChild>
              <Link href="/pricing">
                Start Your Free Trial Today
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-[#2563eb]" asChild>
              <Link href="/contact">
                Talk to Our Team
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
