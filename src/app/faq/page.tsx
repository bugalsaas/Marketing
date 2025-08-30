"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  ChevronUp
} from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

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
      bgColor: "bg-blue-100"
    },
    {
      name: "Account & Billing",
      icon: CreditCard,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      name: "Features & Usage",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      name: "Technical Support",
      icon: Shield,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with Bugal?",
      answer: "Getting started is easy! Simply sign up for a free trial, complete your profile setup, and start managing your NDIS practice. Our onboarding wizard will guide you through each step.",
      category: "Getting Started",
      popular: true
    },
    {
      question: "What's included in the free trial?",
      answer: "Your 30-day free trial includes access to all features across all plans. You can test everything from client management to financial reporting without any limitations.",
      category: "Getting Started",
      popular: true
    },
    {
      question: "How much does Bugal cost?",
      answer: "We offer flexible pricing starting with a free plan for those just starting out. Paid plans start at $35/month for Solo practitioners, $45/month for small teams, and $65/month for larger teams.",
      category: "Account & Billing",
      popular: true
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, absolutely! There are no long-term contracts or cancellation fees. You can cancel your subscription at any time from your account settings.",
      category: "Account & Billing",
      popular: false
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are processed securely through our payment partners.",
      category: "Account & Billing",
      popular: false
    },
    {
      question: "How does the client management system work?",
      answer: "Our client management system allows you to store comprehensive client profiles, track support plans, manage goals, and maintain communication history all in one centralized location.",
      category: "Features & Usage",
      popular: false
    },
    {
      question: "Can I track my time and generate invoices?",
      answer: "Yes! Bugal includes comprehensive time tracking with automatic invoice generation. You can track time for individual sessions, clients, or activities and generate NDIS-compliant invoices instantly.",
      category: "Features & Usage",
      popular: false
    },
    {
      question: "How does Bugal ensure NDIS compliance?",
      answer: "Bugal is built specifically for NDIS requirements with built-in compliance checks, regulation updates, and best practice guidance. Our system helps you stay compliant automatically.",
      category: "Features & Usage",
      popular: false
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We use bank-level security with end-to-end encryption, regular security audits, and strict privacy controls. Your data is protected and never shared with third parties.",
      category: "Technical Support",
      popular: false
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including email support, live chat during business hours, video tutorials, and a comprehensive knowledge base. Premium plans include priority support.",
      category: "Technical Support",
      popular: false
    },
    {
      question: "Can I use Bugal on my mobile device?",
      answer: "Yes! Bugal is fully responsive and works perfectly on all devices including smartphones and tablets. You can manage your practice from anywhere with internet access.",
      category: "Technical Support",
      popular: false
    },
    {
      question: "Do you offer training or onboarding support?",
      answer: "Yes! We provide free onboarding support, video tutorials, and webinars to help you get the most out of Bugal. Our team is here to ensure your success.",
      category: "Getting Started",
      popular: false
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularFaqs = faqs.filter(faq => faq.popular);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              ❓ Frequently Asked Questions
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              Got Questions?{" "}
              <span className="text-[#2563eb]">We've Got Answers</span>
            </h1>
            
            <p className="text-xl text-[#1f2937] mb-8 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Bugal, from getting started to advanced features. 
              Can't find what you're looking for? Contact our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      {searchTerm === "" && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
                Popular Questions
              </h2>
              <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
                The most commonly asked questions about Bugal
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {popularFaqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => toggleItem(index)}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-[#1e3a8a] mb-2">{faq.question}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {faq.category}
                        </Badge>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-[#6b7280] transition-transform ${openItems.includes(index) ? 'rotate-180' : ''}`} />
                    </div>
                  </CardHeader>
                  {openItems.includes(index) && (
                    <CardContent className="pt-0">
                      <p className="text-[#1f2937] text-sm leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Categories */}
      <section className={`py-20 ${searchTerm === "" ? 'bg-[#f9fafb]' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              {searchTerm ? `Search Results (${filteredFaqs.length})` : "Browse by Category"}
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              {searchTerm ? `Found ${filteredFaqs.length} questions matching "${searchTerm}"` : "Find answers organized by topic"}
            </p>
          </div>
          
          {/* Category Pills */}
          {searchTerm === "" && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {faqCategories.map((category, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#6b7280] hover:border-[#2563eb] transition-colors cursor-pointer">
                  <div className={`w-3 h-3 rounded-full ${category.bgColor}`}></div>
                  <span className="text-sm font-medium text-[#1f2937]">{category.name}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => toggleItem(index)}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-lg text-[#1e3a8a]">{faq.question}</CardTitle>
                        {faq.popular && (
                          <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {faq.category}
                      </Badge>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#6b7280] transition-transform ${openItems.includes(index) ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
                {openItems.includes(index) && (
                  <CardContent className="pt-0">
                    <p className="text-[#1f2937] text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-[#6b7280] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">No questions found</h3>
              <p className="text-[#1f2937] mb-6">Try searching with different keywords or browse our categories above.</p>
              <Button onClick={() => setSearchTerm("")} variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2563eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you get the most out of Bugal. 
            Don't hesitate to reach out for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-[#2563eb] hover:bg-gray-100" asChild>
              <Link href="/contact">
                Contact Support Team
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-[#2563eb]" asChild>
              <Link href="/pricing">
                Start Free Trial
              </Link>
            </Button>
          </div>
          <p className="text-blue-200 mt-4 text-sm">
            We typically respond within 2 hours during business hours
          </p>
        </div>
      </section>
    </div>
  );
}
