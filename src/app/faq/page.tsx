"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown, Zap, Clock, FileText, Users, CreditCard, Settings, HelpCircle } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { BREADCRUMB_CONFIGS } from "@/components/BreadcrumbNavigation";
import { FAQ_DATA, FAQItem, FAQCategory } from "@/components/faq/types";

interface CategoryConfig {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

const CATEGORY_CONFIGS: Record<string, CategoryConfig> = {
  "Getting Started": {
    label: "Getting Started",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  "Shifts & Invoicing": {
    label: "Shifts & Invoicing",
    icon: Clock,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  "Service Agreements & Reporting": {
    label: "Service Agreements & Reporting",
    icon: FileText,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  "Managing Staff": {
    label: "Managing Staff",
    icon: Users,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  "Billing & Subscriptions": {
    label: "Billing & Subscriptions",
    icon: CreditCard,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  "Settings & Support": {
    label: "Settings & Support",
    icon: Settings,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
};

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set());

  // Flatten all FAQs for search
  const allFAQs = useMemo(() => {
    return FAQ_DATA.flatMap(category => 
      category.faqs.map(faq => ({
        ...faq,
        category: category.category,
        id: `${category.category}-${faq.question}`,
      }))
    );
  }, []);

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    let filtered = allFAQs;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [allFAQs, selectedCategory, searchQuery]);

  // Group filtered FAQs by category
  const groupedFAQs = useMemo(() => {
    const groups: Record<string, typeof filteredFAQs> = {};
    filteredFAQs.forEach(faq => {
      if (!groups[faq.category]) {
        groups[faq.category] = [];
      }
      groups[faq.category].push(faq);
    });
    return groups;
  }, [filteredFAQs]);

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(faqId)) {
        newSet.delete(faqId);
      } else {
        newSet.add(faqId);
      }
      return newSet;
    });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  const hasActiveFilters = searchQuery.trim() || selectedCategory;

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbNavigation items={BREADCRUMB_CONFIGS.faq} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Bugal's NDIS practice management software. 
            Search or filter by category to quickly find what you need.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Quick Filters</h2>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(CATEGORY_CONFIGS).map(([categoryKey, config]) => {
              const Icon = config.icon;
              const isSelected = selectedCategory === categoryKey;
              const faqCount = allFAQs.filter(faq => faq.category === categoryKey).length;
              
              return (
                <button
                  key={categoryKey}
                  onClick={() => setSelectedCategory(isSelected ? null : categoryKey)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                    isSelected
                      ? `${config.bgColor} ${config.borderColor} border-2`
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`p-3 rounded-lg ${isSelected ? config.bgColor : 'bg-gray-100'}`}>
                      <Icon className={`w-6 h-6 ${isSelected ? config.color : 'text-gray-600'}`} />
                    </div>
                    <div className="text-center">
                      <div className={`text-sm font-medium ${isSelected ? config.color : 'text-gray-900'}`}>
                        {config.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {faqCount} {faqCount === 1 ? 'FAQ' : 'FAQs'}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-8">
          {Object.keys(groupedFAQs).length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600 mb-4">
                {hasActiveFilters 
                  ? "Try adjusting your search or filter criteria."
                  : "No FAQs are available at the moment."
                }
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            Object.entries(groupedFAQs).map(([categoryKey, faqs]) => {
              const config = CATEGORY_CONFIGS[categoryKey];
              const Icon = config.icon;
              
              return (
                <div key={categoryKey} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  {/* Category Header */}
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${config.bgColor}`}>
                        <Icon className={`w-5 h-5 ${config.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {config.label}
                      </h3>
                      <span className="text-sm text-gray-500">
                        ({faqs.length} {faqs.length === 1 ? 'FAQ' : 'FAQs'})
                      </span>
                    </div>
                  </div>

                  {/* FAQs */}
                  <div className="divide-y divide-gray-200">
                    {faqs.map((faq, index) => {
                      const faqId = `${categoryKey}-${faq.question}`;
                      const isExpanded = expandedFAQs.has(faqId);
                      
                      return (
                        <div key={faqId} className="px-6 py-4">
                          <button
                            onClick={() => toggleFAQ(faqId)}
                            className="w-full text-left flex items-start justify-between space-x-4 hover:bg-gray-50 -mx-6 px-6 py-4 rounded-lg transition-colors"
                          >
                            <div className="flex items-start space-x-3 flex-1">
                              <div className={`p-1 rounded ${config.bgColor} mt-1 flex-shrink-0`}>
                                <Icon className={`w-4 h-4 ${config.color}`} />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-base font-medium text-gray-900 mb-2">
                                  {faq.question}
                                </h4>
                                {isExpanded && (
                                  <div 
                                    className="text-gray-700 prose prose-sm max-w-none"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                  />
                                )}
                              </div>
                            </div>
                            <ChevronDown 
                              className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                                isExpanded ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Schema Markup */}
      <SchemaMarkup
        type="faq"
        data={{
          questions: allFAQs.map(faq => ({
            question: faq.question,
            answer: faq.answer
          }))
        }}
      />
    </div>
  );
}