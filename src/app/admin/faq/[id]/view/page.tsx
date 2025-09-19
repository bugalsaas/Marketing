"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Edit, 
  HelpCircle,
  Zap,
  Star,
  Calendar,
  Clock,
  Eye,
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

export default function ViewFAQPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [faq, setFaq] = useState<FAQ | null>(null);

  // Fetch FAQ data
  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/admin/faq/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setFaq(data);
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Getting Started": return "bg-blue-100 text-blue-800";
      case "Billing & Payments": return "bg-green-100 text-green-800";
      case "Compliance": return "bg-purple-100 text-purple-800";
      case "Security & Privacy": return "bg-red-100 text-red-800";
      case "Support & Training": return "bg-yellow-100 text-yellow-800";
      case "Features & Functionality": return "bg-indigo-100 text-indigo-800";
      default: return "bg-gray-100 text-gray-800";
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
              <h1 className="text-2xl font-bold text-[#1e3a8a]">FAQ Details</h1>
              <p className="text-[#6b7280]">View FAQ information and settings</p>
            </div>
          </div>
          <Button asChild>
            <Link href={`/admin/faq/${faq.id}/edit`}>
              <Edit className="w-4 h-4 mr-2" />
              Edit FAQ
            </Link>
          </Button>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">{getCategoryIcon(faq.category)}</span>
                    </div>
                    <div>
                      <CardTitle className="text-[#1e3a8a] text-xl">
                        {faq.question}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {faq.category} • Order: {faq.order}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {faq.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge className={faq.visible ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                      {faq.visible ? "Published" : "Draft"}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <div className="text-[#1f2937] leading-relaxed whitespace-pre-wrap">
                    {faq.answer}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Card */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1e3a8a] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#1f2937]">Visibility</span>
                  <Badge className={faq.visible ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                    {faq.visible ? "Published" : "Draft"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#1f2937]">Featured</span>
                  <Badge className={faq.featured ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}>
                    {faq.featured ? "Yes" : "No"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#1f2937]">Category</span>
                  <Badge className={getCategoryColor(faq.category)}>
                    {faq.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#1f2937]">Order</span>
                  <span className="text-sm text-[#6b7280]">{faq.order}</span>
                </div>
              </CardContent>
            </Card>

            {/* Timestamps */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1e3a8a] flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#6b7280]" />
                  <div>
                    <p className="text-sm font-medium text-[#1f2937]">Created</p>
                    <p className="text-xs text-[#6b7280]">
                      {new Date(faq.createdAt).toLocaleDateString()} at {new Date(faq.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#6b7280]" />
                  <div>
                    <p className="text-sm font-medium text-[#1f2937]">Last Updated</p>
                    <p className="text-xs text-[#6b7280]">
                      {new Date(faq.updatedAt).toLocaleDateString()} at {new Date(faq.updatedAt).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1e3a8a]">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full">
                  <Link href={`/admin/faq/${faq.id}/edit`}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit FAQ
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/admin/faq">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to List
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
