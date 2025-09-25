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

  // Modern text formatting using Selection API
  const formatText = (command: string, value?: string) => {
    if (!editorRef.current) return;

    editorRef.current.focus();
    const selection = window.getSelection();
    
    if (!selection || selection.rangeCount === 0) {
      // If no selection, create a range at the end of the editor
      const range = document.createRange();
      range.selectNodeContents(editorRef.current);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }

    // Re-get selection after potential creation
    const currentSelection = window.getSelection();
    if (!currentSelection || currentSelection.rangeCount === 0) return;

    try {
      const range = currentSelection.getRangeAt(0);
      
      switch (command) {
        case 'bold':
          wrapWithTag('strong', currentSelection);
          break;
        case 'italic':
          wrapWithTag('em', currentSelection);
          break;
        case 'underline':
          wrapWithTag('u', currentSelection);
          break;
        case 'formatBlock':
          if (value) {
            const tagName = value.replace(/[<>]/g, '');
            formatBlock(tagName, currentSelection);
          }
          break;
        case 'insertUnorderedList':
          createList('ul', currentSelection);
          break;
        case 'insertOrderedList':
          createList('ol', currentSelection);
          break;
        case 'createLink':
          createLink(currentSelection);
          break;
        case 'unlink':
          removeLink(currentSelection);
          break;
        case 'undo':
          // Note: Modern browsers don't support programmatic undo
          console.warn('Undo is not supported in modern browsers');
          break;
        case 'redo':
          // Note: Modern browsers don't support programmatic redo
          console.warn('Redo is not supported in modern browsers');
          break;
        default:
          console.warn(`Command ${command} not implemented`);
      }
      
      updateValue();
    } catch (error) {
      console.error('Error executing command:', command, error);
    }
  };

  const wrapWithTag = (tagName: string, selection: Selection) => {
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    
    if (selectedText) {
      // Check if the selection is already wrapped with this tag
      const container = range.commonAncestorContainer;
      const element = container.nodeType === Node.ELEMENT_NODE 
        ? container as Element
        : container.parentElement;
      
      if (element && element.tagName.toLowerCase() === tagName) {
        // Unwrap the tag
        const parent = element.parentNode;
        if (parent) {
          while (element.firstChild) {
            parent.insertBefore(element.firstChild, element);
          }
          parent.removeChild(element);
        }
      } else {
        // Wrap with the tag
        const wrapper = document.createElement(tagName);
        try {
          range.surroundContents(wrapper);
        } catch (e) {
          // If surroundContents fails, use extractContents
          const contents = range.extractContents();
          wrapper.appendChild(contents);
          range.insertNode(wrapper);
        }
      }
    } else {
      // No selection, insert the tag and place cursor inside
      const wrapper = document.createElement(tagName);
      wrapper.textContent = 'Text';
      range.insertNode(wrapper);
      
      // Place cursor inside the wrapper
      const newRange = document.createRange();
      newRange.setStart(wrapper, 0);
      newRange.setEnd(wrapper, 0);
      selection.removeAllRanges();
      selection.addRange(newRange);
    }
  };

  const formatBlock = (tagName: string, selection: Selection) => {
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    
    if (selectedText) {
      // Check if the selection is already wrapped with this tag
      const container = range.commonAncestorContainer;
      const element = container.nodeType === Node.ELEMENT_NODE 
        ? container as Element
        : container.parentElement;
      
      if (element && element.tagName.toLowerCase() === tagName) {
        // Unwrap the tag - convert back to normal text
        const parent = element.parentNode;
        if (parent) {
          while (element.firstChild) {
            parent.insertBefore(element.firstChild, element);
          }
          parent.removeChild(element);
        }
      } else {
        // Wrap the selected text with the heading tag
        const wrapper = document.createElement(tagName);
        try {
          range.surroundContents(wrapper);
        } catch (e) {
          // If surroundContents fails, use extractContents
          const contents = range.extractContents();
          wrapper.appendChild(contents);
          range.insertNode(wrapper);
        }
      }
    } else {
      // No selection, create a new block element
      const element = document.createElement(tagName);
      element.textContent = 'Heading';
      range.insertNode(element);
      
      // Place cursor inside the element
      const newRange = document.createRange();
      newRange.setStart(element, 0);
      newRange.setEnd(element, 0);
      selection.removeAllRanges();
      selection.addRange(newRange);
    }
  };

  const createList = (listType: 'ul' | 'ol', selection: Selection) => {
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    
    if (selectedText) {
      const lines = selectedText.split('\n').filter(line => line.trim());
      const list = document.createElement(listType);
      
      lines.forEach(line => {
        const li = document.createElement('li');
        li.textContent = line.trim();
        list.appendChild(li);
      });
      
      range.deleteContents();
      range.insertNode(list);
    } else {
      // No selection, create a new list with one item
      const list = document.createElement(listType);
      const li = document.createElement('li');
      li.textContent = 'List item';
      list.appendChild(li);
      
      range.insertNode(list);
      
      // Place cursor inside the first list item
      const newRange = document.createRange();
      newRange.setStart(li, 0);
      newRange.setEnd(li, 0);
      selection.removeAllRanges();
      selection.addRange(newRange);
    }
  };

  const createLink = (selection: Selection) => {
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    
    if (!selectedText) {
      alert('Please select text to create a link');
      return;
    }

    const url = prompt('Enter URL:');
    if (!url) return;

    const urlPattern = /^(https?:\/\/|www\.|mailto:)/i;
    const fullUrl = urlPattern.test(url) ? url : `https://${url}`;
    
    const linkElement = document.createElement('a');
    linkElement.href = fullUrl;
    linkElement.textContent = selectedText;
    linkElement.target = '_blank';
    linkElement.rel = 'noopener noreferrer';
    
    range.deleteContents();
    range.insertNode(linkElement);
  };

  const removeLink = (selection: Selection) => {
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    const element = container.nodeType === Node.ELEMENT_NODE 
      ? container as Element
      : container.parentElement;
    
    if (element && element.tagName === 'A') {
      const textContent = element.textContent;
      const parent = element.parentNode;
      if (parent && textContent) {
        parent.replaceChild(document.createTextNode(textContent), element);
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
      // Insert line break
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const br = document.createElement('br');
        range.insertNode(br);
        range.setStartAfter(br);
        range.setEndAfter(br);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    
    // Handle keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          formatText('bold');
          break;
        case 'i':
          e.preventDefault();
          formatText('italic');
          break;
        case 'u':
          e.preventDefault();
          formatText('underline');
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
      // Clean and sanitize the HTML
      const cleanHtml = htmlData
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframes
        .replace(/on\w+="[^"]*"/gi, ''); // Remove event handlers
      
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cleanHtml;
        
        const fragment = document.createDocumentFragment();
        while (tempDiv.firstChild) {
          fragment.appendChild(tempDiv.firstChild);
        }
        
        range.insertNode(fragment);
      }
    } else if (textData) {
      // Insert plain text
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(textData));
      }
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
      
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cleanHtml;
        
        const fragment = document.createDocumentFragment();
        while (tempDiv.firstChild) {
          fragment.appendChild(tempDiv.firstChild);
        }
        
        range.insertNode(fragment);
        updateValue();
      }
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
      
      // For all other commands, use the formatText function
      formatText(button.command, button.value);
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