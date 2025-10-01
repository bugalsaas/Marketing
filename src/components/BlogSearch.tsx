'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogSearchProps {
  searchTerm?: string;
}

export default function BlogSearch({ searchTerm: initialSearchTerm = '' }: BlogSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (searchTerm) {
      current.set('search', searchTerm);
    } else {
      current.delete('search');
    }
    current.set('page', '1'); // Reset to first page on new search
    
    const query = current.toString();
    router.push(`/blog?${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-5 h-5" />
        <Input
          type="text"
          placeholder="Search articles, topics, or keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-3 text-lg border-2 border-[#e5e7eb] focus:border-[#2563eb] rounded-lg"
        />
      </div>
    </form>
  );
}
