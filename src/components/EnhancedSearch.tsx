'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, Filter, BookOpen, HelpCircle, MessageSquare, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  type: 'blog' | 'faq' | 'testimonial' | 'service';
  description: string;
  tags: string[];
  url: string;
  relevance: number;
  excerpt: string;
}

interface SearchFilters {
  types: string[];
  tags: string[];
  sortBy: 'relevance' | 'date' | 'title';
}

export default function EnhancedSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    types: [],
    tags: [],
    sortBy: 'relevance'
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Sample search data (in production, this would come from the database)
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'Understanding NDIS Plan Management',
      type: 'blog',
      description: 'Learn how to effectively manage your NDIS plan for better outcomes.',
      tags: ['NDIS', 'plan management', 'disability support', 'funding'],
      url: '/blog/understanding-ndis-plan-management',
      relevance: 95,
      excerpt: 'Effective NDIS plan management is crucial for maximizing your disability support funding and achieving your goals...'
    },
    {
      id: '2',
      title: 'How to Choose the Right NDIS Provider',
      type: 'blog',
      description: 'Essential tips for selecting an NDIS provider that meets your needs.',
      tags: ['NDIS provider', 'selection', 'disability services', 'quality'],
      url: '/blog/choosing-right-ndis-provider',
      relevance: 90,
      excerpt: 'Choosing the right NDIS provider can make a significant difference in the quality of support you receive...'
    },
    {
      id: '3',
      title: 'What services does Bugal provide?',
      type: 'faq',
      description: 'Comprehensive overview of Bugal\'s NDIS support services.',
      tags: ['services', 'Bugal', 'NDIS support', 'disability care'],
      url: '/faq#services',
      relevance: 85,
      excerpt: 'Bugal provides a comprehensive range of NDIS support services including plan management, support coordination...'
    },
    {
      id: '4',
      title: 'How do I get started with Bugal?',
      type: 'faq',
      description: 'Step-by-step guide to beginning your journey with Bugal.',
      tags: ['getting started', 'onboarding', 'Bugal', 'first steps'],
      url: '/faq#getting-started',
      relevance: 82,
      excerpt: 'Getting started with Bugal is simple. Our team will guide you through every step of the process...'
    },
    {
      id: '5',
      title: 'Sarah\'s Success Story',
      type: 'testimonial',
      description: 'How Bugal helped Sarah achieve her NDIS goals.',
      tags: ['success story', 'testimonial', 'personal growth', 'NDIS goals'],
      url: '/testimonials#sarah',
      relevance: 80,
      excerpt: 'Sarah came to Bugal feeling overwhelmed by the NDIS process. With our support, she now has a clear plan...'
    },
    {
      id: '6',
      title: 'NDIS Funding for Assistive Technology',
      type: 'blog',
      description: 'Complete guide to accessing NDIS funding for assistive technology.',
      tags: ['assistive technology', 'NDIS funding', 'equipment', 'technology'],
      url: '/blog/ndis-funding-assistive-technology',
      relevance: 88,
      excerpt: 'Assistive technology can significantly improve independence and quality of life for people with disabilities...'
    }
  ];

  // Search suggestions based on common queries
  const commonQueries = [
    'NDIS plan management',
    'disability support services',
    'assistive technology funding',
    'choosing NDIS provider',
    'getting started with NDIS',
    'Bugal services',
    'support coordination',
    'plan review process'
  ];

  // Perform search
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const query = searchQuery.toLowerCase();
      
      // Filter results based on query and filters
      let filteredResults = searchData.filter(item => {
        const matchesQuery = 
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags.some(tag => tag.toLowerCase().includes(query)) ||
          item.excerpt.toLowerCase().includes(query);
        
        const matchesType = filters.types.length === 0 || filters.types.includes(item.type);
        const matchesTags = filters.tags.length === 0 || 
          filters.tags.some(filterTag => item.tags.includes(filterTag));
        
        return matchesQuery && matchesType && matchesTags;
      });

      // Sort results
      filteredResults.sort((a, b) => {
        switch (filters.sortBy) {
          case 'relevance':
            return b.relevance - a.relevance;
          case 'date':
            return new Date(b.id).getTime() - new Date(a.id).getTime();
          case 'title':
            return a.title.localeCompare(b.title);
          default:
            return b.relevance - a.relevance;
        }
      });

      setResults(filteredResults);
      setIsSearching(false);
    }, 300);
  };

  // Handle search input
  const handleSearchInput = (value: string) => {
    setQuery(value);
    
    if (value.trim()) {
      // Show suggestions
      const matchingSuggestions = commonQueries.filter(
        suggestion => suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matchingSuggestions.slice(0, 5));
      setShowSuggestions(true);
      
      // Perform search
      performSearch(value);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setResults([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    performSearch(suggestion);
  };

  // Handle filter changes
  const handleFilterChange = (filterType: keyof SearchFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Toggle filter
  const toggleFilter = (filterType: keyof SearchFilters, value: string) => {
    if (filterType === 'types' || filterType === 'tags') {
      const currentFilters = filters[filterType] as string[];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter(f => f !== value)
        : [...currentFilters, value];
      
      handleFilterChange(filterType, newFilters);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      types: [],
      tags: [],
      sortBy: 'relevance'
    });
  };

  // Track search interactions
  const trackSearch = (action: string, query: string, resultsCount: number) => {
    if (typeof window !== 'undefined' && (window as any).trackConversion) {
      (window as any).trackConversion({
        event: 'search_interaction',
        category: 'engagement',
        action,
        label: query,
        value: resultsCount
      });
    }
  };

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      performSearch(query);
      trackSearch('submit', query, results.length);
      setShowSuggestions(false);
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get all unique tags for filters
  const allTags = Array.from(new Set(searchData.flatMap(item => item.tags)));

  return (
    <div className="w-full max-w-4xl mx-auto" ref={searchRef}>
      {/* Search Input */}
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search NDIS services, FAQs, blog posts, and more..."
            value={query}
            onChange={(e) => handleSearchInput(e.target.value)}
            className="pl-10 pr-20 h-12 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <Button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-4"
            disabled={isSearching}
          >
            {isSearching ? 'Searching...' : 'Search'}
          </Button>
        </div>

        {/* Search Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center">
                  <Search className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-gray-700">{suggestion}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </form>

      {/* Filters */}
      <div className="mt-4">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
          {filters.types.length > 0 || filters.tags.length > 0 ? (
            <Badge variant="secondary" className="ml-2">
              {filters.types.length + filters.tags.length}
            </Badge>
          ) : null}
        </Button>

        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Content Type Filters */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Content Type</h4>
                <div className="space-y-2">
                  {['blog', 'faq', 'testimonial'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.types.includes(type)}
                        onChange={() => toggleFilter('types', type)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700 capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tag Filters */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 8).map((tag) => (
                    <Badge
                      key={tag}
                      variant={filters.tags.includes(tag) ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => toggleFilter('tags', tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Sort By</h4>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="relevance">Relevance</option>
                  <option value="date">Date</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>

            {(filters.types.length > 0 || filters.tags.length > 0) && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="text-sm"
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Search Results */}
      {results.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Search Results ({results.length})
            </h3>
            {query && (
              <span className="text-sm text-gray-600">
                Results for "{query}"
              </span>
            )}
          </div>

          <div className="space-y-4">
            {results.map((result) => (
              <Link
                key={result.id}
                href={result.url}
                onClick={() => trackSearch('result_click', query, results.length)}
                className="block"
              >
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg text-gray-900 line-clamp-2">
                        {result.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 ml-4">
                        <Badge variant="outline" className="text-xs">
                          {result.type}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {result.relevance}% match
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {result.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {result.tags.slice(0, 4).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        {result.type === 'blog' && <BookOpen className="h-4 w-4 mr-1" />}
                        {result.type === 'faq' && <HelpCircle className="h-4 w-4 mr-1" />}
                        {result.type === 'testimonial' && <MessageSquare className="h-4 w-4 mr-1" />}
                        {result.type === 'service' && <Users className="h-4 w-4 mr-1" />}
                        {result.type}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {query && results.length === 0 && !isSearching && (
        <div className="mt-8 text-center">
          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No results found for "{query}"
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search terms or filters to find what you're looking for.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setQuery('');
              setResults([]);
              clearFilters();
            }}
          >
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
}
