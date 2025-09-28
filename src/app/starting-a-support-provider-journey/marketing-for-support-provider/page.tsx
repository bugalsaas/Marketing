import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, Users, Target, Star, Share2, MessageCircle } from 'lucide-react';

export default function MarketingForSupportProviderPage() {
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
                  <Link href="/starting-a-support-provider-journey/intro" className="text-gray-500 hover:text-gray-700">
                    Introduction
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <Link href="/starting-a-support-provider-journey/support-provider-insurance" className="text-gray-500 hover:text-gray-700">
                    Insurance
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">Marketing</span>
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
              Marketing for Support Providers: Build Your Client Base
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn effective marketing strategies to attract participants, build your reputation, and grow your support provider business in the competitive NDIS market.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-900">Why Marketing Matters</h3>
              </div>
              <p className="text-green-800">
                Effective marketing helps you stand out in a competitive market, attract the right participants, and build a sustainable business that provides quality support services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Marketing Strategy Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Developing Your Marketing Strategy</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Successful marketing for NDIS support providers requires a strategic approach that builds trust, demonstrates expertise, and connects with participants and their families. Your marketing should focus on your unique value proposition and the specific needs of your target audience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Marketing Principles:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Build trust and credibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Focus on participant outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Demonstrate expertise and qualifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Maintain consistent messaging</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Target Audience:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">NDIS participants and their families</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Support coordinators and planners</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Other healthcare professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Community organizations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Building Your Professional Brand */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Building Your Professional Brand</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Your professional brand is how participants and their families perceive you. A strong brand builds trust, differentiates you from competitors, and helps you attract the right clients for your services.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Essential Brand Elements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Professional Identity</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Clear service description</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Professional qualifications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Years of experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Specialized skills and training</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Value Proposition</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">What makes you unique</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Benefits you provide</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Your approach to care</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Success stories and outcomes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Creating Your Professional Materials</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Business Card</h4>
                      <p className="text-gray-700 text-sm">Include your name, qualifications, contact details, and a brief description of your services. Use professional design and high-quality materials.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Brochure or Flyer</h4>
                      <p className="text-gray-700 text-sm">Create a one-page overview of your services, qualifications, and contact information. Include testimonials if available.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Resume/CV</h4>
                      <p className="text-gray-700 text-sm">Keep an updated resume highlighting your relevant experience, qualifications, and achievements in disability support.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Reference Letters</h4>
                      <p className="text-gray-700 text-sm">Collect written references from previous employers, colleagues, or participants (with permission) to demonstrate your capabilities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Marketing Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Digital Marketing Strategies</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              In today's digital world, having a strong online presence is essential for reaching participants and their families. Digital marketing allows you to showcase your expertise, share valuable content, and build relationships with potential clients.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Website and Online Presence</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Professional Website</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Clear service descriptions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Professional photos and testimonials</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Easy contact information</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Mobile-friendly design</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Google My Business</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Local search visibility</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Customer reviews and ratings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Contact information and hours</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Photos and service updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Social Media Marketing</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-purple-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-purple-900 mb-3">Facebook</h4>
                    <p className="text-gray-700 text-sm mb-3">Create a professional page to share updates, connect with families, and showcase your work.</p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Share success stories</li>
                      <li>• Post helpful resources</li>
                      <li>• Engage with local groups</li>
                      <li>• Run targeted ads</li>
                    </ul>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">LinkedIn</h4>
                    <p className="text-gray-700 text-sm mb-3">Professional networking platform to connect with other healthcare professionals and support coordinators.</p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Share professional insights</li>
                      <li>• Connect with industry peers</li>
                      <li>• Join relevant groups</li>
                      <li>• Publish articles</li>
                    </ul>
                  </div>

                  <div className="border border-pink-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-pink-900 mb-3">Instagram</h4>
                    <p className="text-gray-700 text-sm mb-3">Visual platform to share moments from your work (with permission) and build community.</p>
                    <ul className="text-gray-600 text-xs space-y-1">
                      <li>• Share appropriate photos</li>
                      <li>• Use relevant hashtags</li>
                      <li>• Stories and reels</li>
                      <li>• Community engagement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Networking and Referral Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Networking and Referral Strategies</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Building strong professional relationships is one of the most effective ways to grow your support provider business. Word-of-mouth referrals and professional networks often lead to the highest quality clients.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Networking</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Industry Events and Conferences</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">NDIS provider conferences</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Disability sector workshops</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Professional development seminars</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Local business networking events</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Online Professional Groups</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Users className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">LinkedIn disability groups</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Facebook professional groups</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">NDIS provider forums</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Local support worker networks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Referral Building Strategies</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Provide Exceptional Service</h4>
                      <p className="text-gray-700 text-sm">Consistently deliver high-quality support that exceeds expectations. Happy participants and families are your best advocates.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ask for Referrals</h4>
                      <p className="text-gray-700 text-sm">Don't be afraid to ask satisfied participants and families for referrals. Most people are happy to recommend good support providers.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Build Relationships with Support Coordinators</h4>
                      <p className="text-gray-700 text-sm">Support coordinators often recommend providers to participants. Build professional relationships and demonstrate your reliability.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Partner with Other Professionals</h4>
                      <p className="text-gray-700 text-sm">Develop relationships with occupational therapists, physiotherapists, and other healthcare professionals who may refer clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Marketing and Thought Leadership */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Content Marketing and Thought Leadership</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Sharing valuable content and demonstrating your expertise helps establish you as a trusted professional in the disability support sector. This approach builds credibility and attracts participants who value knowledgeable, experienced support providers.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Content Ideas for Support Providers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Educational Content</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Tips for daily living skills</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Understanding NDIS processes</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Accessibility and inclusion tips</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Family support strategies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Personal Stories and Insights</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Share2 className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Success stories (with permission)</span>
                      </li>
                      <li className="flex items-start">
                        <Share2 className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Lessons learned from experience</span>
                      </li>
                      <li className="flex items-start">
                        <Share2 className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Industry insights and trends</span>
                      </li>
                      <li className="flex items-start">
                        <Share2 className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Professional development journey</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Content Distribution Channels</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Blog Posts</h4>
                    <p className="text-gray-600 text-sm">Write detailed articles on your website or guest post on industry blogs to demonstrate expertise.</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Social Media Posts</h4>
                    <p className="text-gray-600 text-sm">Share quick tips, insights, and updates on your social media platforms to stay top-of-mind.</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Newsletter</h4>
                    <p className="text-gray-600 text-sm">Create a regular newsletter with valuable content for participants, families, and professionals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much should I spend on marketing as a new support provider?</h3>
              <p className="text-gray-700">
                Start with low-cost or free marketing strategies like networking, social media, and referrals. Budget 5-10% of your expected income for marketing activities. Focus on building relationships and providing excellent service before investing heavily in paid advertising.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does it take to build a client base?</h3>
              <p className="text-gray-700">
                Building a solid client base typically takes 6-12 months of consistent marketing and networking efforts. Success depends on your location, competition, marketing strategy, and the quality of service you provide. Focus on building long-term relationships rather than quick wins.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Should I specialize in a particular type of support?</h3>
              <p className="text-gray-700">
                Specialization can help you stand out and command higher rates. Consider specializing in areas like autism support, mental health, physical disabilities, or age groups. However, being too specialized might limit your client base, so find a balance that works for your market.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I handle negative reviews or feedback?</h3>
              <p className="text-gray-700">
                Respond professionally and constructively to all feedback. Address legitimate concerns, learn from criticism, and use it to improve your services. Most people understand that no one is perfect, and a professional response to negative feedback can actually build trust.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the most effective marketing strategy for support providers?</h3>
              <p className="text-gray-700">
                Word-of-mouth referrals from satisfied participants and families are typically the most effective marketing strategy. Combine this with professional networking, a strong online presence, and consistent service quality. The best marketing is often the work you do with your current clients.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand marketing strategies, it's time to learn how to effectively take on new participants and manage your growing client base.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/taking-on-new-participants"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About Taking on New Participants
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/support-provider-insurance"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Support Provider Insurance
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/taking-on-new-participants"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Taking on New Participants
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
