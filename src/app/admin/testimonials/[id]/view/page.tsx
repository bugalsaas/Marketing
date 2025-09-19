"use client";

import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Edit, 
  Trash2, 
  Star, 
  User, 
  Building, 
  MessageSquare,
  Calendar,
  Eye,
  EyeOff,
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

interface ViewTestimonialPageProps {
  params: Promise<{ id: string }>;
}

export default function ViewTestimonialPage({ params }: ViewTestimonialPageProps) {
  const router = useRouter();
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

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

  const handleDelete = async () => {
    if (!testimonial) return;
    
    if (!confirm(`Are you sure you want to delete the testimonial from ${testimonial.name}? This action cannot be undone.`)) {
      return;
    }

    try {
      setDeleting(true);
      const response = await fetch(`/api/admin/testimonials/${testimonial.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.push('/admin/testimonials');
      } else {
        alert('Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      alert('Error deleting testimonial');
    } finally {
      setDeleting(false);
    }
  };

  const getCategoryColor = (category: string | null) => {
    switch (category) {
      case "independent": return "bg-blue-100 text-blue-800";
      case "coordinators": return "bg-purple-100 text-purple-800";
      case "teams": return "bg-green-100 text-green-800";
      case "agencies": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryLabel = (category: string | null) => {
    switch (category) {
      case "independent": return "Independent";
      case "coordinators": return "Coordinators";
      case "teams": return "Teams";
      case "agencies": return "Agencies";
      default: return "No Category";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

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

  if (error || !testimonial) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-500" />
            <p className="text-red-600 mb-4">{error || 'Testimonial not found'}</p>
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/testimonials">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-[#1e3a8a]">Testimonial Details</h1>
              <p className="text-[#1f2937]">View and manage testimonial information</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Link>
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDelete}
              disabled={deleting}
            >
              {deleting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Author Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1e3a8a] flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Author Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">
                      {testimonial.name}
                    </h3>
                    {testimonial.role && (
                      <p className="text-[#1f2937] font-medium mb-1">
                        {testimonial.role}
                      </p>
                    )}
                    {testimonial.company && (
                      <div className="flex items-center gap-2 text-[#6b7280]">
                        <Building className="w-4 h-4" />
                        <span>{testimonial.company}</span>
                      </div>
                    )}
                  </div>
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
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#6b7280]">Rating:</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-[#6b7280]">
                        {testimonial.rating}/5
                      </span>
                    </div>
                  </div>
                  
                  <blockquote className="text-[#1f2937] leading-relaxed italic text-lg border-l-4 border-[#2563eb] pl-4">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status & Settings */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1e3a8a]">Status & Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {testimonial.visible ? (
                      <Eye className="w-4 h-4 text-green-600" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-gray-400" />
                    )}
                    <span className="text-sm font-medium">Published</span>
                  </div>
                  <Badge className={testimonial.visible ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                    {testimonial.visible ? "Yes" : "No"}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                  <Badge className={testimonial.featured ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}>
                    {testimonial.featured ? "Yes" : "No"}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Category</span>
                  <Badge className={getCategoryColor(testimonial.category)}>
                    {getCategoryLabel(testimonial.category)}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Timestamps */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1e3a8a] flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Timestamps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Created</p>
                  <p className="text-sm text-[#1f2937]">
                    {formatDate(testimonial.createdAt)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">Last Updated</p>
                  <p className="text-sm text-[#1f2937]">
                    {formatDate(testimonial.updatedAt)}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Photo */}
            {testimonial.photo && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Photo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Actions */}
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Testimonial
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="destructive" 
                    className="w-full"
                    onClick={handleDelete}
                    disabled={deleting}
                  >
                    {deleting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Testimonial
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
