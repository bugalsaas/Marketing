"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Star,
  Link,
  Image as ImageIcon,
  GripVertical,
  Filter,
  MoreHorizontal
} from "lucide-react";
import { homepageHighlightApi } from "@/lib/api";
import { toast } from "sonner";

export default function AdminHomepagePage() {
  const [highlights, setHighlights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterActive, setFilterActive] = useState("all");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingHighlight, setEditingHighlight] = useState<any>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
    order: 0,
    active: true
  });

  // Load homepage highlights on component mount
  useEffect(() => {
    loadHighlights();
  }, []);

  const loadHighlights = async () => {
    try {
      setLoading(true);
      const response = await homepageHighlightApi.getAll();
      if (response.data && Array.isArray(response.data)) {
        setHighlights(response.data);
      } else if (response.error) {
        toast.error("Failed to load homepage highlights");
        console.error("Error loading highlights:", response.error);
      }
    } catch (error) {
      toast.error("Failed to load homepage highlights");
      console.error("Error loading highlights:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingHighlight) {
        const response = await homepageHighlightApi.update(editingHighlight.id, formData);
        if (response.data) {
          toast.success("Homepage highlight updated successfully");
          setEditingHighlight(null);
          resetForm();
          loadHighlights();
        } else if (response.error) {
          toast.error("Failed to update highlight");
        }
      } else {
        const response = await homepageHighlightApi.create(formData);
        if (response.data) {
          toast.success("Homepage highlight created successfully");
          setShowCreateForm(false);
          resetForm();
          loadHighlights();
        } else if (response.error) {
          toast.error("Failed to create highlight");
        }
      }
    } catch (error) {
      toast.error("Failed to save highlight");
      console.error("Error saving highlight:", error);
    }
  };

  const handleEdit = (highlight: any) => {
    setEditingHighlight(highlight);
    setFormData({
      title: highlight.title,
      description: highlight.description || "",
      image: highlight.image || "",
      link: highlight.link || "",
      order: highlight.order,
      active: highlight.active
    });
    setShowCreateForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this homepage highlight?")) {
      try {
        const response = await homepageHighlightApi.delete(id);
        if (response.data) {
          toast.success("Homepage highlight deleted successfully");
          loadHighlights();
        } else if (response.error) {
          toast.error("Failed to delete highlight");
        }
      } catch (error) {
        toast.error("Failed to delete highlight");
        console.error("Error deleting highlight:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      image: "",
      link: "",
      order: 0,
      active: true
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Filter and search highlights
  const filteredHighlights = highlights.filter(highlight => {
    const matchesSearch = highlight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         highlight.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesActive = filterActive === "all" || 
                         (filterActive === "active" && highlight.active) ||
                         (filterActive === "inactive" && !highlight.active);
    
    return matchesSearch && matchesActive;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1e3a8a]">Homepage Highlights</h1>
            <p className="text-[#1f2937]">Manage featured content that appears on your homepage</p>
          </div>
          <Button 
            className="bg-[#2563eb] hover:bg-[#1e3a8a]"
            onClick={() => {
              setShowCreateForm(true);
              setEditingHighlight(null);
              resetForm();
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            New Highlight
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Total Highlights</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">{highlights.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#2563eb]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Active</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {highlights.filter(h => h.active).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">With Images</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {highlights.filter(h => h.image).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">With Links</p>
                  <p className="text-2xl font-bold text-[#1e3a8a]">
                    {highlights.filter(h => h.link).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Link className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Create/Edit Form */}
        {showCreateForm && (
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#1e3a8a]">
                {editingHighlight ? "Edit Highlight" : "Create New Highlight"}
              </CardTitle>
              <CardDescription>
                {editingHighlight ? "Update the homepage highlight details" : "Add a new featured content to your homepage"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1f2937] mb-2">
                      Title *
                    </label>
                    <Input
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Enter highlight title..."
                      className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1f2937] mb-2">
                      Order
                    </label>
                    <Input
                      type="number"
                      value={formData.order}
                      onChange={(e) => handleInputChange("order", parseInt(e.target.value) || 0)}
                      placeholder="Display order..."
                      className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1f2937] mb-2">
                    Description
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Enter highlight description..."
                    rows={3}
                    className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1f2937] mb-2">
                      Image URL
                    </label>
                    <Input
                      value={formData.image}
                      onChange={(e) => handleInputChange("image", e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1f2937] mb-2">
                      Link URL
                    </label>
                    <Input
                      value={formData.link}
                      onChange={(e) => handleInputChange("link", e.target.value)}
                      placeholder="https://example.com/page"
                      className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.active}
                      onChange={(e) => handleInputChange("active", e.target.checked)}
                      className="rounded border-[#6b7280] text-[#2563eb] focus:ring-[#2563eb]"
                    />
                    <span className="text-sm text-[#1f2937]">Active</span>
                  </label>
                </div>

                <div className="flex gap-3">
                  <Button type="submit" className="bg-[#2563eb] hover:bg-[#1e3a8a]">
                    {editingHighlight ? "Update Highlight" : "Create Highlight"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setShowCreateForm(false);
                      setEditingHighlight(null);
                      resetForm();
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Search and Filters */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-4 h-4" />
                  <Input
                    placeholder="Search highlights..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={filterActive}
                  onChange={(e) => setFilterActive(e.target.value)}
                  className="border border-[#6b7280] rounded-md px-3 py-2 text-[#1f2937] focus:border-[#2563eb] focus:ring-[#2563eb] focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active Only</option>
                  <option value="inactive">Inactive Only</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Highlights Grid */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#1e3a8a]">Homepage Highlights</CardTitle>
            <CardDescription>Manage the featured content displayed on your homepage</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-[#6b7280]">
                Loading highlights...
              </div>
            ) : filteredHighlights.length === 0 ? (
              <div className="text-center py-8 text-[#6b7280]">
                No highlights found
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHighlights.map((highlight) => (
                  <Card key={highlight.id} className="border border-[#e5e7eb] hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <GripVertical className="w-4 h-4 text-[#6b7280]" />
                          <Badge variant="secondary" className="text-xs">
                            Order: {highlight.order}
                          </Badge>
                        </div>
                        <Badge className={highlight.active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                          {highlight.active ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-[#1f2937]">{highlight.title}</CardTitle>
                      {highlight.description && (
                        <CardDescription className="text-[#6b7280] line-clamp-2">
                          {highlight.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {highlight.image && (
                          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                            <ImageIcon className="w-4 h-4" />
                            <span className="truncate">{highlight.image}</span>
                          </div>
                        )}
                        {highlight.link && (
                          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
                            <Link className="w-4 h-4" />
                            <span className="truncate">{highlight.link}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 pt-3">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"
                            onClick={() => handleEdit(highlight)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                            onClick={() => handleDelete(highlight.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
