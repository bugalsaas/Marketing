'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ContentRecommendation {
  id: string;
  title: string;
  type: 'blog' | 'faq' | 'service' | 'testimonial';
  description: string;
  relevance: number;
  tags: string[];
  url: string;
}

interface UserInterest {
  interest: string;
  score: number;
  lastInteraction: Date;
}

export default function SmartContentRecommendations() {
  const [recommendations, setRecommendations] = useState<ContentRecommendation[]>([]);
  const [userInterests, setUserInterests] = useState<UserInterest[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Sample content recommendations
  const allContent: ContentRecommendation[] = [
    {
      id: '1',
      title: 'Understanding NDIS Plan Management',
      type: 'blog',
      description: 'Learn how to effectively manage your NDIS plan for better outcomes.',
      relevance: 95,
      tags: ['NDIS', 'plan management', 'disability support'],
      url: '/blog/understanding-ndis-plan-management'
    },
    {
      id: '2',
      title: 'How to Choose the Right NDIS Provider',
      type: 'blog',
      description: 'Essential tips for selecting an NDIS provider that meets your needs.',
      relevance: 90,
      tags: ['NDIS provider', 'selection', 'disability services'],
      url: '/blog/choosing-right-ndis-provider'
    },
    {
      id: '3',
      title: 'NDIS Funding for Assistive Technology',
      type: 'blog',
      description: 'Complete guide to accessing NDIS funding for assistive technology.',
      relevance: 88,
      tags: ['assistive technology', 'NDIS funding', 'equipment'],
      url: '/blog/ndis-funding-assistive-technology'
    },
    {
      id: '4',
      title: 'What services does Bugal provide?',
      type: 'faq',
      description: 'Comprehensive overview of Bugal\'s NDIS support services.',
      relevance: 85,
      tags: ['services', 'Bugal', 'NDIS support'],
      url: '/faq#services'
    },
    {
      id: '5',
      title: 'How do I get started with Bugal?',
      type: 'faq',
      description: 'Step-by-step guide to beginning your journey with Bugal.',
      relevance: 82,
      tags: ['getting started', 'onboarding', 'Bugal'],
      url: '/faq#getting-started'
    },
    {
      id: '6',
      title: 'Sarah\'s Success Story',
      type: 'testimonial',
      description: 'How Bugal helped Sarah achieve her NDIS goals.',
      relevance: 80,
      tags: ['success story', 'testimonial', 'personal growth'],
      url: '/testimonials#sarah'
    }
  ];

  // Track user interests based on page views and interactions
  useEffect(() => {
    const trackUserInterest = (category: string) => {
      setUserInterests(prev => {
        const existing = prev.find(interest => interest.interest === category);
        if (existing) {
          return prev.map(interest => 
            interest.interest === category 
              ? { ...interest, score: interest.score + 1, lastInteraction: new Date() }
              : interest
          );
        } else {
          return [...prev, { interest: category, score: 1, lastInteraction: new Date() }];
        }
      });
    };

    // Track current page category
    const currentPath = window.location.pathname;
    if (currentPath.includes('/blog')) {
      trackUserInterest('blog');
    } else if (currentPath.includes('/faq')) {
      trackUserInterest('faq');
    } else if (currentPath.includes('/testimonials')) {
      trackUserInterest('testimonials');
    } else if (currentPath.includes('/services')) {
      trackUserInterest('services');
    }

    // Track user interactions
    const trackInteraction = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.closest('a') as HTMLAnchorElement;
        if (link.href.includes('/blog')) {
          trackUserInterest('blog');
        } else if (link.href.includes('/faq')) {
          trackUserInterest('faq');
        } else if (link.href.includes('/testimonials')) {
          trackUserInterest('testimonials');
        }
      }
    };

    document.addEventListener('click', trackInteraction);
    return () => document.removeEventListener('click', trackInteraction);
  }, []);

  // Generate personalized recommendations
  useEffect(() => {
    const generateRecommendations = () => {
      // Sort user interests by score
      const sortedInterests = [...userInterests].sort((a, b) => b.score - a.score);
      
      // Calculate content relevance based on user interests
      const scoredContent = allContent.map(content => {
        let relevance = content.relevance;
        
        // Boost relevance based on user interests
        sortedInterests.forEach(interest => {
          if (content.tags.some(tag => tag.toLowerCase().includes(interest.interest.toLowerCase()))) {
            relevance += interest.score * 5;
          }
        });
        
        // Boost recent content
        if (content.type === 'blog') {
          relevance += 10;
        }
        
        return { ...content, relevance };
      });
      
      // Sort by relevance and take top 3
      const topRecommendations = scoredContent
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, 3);
      
      setRecommendations(topRecommendations);
    };

    if (userInterests.length > 0) {
      generateRecommendations();
    } else {
      // Show default recommendations if no user interests yet
      setRecommendations(allContent.slice(0, 3));
    }
  }, [userInterests]);

  // Show recommendations after user has been on page for a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Track recommendation clicks
  const handleRecommendationClick = (recommendation: ContentRecommendation) => {
    // Track in analytics
    if (typeof window !== 'undefined' && (window as any).trackConversion) {
      (window as any).trackConversion({
        event: 'content_recommendation_click',
        category: 'engagement',
        action: 'click',
        label: recommendation.title,
        value: recommendation.relevance
      });
    }
  };

  if (!isVisible || recommendations.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          💡 Recommended for You
        </h3>
        <p className="text-sm text-gray-600">
          Based on your interests and browsing
        </p>
      </div>
      
      <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
        {recommendations.map((recommendation) => (
          <Link
            key={recommendation.id}
            href={recommendation.url}
            onClick={() => handleRecommendationClick(recommendation)}
            className="block"
          >
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-900 line-clamp-2">
                    {recommendation.title}
                  </CardTitle>
                  <Badge 
                    variant={recommendation.type === 'blog' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {recommendation.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                  {recommendation.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {recommendation.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
                    {recommendation.relevance}% match
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="p-3 border-t border-gray-200 bg-gray-50">
        <button
          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-500 hover:text-gray-700 w-full text-center"
        >
          Hide recommendations
        </button>
      </div>
    </div>
  );
}
