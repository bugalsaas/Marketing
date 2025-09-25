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
    // Ensure the editor is focused before executing commands
    if (editorRef.current) {
      editorRef.current.focus();
      
      // Ensure there's a selection or create one
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        // If no selection, select all text in the editor
        const range = document.createRange();
        range.selectNodeContents(editorRef.current);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      
      try {
        let success = false;
        
        if (command === 'formatBlock' && value) {
          // Handle heading and block formatting
          // For headings, we need to use the tag name without brackets
          const tagName = value.replace(/[<>]/g, '');
          console.log('Executing formatBlock with tag:', tagName);
          success = document.execCommand('formatBlock', false, tagName);
          console.log('formatBlock success:', success);
          
          // If formatBlock fails, try alternative method
          if (!success && (tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || tagName === 'blockquote')) {
            console.log('Trying alternative formatting method for:', tagName);
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              const selectedText = range.toString();
              if (selectedText) {
                const element = document.createElement(tagName);
                element.textContent = selectedText;
                range.deleteContents();
                range.insertNode(element);
                success = true;
                console.log('Alternative formatting method success:', success);
              }
            }
          }
        } else if (command === 'createLink') {
          // Handle link creation
          console.log('Executing createLink');
          const url = prompt('Enter URL:');
          if (url) {
            const urlPattern = /^(https?:\/\/|www\.|mailto:)/i;
            const fullUrl = urlPattern.test(url) ? url : `https://${url}`;
            success = document.execCommand('createLink', false, fullUrl);
            console.log('createLink success:', success);
            
            // If command fails, try alternative method
            if (!success) {
              console.log('Trying alternative link method');
              const selection = window.getSelection();
              if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const selectedText = range.toString();
                if (selectedText) {
                  const linkElement = document.createElement('a');
                  linkElement.href = fullUrl;
                  linkElement.textContent = selectedText;
                  linkElement.target = '_blank';
                  linkElement.rel = 'noopener noreferrer';
                  range.deleteContents();
                  range.insertNode(linkElement);
                  success = true;
                  console.log('Alternative link method success:', success);
                }
              }
            }
          }
        } else if (command === 'unlink') {
          // Handle link removal
          console.log('Executing unlink');
          success = document.execCommand('unlink', false);
          console.log('unlink success:', success);
          
          // If command fails, try alternative method
          if (!success) {
            console.log('Trying alternative unlink method');
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              const linkElement = range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE 
                ? range.commonAncestorContainer as Element
                : range.commonAncestorContainer.parentElement;
              
              if (linkElement && linkElement.tagName === 'A') {
                const textContent = linkElement.textContent;
                const parent = linkElement.parentNode;
                if (parent && textContent) {
                  parent.replaceChild(document.createTextNode(textContent), linkElement);
                  success = true;
                  console.log('Alternative unlink method success:', success);
                }
              }
            }
          }
        } else if (command === 'insertUnorderedList') {
          // Handle bullet list
          console.log('Executing insertUnorderedList');
          success = document.execCommand('insertUnorderedList', false);
          console.log('insertUnorderedList success:', success);
          
          // If command fails, try alternative method
          if (!success) {
            console.log('Trying alternative unordered list method');
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              const selectedText = range.toString();
              if (selectedText) {
                const lines = selectedText.split('\n').filter(line => line.trim());
                const ul = document.createElement('ul');
                lines.forEach(line => {
                  const li = document.createElement('li');
                  li.textContent = line.trim();
                  ul.appendChild(li);
                });
                range.deleteContents();
                range.insertNode(ul);
                success = true;
                console.log('Alternative unordered list method success:', success);
              }
            }
          }
        } else if (command === 'insertOrderedList') {
          // Handle numbered list
          console.log('Executing insertOrderedList');
          success = document.execCommand('insertOrderedList', false);
          console.log('insertOrderedList success:', success);
          
          // If command fails, try alternative method
          if (!success) {
            console.log('Trying alternative ordered list method');
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              const selectedText = range.toString();
              if (selectedText) {
                const lines = selectedText.split('\n').filter(line => line.trim());
                const ol = document.createElement('ol');
                lines.forEach(line => {
                  const li = document.createElement('li');
                  li.textContent = line.trim();
                  ol.appendChild(li);
                });
                range.deleteContents();
                range.insertNode(ol);
                success = true;
                console.log('Alternative ordered list method success:', success);
              }
            }
          }
        } else {
          // Handle all other commands
          success = document.execCommand(command, false, value);
        }
        
        if (!success) {
          console.warn(`Command ${command} failed to execute`);
        }
        
        // Force a re-render by updating the value
        updateValue();
        
      } catch (error) {
        console.error('Error executing command:', command, error);
      }
    }
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
    
    // Handle keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          execCommand('bold');
          break;
        case 'i':
          e.preventDefault();
          execCommand('italic');
          break;
        case 'u':
          e.preventDefault();
          execCommand('underline');
          break;
        case 'z':
          e.preventDefault();
          execCommand('undo');
          break;
        case 'y':
          e.preventDefault();
          execCommand('redo');
          break;
      }
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
    if (button.command === 'htmlPaste') {
      handleHtmlPaste();
    } else {
      // Add visual feedback for button press
      const buttonElement = document.querySelector(`[data-command="${button.command}"]`);
      if (buttonElement) {
        buttonElement.classList.add('bg-blue-100', 'scale-95');
        setTimeout(() => {
          buttonElement.classList.remove('bg-blue-100', 'scale-95');
        }, 150);
      }
      
      // For all other commands, use the execCommand function
      execCommand(button.command, button.value);
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
              data-command={button.command}
              className="h-8 w-8 p-0 hover:bg-[#e5e7eb] text-[#6b7280] hover:text-[#1f2937] transition-all duration-150"
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
        div[contenteditable] {
          line-height: 1.6 !important;
        }
        div[contenteditable] a {
          color: #2563eb !important;
          text-decoration: underline !important;
        }
        div[contenteditable] a:hover {
          color: #1e3a8a !important;
        }
        div[contenteditable] strong, div[contenteditable] b {
          font-weight: bold !important;
          color: #1f2937 !important;
        }
        div[contenteditable] em, div[contenteditable] i {
          font-style: italic !important;
          color: #1f2937 !important;
        }
        div[contenteditable] u {
          text-decoration: underline !important;
          color: #1f2937 !important;
        }
        div[contenteditable] h1 {
          font-size: 2rem !important;
          font-weight: bold !important;
          margin: 1.5rem 0 1rem 0 !important;
          color: #1e3a8a !important;
          line-height: 1.2 !important;
        }
        div[contenteditable] h2 {
          font-size: 1.5rem !important;
          font-weight: bold !important;
          margin: 1.25rem 0 0.75rem 0 !important;
          color: #1e3a8a !important;
          line-height: 1.3 !important;
        }
        div[contenteditable] h3 {
          font-size: 1.25rem !important;
          font-weight: bold !important;
          margin: 1rem 0 0.5rem 0 !important;
          color: #1e3a8a !important;
          line-height: 1.4 !important;
        }
        div[contenteditable] blockquote {
          border-left: 4px solid #e5e7eb !important;
          padding-left: 1rem !important;
          margin: 1rem 0 !important;
          font-style: italic !important;
          color: #6b7280 !important;
          background-color: #f9fafb !important;
          padding: 0.75rem 1rem !important;
        }
        div[contenteditable] pre {
          background-color: #f9fafb !important;
          padding: 1rem !important;
          border-radius: 0.375rem !important;
          font-family: 'Courier New', monospace !important;
          overflow-x: auto !important;
          border: 1px solid #e5e7eb !important;
        }
        div[contenteditable] ul, div[contenteditable] ol {
          margin: 0.75rem 0 !important;
          padding-left: 1.5rem !important;
          list-style-position: outside !important;
        }
        div[contenteditable] li {
          margin: 0.25rem 0 !important;
          display: list-item !important;
          line-height: 1.5 !important;
          padding-left: 0.25rem !important;
        }
        div[contenteditable] ul {
          list-style-type: disc !important;
        }
        div[contenteditable] ul li {
          list-style-type: disc !important;
        }
        div[contenteditable] ol {
          list-style-type: decimal !important;
        }
        div[contenteditable] ol li {
          list-style-type: decimal !important;
        }
        div[contenteditable] ul li::marker {
          color: #6b7280 !important;
          font-size: 1.1em !important;
        }
        div[contenteditable] ol li::marker {
          color: #6b7280 !important;
          font-weight: bold !important;
          font-size: 1em !important;
        }
      `}</style>
    </div>
  );
}
