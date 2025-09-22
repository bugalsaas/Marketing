"use client";

import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from "@/components/ui/image-upload";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  User,
  FileText,
  Clock
} from "lucide-react";
import { blogApi } from "@/lib/api";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    id: string;
    name: string;
    email: string;
  };
  category: string;
  readTime: string;
  featured: boolean;
  published: boolean;
  tags: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  slug?: string;
  metaDescription?: string;
}

export default function EditBlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    author: "",
    category: "",
    readTime: "",
    featured: false,
    published: false
  });

  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const categories = [
    "Starting Out",
    "Best Practice", 
    "Education",
    "Growth"
  ];

  const loadBlogPost = useCallback(async () => {
    try {
      setLoading(true);
      const response = await blogApi.getById(postId);
      if (response.data) {
        const post = response.data as BlogPost;
        setFormData({
          title: post.title || "",
          slug: post.slug || "",
          excerpt: post.excerpt || "",
          content: post.content || "",
          coverImage: post.coverImage || "",
          author: post.author?.name || "",
          category: post.category || "",
          readTime: post.readTime || "",
          featured: post.featured || false,
          published: post.published || false
        });
        setTags(post.tags ? post.tags.split(',').map(tag => tag.trim()) : []);
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

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags(prev => [...prev, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    console.log("🔄 Submitting blog post update...");
    console.log("📝 Form data:", formData);
    console.log("🏷️ Tags:", tags);
    console.log("🆔 Post ID:", postId);
    
    try {
      const updateData = { 
        ...formData, 
        tags: tags.join(',') 
      };
      
      console.log("📤 Sending update data:", updateData);
      
      const response = await blogApi.update(postId, updateData);
      
      console.log("📥 API response:", response);
      
      if (response.data) {
        toast.success("Blog post updated successfully");
        console.log("✅ Update successful");
        router.push("/admin/blog");
      } else if (response.error) {
        toast.error(`Failed to update blog post: ${response.error}`);
        console.error("❌ Update failed:", response.error);
      }
    } catch (error) {
      toast.error("Failed to update blog post");
      console.error("❌ Error updating blog post:", error);
    } finally {
      setSaving(false);
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

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-[#1e3a8a]">Edit Blog Post</h1>
            <p className="text-[#1f2937]">Update and manage your blog post content</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title and Excerpt */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Basic Information</CardTitle>
                  <CardDescription>Set the title and excerpt for your blog post</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-[#1f2937] mb-2">
                      Post Title *
                    </label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Enter your blog post title..."
                      className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-[#1f2937] mb-2">
                      URL Slug *
                    </label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => handleInputChange("slug", e.target.value)}
                      placeholder="url-friendly-slug"
                      className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                      required
                    />
                    <p className="text-sm text-[#6b7280] mt-1">
                      This will be used in the URL: /blog/{formData.slug || "your-slug"}
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-[#1f2937] mb-2">
                      Excerpt *
                    </label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("excerpt", e.target.value)}
                      placeholder="Write a brief summary of your post..."
                      rows={3}
                      className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                      required
                    />
                    <p className="text-sm text-[#6b7280] mt-1">
                      This will appear in blog listings and social media shares
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cover Image */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Cover Image</CardTitle>
                  <CardDescription>Add a featured image for your blog post</CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageUpload
                    value={formData.coverImage}
                    onChange={(value) => handleInputChange("coverImage", value)}
                    placeholder="https://example.com/cover-image.jpg"
                    label="Cover Image"
                    description="Upload an image or provide a URL. This will be displayed as the featured image for your blog post."
                  />
                </CardContent>
              </Card>

              {/* Content Editor */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Content</CardTitle>
                  <CardDescription>Write your blog post content</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Content Tabs */}
                  <div className="border-b border-[#e5e7eb] mb-4">
                    <nav className="-mb-px flex space-x-8">
                      <button
                        type="button"
                        onClick={() => setActiveTab("edit")}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          activeTab === "edit"
                            ? "border-[#2563eb] text-[#2563eb]"
                            : "border-transparent text-[#6b7280] hover:text-[#1f2937] hover:border-[#9ca3af]"
                        }`}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab("preview")}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          activeTab === "preview"
                            ? "border-[#2563eb] text-[#2563eb]"
                            : "border-transparent text-[#6b7280] hover:text-[#1f2937] hover:border-[#9ca3af]"
                        }`}
                      >
                        Preview
                      </button>
                    </nav>
                  </div>

                  {/* Tab Content */}
                  {activeTab === "edit" ? (
                    <div>
                      <label htmlFor="content" className="block text-sm font-medium text-[#1f2937] mb-2">
                        Post Content *
                      </label>
                      <RichTextEditor
                        value={formData.content}
                        onChange={(value) => handleInputChange("content", value)}
                        placeholder="Write your blog post content here..."
                        className="min-h-[400px]"
                      />
                      <p className="text-sm text-[#6b7280] mt-1">
                        Use the toolbar above to format your content with headings, lists, links, and more
                      </p>
                    </div>
                  ) : (
                    <div className="min-h-[400px] p-4 border border-[#e5e7eb] rounded-md bg-white">
                      <div className="prose max-w-none prose-headings:text-[#1e3a8a] prose-strong:text-[#1e3a8a]">
                        {formData.content ? (
                          <div 
                            className="[&_a]:text-[#2563eb] [&_a]:underline [&_a:hover]:text-[#1e3a8a]"
                            dangerouslySetInnerHTML={{ __html: formData.content }} 
                          />
                        ) : (
                          <div className="text-[#6b7280] text-center py-20">
                            <FileText className="w-12 h-12 mx-auto mb-4 text-[#9ca3af]" />
                            <p className="text-lg font-medium">No content to preview</p>
                            <p className="text-sm">Switch to Edit tab to write your blog post content</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Settings */}
            <div className="space-y-6">
              {/* Publish Settings */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Publish Settings</CardTitle>
                  <CardDescription>Configure when and how your post will be published</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="published"
                      checked={formData.published}
                      onChange={(e) => handleInputChange("published", e.target.checked)}
                      className="w-4 h-4 text-[#2563eb] border-[#6b7280] rounded focus:ring-[#2563eb]"
                    />
                    <label htmlFor="published" className="text-sm font-medium text-[#1f2937]">
                      Published
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => handleInputChange("featured", e.target.checked)}
                      className="w-4 h-4 text-[#2563eb] border-[#6b7280] rounded focus:ring-[#2563eb]"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-[#1f2937]">
                      Feature this post
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* Post Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Post Details</CardTitle>
                  <CardDescription>Set metadata and categorization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="author" className="block text-sm font-medium text-[#1f2937] mb-2">
                      Author *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-4 h-4" />
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => handleInputChange("author", e.target.value)}
                        placeholder="Enter author name..."
                        className="pl-10 border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-[#1f2937] mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                      className="w-full px-3 py-2 border border-[#6b7280] rounded-md focus:border-[#2563eb] focus:ring-[#2563eb]"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="readTime" className="block text-sm font-medium text-[#1f2937] mb-2">
                      Estimated Read Time
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-4 h-4" />
                      <Input
                        id="readTime"
                        value={formData.readTime}
                        onChange={(e) => handleInputChange("readTime", e.target.value)}
                        placeholder="e.g., 5 min read"
                        className="pl-10 border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Tags</CardTitle>
                  <CardDescription>Add relevant tags to help with discovery</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag..."
                      className="flex-1 border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    />
                    <Button 
                      type="button"
                      onClick={addTag}
                      variant="outline"
                      className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                    >
                      Add
                    </Button>
                  </div>
                  
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer"
                          onClick={() => removeTag(tag)}
                        >
                          {tag} ×
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-[#e5e7eb]">
            <Button variant="outline" asChild>
              <Link href="/admin/blog">
                Cancel
              </Link>
            </Button>
            
            <div className="flex gap-3">
              <Button 
                type="button"
                variant="outline"
                className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"
                asChild
              >
                <Link href={`/admin/blog/${postId}/view`}>
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Link>
              </Button>
              
              <Button 
                type="submit"
                className="bg-[#2563eb] hover:bg-[#1e3a8a]"
                disabled={saving}
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? "Saving..." : "Update Post"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
