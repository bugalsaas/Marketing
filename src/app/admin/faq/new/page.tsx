"use client";

import React from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  HelpCircle,
  Zap,
  Star,
  GripVertical,
  CheckCircle
} from "lucide-react";

export default function NewFAQPage() {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "",
    order: 1,
    featured: false,
    status: "draft"
  });

  const categories = [
    "Getting Started",
    "Billing & Payments", 
    "Compliance",
    "Security & Privacy",
    "Support & Training",
    "Features & Functionality"
  ];

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - save to database
    console.log("FAQ form data:", formData);
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
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/admin/faq">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to FAQs
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-[#1e3a8a]">Create New FAQ</h1>
            <p className="text-[#1f2937]">Add a new frequently asked question to help your users</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Question and Answer */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">FAQ Content</CardTitle>
                  <CardDescription>Write your question and provide a clear, helpful answer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="question" className="block text-sm font-medium text-[#1f2937] mb-2">
                      Question *
                    </label>
                    <Input
                      id="question"
                      value={formData.question}
                      onChange={(e) => handleInputChange("question", e.target.value)}
                      placeholder="Enter the frequently asked question..."
                      className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                      required
                    />
                    <p className="text-sm text-[#6b7280] mt-1">
                      Keep questions clear and specific to help users find answers quickly
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="answer" className="block text-sm font-medium text-[#1f2937] mb-2">
                      Answer *
                    </label>
                    <Textarea
                      id="answer"
                      value={formData.answer}
                      onChange={(e) => handleInputChange("answer", e.target.value)}
                      placeholder="Provide a comprehensive answer to the question..."
                      rows={8}
                      className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                      required
                    />
                    <p className="text-sm text-[#6b7280] mt-1">
                      Be thorough but concise. You can use simple formatting and bullet points if needed
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Preview</CardTitle>
                  <CardDescription>See how your FAQ will appear to users</CardDescription>
                </CardHeader>
                <CardContent>
                  {formData.question && formData.answer ? (
                    <div className="border border-[#e5e7eb] rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <HelpCircle className="w-5 h-5 text-[#2563eb]" />
                        <h3 className="font-medium text-[#1f2937]">{formData.question}</h3>
                      </div>
                      <p className="text-[#1f2937] ml-7">{formData.answer}</p>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-[#6b7280]">
                      <HelpCircle className="w-12 h-12 mx-auto mb-3 text-[#6b7280]" />
                      <p>Fill in the question and answer above to see a preview</p>
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
                  <CardDescription>Configure when and how your FAQ will be published</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-[#1f2937] mb-2">
                      Status
                    </label>
                    <select
                      id="status"
                      value={formData.status}
                      onChange={(e) => handleInputChange("status", e.target.value)}
                      className="w-full px-3 py-2 border border-[#6b7280] rounded-md focus:border-[#2563eb] focus:ring-[#2563eb]"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>
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
                      Feature this FAQ
                    </label>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">FAQ Details</CardTitle>
                  <CardDescription>Set categorization and ordering</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
                    <label htmlFor="order" className="block text-sm font-medium text-[#1f2937] mb-2">
                      Display Order
                    </label>
                    <div className="relative">
                      <GripVertical className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-4 h-4" />
                      <Input
                        id="order"
                        type="number"
                        min="1"
                        value={formData.order}
                        onChange={(e) => handleInputChange("order", parseInt(e.target.value) || 1)}
                        className="pl-10 border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                      />
                    </div>
                    <p className="text-sm text-[#6b7280] mt-1">
                      Lower numbers appear first in the category
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Category Preview */}
              {formData.category && (
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[#1e3a8a]">Category Preview</CardTitle>
                    <CardDescription>See how this FAQ will be categorized</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-lg">{getCategoryIcon(formData.category)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-[#1f2937]">{formData.category}</p>
                        <p className="text-sm text-[#6b7280]">FAQ Category</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Help & Tips */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#1e3a8a]">Help & Tips</CardTitle>
                  <CardDescription>Best practices for creating effective FAQs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#1f2937]">Keep questions clear and specific</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#1f2937]">Provide comprehensive but concise answers</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#1f2937]">Use appropriate categories for easy navigation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#1f2937]">Consider featuring the most common questions</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-[#e5e7eb]">
            <Button variant="outline" asChild>
              <Link href="/admin/faq">
                Cancel
              </Link>
            </Button>
            
            <div className="flex gap-3">
              <Button 
                type="button"
                variant="outline"
                className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              
              <Button 
                type="submit"
                className="bg-[#2563eb] hover:bg-[#1e3a8a]"
              >
                <Save className="w-4 h-4 mr-2" />
                Save FAQ
              </Button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
