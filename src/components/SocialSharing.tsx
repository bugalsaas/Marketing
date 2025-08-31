"use client";

import { useState } from 'react';
import { 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link as LinkIcon,
  Check,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialSharingProps {
  title: string;
  url: string;
  description: string;
  image?: string;
  className?: string;
}

export default function SocialSharing({ 
  title, 
  url, 
  description, 
  image, 
  className = '' 
}: SocialSharingProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;

  const shareData = {
    title,
    text: description,
    url: fullUrl,
  };

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}&quote=${encodeURIComponent(title)}`
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600',
      shareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-blue-700 hover:bg-blue-800',
      shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-gray-600 hover:bg-gray-700',
      shareUrl: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\nRead more: ${fullUrl}`)}`
    }
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to inline sharing
      setIsOpen(!isOpen);
    }
  };

  const handleSocialShare = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log('Error copying to clipboard:', error);
    }
  };

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {/* Native Share Button (Mobile) */}
      <Button
        onClick={handleNativeShare}
        variant="outline"
        size="sm"
        className="flex items-center space-x-2 w-full sm:w-auto"
      >
        <Share2 className="h-4 w-4" />
        <span className="hidden sm:inline">Share</span>
      </Button>

      {/* Inline Social Sharing */}
      {isOpen && (
        <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Share this article</h3>
            <p className="text-sm text-gray-600">{title}</p>
          </div>

          {/* Social Platform Buttons */}
          <div className="grid grid-cols-2 gap-3">
            {socialPlatforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <Button
                  key={platform.name}
                  onClick={() => handleSocialShare(platform.shareUrl)}
                  className={`${platform.color} text-white w-full justify-start`}
                  size="sm"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {platform.name}
                </Button>
              );
            })}
          </div>

          {/* Copy Link Section */}
          <div className="pt-3 border-t">
            <div className="flex items-center space-x-2">
              <div className="flex-1 min-w-0">
                <input
                  type="text"
                  value={fullUrl}
                  readOnly
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                />
              </div>
              <Button
                onClick={handleCopyLink}
                variant="outline"
                size="sm"
                className="flex-shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <LinkIcon className="h-4 w-4 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Share Statistics */}
          <div className="pt-2 border-t">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Help others discover this content</span>
              <span className="text-blue-600 font-medium">Share now</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Enhanced social sharing with analytics tracking
export function EnhancedSocialSharing({ 
  title, 
  url, 
  description, 
  image, 
  className = '',
  onShare
}: SocialSharingProps & { onShare?: (platform: string) => void }) {
  const handleShare = (platform: string) => {
    // Track sharing analytics
    if (onShare) {
      onShare(platform);
    }
    
    // Google Analytics tracking (if available)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'share', {
        method: platform,
        content_type: 'article',
        item_id: url
      });
    }
  };

  return (
    <SocialSharing
      title={title}
      url={url}
      description={description}
      image={image}
      className={className}
    />
  );
}

// Social sharing for specific content types
export function BlogPostSharing({ 
  title, 
  url, 
  description, 
  image, 
  author,
  publishedAt,
  className = '' 
}: SocialSharingProps & { author: string; publishedAt: string }) {
  const enhancedDescription = `${description} by ${author}`;
  
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Found this helpful?
        </h3>
        <p className="text-sm text-gray-600">
          Share it with other NDIS support providers
        </p>
      </div>
      
      <SocialSharing
        title={title}
        url={url}
        description={enhancedDescription}
        image={image}
        className="justify-center"
      />
    </div>
  );
}

// Social sharing for landing pages
export function LandingPageSharing({ 
  title, 
  url, 
  description, 
  image, 
  className = '' 
}: SocialSharingProps) {
  return (
    <div className={`text-center ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Help others discover Bugal
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Share our NDIS practice management solution
      </p>
      
      <SocialSharing
        title={title}
        url={url}
        description={description}
        image={image}
        className="justify-center"
      />
    </div>
  );
}
