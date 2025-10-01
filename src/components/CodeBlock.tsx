import { highlightCode } from '@/lib/shiki';

interface CodeBlockProps {
  code: string;
  language?: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export default async function CodeBlock({ 
  code, 
  language = 'text', 
  theme = 'light',
  className = ''
}: CodeBlockProps) {
  const highlightedCode = await highlightCode(code, language, theme);
  
  return (
    <div className={`code-block ${className}`}>
      <div 
        className="overflow-x-auto rounded-lg border bg-gray-50 dark:bg-gray-900"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
}

// Client component for interactive code blocks
'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InteractiveCodeBlockProps {
  code: string;
  language?: string;
  theme?: 'light' | 'dark';
  className?: string;
  showCopyButton?: boolean;
}

export function InteractiveCodeBlock({ 
  code, 
  language = 'text', 
  theme = 'light',
  className = '',
  showCopyButton = true
}: InteractiveCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className={`code-block relative ${className}`}>
      {showCopyButton && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white/90 dark:bg-gray-800/80 dark:hover:bg-gray-800/90"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      )}
      <div className="overflow-x-auto rounded-lg border bg-gray-50 dark:bg-gray-900">
        <pre className="p-4 text-sm">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
