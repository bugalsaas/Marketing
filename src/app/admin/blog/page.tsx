"use client";

import React, { useState, useEffect } from "react";
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
  Calendar, 
  User, 
  FileText,
  Filter,
  MoreHorizontal
} from "lucide-react";
import { blogApi } from "@/lib/api";
import { toast } from "sonner";

export default function AdminBlogPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

  // Load blog posts on component mount
  useEffect(() => {
    loadBlogPosts();
  }, []);

  const loadBlogPosts = async () => {
    try {
      setLoading(true);
      const response = await blogApi.getAll();
      if (response.data && Array.isArray(response.data)) {
        setBlogPosts(response.data);
      } else if (response.error) {
        toast.error("Failed to load blog posts");
        console.error("Error loading blog posts:", response.error);
      }
    } catch (error) {
      toast.error("Failed to load blog posts");
      console.error("Error loading blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      try {
        const response = await blogApi.delete(id);
        if (response.data) {
          toast.success("Blog post deleted successfully");
          loadBlogPosts(); // Reload the list
        } else if (response.error) {
          toast.error("Failed to delete blog post");
        }
      } catch (error) {
        toast.error("Failed to delete blog post");
        console.error("Error deleting blog post:", error);
      }
    }
  };

  // Filter and search blog posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "all" || post.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

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

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1e3a8a]">Blog Management</h1>
            <p className="text-[#1f2937]">Manage your blog posts, create new content, and track performance</p>
          </div>
          <Button className="bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
            <Link href="/admin/blog/new">
              <Plus className="w-4 h-4 mr-2" />
              New Blog Post
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Total Posts</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">{blogPosts.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#2563eb]" />
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
                    {blogPosts.filter(post => post.status === "published").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Drafts</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {blogPosts.filter(post => post.status === "draft").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Featured Posts</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {blogPosts.filter(post => post.featured).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-600" />
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
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Filter className="w-4 h-4 mr-2" />
                  All Categories
                </Button>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="border border-[#6b7280] rounded-md px-3 py-2 text-[#1f2937] focus:border-[#2563eb] focus:ring-[#2563eb] focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts Table */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#1e3a8a]">Blog Posts</CardTitle>
            <CardDescription>Manage and organize your blog content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e5e7eb]">
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Title</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Author</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Published</th>

                    <th className="text-left py-3 px-4 font-semibold text-[#1f2937]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-[#6b7280]">
                        Loading blog posts...
                      </td>
                    </tr>
                  ) : filteredPosts.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-[#6b7280]">
                        No blog posts found
                      </td>
                    </tr>
                  ) : (
                    filteredPosts.map((post) => (
                    <tr key={post.id} className="border-b border-[#f3f4f6] hover:bg-[#f9fafb]">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-[#1f2937] mb-1">{post.title}</div>
                          <div className="text-sm text-[#6b7280] line-clamp-2">{post.excerpt}</div>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-[#6b7280]">{post.readTime}</span>
                            {post.featured && (
                              <Badge className="bg-yellow-100 text-yellow-800 text-xs">Featured</Badge>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-[#2563eb]" />
                          </div>
                          <span className="text-[#1f2937]">{post.author?.name || post.author}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {post.category}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getStatusColor(post.status)}>
                          {getStatusLabel(post.status)}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#6b7280]" />
                          <span className="text-[#1f2937]">
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Not published"}
                          </span>
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                            onClick={() => handleDeletePost(post.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
