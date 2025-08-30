import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  Clock, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle,
  UserCheck,
  FileCheck,
  DollarSign,
  Hourglass,
  Receipt,
  Wallet,
  TrendingUp,
  AlertTriangle,
  Car,
  Calculator
} from "lucide-react";

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: Users,
      title: "Client Management",
      description: "Comprehensive client database with NDIS-specific fields, support plan tracking, and goal management.",
      features: ["Client profiles", "Support plan integration", "Goal tracking", "Communication history"]
    },
    {
      icon: FileText,
      title: "Service Agreements",
      description: "Streamlined service agreement creation with our free Service Agreement Creator tool.",
      features: ["Template library", "Custom agreements", "Digital signatures", "Compliance checks"]
    },
    {
      icon: Clock,
      title: "Shift Management",
      description: "Easy shift scheduling, tracking, and management with detailed notes and reports.",
      features: ["Calendar view", "Shift templates", "Time tracking", "Notes & reports"]
    },
    {
      icon: CreditCard,
      title: "Invoicing & Payments",
      description: "Automated invoicing with NDIS compliance and expense tracking for tax purposes.",
      features: ["NDIS compliance", "Automated billing", "Payment tracking", "Expense management"]
    },
    {
      icon: BarChart3,
      title: "Financial Reports",
      description: "Real-time visibility into your income, expenses, and tax obligations.",
      features: ["Income tracking", "Expense categorization", "Tax calculations", "Profit analysis"]
    },
    {
      icon: Shield,
      title: "NDIS Compliance",
      description: "Built specifically for NDIS requirements with built-in compliance checks and validation.",
      features: ["Regulation updates", "Compliance alerts", "Audit trails", "Best practices"]
    }
  ];

  const reportingFeatures = [
    {
      icon: AlertTriangle,
      title: "Incident Reports",
      description: "Comprehensive incident reporting with NDIS compliance and follow-up tracking.",
      badge: "NEW",
      features: ["Incident logging", "Witness statements", "Follow-up actions", "NDIS reporting"]
    },
    {
      icon: Receipt,
      title: "Invoice Reports",
      description: "Detailed invoice analysis and payment tracking for better cash flow management.",
      features: ["Payment status", "Outstanding amounts", "Payment history", "Cash flow analysis"]
    },
    {
      icon: Car,
      title: "Kilometre Reports",
      description: "Track travel expenses and kilometres for accurate reimbursement and tax deductions.",
      features: ["Route tracking", "Expense calculation", "Tax deductions", "Reimbursement"]
    },
    {
      icon: Clock,
      title: "Shift Reports",
      description: "Comprehensive shift analysis for better service delivery and client outcomes.",
      features: ["Service hours", "Client progress", "Outcome tracking", "Performance metrics"]
    },
    {
      icon: Calculator,
      title: "Tax Reports",
      description: "Automated tax calculations and reporting for end-of-year compliance.",
      features: ["Income summaries", "Expense breakdowns", "Deduction tracking", "Tax preparation"]
    }
  ];

  const additionalFeatures = [
    {
      icon: UserCheck,
      title: "Staff Management",
      description: "Manage team members, assign roles, and track performance across your practice."
    },
    {
      icon: FileCheck,
      title: "Document Management",
      description: "Centralized document storage with version control and secure access."
    },
    {
      icon: DollarSign,
      title: "Rates Management",
      description: "Flexible rate structures for different services and client types."
    },
    {
      icon: Hourglass,
      title: "Scheduling Tools",
      description: "Advanced scheduling with conflict detection and automated reminders."
    },
    {
      icon: Wallet,
      title: "Expense Management",
      description: "Track and categorize all business expenses for better financial control."
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Real-time insights into your practice performance and growth metrics."
    }
  ];

  const testimonials = [
    {
      quote: "Bugal's features are exactly what I needed. The incident reporting and financial tracking have saved me hours every week.",
      author: "Sarah Johnson",
      role: "Independent Support Worker",
      rating: 5
    },
    {
      quote: "The shift management and invoicing features are incredibly intuitive. It's like having a personal assistant for my practice.",
      author: "Michael Chen",
      role: "Support Coordinator",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              ✨ Comprehensive NDIS Practice Management
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              Everything You Need to{" "}
              <span className="text-[#2563eb]">Run Your NDIS Practice</span>{" "}
              Successfully
            </h1>
            
            <p className="text-xl text-[#1f2937] mb-8 max-w-2xl mx-auto leading-relaxed">
              From client management to financial reporting, Bugal provides all the tools 
              you need to streamline your practice and focus on what matters most - supporting your clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-[#2563eb] hover:bg-[#1e3a8a]" asChild>
                <Link href="/pricing">
                  Start Free Trial
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
                <Link href="/contact">
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Core Features for NDIS Success
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Essential tools designed specifically for NDIS support workers to manage their practice efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <CardTitle className="text-xl text-[#1e3a8a]">{feature.title}</CardTitle>
                  <CardDescription className="text-base text-[#1f2937]">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-[#1f2937]">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting & Analytics Section */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Advanced Reporting & Analytics
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Powerful insights and reporting tools to help you make data-driven decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportingFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    {feature.badge && (
                      <Badge className="bg-green-100 text-green-800">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-[#1e3a8a]">{feature.title}</CardTitle>
                  <CardDescription className="text-base text-[#1f2937]">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-[#1f2937]">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Additional Tools & Features
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Extra features to help you grow and scale your NDIS practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <CardTitle className="text-xl text-[#1e3a8a]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#1f2937]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Trusted by NDIS Support Workers
            </h2>
            <p className="text-xl text-[#1f2937]">
              See what our users say about Bugal's comprehensive feature set
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <CheckCircle key={i} className="w-5 h-5 text-green-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-[#1f2937] mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-[#1e3a8a]">{testimonial.author}</p>
                    <p className="text-sm text-[#6b7280]">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2563eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Experience Bugal's Full Feature Set?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover how Bugal can transform your NDIS practice management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-[#2563eb] hover:bg-gray-100" asChild>
              <Link href="/pricing">
                Start Free Trial
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-[#2563eb]" asChild>
              <Link href="/contact">
                Schedule Demo
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
