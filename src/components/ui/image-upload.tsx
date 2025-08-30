"use client";

import React, { useState, useRef } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Upload, X, Image as ImageIcon, Link as LinkIcon } from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  description?: string;
}

export function ImageUpload({ 
  value, 
  onChange, 
  placeholder = "Enter image URL or upload a file", 
  className = "",
  label = "Image",
  description = "Upload an image or provide a URL"
}: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    setIsUploading(true);
    
    try {
      // For now, we'll use a simple approach - convert to data URL
      // In production, you'd upload to a cloud service like AWS S3, Cloudinary, etc.
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onChange(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Error processing image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleRemove = () => {
    onChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-[#1f2937]">
          {label}
        </label>
      )}
      
      {description && (
        <p className="text-sm text-[#6b7280]">
          {description}
        </p>
      )}

      {/* URL Input */}
      <div className="space-y-2">
        <div className="relative">
          <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] w-4 h-4" />
          <Input
            type="url"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="pl-10 border-[#6b7280] focus:border-[#2563eb] focus:ring-[#2563eb]"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-[#e5e7eb]" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-[#6b7280]">or</span>
        </div>
      </div>

      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragActive 
            ? 'border-[#2563eb] bg-blue-50' 
            : 'border-[#d1d5db] hover:border-[#9ca3af]'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
        
        <div className="space-y-3">
          <div className="mx-auto w-12 h-12 bg-[#f3f4f6] rounded-full flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-[#6b7280]" />
          </div>
          
          <div>
            <p className="text-sm text-[#6b7280]">
              <span className="font-medium">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-[#9ca3af] mt-1">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
          
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={openFileDialog}
            disabled={isUploading}
            className="border-[#6b7280] text-[#1f2937] hover:border-[#2563eb] hover:text-[#2563eb]"
          >
            {isUploading ? (
              <>
                <div className="w-4 h-4 border-2 border-[#2563eb] border-t-transparent rounded-full animate-spin mr-2" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Choose File
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Preview */}
      {value && (
        <div className="relative">
          <div className="relative inline-block">
            <img
              src={value}
              alt="Preview"
              className="max-w-full h-32 object-cover rounded-lg border border-[#e5e7eb]"
              onError={() => onChange("")}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleRemove}
              className="absolute -top-2 -right-2 h-6 w-6 p-0 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
