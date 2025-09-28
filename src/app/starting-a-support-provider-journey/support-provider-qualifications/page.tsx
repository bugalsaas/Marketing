import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, GraduationCap, Award, BookOpen, Users } from 'lucide-react';

export default function SupportProviderQualificationsPage() {
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
                  <Link href="/starting-a-support-provider-journey/bookkeeping-best-practices" className="text-gray-500 hover:text-gray-700">
                    Bookkeeping
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">Qualifications</span>
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
              Support Provider Qualifications: Complete Training Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build your expertise and credibility as an NDIS support provider. Learn about essential qualifications, training programs, and ongoing professional development opportunities.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Why This Matters</h3>
              </div>
              <p className="text-blue-800">
                Proper qualifications demonstrate your commitment to quality care, increase your credibility with participants, and may be required for certain types of support work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Essential Qualifications Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Qualifications for NDIS Support Providers</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              While specific qualification requirements vary depending on the type of support you provide, certain qualifications are highly valued in the NDIS sector and can significantly enhance your career prospects and earning potential.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Qualifications:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Certificate III in Individual Support (Disability)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Certificate IV in Disability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Diploma of Community Services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Bachelor of Social Work (for complex cases)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialised Training:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Mental Health First Aid</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Autism Spectrum Disorder training</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Dementia care training</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Behavioural support training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate III in Individual Support */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Certificate III in Individual Support (Disability)</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              The Certificate III in Individual Support (Disability) is the most common entry-level qualification for NDIS support providers. This nationally recognised qualification provides the foundational knowledge and skills needed to work effectively with people with disabilities.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What You'll Learn</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Person-centered support approaches</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Communication strategies and techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Safety and risk management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Supporting independence and community participation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Working with families and carers</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Course Details</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                    <p className="text-gray-600 text-sm">6-12 months (full-time) or 12-18 months (part-time)</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Delivery</h4>
                    <p className="text-gray-600 text-sm">Classroom, online, or blended learning options</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Work Placement</h4>
                    <p className="text-gray-600 text-sm">120 hours of supervised practical experience</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Cost</h4>
                    <p className="text-gray-600 text-sm">$1,500-$3,000 (may be subsidized in some states)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-2">Where to Study:</h4>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• TAFE colleges (most common)</li>
                <li>• Registered Training Organisations (RTOs)</li>
                <li>• Online providers (ensure they're registered)</li>
                <li>• Some universities offer diploma pathways</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NDIS Quality and Safeguards Commission Training */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">NDIS Quality and Safeguards Commission Training</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              The NDIS Quality and Safeguards Commission provides essential eLearning modules that all support providers should complete. These free online courses cover critical topics for working safely and effectively in the NDIS sector.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Essential eLearning Modules</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Quality, Safety and You</h4>
                    <p className="text-gray-700 mb-4">Core module covering your rights and responsibilities as an NDIS worker.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• NDIS Code of Conduct</li>
                      <li>• Worker obligations and rights</li>
                      <li>• Quality and safety standards</li>
                      <li>• Duration: 2-3 hours</li>
                    </ul>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Supporting Effective Communication</h4>
                    <p className="text-gray-700 mb-4">Learn how to communicate effectively with NDIS participants and their families.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Communication strategies</li>
                      <li>• Active listening techniques</li>
                      <li>• Cultural sensitivity</li>
                      <li>• Duration: 1-2 hours</li>
                    </ul>
                  </div>

                  <div className="border border-purple-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-purple-900 mb-3">Supporting Safe and Enjoyable Meals</h4>
                    <p className="text-gray-700 mb-4">Essential training for supporting participants with meal times and nutrition.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Food safety and hygiene</li>
                      <li>• Dietary requirements</li>
                      <li>• Swallowing difficulties</li>
                      <li>• Duration: 1-2 hours</li>
                    </ul>
                  </div>

                  <div className="border border-orange-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-orange-900 mb-3">Personal Care and Hygiene</h4>
                    <p className="text-gray-700 mb-4">Training for providing personal care support while maintaining dignity and respect.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Personal care techniques</li>
                      <li>• Privacy and dignity</li>
                      <li>• Infection control</li>
                      <li>• Duration: 2-3 hours</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-2">How to Access Training:</h4>
                <ol className="text-green-800 space-y-1 text-sm list-decimal list-inside">
                  <li>Visit the <a href="https://training.ndiscommission.gov.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">NDIS Commission Training Portal</a></li>
                  <li>Create a free account</li>
                  <li>Complete the modules at your own pace</li>
                  <li>Download certificates upon completion</li>
                  <li>Keep certificates for your records</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Training Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialised Training Programs</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Specialised training can help you develop expertise in specific areas of disability support, making you more valuable to participants and potentially increasing your earning potential.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mental Health First Aid</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Mental Health First Aid training teaches you how to recognize and respond to mental health crises, which is increasingly important in disability support work.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• 12-hour course (2 days)</li>
                      <li>• Recognised nationally</li>
                      <li>• Valid for 3 years</li>
                      <li>• Cost: $200-$400</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Signs of mental health problems</li>
                      <li>• Crisis intervention techniques</li>
                      <li>• How to provide initial support</li>
                      <li>• When to seek professional help</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Autism Spectrum Disorder Training</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Specialised autism training helps you understand the unique needs of people on the autism spectrum and develop effective support strategies.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Various course lengths available</li>
                      <li>• Online and in-person options</li>
                      <li>• Often includes practical strategies</li>
                      <li>• Cost: $100-$500</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Topics:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Understanding autism characteristics</li>
                      <li>• Communication strategies</li>
                      <li>• Sensory processing needs</li>
                      <li>• Behaviour support techniques</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Dementia Care Training</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      As the population ages, dementia care skills are increasingly valuable. This training helps you support people with dementia and their families.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Dementia Australia courses</li>
                      <li>• TAFE and RTO options</li>
                      <li>• Online learning available</li>
                      <li>• Cost: $150-$400</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Course Content:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Understanding dementia</li>
                      <li>• Communication techniques</li>
                      <li>• Managing challenging behaviours</li>
                      <li>• Supporting families</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Professional Development */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ongoing Professional Development</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Professional development is an ongoing process that helps you stay current with best practices, learn new skills, and advance your career in the disability support sector.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Continuing Education Options</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Short Courses and Workshops</h4>
                    <p className="text-gray-600 text-sm">1-3 day courses on specific topics like behaviour support, communication aids, or assistive technology.</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Online Learning</h4>
                    <p className="text-gray-600 text-sm">Flexible online courses that fit around your work schedule, often with certificates of completion.</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Conferences and Seminars</h4>
                    <p className="text-gray-600 text-sm">Industry events where you can learn from experts and network with other professionals.</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Mentoring Programs</h4>
                    <p className="text-gray-600 text-sm">Learn from experienced support providers through formal or informal mentoring relationships.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Memberships</h3>
                <div className="space-y-4">
                  <div className="border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Disability Support Workers Association</h4>
                    <p className="text-gray-600 text-sm">Professional body offering training, resources, and advocacy for support workers.</p>
                  </div>
                  
                  <div className="border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Australian Community Workers Association</h4>
                    <p className="text-gray-600 text-sm">National peak body for community workers, including disability support providers.</p>
                  </div>
                  
                  <div className="border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Local Disability Networks</h4>
                    <p className="text-gray-600 text-sm">Join local networks for ongoing learning opportunities and professional connections.</p>
                  </div>
                  
                  <div className="border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 mb-2">Industry Forums and Groups</h4>
                    <p className="text-gray-600 text-sm">Online communities where you can share experiences and learn from peers.</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need formal qualifications to work as a support provider?</h3>
              <p className="text-gray-700">
                While formal qualifications aren't always legally required, they significantly improve your job prospects, earning potential, and ability to provide quality support. Many participants and families prefer working with qualified support providers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I work while studying for qualifications?</h3>
              <p className="text-gray-700">
                Yes, many people work as support providers while completing their qualifications. Some employers may even support your studies or provide on-the-job training opportunities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much do qualifications cost?</h3>
              <p className="text-gray-700">
                Costs vary widely depending on the qualification and provider. Certificate III courses typically cost $1,500-$3,000, but may be subsidized in some states. Many NDIS Commission training modules are free.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long do qualifications take to complete?</h3>
              <p className="text-gray-700">
                Certificate III typically takes 6-12 months full-time or 12-18 months part-time. NDIS Commission eLearning modules can be completed in a few hours each. Specialised training varies from a few hours to several days.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do qualifications expire?</h3>
              <p className="text-gray-700">
                Most formal qualifications don't expire, but some specialised training (like Mental Health First Aid) requires renewal every 3 years. It's important to stay current with best practices through ongoing professional development.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand the qualification requirements, it's time to learn about the essential certifications and background checks needed to work as an NDIS support provider.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/support-provider-certifications"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About Support Provider Certifications
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/bookkeeping-best-practices"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Bookkeeping Best Practices
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/support-provider-certifications"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Support Provider Certifications
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
