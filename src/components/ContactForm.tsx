'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      newsletter: formData.get('newsletter') === 'on'
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-[#1f2937] mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-3 border border-[#6b7280] rounded-lg focus:border-[#2563eb] focus:ring-[#2563eb] focus:ring-2 transition-colors"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-[#1f2937] mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-3 border border-[#6b7280] rounded-lg focus:border-[#2563eb] focus:ring-[#2563eb] focus:ring-2 transition-colors"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1f2937] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-[#6b7280] rounded-lg focus:border-[#2563eb] focus:ring-[#2563eb] focus:ring-2 transition-colors"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#1f2937] mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-[#6b7280] rounded-lg focus:border-[#2563eb] focus:ring-[#2563eb] focus:ring-2 transition-colors"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-[#1f2937] mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 border border-[#6b7280] rounded-lg focus:border-[#2563eb] focus:ring-[#2563eb] focus:ring-2 transition-colors"
              placeholder="Enter your company name"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#1f2937] mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 border border-[#6b7280] rounded-lg focus:border-[#2563eb] focus:ring-[#2563eb] focus:ring-2 transition-colors"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="trial">Free Trial Questions</option>
              <option value="pricing">Pricing Information</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1f2937] mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 border border-[#6b7280] rounded-lg focus:border-[#2563eb] focus:ring-[#2563eb] focus:ring-2 transition-colors resize-none"
              placeholder="Tell us how we can help you..."
            ></textarea>
          </div>
          
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              className="mt-1 w-4 h-4 text-[#2563eb] border-[#6b7280] rounded focus:ring-[#2563eb] focus:ring-2"
            />
            <label htmlFor="newsletter" className="text-sm text-[#1f2937]">
              I'd like to receive updates about Bugal features, NDIS industry news, and best practices for practice management.
            </label>
          </div>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Message sent successfully! We'll get back to you within 2 hours.</span>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <span>❌ Failed to send message. Please try again or contact us directly.</span>
              </div>
            </div>
          )}

          <div className="text-center">
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="text-lg px-12 py-4 bg-[#2563eb] hover:bg-[#1e3a8a] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
            </Button>
          </div>
          
          <p className="text-sm text-[#6b7280] text-center">
            By submitting this form, you agree to our{" "}
            <Link href="/privacy" className="text-[#2563eb] hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-[#2563eb] hover:underline">
              Terms of Service
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
