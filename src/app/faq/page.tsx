"use client";

import { FaqKnowledgeBaseCentered } from "@/components/FaqKnowledgeBaseCentered";
import SchemaMarkup from "@/components/SchemaMarkup";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { BREADCRUMB_CONFIGS } from "@/components/BreadcrumbNavigation";
import { useState, useEffect } from "react";

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

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch FAQs from database
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/faq');
        if (response.ok) {
          const data = await response.json();
          setFaqs(data);
        }
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f9fafb]">
        <BreadcrumbNavigation items={BREADCRUMB_CONFIGS.faq} />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563eb] mx-auto mb-4"></div>
            <p className="text-[#6b7280]">Loading FAQs...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <BreadcrumbNavigation items={BREADCRUMB_CONFIGS.faq} />
      
      <FaqKnowledgeBaseCentered faqs={faqs} />
      
      <SchemaMarkup
        type="faq"
        data={{
          questions: faqs.map(faq => ({
            question: faq.question,
            answer: faq.answer
          }))
        }}
      />
    </div>
  );
}