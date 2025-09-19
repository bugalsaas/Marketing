"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Zap,
  CreditCard,
  Shield,
  Users,
  Clock,
  CheckCircle,
  Star,
  Building,
  GraduationCap,
  DollarSign,
  Settings
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

interface Category {
  name: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}

interface FaqKnowledgeBaseProps {
  faqs: FAQ[];
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
  initialCategory?: string;
}

export function FaqKnowledgeBaseCentered({ 
  faqs, 
  searchTerm = "", 
  onSearchChange,
  initialCategory = ""
}: FaqKnowledgeBaseProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get categories with counts
  const categories: Category[] = [
    {
      name: "Getting Started",
      count: faqs.filter(f => f.category === "Getting Started" && f.visible).length,
      icon: <Zap className="w-4 h-4" />,
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      name: "Billing & Payments",
      count: faqs.filter(f => f.category === "Billing & Payments" && f.visible).length,
      icon: <CreditCard className="w-4 h-4" />,
      color: "bg-green-100 text-green-800 border-green-200"
    },
    {
      name: "Compliance",
      count: faqs.filter(f => f.category === "Compliance" && f.visible).length,
      icon: <CheckCircle className="w-4 h-4" />,
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    {
      name: "Security & Privacy",
      count: faqs.filter(f => f.category === "Security & Privacy" && f.visible).length,
      icon: <Shield className="w-4 h-4" />,
      color: "bg-red-100 text-red-800 border-red-200"
    },
    {
      name: "Support & Training",
      count: faqs.filter(f => f.category === "Support & Training" && f.visible).length,
      icon: <GraduationCap className="w-4 h-4" />,
      color: "bg-yellow-100 text-yellow-800 border-yellow-200"
    },
    {
      name: "Features & Functionality",
      count: faqs.filter(f => f.category === "Features & Functionality" && f.visible).length,
      icon: <Settings className="w-4 h-4" />,
      color: "bg-indigo-100 text-indigo-800 border-indigo-200"
    }
  ].filter(category => category.count > 0);

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = localSearchTerm === "" || 
      faq.question.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(localSearchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "" || faq.category === selectedCategory;
    
    return faq.visible && matchesSearch && matchesCategory;
  });

  // Group FAQs by category
  const faqsByCategory = categories.reduce((acc, category) => {
    const categoryFaqs = filteredFaqs
      .filter(faq => faq.category === category.name)
      .sort((a, b) => a.order - b.order);
    
    if (categoryFaqs.length > 0) {
      acc[category.name] = categoryFaqs;
    }
    
    return acc;
  }, {} as Record<string, FAQ[]>);

  // Handle search
  const handleSearch = (term: string) => {
    setLocalSearchTerm(term);
    if (onSearchChange) {
      onSearchChange(term);
    }
  };

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setOpenItems([]); // Close all accordions when switching categories
  };

  // Handle accordion toggle
  const handleAccordionToggle = (value: string) => {
    setOpenItems(prev => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value);
      } else {
        // Close other items in the same category
        const category = faqsByCategory[selectedCategory]?.find(f => f.id === value)?.category;
        const otherItemsInCategory = faqsByCategory[category || ""]?.map(f => f.id) || [];
        const otherItems = prev.filter(item => !otherItemsInCategory.includes(item));
        return [...otherItems, value];
      }
    });

    // Smooth scroll to top of content
    if (contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  };

  // Get category icon
  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(c => c.name === categoryName);
    return category?.icon || <HelpCircle className="w-4 h-4" />;
  };

  // Get category color
  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(c => c.name === categoryName);
    return category?.color || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#1e3a8a] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
          Find answers to common questions about Bugal. Can't find what you're looking for? 
          <a href="/contact" className="text-[#2563eb] hover:underline ml-1">
            Contact our support team
          </a>.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-5 h-5" />
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={localSearchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-12 pr-4 py-3 text-lg border-2 border-[#e5e7eb] focus:border-[#2563eb] focus:ring-[#2563eb] rounded-lg"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar - Categories */}
        <div className="md:col-span-1">
          <div className="sticky top-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#1e3a8a] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Categories
                </CardTitle>
                <CardDescription>
                  {filteredFaqs.length} FAQ{filteredFaqs.length !== 1 ? 's' : ''} found
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px]">
                  <div className="space-y-1 p-4">
                    <Button
                      variant={selectedCategory === "" ? "default" : "ghost"}
                      className={`w-full justify-start text-left h-auto p-3 ${
                        selectedCategory === "" 
                          ? "bg-[#2563eb] text-white" 
                          : "hover:bg-[#f9fafb] text-[#1f2937]"
                      }`}
                      onClick={() => handleCategorySelect("")}
                    >
                      <HelpCircle className="w-4 h-4 mr-3" />
                      <div className="flex-1">
                        <div className="font-medium">All Categories</div>
                        <div className="text-xs opacity-75">
                          {filteredFaqs.length} items
                        </div>
                      </div>
                    </Button>
                    
                    {categories.map((category) => (
                      <Button
                        key={category.name}
                        variant={selectedCategory === category.name ? "default" : "ghost"}
                        className={`w-full justify-start text-left h-auto p-3 ${
                          selectedCategory === category.name 
                            ? "bg-[#2563eb] text-white" 
                            : "hover:bg-[#f9fafb] text-[#1f2937]"
                        }`}
                        onClick={() => handleCategorySelect(category.name)}
                      >
                        <div className="w-4 h-4 mr-3 flex-shrink-0">
                          {category.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{category.name}</div>
                          <div className="text-xs opacity-75">
                            {category.count} item{category.count !== 1 ? 's' : ''}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Area */}
        <div className="md:col-span-3" ref={contentRef}>
          {selectedCategory === "" ? (
            // Show all categories
            <div className="space-y-8">
              {Object.entries(faqsByCategory).map(([categoryName, categoryFaqs]) => (
                <div key={categoryName}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getCategoryColor(categoryName)}`}>
                      {getCategoryIcon(categoryName)}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#1e3a8a]">{categoryName}</h2>
                      <p className="text-[#6b7280]">{categoryFaqs.length} FAQ{categoryFaqs.length !== 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  
                  {isMobile ? (
                    // Mobile: Accordion
                    <Accordion type="single" collapsible className="space-y-2">
                      {categoryFaqs.map((faq) => (
                        <AccordionItem 
                          key={faq.id} 
                          value={faq.id}
                          className="border border-[#e5e7eb] rounded-lg"
                        >
                          <AccordionTrigger 
                            className="px-4 py-3 hover:no-underline"
                            onClick={() => handleAccordionToggle(faq.id)}
                          >
                            <div className="text-left">
                              <div className="font-medium text-[#1f2937] mb-1">
                                {faq.question}
                              </div>
                              {faq.featured && (
                                <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                                  <Star className="w-3 h-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <div className="text-[#6b7280] leading-relaxed whitespace-pre-wrap">
                              {faq.answer}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    // Desktop: Cards
                    <div className="space-y-3">
                      {categoryFaqs.map((faq) => (
                        <Card 
                          key={faq.id} 
                          className="border border-[#e5e7eb] hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => handleAccordionToggle(faq.id)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className="font-medium text-[#1f2937] mb-2">
                                  {faq.question}
                                </h3>
                                {faq.featured && (
                                  <Badge className="bg-yellow-100 text-yellow-800 text-xs mb-2">
                                    <Star className="w-3 h-3 mr-1" />
                                    Featured
                                  </Badge>
                                )}
                                {openItems.includes(faq.id) && (
                                  <div className="text-[#6b7280] leading-relaxed whitespace-pre-wrap mt-2">
                                    {faq.answer}
                                  </div>
                                )}
                              </div>
                              <div className="ml-4 flex-shrink-0">
                                {openItems.includes(faq.id) ? (
                                  <ChevronUp className="w-5 h-5 text-[#6b7280]" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-[#6b7280]" />
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Show selected category
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryColor(selectedCategory)}`}>
                  {getCategoryIcon(selectedCategory)}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1e3a8a]">{selectedCategory}</h2>
                  <p className="text-[#6b7280]">
                    {faqsByCategory[selectedCategory]?.length || 0} FAQ{(faqsByCategory[selectedCategory]?.length || 0) !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              
              {faqsByCategory[selectedCategory]?.length > 0 ? (
                <div className="space-y-3">
                  {faqsByCategory[selectedCategory].map((faq) => (
                    <Card 
                      key={faq.id} 
                      className="border border-[#e5e7eb] hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => handleAccordionToggle(faq.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-[#1f2937] mb-3">
                              {faq.question}
                            </h3>
                            {faq.featured && (
                              <Badge className="bg-yellow-100 text-yellow-800 text-sm mb-3">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                            {openItems.includes(faq.id) && (
                              <div className="text-[#6b7280] leading-relaxed whitespace-pre-wrap">
                                {faq.answer}
                              </div>
                            )}
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            {openItems.includes(faq.id) ? (
                              <ChevronUp className="w-6 h-6 text-[#6b7280]" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-[#6b7280]" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border border-[#e5e7eb]">
                  <CardContent className="p-8 text-center">
                    <HelpCircle className="w-12 h-12 text-[#6b7280] mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-[#1f2937] mb-2">No FAQs found</h3>
                    <p className="text-[#6b7280]">
                      No FAQs found in this category. Try selecting a different category or adjusting your search.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
