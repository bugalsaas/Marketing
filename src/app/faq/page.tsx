"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import SchemaMarkup from "@/components/SchemaMarkup";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { BREADCRUMB_CONFIGS } from "@/components/BreadcrumbNavigation";
import {
  Search,
  HelpCircle,
  FileText,
  CreditCard,
  Shield,
  Users,
  Clock,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Building,
  GraduationCap,
  DollarSign,
  Settings
} from "lucide-react";
import { useState, useEffect } from "react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  visible: boolean;
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch FAQs from database
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch('/api/faq');
        if (response.ok) {
          const data = await response.json();
          setFaqs(data);
        } else {
          console.error('Failed to fetch FAQs');
        }
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      name: "Getting Started",
      icon: Zap,
      color: "text-[#2563eb]",
      bgColor: "bg-blue-100",
      description: "Essential information for new NDIS support providers"
    },
    {
      name: "NDIS Compliance",
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-100",
      description: "Regulatory requirements and best practices"
    },
    {
      name: "Business Setup",
      icon: Building,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      description: "Legal and administrative requirements"
    },
    {
      name: "Financial Management",
      icon: DollarSign,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      description: "Invoicing, GST, and financial compliance"
    },
    {
      name: "Features & Usage",
      icon: Users,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      description: "How to use Bugal effectively"
    },
    {
      name: "Technical Support",
      icon: Settings,
      color: "text-red-600",
      bgColor: "bg-red-100",
      description: "Account, billing, and technical help"
    }
  ];

  // Filter FAQs based on search term and category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch && faq.visible;
  });

  // Group FAQs by category
  const faqsByCategory = faqCategories.map(category => ({
    ...category,
    faqs: filteredFAQs.filter(faq => faq.category === category.name)
  }));

  // Generate testimonials schema for SEO
  const testimonialsSchema = {
    questions: faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#2563eb] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading FAQs...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Schema Markup for SEO */}
      <SchemaMarkup type="faq" data={testimonialsSchema} />
      
      <div className="min-h-screen">
        {/* Breadcrumb Navigation */}
        <BreadcrumbNavigation 
          items={BREADCRUMB_CONFIGS.faq} 
          className="container mx-auto px-4 py-4" 
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                ❓ Frequently Asked Questions
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
                Everything You Need to{" "}
                <span className="text-[#2563eb]">Know About NDIS</span>{" "}
                Support Work
              </h1>
              
              <p className="text-xl text-[#1f2937] mb-8 max-w-2xl mx-auto leading-relaxed">
                Get answers to the most common questions about becoming an NDIS support provider, 
                compliance requirements, and using Bugal to manage your practice effectively.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                  <Link href="/pricing">
                    Start Free Trial
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
                  <Link href="/contact">
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              {searchTerm && (
                <p className="text-center text-sm text-gray-600 mt-2">
                  Found {filteredFAQs.length} FAQ{filteredFAQs.length !== 1 ? 's' : ''} for "{searchTerm}"
                </p>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
                Find answers organized by topic to quickly locate the information you need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {faqCategories.map((category, index) => {
                const categoryFAQs = faqsByCategory[index]?.faqs || [];
                return (
                  <Card key={category.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <category.icon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <CardTitle className="text-xl text-[#1e3a8a]">{category.name}</CardTitle>
                      <CardDescription className="text-[#1f2937]">
                        {category.description}
                      </CardDescription>
                      <Badge variant="secondary" className="w-fit mx-auto">
                        {categoryFAQs.length} FAQ{categoryFAQs.length !== 1 ? 's' : ''}
                      </Badge>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {categoryFAQs.length > 0 ? (
                        <div className="space-y-3">
                          {categoryFAQs.slice(0, 3).map((faq, faqIndex) => (
                            <div key={faq.id} className="text-left">
                              <button
                                onClick={() => toggleItem(index * 100 + faqIndex)}
                                className="flex items-start justify-between w-full text-left hover:bg-gray-50 p-2 rounded-lg transition-colors"
                              >
                                <span className="text-sm font-medium text-[#1f2937] line-clamp-2">
                                  {faq.question}
                                </span>
                                {openItems.includes(index * 100 + faqIndex) ? (
                                  <ChevronUp className="w-4 h-4 text-[#2563eb] ml-2 flex-shrink-0 mt-1" />
                                ) : (
                                  <ChevronDown className="w-4 h-4 text-[#2563eb] ml-2 flex-shrink-0 mt-1" />
                                )}
                              </button>
                              {openItems.includes(index * 100 + faqIndex) && (
                                <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                                  <p className="text-sm text-[#1f2937] leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                          {categoryFAQs.length > 3 && (
                            <div className="text-center pt-2">
                              <Button variant="outline" size="sm" className="text-[#2563eb] border-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                                View All {categoryFAQs.length} FAQs
                              </Button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                          <p className="text-gray-500">No FAQs found in this category</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* All FAQs Section */}
        <section className="py-20 bg-[#f9fafb]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
                All Frequently Asked Questions
              </h2>
              <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
                Comprehensive answers to help you succeed as an NDIS support provider
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {filteredFAQs.map((faq, index) => (
                <Card key={faq.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <button
                      onClick={() => toggleItem(index)}
                      className="flex items-start justify-between w-full text-left"
                    >
                      <CardTitle className="text-lg text-[#1e3a8a] pr-4">
                        {faq.question}
                      </CardTitle>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-6 h-6 text-[#2563eb] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#2563eb] flex-shrink-0" />
                      )}
                    </button>
                    <Badge variant="outline" className="w-fit">
                      {faq.category}
                    </Badge>
                  </CardHeader>
                  {openItems.includes(index) && (
                    <CardContent className="pt-0">
                      <div className="prose prose-gray max-w-none">
                        <p className="text-[#1f2937] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
              
              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No FAQs found for "{searchTerm}"
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search terms or browse by category above.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm('')}
                    className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#2563eb]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed as an NDIS support provider. 
              Get personalized assistance and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-[#2563eb] hover:bg-gray-100" asChild>
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white bg-transparent hover:bg-white hover:text-[#2563eb]" asChild>
                <Link href="/pricing">
                  Start Free Trial
                </Link>
              </Button>
            </div>
            <p className="text-blue-200 mt-4 text-sm">
              Free support included • 24/7 help available • NDIS experts
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
