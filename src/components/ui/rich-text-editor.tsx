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
  Redo
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

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    updateValue();
  };

  const updateValue = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      execCommand('insertLineBreak');
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
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
    { icon: Undo, command: 'undo', title: 'Undo (Ctrl+Z)' },
    { icon: Redo, command: 'redo', title: 'Redo (Ctrl+Y)' },
  ];

  const handleLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  const handleCommand = (button: any) => {
    if (button.command === 'createLink') {
      handleLink();
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
        onInput={updateValue}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        data-placeholder={placeholder}
        style={{
          backgroundImage: !value ? `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='smallGrid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='%23f3f4f6' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23smallGrid)'/%3E%3C/svg%3E")` : 'none'
        }}
      />
    </div>
  );
}
