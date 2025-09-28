import Link from 'next/link';
import { CheckCircle, ArrowRight, Users, Shield, TrendingUp, Clock, Star, AlertCircle } from 'lucide-react';

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/starting-a-support-provider-journey" className="text-gray-500 hover:text-gray-700">
                  Journey Overview
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">Introduction</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Starting-Out Series: Your Complete Guide to NDIS Support Work
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Welcome to the most comprehensive resource for becoming a successful independent NDIS support provider in Australia. This series will guide you through every step of your journey.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">What You'll Achieve</h3>
              </div>
              <p className="text-blue-800">
                By the end of this series, you'll have everything you need to start your own successful NDIS support business, from legal requirements to client acquisition strategies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Why Choose Independent Support Work */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Independent Support Work?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">The NDIS Opportunity</h3>
              <p className="text-gray-700 mb-4">
                The National Disability Insurance Scheme (NDIS) represents a $22 billion investment in disability support services across Australia. This massive funding creates unprecedented opportunities for qualified individuals to build meaningful, sustainable careers as independent support providers.
              </p>
              <p className="text-gray-700 mb-6">
                Unlike traditional employment, independent support work offers you complete control over your schedule, rates, and the type of support you provide. You can choose to work with participants whose goals align with your skills and interests, creating more fulfilling professional relationships.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Key Benefits:</h4>
                <ul className="text-green-800 space-y-1">
                  <li>• Set your own hourly rates (typically $40-80/hour)</li>
                  <li>• Choose your working hours and days</li>
                  <li>• Build long-term relationships with participants</li>
                  <li>• Grow your business at your own pace</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Making a Real Difference</h3>
              <p className="text-gray-700 mb-4">
                As an independent support provider, you're not just providing a service – you're helping people with disabilities achieve their goals, build independence, and live their best lives. This work is deeply rewarding and creates lasting positive impact.
              </p>
              <p className="text-gray-700 mb-6">
                Every day brings new opportunities to support someone in learning new skills, accessing their community, or achieving personal milestones. The relationships you build with participants and their families often last for years, creating a sense of purpose and fulfillment that's rare in other professions.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Impact Areas:</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Daily living skills development</li>
                  <li>• Community participation and inclusion</li>
                  <li>• Goal achievement and personal growth</li>
                  <li>• Family support and respite care</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What You'll Learn in This Series</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-8">
              This comprehensive series is designed to take you from complete beginner to confident, successful independent support provider. Each module builds on the previous one, ensuring you have a solid foundation before moving to the next step.
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Module 1: Legal Foundations</h3>
                <p className="text-gray-700 mb-4">
                  Learn about essential legal requirements including Tax File Numbers (TFN), Australian Business Numbers (ABN), and Goods and Services Tax (GST) registration. We'll walk you through each application process step-by-step.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TFN Application</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ABN Registration</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GST Requirements</span>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Module 2: Financial Management</h3>
                <p className="text-gray-700 mb-4">
                  Master the financial aspects of running your support business, from bookkeeping best practices to invoicing systems and tax preparation. Learn how to track your income, expenses, and maintain proper records.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Bookkeeping Systems</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Invoicing & Payments</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Tax Preparation</span>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Module 3: Qualifications & Certifications</h3>
                <p className="text-gray-700 mb-4">
                  Understand the required qualifications, certifications, and ongoing training needed to work as a support provider. We'll guide you through the application processes and help you choose the right training programs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Required Certifications</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Background Checks</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Ongoing Training</span>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Module 4: Business Setup</h3>
                <p className="text-gray-700 mb-4">
                  Learn about insurance requirements, business registration, and essential business practices. Set up your business systems and create professional documentation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Insurance Coverage</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Business Registration</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Professional Documentation</span>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Module 5: Marketing & Client Acquisition</h3>
                <p className="text-gray-700 mb-4">
                  Discover effective strategies for marketing your services, building your professional network, and attracting your first participants. Learn how to create compelling profiles and build lasting relationships.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Online Marketing</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Networking Strategies</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Client Relationships</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites and Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Prerequisites and Requirements</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Essential Requirements</h3>
              <p className="text-gray-700 mb-6">
                Before you can start working as an independent support provider, you must meet certain legal and professional requirements. These ensure the safety and quality of support services for NDIS participants.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Australian Citizenship or Permanent Residency</h4>
                    <p className="text-gray-600 text-sm">You must be legally entitled to work in Australia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Working with Children Check</h4>
                    <p className="text-gray-600 text-sm">Required in most states, valid for 5 years</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">NDIS Worker Screening Check</h4>
                    <p className="text-gray-600 text-sm">National background check specific to NDIS work</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">First Aid Certificate</h4>
                    <p className="text-gray-600 text-sm">Must be current and renewed every 3 years</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Relevant Qualifications or Experience</h4>
                    <p className="text-gray-600 text-sm">Certificate III in Individual Support or equivalent experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recommended Skills & Attributes</h3>
              <p className="text-gray-700 mb-6">
                While not legally required, these skills and attributes will significantly improve your success as a support provider and your ability to provide quality services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellent Communication Skills</h4>
                    <p className="text-gray-600 text-sm">Clear, patient communication with participants and families</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Empathy and Patience</h4>
                    <p className="text-gray-600 text-sm">Understanding and supporting people through challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Problem-Solving Abilities</h4>
                    <p className="text-gray-600 text-sm">Creative solutions for unique situations and challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Time Management Skills</h4>
                    <p className="text-gray-600 text-sm">Balancing multiple participants and administrative tasks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Basic Business Knowledge</h4>
                    <p className="text-gray-600 text-sm">Understanding of invoicing, record-keeping, and client management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline for Getting Started */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Timeline for Getting Started</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-8">
              While everyone's journey is unique, here's a realistic timeline for getting started as an independent support provider. Most people can be ready to start working within 6-8 weeks.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Week 1-2: Legal Foundation</h3>
                  <p className="text-gray-700 mb-4">
                    Apply for your Tax File Number (TFN) and Australian Business Number (ABN). If your projected income will exceed $75,000, register for GST. These are the legal foundations of your business and can take 1-2 weeks to process.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Tasks to Complete:</h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Submit TFN application online</li>
                      <li>• Apply for ABN through ATO website</li>
                      <li>• Register for GST if required</li>
                      <li>• Set up business bank account</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Week 3-4: Certifications & Checks</h3>
                  <p className="text-gray-700 mb-4">
                    Complete your required training and background checks. This includes First Aid certification, NDIS Worker Screening Check, and any additional qualifications. Some checks can take 2-4 weeks to process.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Tasks to Complete:</h4>
                    <ul className="text-green-800 space-y-1 text-sm">
                      <li>• Complete First Aid course</li>
                      <li>• Apply for NDIS Worker Screening Check</li>
                      <li>• Obtain Working with Children Check</li>
                      <li>• Complete NDIS Quality and Safeguards training</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Week 5-6: Business Setup</h3>
                  <p className="text-gray-700 mb-4">
                    Set up your business systems, obtain insurance, and create professional documentation. This includes bookkeeping systems, service agreements, and marketing materials.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Tasks to Complete:</h4>
                    <ul className="text-purple-800 space-y-1 text-sm">
                      <li>• Set up bookkeeping and invoicing systems</li>
                      <li>• Obtain professional indemnity insurance</li>
                      <li>• Create service agreement templates</li>
                      <li>• Develop your professional profile</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Week 7-8: Launch & Marketing</h3>
                  <p className="text-gray-700 mb-4">
                    Start networking, marketing your services, and taking on your first participants. Begin with a small number of participants to build confidence and experience.
                  </p>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 mb-2">Tasks to Complete:</h4>
                    <ul className="text-orange-800 space-y-1 text-sm">
                      <li>• Join local NDIS networks and groups</li>
                      <li>• Create online profiles and marketing materials</li>
                      <li>• Connect with support coordinators</li>
                      <li>• Take on your first 1-2 participants</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Challenges and How to Overcome Them</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge 1: Understanding NDIS Requirements</h3>
              <p className="text-gray-700 mb-4">
                The NDIS can seem complex with its various rules, pricing arrangements, and compliance requirements. Many new support providers feel overwhelmed by the amount of information to learn.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Solution:</h4>
                <p className="text-blue-800 text-sm">
                  Start with the basics and build your knowledge gradually. Focus on understanding participant goals, support categories, and pricing arrangements. Join NDIS training programs and connect with experienced providers for guidance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge 2: Finding Your First Participants</h3>
              <p className="text-gray-700 mb-4">
                Building a client base can be challenging, especially when you're new to the industry. Many support providers struggle with marketing and networking in the early stages.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Solution:</h4>
                <p className="text-green-800 text-sm">
                  Start by networking with support coordinators, joining local disability groups, and creating a strong online presence. Consider offering your services at a slightly lower rate initially to build experience and testimonials.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge 3: Managing Business Administration</h3>
              <p className="text-gray-700 mb-4">
                Running a business involves significant administrative work including invoicing, record-keeping, tax preparation, and client management. This can be overwhelming for those new to business ownership.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">Solution:</h4>
                <p className="text-purple-800 text-sm">
                  Use business management software like Bugal to streamline your administrative tasks. Start with simple systems and gradually add more features as your business grows. Consider hiring a bookkeeper for complex tasks.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge 4: Work-Life Balance</h3>
              <p className="text-gray-700 mb-4">
                Independent work can blur the lines between personal and professional time. Many support providers struggle with setting boundaries and maintaining a healthy work-life balance.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-2">Solution:</h4>
                <p className="text-orange-800 text-sm">
                  Set clear working hours and stick to them. Use scheduling tools to manage your time effectively. Learn to say no to requests that don't align with your availability or goals. Remember that your wellbeing is essential for providing quality support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Next Steps: Your Action Plan</h2>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-2xl font-semibold mb-6">Ready to Begin Your Journey?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand what's involved in becoming an independent support provider, it's time to take action. Follow this step-by-step plan to get started.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Immediate Actions (This Week)</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    Apply for your Tax File Number
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    Research ABN requirements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    Book First Aid training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    Join local NDIS networks
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Next Steps (Next 2 Weeks)</h4>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    Complete First Aid course
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    Apply for background checks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    Set up business bank account
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    Start building your network
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/starting-a-support-provider-journey/tax-file-number"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
              >
                Start with Tax File Number
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Journey Overview
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/tax-file-number"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Tax File Number
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
