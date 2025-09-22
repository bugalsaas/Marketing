"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "./button";
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Quote, 
  Link, 
  Unlink,
  Heading1,
  Heading2,
  Heading3,
  Code,
  Undo,
  Redo,
  FileText,
  Clipboard
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function RichTextEditor({ value, onChange, placeholder, className }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Only update the editor content if it's different from the current value
  useEffect(() => {
    if (editorRef.current && !isUpdating && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value, isUpdating]);

  const execCommand = (command: string, value?: string) => {
    if (command === 'formatBlock' && value) {
      // Handle heading formatting properly
      document.execCommand('formatBlock', false, value);
    } else if (command === 'createLink') {
      // Handle link creation
      const url = prompt('Enter URL:');
      if (url) {
        document.execCommand('createLink', false, url);
      }
    } else {
      document.execCommand(command, false, value);
    }
    editorRef.current?.focus();
    updateValue();
  };

  const updateValue = () => {
    if (editorRef.current && !isUpdating) {
      setIsUpdating(true);
      const newValue = editorRef.current.innerHTML;
      onChange(newValue);
      // Reset the updating flag after a short delay
      setTimeout(() => setIsUpdating(false), 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      execCommand('insertLineBreak');
    }
  };

  const handleInput = (e: React.FormEvent) => {
    e.preventDefault();
    updateValue();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    
    // Check if HTML content is available
    const htmlData = e.clipboardData.getData('text/html');
    const textData = e.clipboardData.getData('text/plain');
    
    if (htmlData) {
      // If HTML is available, insert it directly
      document.execCommand('insertHTML', false, htmlData);
    } else if (textData) {
      // Fallback to plain text
      document.execCommand('insertText', false, textData);
    }
    
    updateValue();
  };

  const toolbarButtons = [
    { icon: Bold, command: 'bold', title: 'Bold (Ctrl+B)' },
    { icon: Italic, command: 'italic', title: 'Italic (Ctrl+I)' },
    { icon: Underline, command: 'underline', title: 'Underline (Ctrl+U)' },
    { separator: true },
    { icon: Heading1, command: 'formatBlock', value: '<h1>', title: 'Heading 1' },
    { icon: Heading2, command: 'formatBlock', value: '<h2>', title: 'Heading 2' },
    { icon: Heading3, command: 'formatBlock', value: '<h3>', title: 'Heading 3' },
    { separator: true },
    { icon: List, command: 'insertUnorderedList', title: 'Bullet List' },
    { icon: ListOrdered, command: 'insertOrderedList', title: 'Numbered List' },
    { icon: Quote, command: 'formatBlock', value: '<blockquote>', title: 'Quote' },
    { icon: Code, command: 'formatBlock', value: '<pre>', title: 'Code Block' },
    { separator: true },
    { icon: Link, command: 'createLink', title: 'Insert Link' },
    { icon: Unlink, command: 'unlink', title: 'Remove Link' },
    { separator: true },
    { icon: Clipboard, command: 'htmlPaste', title: 'Paste HTML' },
    { separator: true },
    { icon: Undo, command: 'undo', title: 'Undo (Ctrl+Z)' },
    { icon: Redo, command: 'redo', title: 'Redo (Ctrl+Y)' },
  ];

  const handleLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      // Validate URL format
      const urlPattern = /^(https?:\/\/|www\.|mailto:)/i;
      const fullUrl = urlPattern.test(url) ? url : `https://${url}`;
      execCommand('createLink', fullUrl);
    }
  };

  const handleHtmlPaste = () => {
    const htmlContent = prompt('Paste your HTML content here:');
    if (htmlContent) {
      // Clean and sanitize the HTML (basic sanitization)
      const cleanHtml = htmlContent
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframes
        .replace(/on\w+="[^"]*"/gi, ''); // Remove event handlers
      
      document.execCommand('insertHTML', false, cleanHtml);
      updateValue();
    }
  };

  const handleCommand = (button: any) => {
    if (button.command === 'createLink') {
      handleLink();
    } else if (button.command === 'htmlPaste') {
      handleHtmlPaste();
    } else if (button.command === 'formatBlock' && button.value) {
      // Handle heading formatting
      execCommand(button.command, button.value);
    } else if (button.value) {
      execCommand(button.command, button.value);
    } else {
      execCommand(button.command);
    }
  };

  return (
    <div className={`border border-[#6b7280] rounded-md focus-within:border-[#2563eb] focus-within:ring-[#2563eb] focus-within:ring-1 ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-[#e5e7eb] bg-[#f9fafb]">
        {toolbarButtons.map((button, index) => (
          button.separator ? (
            <div key={index} className="w-px h-6 bg-[#d1d5db] mx-1" />
          ) : (
            <Button
              key={index}
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-[#e5e7eb] text-[#6b7280] hover:text-[#1f2937]"
              onClick={() => handleCommand(button)}
              title={button.title}
            >
              {button.icon && React.createElement(button.icon, { className: "h-4 w-4" })}
            </Button>
          )
        ))}
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        className={`min-h-[200px] p-3 outline-none text-[#1f2937] ${
          isFocused ? 'bg-white' : 'bg-white'
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        data-placeholder={placeholder}
        style={{
          backgroundImage: !value ? `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='smallGrid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23f3f4f6' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23smallGrid)'/%3E%3C/svg%3E")` : 'none'
        }}
      />
      
      {/* Add CSS styles for proper link and heading display */}
      <style jsx>{`
        div[contenteditable] a {
          color: #2563eb !important;
          text-decoration: underline !important;
        }
        div[contenteditable] a:hover {
          color: #1e3a8a !important;
        }
        div[contenteditable] h1 {
          font-size: 1.875rem !important;
          font-weight: bold !important;
          margin: 1rem 0 !important;
          color: #1e3a8a !important;
        }
        div[contenteditable] h2 {
          font-size: 1.5rem !important;
          font-weight: bold !important;
          margin: 0.875rem 0 !important;
          color: #1e3a8a !important;
        }
        div[contenteditable] h3 {
          font-size: 1.25rem !important;
          font-weight: bold !important;
          margin: 0.75rem 0 !important;
          color: #1e3a8a !important;
        }
        div[contenteditable] blockquote {
          border-left: 4px solid #e5e7eb !important;
          padding-left: 1rem !important;
          margin: 1rem 0 !important;
          font-style: italic !important;
          color: #6b7280 !important;
        }
        div[contenteditable] pre {
          background-color: #f9fafb !important;
          padding: 1rem !important;
          border-radius: 0.375rem !important;
          font-family: monospace !important;
          overflow-x: auto !important;
        }
        div[contenteditable] ul, div[contenteditable] ol {
          margin: 0.5rem 0 !important;
          padding-left: 1.5rem !important;
        }
        div[contenteditable] li {
          margin: 0.25rem 0 !important;
        }
      `}</style>
    </div>
  );
}
