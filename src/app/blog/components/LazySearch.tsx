"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

interface LazySearchProps {
  onSearch: (term: string) => void;
  onCategoryChange: (category: string) => void;
  categories: Array<{ id: string; name: string; count: number }>;
  selectedCategory: string;
}

export default function LazySearch({ 
  onSearch, 
  onCategoryChange, 
  categories, 
  selectedCategory 
}: LazySearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Memoized search handler for performance
  const handleSearch = useMemo(() => {
    return (term: string) => {
      setSearchTerm(term);
      onSearch(term);
    };
  }, [onSearch]);

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-4 py-3 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-gray-400" />
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name} ({category.count})
            </option>
          ))}
        </select>
      </div>

      {/* Clear Filters Button */}
      {(searchTerm || selectedCategory !== 'all') && (
        <Button
          variant="outline"
          onClick={() => {
            setSearchTerm("");
            onSearch("");
            onCategoryChange("all");
          }}
          className="text-sm"
        >
          Clear Filters
        </Button>
      )}
    </div>
  );
}
