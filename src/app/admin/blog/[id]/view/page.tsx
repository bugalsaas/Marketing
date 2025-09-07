"use client";

import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Edit, 
  Calendar,
  User,
  FileText,
  Tag,
  Clock,
  Star,
  ExternalLink
} from "lucide-react";
import { blogApi } from "@/lib/api";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  category: string;
  readTime: string;
  featured: boolean;
  status: string;
  tags: string[];
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  slug?: string;
  metaDescription?: string;
}

export default function ViewBlogPostPage() {
  const params = useParams();
  const postId = params.id as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  const loadBlogPost = useCallback(async () => {
    try {
      setLoading(true);
      const response = await blogApi.getById(postId);
      if (response.data) {
        setPost(response.data as BlogPost);
      } else if (response.error) {
        toast.error("Failed to load blog post");
        console.error("Error loading blog post:", response.error);
      }
    } catch (error) {
      toast.error("Failed to load blog post");
      console.error("Error loading blog post:", error);
    } finally {
      setLoading(false);
    }
  }, [postId]);

  // Load blog post data
  useEffect(() => {
    if (postId) {
      loadBlogPost();
    }
  }, [postId, loadBlogPost]);

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

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563eb] mx-auto mb-4"></div>
            <p className="text-[#6b7280]">Loading blog post...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (!post) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <FileText className="w-12 h-12 text-[#9ca3af] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-[#1f2937] mb-2">Blog Post Not Found</h2>
            <p className="text-[#6b7280] mb-4">The blog post you&apos;re looking for doesn&apos;t exist or has been deleted.</p>
            <Button asChild>
              <Link href="/admin/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog Posts
              </Link>
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
              <Link href="/admin/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-[#1e3a8a]">View Blog Post</h1>
              <p className="text-[#1f2937]">Preview and manage your blog post</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href={`/admin/blog/${postId}/edit`}>
                <Edit className="w-4 h-4 mr-2" />
                Edit Post
              </Link>
            </Button>
            {post.status === "published" && (
              <Button variant="outline" asChild>
                <Link href={`/blog/${post.slug || postId}`} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Post Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Post Header */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(post.status)}>
                      {getStatusLabel(post.status)}
                    </Badge>
                    {post.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <h1 className="text-3xl font-bold text-[#1f2937] leading-tight">
                    {post.title}
                  </h1>
                  
                  {post.excerpt && (
                    <p className="text-lg text-[#6b7280] leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-6 text-sm text-[#6b7280]">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author || "Unknown Author"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {post.publishedAt 
                          ? new Date(post.publishedAt).toLocaleDateString('en-AU', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })
                          : "Not published"
                        }
                      </span>
                    </div>
                    {post.readTime && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cover Image */}
            {post.coverImage && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden rounded-lg relative">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Post Content */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1e3a8a]">Content</CardTitle>
                <CardDescription>Blog post content preview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {post.content ? (
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  ) : (
                    <div className="text-center py-12 text-[#6b7280]">
                      <FileText className="w-12 h-12 mx-auto mb-4 text-[#9ca3af]" />
                      <p className="text-lg font-medium">No content available</p>
                      <p className="text-sm">This blog post doesn&apos;t have any content yet.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Post Details */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1e3a8a]">Post Details</CardTitle>
                <CardDescription>Metadata and settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1f2937] mb-1">
                    Category
                  </label>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {post.category || "Uncategorized"}
                  </Badge>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1f2937] mb-1">
                    Author
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-[#2563eb]" />
                    </div>
                    <span className="text-[#1f2937]">{post.author || "Unknown Author"}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1f2937] mb-1">
                    Status
                  </label>
                  <Badge className={getStatusColor(post.status)}>
                    {getStatusLabel(post.status)}
                  </Badge>
                </div>

                {post.featured && (
                  <div>
                    <label className="block text-sm font-medium text-[#1f2937] mb-1">
                      Featured
                    </label>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      <Star className="w-3 h-3 mr-1" />
                      Featured Post
                    </Badge>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-[#1f2937] mb-1">
                    Created
                  </label>
                  <div className="flex items-center gap-2 text-[#6b7280]">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {post.createdAt 
                        ? new Date(post.createdAt).toLocaleDateString('en-AU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })
                        : "Unknown"
                      }
                    </span>
                  </div>
                </div>

                {post.updatedAt && (
                  <div>
                    <label className="block text-sm font-medium text-[#1f2937] mb-1">
                      Last Updated
                    </label>
                    <div className="flex items-center gap-2 text-[#6b7280]">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.updatedAt).toLocaleDateString('en-AU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Tags</CardTitle>
                  <CardDescription>Associated tags</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="bg-gray-100 text-gray-800"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* SEO Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1e3a8a]">SEO Information</CardTitle>
                <CardDescription>Search engine optimization details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[#1f2937] mb-1">
                    Slug
                  </label>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded text-[#6b7280]">
                    {post.slug || postId}
                  </code>
                </div>
                
                {post.metaDescription && (
                  <div>
                    <label className="block text-sm font-medium text-[#1f2937] mb-1">
                      Meta Description
                    </label>
                    <p className="text-sm text-[#6b7280] bg-gray-50 p-2 rounded">
                      {post.metaDescription}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
