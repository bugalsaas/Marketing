'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisible - 1);
      
      if (start > 1) {
        pages.push(1);
        if (start > 2) {
          pages.push('...');
        }
      }
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center space-x-2">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
        >
          <Link href={`/blog?page=${currentPage - 1}`}>
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Link>
        </Button>
      ) : (
        <Button
          variant="outline"
          size="sm"
          disabled
          className="border-gray-300 text-gray-400 cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
      )}

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {pageNumbers.map((page, index) => (
          <div key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-[#6b7280]">...</span>
            ) : (
              <Button
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                asChild
                className={
                  currentPage === page
                    ? "bg-[#2563eb] text-white hover:bg-[#1e3a8a]"
                    : "border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                }
              >
                <Link href={`/blog?page=${page}`}>
                  {page}
                </Link>
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
        >
          <Link href={`/blog?page=${currentPage + 1}`}>
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      ) : (
        <Button
          variant="outline"
          size="sm"
          disabled
          className="border-gray-300 text-gray-400 cursor-not-allowed"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      )}
    </div>
  );
}
