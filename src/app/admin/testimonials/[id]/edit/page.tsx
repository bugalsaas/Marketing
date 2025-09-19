"use client";

import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Save, 
  Star, 
  User, 
  Building, 
  MessageSquare,
  Loader2,
  AlertCircle
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

interface EditTestimonialPageProps {
  params: Promise<{ id: string }>;
}

export default function EditTestimonialPage({ params }: EditTestimonialPageProps) {
  const router = useRouter();
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    rating: 5,
    photo: "",
    category: "",
    visible: true,
    featured: false
  });

  // Fetch testimonial data
  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        setLoading(true);
        const resolvedParams = await params;
        const response = await fetch(`/api/admin/testimonials/${resolvedParams.id}`);
        
        if (response.ok) {
          const data = await response.json();
          setTestimonial(data);
          setFormData({
            name: data.name || "",
            role: data.role || "",
            company: data.company || "",
            content: data.content || "",
            rating: data.rating || 5,
            photo: data.photo || "",
            category: data.category || "",
            visible: data.visible ?? true,
            featured: data.featured ?? false
          });
        } else {
          setError('Failed to fetch testimonial');
        }
      } catch (err) {
        setError('Error fetching testimonial');
        console.error('Error fetching testimonial:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonial();
  }, [params]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.content.trim()) {
      setError('Name and content are required');
      return;
    }

    try {
      setSaving(true);
      setError(null);
      
      const resolvedParams = await params;
      const response = await fetch(`/api/admin/testimonials/${resolvedParams.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/testimonials');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to update testimonial');
      }
    } catch (err) {
      setError('Error updating testimonial');
      console.error('Error updating testimonial:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const categories = [
    { value: "independent", label: "Independent" },
    { value: "coordinators", label: "Coordinators" },
    { value: "teams", label: "Teams" },
    { value: "agencies", label: "Agencies" }
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#2563eb]" />
            <p className="text-[#1f2937]">Loading testimonial...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error && !testimonial) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-500" />
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={() => router.push('/admin/testimonials')}>
              Back to Testimonials
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
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/testimonials">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-[#1e3a8a]">Edit Testimonial</h1>
            <p className="text-[#1f2937]">Update testimonial details and settings</p>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a] flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Basic Information
                  </CardTitle>
                  <CardDescription>Testimonial author details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Role</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        placeholder="e.g., Independent Support Worker"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="e.g., ABC Support Services"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-[#2563eb] focus:ring-[#2563eb]"
                    >
                      <option value="">Select category</option>
                      {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial Content */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a] flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Testimonial Content
                  </CardTitle>
                  <CardDescription>What they said about your service</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="content">Testimonial Text *</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => handleInputChange('content', e.target.value)}
                        placeholder="Enter the testimonial content..."
                        rows={6}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="rating">Rating</Label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleInputChange('rating', star)}
                            className="focus:outline-none"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                star <= formData.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          </button>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {formData.rating}/5
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Status Settings */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Status & Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="visible">Published</Label>
                      <p className="text-sm text-gray-600">Show on live site</p>
                    </div>
                    <Switch
                      id="visible"
                      checked={formData.visible}
                      onCheckedChange={(checked) => handleInputChange('visible', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="featured">Featured</Label>
                      <p className="text-sm text-gray-600">Highlight this testimonial</p>
                    </div>
                    <Switch
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(checked) => handleInputChange('featured', checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Photo */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Photo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="photo">Photo URL</Label>
                    <Input
                      id="photo"
                      value={formData.photo}
                      onChange={(e) => handleInputChange('photo', e.target.value)}
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <Button
                      type="submit"
                      className="w-full bg-[#2563eb] hover:bg-[#1e3a8a]"
                      disabled={saving}
                    >
                      {saving ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </>
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() => router.push('/admin/testimonials')}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
