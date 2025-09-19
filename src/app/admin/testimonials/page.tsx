"use client";

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
  Star, 
  User, 
  MessageSquare,
  Filter,
  MoreHorizontal,
  MapPin,
  Building,
  Loader2
} from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  content: string;
  rating: number;
  photo: string | null;
  category: string | null;
  visible: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // Fetch testimonials from database
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/admin/testimonials');
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        } else {
          setError('Failed to fetch testimonials');
        }
      } catch (err) {
        setError('Error fetching testimonials');
        console.error('Error fetching testimonials:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Filter testimonials based on search and filters
  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = searchTerm === "" || 
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (testimonial.role && testimonial.role.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (testimonial.company && testimonial.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
      testimonial.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || testimonial.category === selectedCategory;
    
    const matchesStatus = selectedStatus === "all" || 
      (selectedStatus === "published" && testimonial.visible) ||
      (selectedStatus === "draft" && !testimonial.visible) ||
      (selectedStatus === "featured" && testimonial.featured);
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Get unique categories for filter
  const categories = Array.from(new Set(testimonials.map(t => t.category).filter(Boolean))) as string[];

  // Delete testimonial function
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/testimonials/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTestimonials(testimonials.filter(t => t.id !== id));
      } else {
        alert('Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      alert('Error deleting testimonial');
    }
  };

  const getStatusColor = (testimonial: Testimonial) => {
    if (testimonial.visible) return "bg-green-100 text-green-800";
    return "bg-yellow-100 text-yellow-800";
  };

  const getStatusLabel = (testimonial: Testimonial) => {
    if (testimonial.visible) return "Published";
    return "Draft";
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Independent": return "bg-blue-100 text-blue-800";
      case "Agency": return "bg-green-100 text-green-800";
      case "Coordination": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#2563eb]" />
            <p className="text-[#1f2937]">Loading testimonials...</p>
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

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1e3a8a]">Testimonials Management</h1>
            <p className="text-[#1f2937]">Manage customer testimonials and success stories</p>
          </div>
          <Button className="bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
            <Link href="/admin/testimonials/new">
              <Plus className="w-4 h-4 mr-2" />
              New Testimonial
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Total Testimonials</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">{testimonials.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-[#2563eb]" />
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
                    {testimonials.filter(t => t.visible).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-green-600" />
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
                    {testimonials.filter(t => t.featured).length}
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
                  <p className="text-sm font-medium text-[#6b7280]">Average Rating</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {testimonials.length > 0 ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1) : '0.0'}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-600" />
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
                    placeholder="Search testimonials..."
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
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 border border-[#6b7280] rounded-md focus:border-[#2563eb] focus:ring-[#2563eb]"
                >
                  <option value="all">All Statuses</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="featured">Featured</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials Table */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#1e3a8a]">Testimonials</CardTitle>
            <CardDescription>Manage and organize customer feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e5e7eb]">
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Customer</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Company</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Rating</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTestimonials.map((testimonial) => (
                    <tr key={testimonial.id} className="border-b border-[#f3f4f6] hover:bg-[#f9fafb]">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-[#2563eb]" />
                          </div>
                          <div>
                            <div className="font-medium text-[#1f2937]">{testimonial.name}</div>
                            <div className="text-sm text-[#6b7280]">{testimonial.role || 'No role'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-[#6b7280]" />
                          <span className="text-[#1f2937]">{testimonial.company || 'No company'}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getCategoryColor(testimonial.category || 'Unknown')}>
                          {testimonial.category || 'No category'}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating 
                                  ? "text-yellow-400 fill-current" 
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-[#1f2937]">({testimonial.rating})</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(testimonial)}>
                            {getStatusLabel(testimonial)}
                          </Badge>
                          {testimonial.featured && (
                            <Badge className="bg-yellow-100 text-yellow-800 text-xs">Featured</Badge>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"
                            asChild
                          >
                            <Link href={`/admin/testimonials/${testimonial.id}/view`}>
                              <Eye className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"
                            asChild
                          >
                            <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
                              <Edit className="w-4 h-4" />
                            </Link>
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"
                            onClick={() => handleDelete(testimonial.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
