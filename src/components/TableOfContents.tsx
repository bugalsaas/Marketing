'use client';

import { useState, useEffect } from 'react';
import { List, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  content?: string;
  className?: string;
  showTitle?: boolean;
}

export default function TableOfContents({ 
  content, 
  className = '',
  showTitle = true 
}: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (content) {
      const headings = extractHeadings(content);
      setTocItems(headings);
    } else {
      // Extract headings from the current page
      const headings = extractHeadingsFromDOM();
      setTocItems(headings);
    }
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = tocItems.map(item => 
        document.getElementById(item.id)
      ).filter(Boolean);

      let current = '';
      for (const element of headingElements) {
        if (element && element.getBoundingClientRect().top <= 100) {
          current = element.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const extractHeadings = (htmlContent: string): TOCItem[] => {
    const headingRegex = /<h([1-6])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[1-6]>/gi;
    const headings: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(htmlContent)) !== null) {
      const level = parseInt(match[1]);
      const id = match[2];
      const title = match[3].replace(/<[^>]*>/g, ''); // Remove HTML tags
      
      headings.push({ id, title, level });
    }

    return headings;
  };

  const extractHeadingsFromDOM = (): TOCItem[] => {
    const headings: TOCItem[] = [];
    const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    headingElements.forEach((element) => {
      const id = element.id;
      const level = parseInt(element.tagName.charAt(1));
      const title = element.textContent || '';

      if (id) {
        headings.push({ id, title, level });
      }
    });

    return headings;
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <div className={`toc-container ${className}`}>
      {showTitle && (
        <div className="flex items-center gap-2 mb-4">
          <List className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Table of Contents</h3>
        </div>
      )}
      
      <nav className="space-y-1">
        {tocItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToHeading(item.id)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
              activeId === item.id
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
            style={{ paddingLeft: `${(item.level - 1) * 12 + 12}px` }}
          >
            <div className="flex items-center gap-2">
              <ChevronRight 
                className={`w-3 h-3 transition-transform ${
                  activeId === item.id ? 'rotate-90' : ''
                }`} 
              />
              <span className="truncate">{item.title}</span>
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}

// Sticky TOC for blog posts
export function StickyTableOfContents({ 
  content, 
  className = '' 
}: TableOfContentsProps) {
  return (
    <div className={`sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto ${className}`}>
      <TableOfContents content={content} />
    </div>
  );
}

// Compact TOC for mobile
export function CompactTableOfContents({ 
  content, 
  className = '' 
}: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between"
      >
        <span>Table of Contents</span>
        <ChevronRight 
          className={`w-4 h-4 transition-transform ${
            isOpen ? 'rotate-90' : ''
          }`} 
        />
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
          <TableOfContents content={content} showTitle={false} />
        </div>
      )}
    </div>
  );
}
