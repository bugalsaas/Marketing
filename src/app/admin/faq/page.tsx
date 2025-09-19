"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  Star,
  Loader2,
  AlertCircle
} from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  visible: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminFAQPage() {
  const router = useRouter();
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Fetch FAQs from database
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/admin/faq');
        if (response.ok) {
          const data = await response.json();
          setFaqs(data);
        } else {
          setError('Failed to fetch FAQs');
        }
      } catch (err) {
        setError('Error fetching FAQs');
        console.error('Error fetching FAQs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories for filter
  const categories = Array.from(new Set(faqs.map(f => f.category).filter(Boolean))) as string[];

  // Delete FAQ function
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this FAQ?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/faq/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setFaqs(faqs.filter(f => f.id !== id));
      } else {
        alert('Failed to delete FAQ');
      }
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      alert('Error deleting FAQ');
    }
  };

  const getStatusColor = (faq: FAQ) => {
    if (faq.visible) return "bg-green-100 text-green-800";
    return "bg-yellow-100 text-yellow-800";
  };

  const getStatusLabel = (faq: FAQ) => {
    if (faq.visible) return "Published";
    return "Draft";
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#2563eb]" />
            <p className="text-[#1f2937]">Loading FAQs...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </AdminLayout>
    );
  }

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
                    {faqs.filter(faq => faq.visible).length}
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
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-[#6b7280] rounded-md focus:border-[#2563eb] focus:ring-[#2563eb]"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQs by Category */}
        <div className="space-y-6">
          {categories.map((category) => {
            const categoryFaqs = filteredFaqs.filter(faq => faq.category === category);
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
                                <Badge className={getStatusColor(faq)}>
                                  {getStatusLabel(faq)}
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
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"
                                onClick={() => router.push(`/admin/faq/${faq.id}/view`)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"
                                onClick={() => router.push(`/admin/faq/${faq.id}/edit`)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"
                                onClick={() => handleDelete(faq.id)}
                              >
                                <Trash2 className="w-4 h-4" />
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
