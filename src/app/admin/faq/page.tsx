import React from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  HelpCircle, 
  Zap,
  Filter,
  MoreHorizontal,
  ChevronDown,
  ChevronRight,
  GripVertical,
  Star
} from "lucide-react";

export default function AdminFAQPage() {
  // Mock data - replace with actual data from database
  const faqs = [
    {
      id: 1,
      question: "How do I get started with Bugal?",
      answer: "Getting started is easy! Simply sign up for a free trial, complete your profile setup, and start managing your NDIS practice. Our onboarding wizard will guide you through each step.",
      category: "Getting Started",
      status: "published",
      featured: true,
      order: 1,
      createdAt: "2025-01-15",
      updatedAt: "2025-01-15"
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express) and direct bank transfers. All payments are processed securely through Stripe.",
      category: "Billing & Payments",
      status: "published",
      featured: false,
      order: 2,
      createdAt: "2025-01-12",
      updatedAt: "2025-01-12"
    },
    {
      id: 3,
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You'll continue to have access until the end of your current billing period.",
      category: "Billing & Payments",
      status: "published",
      featured: false,
      order: 3,
      createdAt: "2025-01-10",
      updatedAt: "2025-01-10"
    },
    {
      id: 4,
      question: "How does Bugal ensure NDIS compliance?",
      answer: "Bugal is built specifically for NDIS requirements. We regularly update our system to reflect the latest NDIS guidelines and provide built-in compliance checks and reporting tools.",
      category: "Compliance",
      status: "published",
      featured: true,
      order: 4,
      createdAt: "2025-01-08",
      updatedAt: "2025-01-08"
    },
    {
      id: 5,
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with Australian privacy laws. Your data is stored securely in Australian data centers.",
      category: "Security & Privacy",
      status: "published",
      featured: false,
      order: 5,
      createdAt: "2025-01-05",
      updatedAt: "2025-01-05"
    },
    {
      id: 6,
      question: "Do you offer training and support?",
      answer: "Yes! We provide comprehensive onboarding, video tutorials, live webinars, and dedicated customer support. Our team is available via email, phone, and live chat during business hours.",
      category: "Support & Training",
      status: "draft",
      featured: false,
      order: 6,
      createdAt: "2025-01-03",
      updatedAt: "2025-01-03"
    }
  ];

  const categories = [
    "Getting Started",
    "Billing & Payments", 
    "Compliance",
    "Security & Privacy",
    "Support & Training",
    "Features & Functionality"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-green-100 text-green-800";
      case "draft": return "bg-yellow-100 text-yellow-800";
      case "archived": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "published": return "Published";
      case "draft": return "Draft";
      case "archived": return "Archived";
      default: return status;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Getting Started": return "bg-blue-100 text-blue-800";
      case "Billing & Payments": return "bg-green-100 text-green-800";
      case "Compliance": return "bg-purple-100 text-purple-800";
      case "Security & Privacy": return "bg-red-100 text-red-800";
      case "Support & Training": return "bg-orange-100 text-orange-800";
      case "Features & Functionality": return "bg-indigo-100 text-indigo-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string): React.ReactNode => {
    switch (category) {
      case "Getting Started": return <Zap className="w-4 h-4" />;
      case "Billing & Payments": return "💰";
      case "Compliance": return "✅";
      case "Security & Privacy": return "🔒";
      case "Support & Training": return "🎓";
      case "Features & Functionality": return "⚙️";
      default: return "❓";
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1e3a8a]">FAQ Management</h1>
            <p className="text-[#1f2937]">Manage frequently asked questions and help content</p>
          </div>
          <Button className="bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
            <Link href="/admin/faq/new">
              <Plus className="w-4 h-4 mr-2" />
              New FAQ
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Total FAQs</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">{faqs.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-[#2563eb]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Published</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {faqs.filter(faq => faq.status === "published").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Featured</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {faqs.filter(faq => faq.featured).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Categories</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">{categories.length}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-4 h-4" />
                  <Input
                    placeholder="Search FAQs..."
                    className="pl-10 border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Filter className="w-4 h-4 mr-2" />
                  All Categories
                </Button>
                <Button variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Filter className="w-4 h-4 mr-2" />
                  All Statuses
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQs by Category */}
        <div className="space-y-6">
          {categories.map((category) => {
            const categoryFaqs = faqs.filter(faq => faq.category === category);
            if (categoryFaqs.length === 0) return null;

            return (
              <Card key={category} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-lg">{getCategoryIcon(category)}</span>
                      </div>
                      <div>
                        <CardTitle className="text-[#1e3a8a]">{category}</CardTitle>
                        <CardDescription>
                          {categoryFaqs.length} FAQ{categoryFaqs.length !== 1 ? 's' : ''}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(category)}>
                      {categoryFaqs.length} items
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categoryFaqs
                      .sort((a, b) => a.order - b.order)
                      .map((faq) => (
                        <div 
                          key={faq.id} 
                          className="border border-[#e5e7eb] rounded-lg p-4 hover:bg-[#f9fafb] transition-colors"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                                  <GripVertical className="w-3 h-3 text-[#6b7280]" />
                                </div>
                                <h3 className="font-medium text-[#1f2937]">{faq.question}</h3>
                                {faq.featured && (
                                  <Badge className="bg-yellow-100 text-yellow-800 text-xs">Featured</Badge>
                                )}
                                <Badge className={getStatusColor(faq.status)}>
                                  {getStatusLabel(faq.status)}
                                </Badge>
                              </div>
                              <p className="text-sm text-[#6b7280] line-clamp-2 ml-9">
                                {faq.answer}
                              </p>
                              <div className="flex items-center gap-4 mt-3 ml-9 text-xs text-[#6b7280]">
                                <span>Order: {faq.order}</span>
                                <span>Created: {new Date(faq.createdAt).toLocaleDateString()}</span>
                                <span>Updated: {new Date(faq.updatedAt).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#1e3a8a]">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add FAQ to Getting Started
              </Button>
              <Button variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                <Star className="w-4 h-4 mr-2" />
                Manage Featured FAQs
              </Button>
              <Button variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                <GripVertical className="w-4 h-4 mr-2" />
                Reorder FAQs
              </Button>
              <Button variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                <HelpCircle className="w-4 h-4 mr-2" />
                Preview FAQ Page
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
