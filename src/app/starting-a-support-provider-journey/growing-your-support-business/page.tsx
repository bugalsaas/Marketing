import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, TrendingUp, Users, Target, Star, Building } from 'lucide-react';

export default function GrowingYourSupportBusinessPage() {
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
                  <Link href="/starting-a-support-provider-journey/ndis-registration" className="text-gray-500 hover:text-gray-700">
                    NDIS Registration
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">Growing Your Business</span>
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
              Growing Your Support Business: Scaling for Success
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your support provider business from a solo operation into a thriving enterprise. Learn about scaling strategies, team building, operational efficiency, and long-term growth planning.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-900">Your Growth Journey</h3>
              </div>
              <p className="text-green-800">
                Business growth requires strategic planning, operational excellence, and the ability to adapt to changing market conditions. This guide helps you scale sustainably while maintaining quality service delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Business Growth Fundamentals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Growth Fundamentals</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Growing your support provider business involves more than just increasing the number of participants you serve. It requires strategic planning, operational efficiency, and the ability to maintain quality while scaling your operations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Strategies:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Expand service offerings and specializations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Build and manage a team of support workers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Develop strategic partnerships and collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Implement technology and automation solutions</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth Considerations:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Maintaining service quality during expansion</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Managing increased administrative complexity</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ensuring compliance with expanded operations</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Balancing growth with personal wellbeing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Scaling Your Operations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Scaling Your Operations</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Effective scaling requires systematic approaches to increase capacity while maintaining quality. This involves optimizing processes, implementing systems, and building infrastructure to support growth.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Operational Scaling Strategies</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Process Optimization</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Standardize service delivery procedures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Implement quality assurance systems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Create participant onboarding workflows</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Develop incident management protocols</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Technology Integration</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Building className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Client management systems (CRM)</span>
                      </li>
                      <li className="flex items-start">
                        <Building className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Scheduling and rostering software</span>
                      </li>
                      <li className="flex items-start">
                        <Building className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Document management systems</span>
                      </li>
                      <li className="flex items-start">
                        <Building className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Financial and billing automation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Capacity Building</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Assess Current Capacity</h4>
                      <p className="text-gray-700 text-sm">Evaluate your current workload, time management, and service quality to identify capacity constraints and growth opportunities.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Plan Incremental Growth</h4>
                      <p className="text-gray-700 text-sm">Set realistic growth targets and plan incremental increases in participants and services to maintain quality and manage workload.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Develop Support Systems</h4>
                      <p className="text-gray-700 text-sm">Create systems for administration, communication, and quality management that can scale with your business growth.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Monitor and Adjust</h4>
                      <p className="text-gray-700 text-sm">Regularly review your growth progress and adjust strategies based on performance, feedback, and changing circumstances.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building Your Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Building Your Team</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              As your business grows, you'll need to build a team of qualified support workers. Effective team building involves recruitment, training, management, and creating a positive workplace culture that attracts and retains quality staff.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recruitment and Hiring</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-purple-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-purple-900 mb-3">Finding Quality Candidates</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Users className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Job boards and recruitment websites</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Professional networks and referrals</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">TAFE and university partnerships</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Social media and community groups</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-orange-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-orange-900 mb-3">Hiring Process</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Clear job descriptions and requirements</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Structured interview processes</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Reference and background checks</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Probationary periods and evaluation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Team Management and Development</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Comprehensive Onboarding</h4>
                      <p className="text-gray-700 text-sm">Develop structured onboarding programs that introduce new staff to your policies, procedures, and service standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ongoing Training and Development</h4>
                      <p className="text-gray-700 text-sm">Provide regular training opportunities, professional development, and skill enhancement programs for your team.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Performance Management</h4>
                      <p className="text-gray-700 text-sm">Implement regular performance reviews, feedback systems, and recognition programs to maintain high standards.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Team Culture and Communication</h4>
                      <p className="text-gray-700 text-sm">Foster a positive workplace culture with open communication, team meetings, and collaborative problem-solving.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partnerships and Collaborations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Strategic Partnerships and Collaborations</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Strategic partnerships can significantly enhance your business growth by providing access to new markets, shared resources, and complementary services. Building strong relationships with other organizations in the disability sector creates opportunities for mutual benefit.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Types of Strategic Partnerships</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Healthcare Partnerships</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Occupational therapists and physiotherapists</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">General practitioners and specialists</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Mental health professionals</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Allied health service providers</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Community Partnerships</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Building className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Local disability organizations</span>
                      </li>
                      <li className="flex items-start">
                        <Building className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Community centers and recreation facilities</span>
                      </li>
                      <li className="flex items-start">
                        <Building className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Educational institutions</span>
                      </li>
                      <li className="flex items-start">
                        <Building className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Employment service providers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Building Effective Partnerships</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Identify Complementary Services</h4>
                      <p className="text-gray-700 text-sm">Look for organizations that offer services that complement yours, creating opportunities for referrals and collaborative programs.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Develop Mutual Benefits</h4>
                      <p className="text-gray-700 text-sm">Create partnership arrangements that provide value to both organizations, such as shared resources, joint marketing, or referral programs.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Maintain Professional Relationships</h4>
                      <p className="text-gray-700 text-sm">Invest time in building and maintaining professional relationships through regular communication, collaboration, and mutual support.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Document Partnership Agreements</h4>
                      <p className="text-gray-700 text-sm">Formalize partnerships with clear agreements that outline roles, responsibilities, and expectations for both parties.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long-term Business Planning */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Long-term Business Planning</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Sustainable business growth requires long-term planning and strategic thinking. This involves setting clear goals, developing contingency plans, and preparing for various scenarios that may impact your business.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Strategic Planning Elements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-indigo-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-indigo-900 mb-3">Vision and Mission</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Define your long-term vision</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Establish clear mission statement</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Set measurable business goals</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Create value proposition</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-pink-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-pink-900 mb-3">Market Analysis</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Analyze market trends and opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Assess competitive landscape</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Identify target market segments</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Monitor regulatory changes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Risk Management and Contingency Planning</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-red-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Identify Potential Risks</h4>
                      <p className="text-gray-700 text-sm">Assess risks such as regulatory changes, economic downturns, key staff departures, and participant loss that could impact your business.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-yellow-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Develop Mitigation Strategies</h4>
                      <p className="text-gray-700 text-sm">Create plans to minimize the impact of identified risks through diversification, insurance, and operational flexibility.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Build Financial Reserves</h4>
                      <p className="text-gray-700 text-sm">Maintain adequate cash reserves and emergency funds to weather periods of reduced income or unexpected expenses.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Create Succession Plans</h4>
                      <p className="text-gray-700 text-sm">Develop plans for business continuity in case of illness, retirement, or other circumstances that might affect your ability to operate.</p>
                    </div>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">When should I start thinking about growing my support provider business?</h3>
              <p className="text-gray-700">
                Consider growth when you have a stable client base, consistent income, and feel confident in your service delivery. Look for signs like being fully booked, turning away potential participants, or having opportunities to expand services. Growth should be planned and sustainable rather than reactive.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I maintain quality while scaling my business?</h3>
              <p className="text-gray-700">
                Maintain quality through standardized processes, comprehensive training programs, regular supervision, and quality assurance systems. Implement feedback mechanisms, conduct regular reviews, and ensure your team understands and follows your service standards. Don't grow faster than you can maintain quality.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What are the biggest challenges when growing a support provider business?</h3>
              <p className="text-gray-700">
                Common challenges include finding and retaining quality staff, managing increased administrative complexity, maintaining service quality during expansion, ensuring compliance with growing operations, and balancing business growth with personal wellbeing. Planning and preparation help mitigate these challenges.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Should I consider franchising or licensing my business model?</h3>
              <p className="text-gray-700">
                Franchising or licensing can be effective growth strategies if you have a proven, replicable business model and strong systems in place. However, these approaches require significant legal, operational, and financial considerations. Consider your goals, resources, and willingness to manage complex relationships before pursuing these options.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I know when I'm ready to hire my first employee?</h3>
              <p className="text-gray-700">
                You're ready to hire when you have consistent demand that exceeds your capacity, stable income to support payroll, clear systems and processes to train new staff, and the management skills to supervise employees. Ensure you have proper employment documentation, workers' compensation, and HR policies in place before hiring.
              </p>
            </div>
          </div>
        </section>

        {/* Journey Completion CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Congratulations! You've Completed the Journey</h2>
            <p className="text-xl mb-8 text-green-100">
              You now have comprehensive knowledge about starting and growing a successful NDIS support provider business. From initial setup to scaling operations, you're equipped with the tools and strategies needed for long-term success.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link 
                href="/starting-a-support-provider-journey"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                Review Journey Overview
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/contact"
                className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors inline-flex items-center justify-center"
              >
                Get Support & Guidance
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/ndis-registration"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to NDIS Registration
          </Link>
          <Link 
            href="/starting-a-support-provider-journey"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
          >
            Complete Journey Overview
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
