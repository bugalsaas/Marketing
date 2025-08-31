import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Calendar,
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Bugal | NDIS Practice Management Support | Bugal",
  description: "Get in touch with Bugal for NDIS practice management software support. Contact our team for demos, pricing, and technical assistance.",
  keywords: [
    "contact Bugal",
    "NDIS software support",
    "practice management help",
    "Bugal contact information",
    "NDIS software demo",
    "practice management support",
    "Bugal customer service"
  ],
  openGraph: {
    title: "Contact Bugal | NDIS Practice Management Support | Bugal",
    description: "Get in touch with Bugal for NDIS practice management software support. Contact our team for demos and assistance.",
    type: "website",
    url: "https://bugal.com.au/contact",
    siteName: "Bugal",
    images: [
      {
        url: "/Bugal_Full_Logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Bugal - NDIS Practice Management Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bugal | NDIS Practice Management Support | Bugal",
    description: "Get in touch with Bugal for NDIS practice management software support.",
    images: ["/Bugal_Full_Logo.png"],
  },
  alternates: {
    canonical: "https://bugal.com.au/contact",
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with your account or technical questions",
      contact: "support@bugal.com.au",
      response: "Response within 2 hours",
      action: "Send Email",
      href: "mailto:support@bugal.com.au"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+61 2 8000 0000",
      response: "Available during business hours",
      action: "Call Now",
      href: "tel:+61280000000"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help with our live chat system",
      contact: "Available on website",
      response: "Instant response",
      action: "Start Chat",
      href: "#"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      content: "Level 5, 123 George Street\nSydney NSW 2000\nAustralia"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed"
    },
    {
      icon: Calendar,
      title: "Support Hours",
      content: "Monday - Friday: 8:00 AM - 8:00 PM\nWeekend: 10:00 AM - 6:00 PM\n24/7 Emergency Support Available"
    }
  ];

  const quickActions: Array<{
    title: string;
    description: string;
    icon: any;
    href: string;
    variant: "default" | "outline";
  }> = [
    {
      title: "Start Free Trial",
      description: "Begin your 30-day free trial with no credit card required",
      icon: Zap,
      href: "/pricing",
      variant: "default"
    },
    {
      title: "Schedule Demo",
      description: "Book a personalized demo with our product specialists",
      icon: Calendar,
      href: "/contact",
      variant: "outline"
    },
    {
      title: "View Pricing",
      description: "Explore our flexible pricing plans for all practice sizes",
      icon: Users,
      href: "/pricing",
      variant: "outline"
    },
    {
      title: "Security & Compliance",
      description: "Learn about our security measures and NDIS compliance",
      icon: Shield,
      href: "/features",
      variant: "outline"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              📞 Get in Touch
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              We're Here to{" "}
              <span className="text-[#2563eb]">Help You Succeed</span>
            </h1>
            
            <p className="text-xl text-[#1f2937] mb-8 max-w-2xl mx-auto leading-relaxed">
              Have questions about Bugal? Need help getting started? Want to schedule a demo? 
              Our team is ready to support you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                <Link href="#contact-form">
                  Send Message
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
                <Link href="#quick-actions">
                  Quick Actions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Choose the contact method that works best for you. We're here to help with any questions or support you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-[#2563eb]" />
                  </div>
                  <CardTitle className="text-xl text-[#1e3a8a]">{method.title}</CardTitle>
                  <CardDescription className="text-base text-[#1f2937]">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-lg font-semibold text-[#1e3a8a] mb-1">{method.contact}</div>
                    <div className="text-sm text-[#6b7280]">{method.response}</div>
                  </div>
                  <Button 
                    className="bg-[#2563eb] hover:bg-[#1e3a8a]"
                    asChild
                  >
                    <Link href={method.href}>
                      {method.action}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Office & Support Information
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Visit our office or learn more about our business hours and support availability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {officeInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <CardTitle className="text-lg text-[#1e3a8a]">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#1f2937] whitespace-pre-line">
                    {info.content}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 2 hours during business hours
              </p>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
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
                      <option value="demo">Schedule Demo</option>
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
                  
                  <div className="text-center">
                    <Button type="submit" size="lg" className="text-lg px-12 py-4 bg-[#2563eb] hover:bg-[#1e3a8a]">
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2" />
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
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section id="quick-actions" className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Quick Actions
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Get started quickly with these common actions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickActions.map((action, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <action.icon className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <CardTitle className="text-lg text-[#1e3a8a]">{action.title}</CardTitle>
                  <CardDescription className="text-sm text-[#1f2937]">
                    {action.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className={action.variant === "default" ? "bg-[#2563eb] hover:bg-[#1e3a8a]" : "border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"}
                    variant={action.variant}
                    asChild
                  >
                    <Link href={action.href}>
                      {action.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Find quick answers to common questions about Bugal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can I get started with Bugal?",
                answer: "Most users are up and running in under an hour! Our intuitive setup process guides you through each step, and you can start managing your practice immediately."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We provide comprehensive support including email support, live chat during business hours, video tutorials, and a comprehensive knowledge base."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes! We offer a 30-day free trial with full access to all features. No credit card required to start your trial."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Absolutely! There are no long-term contracts or cancellation fees. You can cancel your subscription at any time from your account settings."
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-[#1e3a8a]">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#1f2937]">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
              <Link href="/faq">
                View All FAQs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2563eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your NDIS Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of NDIS support workers who trust Bugal to manage their practice efficiently 
            and stay compliant with all requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-[#2563eb] hover:bg-gray-100" asChild>
              <Link href="/pricing">
                Start Free Trial
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-[#2563eb]" asChild>
              <Link href="/features">
                Learn More
              </Link>
            </Button>
          </div>
          <p className="text-blue-200 mt-4 text-sm">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
