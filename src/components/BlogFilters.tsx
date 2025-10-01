'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface BlogFiltersProps {
  categories: Category[];
  selectedCategory?: string;
}

export default function BlogFilters({ categories, selectedCategory = '' }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentCategory, setCurrentCategory] = useState(selectedCategory);

  useEffect(() => {
    setCurrentCategory(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (categoryName: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (currentCategory === categoryName) {
      current.delete('category');
      setCurrentCategory('');
    } else {
      current.set('category', categoryName);
      setCurrentCategory(categoryName);
    }
    current.set('page', '1'); // Reset to first page on new filter
    
    const query = current.toString();
    router.push(`/blog?${query}`);
  };

  const clearFilters = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.delete('category');
    current.set('page', '1');
    setCurrentCategory('');
    
    const query = current.toString();
    router.push(`/blog?${query}`);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <span className="text-sm font-medium text-[#1f2937]">Filter by category:</span>
        {categories.map((category) => (
          <Badge
            key={category.id}
            variant={currentCategory === category.name ? "default" : "outline"}
            className={`cursor-pointer transition-colors ${
              currentCategory === category.name
                ? "bg-[#2563eb] text-white hover:bg-[#1e3a8a]"
                : "border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name} ({category.count})
          </Badge>
        ))}
        {currentCategory && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-[#6b7280] hover:text-[#1f2937]"
          >
            <X className="w-4 h-4 mr-1" />
            Clear filters
          </Button>
        )}
      </div>
    </div>
  );
}
