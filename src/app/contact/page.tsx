import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Bugal | NDIS Practice Management Support | Bugal",
  description: "Get in touch with Bugal for NDIS practice management software support. Contact our team for pricing and technical assistance.",
  keywords: [
    "contact Bugal",
    "NDIS software support",
    "practice management help",
    "Bugal contact information",
    "practice management support",
    "Bugal customer service"
  ],
  openGraph: {
    title: "Contact Bugal | NDIS Practice Management Support | Bugal",
    description: "Get in touch with Bugal for NDIS practice management software support. Contact our team for assistance.",
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
              Have questions about Bugal? Need help getting started? 
              Our team is ready to support you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                <Link href="#contact-form">
                  Send Message
                </Link>
              </Button>
            </div>
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
            
            <ContactForm />
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
              <Link href="https://app.bugal.com.au/sign-up">
                Start Free Trial
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white bg-transparent hover:bg-white hover:text-[#2563eb]" asChild>
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
