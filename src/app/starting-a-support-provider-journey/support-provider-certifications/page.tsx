import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, UserCheck, Badge, Lock, Search } from 'lucide-react';

export default function SupportProviderCertificationsPage() {
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
                  <Link href="/starting-a-support-provider-journey/support-provider-qualifications" className="text-gray-500 hover:text-gray-700">
                    Qualifications
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">Certifications</span>
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
              Support Provider Certifications: Essential Background Checks
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ensure you meet all safety and compliance requirements to work as an NDIS support provider. Learn about essential certifications, background checks, and ongoing compliance obligations.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-red-900">Critical Requirements</h3>
              </div>
              <p className="text-red-800">
                These certifications are mandatory for working with NDIS participants. Without them, you cannot legally provide support services in the disability sector.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Essential Certifications Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Certifications for NDIS Support Providers</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Working as an NDIS support provider requires several mandatory certifications and background checks to ensure the safety and wellbeing of participants. These requirements are non-negotiable and must be obtained before you can begin providing services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandatory Certifications:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Working with Children Check (WWCC)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">National Police Check</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">NDIS Worker Screening Check</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">First Aid Certificate</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Requirements:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Professional Indemnity Insurance</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Public Liability Insurance</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">NDIS Code of Conduct Training</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">COVID-19 Vaccination (if required)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NDIS Worker Screening Check */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">NDIS Worker Screening Check</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              The NDIS Worker Screening Check is the most important certification for NDIS support providers. It's a comprehensive background check that assesses your suitability to work with people with disabilities.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What is the NDIS Worker Screening Check?</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-blue-800 mb-4">
                    The NDIS Worker Screening Check is a national background check that verifies your identity and assesses whether you pose a risk to people with disabilities. It replaces individual state-based checks and is recognised across Australia.
                  </p>
                  <ul className="text-blue-700 text-sm space-y-2">
                    <li>• Required for all NDIS workers</li>
                    <li>• Valid for 5 years</li>
                    <li>• Portable across all states and territories</li>
                    <li>• Must be renewed before expiry</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">How to Apply for NDIS Worker Screening</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Gather Required Documents</h4>
                      <p className="text-gray-700 text-sm">You'll need 100 points of identification including passport, driver's license, birth certificate, and proof of address.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Complete Online Application</h4>
                      <p className="text-gray-700 text-sm">Visit the NDIS Worker Screening website and complete the online application form with your personal details.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Identity Verification</h4>
                      <p className="text-gray-700 text-sm">Visit a participating Australia Post outlet to verify your identity and submit your documents.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Wait for Results</h4>
                      <p className="text-gray-700 text-sm">Processing typically takes 2-4 weeks. You'll receive notification of the outcome via email.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-yellow-900 mb-2">Important Notes:</h4>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Cost: $80-$120 depending on your state</li>
                  <li>• You cannot work as an NDIS provider without this check</li>
                  <li>• Some employers may reimburse the cost</li>
                  <li>• Keep your certificate safe - you'll need it for all NDIS work</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Working with Children Check */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Working with Children Check (WWCC)</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              If you'll be working with participants under 18, you'll need a Working with Children Check. This is a separate requirement from the NDIS Worker Screening Check and is managed by each state and territory.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">When is WWCC Required?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Working with participants under 18</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Providing services in family homes with children</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Working in schools or childcare settings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Any role involving direct contact with minors</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">State-Specific Information</h3>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 text-sm">New South Wales</h4>
                    <p className="text-gray-600 text-xs">Working with Children Check (WWCC) - $80, valid for 5 years</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 text-sm">Victoria</h4>
                    <p className="text-gray-600 text-xs">Working with Children Check (WWCC) - $128, valid for 5 years</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 text-sm">Queensland</h4>
                    <p className="text-gray-600 text-xs">Blue Card - $100, valid for 3 years</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 text-sm">Other States</h4>
                    <p className="text-gray-600 text-xs">Check your state's specific requirements and costs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First Aid Certification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">First Aid Certification</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              First Aid certification is essential for NDIS support providers. You need to be prepared to respond to medical emergencies and provide basic first aid when needed.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Required First Aid Training</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">HLTAID011 - Provide First Aid</h4>
                    <p className="text-gray-700 mb-4">The standard first aid course required for most NDIS support work.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• CPR and defibrillator use</li>
                      <li>• Basic life support</li>
                      <li>• Wound care and bandaging</li>
                      <li>• Medical emergency response</li>
                      <li>• Duration: 1 day (8 hours)</li>
                      <li>• Cost: $120-$200</li>
                    </ul>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">HLTAID012 - Provide First Aid in an Education Setting</h4>
                    <p className="text-gray-700 mb-4">Required if working with children or in educational settings.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• All standard first aid skills</li>
                      <li>• Child-specific emergency care</li>
                      <li>• Anaphylaxis management</li>
                      <li>• Asthma emergency response</li>
                      <li>• Duration: 1 day (8 hours)</li>
                      <li>• Cost: $150-$250</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Where to Get First Aid Training</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">St John Ambulance</h4>
                    <p className="text-gray-600 text-sm">Nationwide provider with comprehensive first aid courses</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚑</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Australian Red Cross</h4>
                    <p className="text-gray-600 text-sm">Well-established provider with flexible scheduling</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">⚕️</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Private Training Providers</h4>
                    <p className="text-gray-600 text-sm">Many RTOs offer first aid training courses</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-2">Important Reminders:</h4>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• First Aid certificates must be renewed every 3 years</li>
                  <li>• CPR component must be renewed every 12 months</li>
                  <li>• Keep your certificate with you when working</li>
                  <li>• Some employers may provide first aid training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Insurance Requirements</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Professional insurance is essential for protecting yourself and your business as an NDIS support provider. Different types of insurance provide coverage for different risks.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Essential Insurance Types</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Professional Indemnity Insurance</h4>
                    <p className="text-gray-700 mb-4">Protects you against claims of professional negligence or errors in your work.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Covers legal costs and damages</li>
                      <li>• Minimum $2 million coverage recommended</li>
                      <li>• Required by many NDIS providers</li>
                      <li>• Cost: $500-$1,500 annually</li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Public Liability Insurance</h4>
                    <p className="text-gray-700 mb-4">Covers you if someone is injured or property is damaged due to your work.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Covers third-party claims</li>
                      <li>• Minimum $5 million coverage recommended</li>
                      <li>• Often bundled with professional indemnity</li>
                      <li>• Cost: $300-$800 annually</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Insurance Considerations</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Income Protection</h4>
                    <p className="text-gray-600 text-sm">Covers lost income if you're unable to work due to illness or injury.</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Equipment Insurance</h4>
                    <p className="text-gray-600 text-sm">Covers your work equipment if it's lost, stolen, or damaged.</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Vehicle Insurance</h4>
                    <p className="text-gray-600 text-sm">Commercial vehicle insurance if you use your car for work.</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long do these certifications take to obtain?</h3>
              <p className="text-gray-700">
                NDIS Worker Screening Check takes 2-4 weeks, Working with Children Check takes 1-2 weeks, and First Aid certification can be completed in 1 day. Start the process early as some checks can take longer during busy periods.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I work while waiting for my certifications?</h3>
              <p className="text-gray-700">
                No, you cannot work as an NDIS support provider without valid certifications. Some employers may allow you to start in non-client facing roles while waiting, but you cannot provide direct support services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens if my application is rejected?</h3>
              <p className="text-gray-700">
                If your NDIS Worker Screening Check is rejected, you have the right to appeal the decision. Contact the NDIS Commission for information about the appeals process. You cannot work in NDIS roles while an appeal is being considered.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need to renew all certifications?</h3>
              <p className="text-gray-700">
                Yes, most certifications need renewal. NDIS Worker Screening Check is valid for 5 years, Working with Children Check varies by state (3-5 years), and First Aid must be renewed every 3 years (CPR every 12 months).
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can my employer help with certification costs?</h3>
              <p className="text-gray-700">
                Some employers may reimburse certification costs or provide training opportunities. Ask about this during the interview process. Even if not reimbursed, these costs are tax-deductible business expenses.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand the certification requirements, it's time to learn about the insurance coverage you'll need to protect yourself and your business as a support provider.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/support-provider-insurance"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About Support Provider Insurance
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/support-provider-qualifications"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Support Provider Qualifications
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/support-provider-insurance"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Support Provider Insurance
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
