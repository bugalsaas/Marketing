"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  HelpCircle,
  Zap,
  Star,
  GripVertical,
  CheckCircle,
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

export default function EditFAQPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [faq, setFaq] = useState<FAQ | null>(null);
  
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "",
    order: 1,
    visible: true,
    featured: false
  });

  const categories = [
    "Getting Started",
    "Billing & Payments", 
    "Compliance",
    "Security & Privacy",
    "Support & Training",
    "Features & Functionality"
  ];

  // Fetch FAQ data
  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/admin/faq/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setFaq(data);
          setFormData({
            question: data.question,
            answer: data.answer,
            category: data.category,
            order: data.order,
            visible: data.visible,
            featured: data.featured
          });
        } else {
          setError('Failed to fetch FAQ');
        }
      } catch (err) {
        setError('Error fetching FAQ');
        console.error('Error fetching FAQ:', err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchFAQ();
    }
  }, [params.id]);

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.question || !formData.answer) {
      alert('Question and answer are required');
      return;
    }

    try {
      setSaving(true);
      const response = await fetch(`/api/admin/faq/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/faq');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to update FAQ');
      }
    } catch (error) {
      console.error('Error updating FAQ:', error);
      alert('Error updating FAQ');
    } finally {
      setSaving(false);
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

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[#2563eb]" />
            <p className="text-[#1f2937]">Loading FAQ...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error || !faq) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-600" />
            <p className="text-red-600 mb-4">{error || 'FAQ not found'}</p>
            <Button onClick={() => router.push('/admin/faq')}>
              Back to FAQs
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
              <Link href="/admin/faq">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to FAQs
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-[#1e3a8a]">Edit FAQ</h1>
              <p className="text-[#6b7280]">Update FAQ information and settings</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#1e3a8a] flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                FAQ Details
              </CardTitle>
              <CardDescription>
                Update the question, answer, and category for this FAQ
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Question */}
              <div className="space-y-2">
                <Label htmlFor="question" className="text-sm font-medium text-[#1f2937]">
                  Question *
                </Label>
                <Input
                  id="question"
                  value={formData.question}
                  onChange={(e) => handleInputChange('question', e.target.value)}
                  placeholder="Enter the FAQ question..."
                  className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                  required
                />
              </div>

              {/* Answer */}
              <div className="space-y-2">
                <Label htmlFor="answer" className="text-sm font-medium text-[#1f2937]">
                  Answer *
                </Label>
                <Textarea
                  id="answer"
                  value={formData.answer}
                  onChange={(e) => handleInputChange('answer', e.target.value)}
                  placeholder="Enter the detailed answer..."
                  rows={6}
                  className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                  required
                />
              </div>

              {/* Category and Order */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium text-[#1f2937]">
                    Category
                  </Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-[#6b7280] rounded-md focus:border-[#2563eb] focus:ring-[#2563eb]"
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order" className="text-sm font-medium text-[#1f2937]">
                    Display Order
                  </Label>
                  <Input
                    id="order"
                    type="number"
                    value={formData.order}
                    onChange={(e) => handleInputChange('order', parseInt(e.target.value) || 0)}
                    placeholder="Order number"
                    className="border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
                  />
                </div>
              </div>

              {/* Status Toggles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="visible" className="text-sm font-medium text-[#1f2937]">
                      Published
                    </Label>
                    <p className="text-xs text-[#6b7280]">Make this FAQ visible to users</p>
                  </div>
                  <Switch
                    id="visible"
                    checked={formData.visible}
                    onCheckedChange={(checked) => handleInputChange('visible', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="featured" className="text-sm font-medium text-[#1f2937]">
                      Featured
                    </Label>
                    <p className="text-xs text-[#6b7280]">Highlight this FAQ as featured</p>
                  </div>
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => handleInputChange('featured', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

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
                onClick={() => router.push(`/admin/faq/${params.id}/view`)}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              
              <Button 
                type="submit"
                className="bg-[#2563eb] hover:bg-[#1e3a8a]"
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
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
