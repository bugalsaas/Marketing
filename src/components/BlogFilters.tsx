'use client';

import { useState } from 'react';
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
  onCategoryChange?: (selectedCategories: string[]) => void;
}

export default function BlogFilters({ categories, onCategoryChange }: BlogFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (categoryId: string) => {
    const newSelected = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    
    setSelectedCategories(newSelected);
    onCategoryChange?.(newSelected);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    onCategoryChange?.([]);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <span className="text-sm font-medium text-[#1f2937]">Filter by category:</span>
        {categories.map((category) => (
          <Badge
            key={category.id}
            variant={selectedCategories.includes(category.id) ? "default" : "outline"}
            className={`cursor-pointer transition-colors ${
              selectedCategories.includes(category.id)
                ? "bg-[#2563eb] text-white hover:bg-[#1e3a8a]"
                : "border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
            }`}
            onClick={() => handleCategoryToggle(category.id)}
          >
            {category.name} ({category.count})
          </Badge>
        ))}
        {selectedCategories.length > 0 && (
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
