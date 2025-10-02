"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check,
  Star,
  Users,
  Calendar,
  CreditCard,
  FileText,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Clock,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Free",
      description: "Starting out? You can get all this for free!",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Client Management",
        "Service Agreements", 
        "Shift Management",
        "Invoicing (2 per month)",
        "Expense Tracking",
        "Shift Notes & Reports",
        "Financial Reports"
      ],
      popular: false,
      cta: "Try for Free",
      ctaVariant: "outline" as const
    },
    {
      name: "Solo",
      description: "Ideal for those working by themselves",
      monthlyPrice: 35,
      yearlyPrice: 350, // 10 months (2 months free)
      features: [
        "Client Management",
        "Service Agreements",
        "Shift Management", 
        "Invoicing",
        "Expense Tracking",
        "Shift Notes & Reports",
        "Financial Reports",
        "Staff Access"
      ],
      popular: true,
      cta: "Try for Free",
      ctaVariant: "default" as const,
      highlight: "MOST POPULAR"
    },
    {
      name: "Starter",
      description: "Perfect for small teams of 2 to 5",
      monthlyPrice: 45,
      yearlyPrice: 450, // 10 months (2 months free)
      features: [
        "Client Management",
        "Service Agreements",
        "Shift Management",
        "Invoicing", 
        "Expense Tracking",
        "Shift Notes & Reports",
        "Financial Reports",
        "Staff Access"
      ],
      popular: false,
      cta: "Try for Free",
      ctaVariant: "outline" as const
    },
    {
      name: "Premium",
      description: "Same as Starter but for teams of 6 or more",
      monthlyPrice: 65,
      yearlyPrice: 650, // 10 months (2 months free)
      features: [
        "Client Management",
        "Service Agreements",
        "Shift Management",
        "Invoicing",
        "Expense Tracking", 
        "Shift Notes & Reports",
        "Financial Reports",
        "Staff Access"
      ],
      popular: false,
      cta: "Try for Free",
      ctaVariant: "outline" as const
    }
  ];

  const savings = billingCycle === 'yearly' ? "2 Months Free" : "";

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a8a] mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-[#1f2937] max-w-3xl mx-auto mb-8">
            Choose the plan that fits your practice size. All plans include a 30-day free trial 
            with no credit card required. Start making a difference today!
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-4 bg-gray-100 rounded-full p-1">
              <span className={`text-lg px-4 py-2 rounded-full transition-all duration-200 ${
                billingCycle === 'monthly' 
                  ? 'text-[#1e3a8a] font-semibold bg-white shadow-sm' 
                  : 'text-[#6b7280]'
              }`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-[#2563eb]' : 'bg-[#6b7280]'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg px-4 py-2 rounded-full transition-all duration-200 ${
                billingCycle === 'yearly' 
                  ? 'text-[#1e3a8a] font-semibold' 
                  : 'text-[#6b7280]'
              }`}>
                Yearly
              </span>
            </div>
          </div>

          {savings && (
            <div className="mb-8">
              <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg px-4 py-2">
                🎉 {savings}
              </Badge>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular 
                    ? 'border-2 border-[#2563eb] bg-gradient-to-b from-blue-50 to-white scale-105' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#2563eb] text-white px-4 py-2 text-sm font-semibold">
                      {plan.highlight}
                    </Badge>
                  </div>
                )}
                

                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-2 text-[#1e3a8a]">{plan.name}</CardTitle>
                  <CardDescription className="text-base text-[#1f2937]">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    {plan.monthlyPrice === 0 ? (
                      <div className="text-4xl font-bold text-[#1e3a8a]">Free</div>
                    ) : (
                      <div>
                        <div className="text-4xl font-bold text-[#1e3a8a]">
                          ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                        </div>
                        <div className="text-[#6b7280]">
                          {billingCycle === 'monthly' ? 'per month' : 'per year'}
                        </div>
                        {billingCycle === 'yearly' && (
                          <div className="text-sm text-green-600 mt-1">
                            ${plan.monthlyPrice}/mo when billed annually
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <Button 
                    className={`w-full mb-6 ${plan.ctaVariant === 'default' ? 'bg-[#2563eb] hover:bg-[#1e3a8a]' : ''}`}
                    variant={plan.ctaVariant}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact">
                      {plan.cta}
                    </Link>
                  </Button>

                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-[#1f2937]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              All plans include the core features that make Bugal the trusted choice for NDIS support workers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Client Management",
                description: "Manage NDIS participants, track informal supports, and send invoices directly to plan managers—no middlemen, no confusion"
              },
              {
                icon: FileText,
                title: "Documentation",
                description: "Streamline NDIS documentation and onboarding with editable service agreements and compliance-ready reporting tools."
              },
              {
                icon: Clock,
                title: "Shift & Time Tracking",
                description: "Record support worker shifts with built-in Kms tracking, simplified billing, and recurring shift scheduling. No upgrade required."
              },
              {
                icon: CreditCard,
                title: "Invoicing & Payments",
                description: "Automated invoicing with NDIS compliance and expense tracking for tax purposes."
              },
              {
                icon: BarChart3,
                title: "Financial Reports",
                description: "Real-time visibility into your income, expenses, and tax obligations."
              },
              {
                icon: Shield,
                title: "Expert Guidance",
                description: "Stay informed with industry best practices and essential information updates."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
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

      {/* FAQ Section */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#1f2937] max-w-2xl mx-auto">
              Everything you need to know about Bugal pricing and plans
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Is there really a free plan?",
                answer: "Yes! Our Free plan includes all core features with no time limit. Perfect for those just starting out as NDIS support workers."
              },
              {
                question: "What's included in the 30-day free trial?",
                answer: "All plans include a 30-day free trial with full access to all features. No credit card required to start your trial."
              },
              {
                question: "Can I switch plans anytime?",
                answer: "Absolutely! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately."
              },
              {
                question: "How does the yearly billing work?",
                answer: "Choose yearly billing and get 2 months free! You pay for 10 months but get access for the full 12 months."
              },
              {
                question: "What happens after my free trial ends?",
                answer: "After your 30-day trial, you can choose to continue with any paid plan or stay on the Free plan with limited invoicing (2 per month)."
              },
              {
                question: "Do you offer discounts for larger teams?",
                answer: "Yes! Our Premium plan is designed for teams of 6 or more and includes all Starter features at a competitive rate."
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
          
          {/* View All FAQs Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white" asChild>
              <Link href="/faq">
                View All FAQs
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
            Join hundreds of support workers who trust Bugal to manage their practice efficiently 
            and stay NDIS compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-[#2563eb] hover:bg-gray-100" asChild>
              <Link href="https://app.bugal.com.au/sign-up">
                Start Your Free Trial
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white bg-transparent hover:bg-white hover:text-[#2563eb]" asChild>
              <Link href="/contact">
                Contact Sales
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
