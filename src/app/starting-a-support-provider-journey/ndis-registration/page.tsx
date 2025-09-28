import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, Award, Users, Building, Star } from 'lucide-react';

export default function NDISRegistrationPage() {
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
                  <Link href="/starting-a-support-provider-journey/superannuation-for-support-providers" className="text-gray-500 hover:text-gray-700">
                    Superannuation
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">NDIS Registration</span>
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
              NDIS Registration: Becoming a Registered Provider
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn about the NDIS registration process, requirements, and benefits. Discover how becoming a registered provider can expand your opportunities and enhance your credibility in the disability support sector.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Why Consider Registration</h3>
              </div>
              <p className="text-blue-800">
                NDIS registration opens doors to more participants, higher rates, and enhanced credibility. While not mandatory for all support work, registration significantly expands your business opportunities and professional standing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* NDIS Registration Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding NDIS Registration</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              NDIS registration is a formal process that allows support providers to deliver services to NDIS participants. While you can work as an unregistered provider in some circumstances, registration provides access to a broader range of participants and often higher rates.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Registration Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Access to all NDIS participants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Higher hourly rates and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Enhanced credibility and trust</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Access to NDIS provider portal</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Registration Requirements:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Meet NDIS Practice Standards</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Comply with Code of Conduct</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Maintain appropriate insurance</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Pass quality and safeguards audit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">NDIS Registration Process</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              The NDIS registration process involves several steps and can take 3-6 months to complete. Understanding the requirements and preparing thoroughly helps ensure a smooth application process.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Step-by-Step Registration Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Determine Registration Groups</h4>
                      <p className="text-gray-700 text-sm">Identify which NDIS registration groups apply to your services (e.g., Assistance with Daily Life, Assistance with Social and Community Participation).</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Complete Self-Assessment</h4>
                      <p className="text-gray-700 text-sm">Complete the NDIS Practice Standards self-assessment to identify gaps and prepare for the audit process.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Gather Required Documentation</h4>
                      <p className="text-gray-700 text-sm">Collect all necessary documents including policies, procedures, insurance certificates, and staff qualifications.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Submit Application</h4>
                      <p className="text-gray-700 text-sm">Complete and submit your registration application through the NDIS Commission portal with all required documentation.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-red-600">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Undergo Quality Audit</h4>
                      <p className="text-gray-700 text-sm">An approved quality auditor will assess your compliance with NDIS Practice Standards and Code of Conduct.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-indigo-600">6</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Receive Registration Decision</h4>
                      <p className="text-gray-700 text-sm">The NDIS Commission will review the audit report and make a registration decision, typically within 28 days.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-yellow-900 mb-2">Important Timeline Considerations:</h4>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Application review: 28 days</li>
                  <li>• Audit scheduling: 2-4 weeks</li>
                  <li>• Audit completion: 1-2 days</li>
                  <li>• Final decision: 28 days after audit</li>
                  <li>• Total process: 3-6 months</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NDIS Practice Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">NDIS Practice Standards</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              The NDIS Practice Standards outline the quality and safety requirements that all registered providers must meet. Understanding these standards is crucial for successful registration and ongoing compliance.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Practice Standards</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Rights and Dignity</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Respect participant rights and choices</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Maintain privacy and confidentiality</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Promote independence and inclusion</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Provide culturally appropriate services</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Governance and Operational Management</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Clear policies and procedures</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Risk management systems</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Quality management processes</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Incident management procedures</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Provider Capability Standards</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Workforce</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Qualified and competent staff</li>
                      <li>• Ongoing training and development</li>
                      <li>• Background checks and screening</li>
                      <li>• Performance management</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Environment</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Safe and accessible premises</li>
                      <li>• Appropriate equipment and resources</li>
                      <li>• Infection control measures</li>
                      <li>• Emergency procedures</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Information Management</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Secure record keeping</li>
                      <li>• Privacy protection</li>
                      <li>• Data management systems</li>
                      <li>• Reporting requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Groups and Service Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Registration Groups and Service Types</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              NDIS registration is organised into specific groups based on the types of services you provide. Understanding which groups apply to your business is essential for the registration process and ongoing compliance.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Common Registration Groups for Support Providers</h3>
                <div className="space-y-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Assistance with Daily Life</h4>
                    <p className="text-gray-700 mb-3">Personal care, domestic assistance, and daily living support services.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Personal hygiene and grooming assistance</li>
                      <li>• Meal preparation and feeding support</li>
                      <li>• Household tasks and cleaning</li>
                      <li>• Shopping and errands</li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Assistance with Social and Community Participation</h4>
                    <p className="text-gray-700 mb-3">Support to participate in community activities and social interactions.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Community access and participation</li>
                      <li>• Social skills development</li>
                      <li>• Recreation and leisure activities</li>
                      <li>• Group programs and activities</li>
                    </ul>
                  </div>

                  <div className="border border-purple-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-purple-900 mb-3">Assistance with Travel/Transport</h4>
                    <p className="text-gray-700 mb-3">Transportation services to access community, social, and economic activities.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Personal transport services</li>
                      <li>• Group transport programs</li>
                      <li>• Travel training and support</li>
                      <li>• Vehicle modifications and equipment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-2">Choosing Your Registration Groups:</h4>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• Only register for groups you actually provide services in</li>
                  <li>• Consider your current and planned service offerings</li>
                  <li>• Each group has specific requirements and standards</li>
                  <li>• You can add or remove groups during renewal periods</li>
                  <li>• Registration fees vary based on the number of groups</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Compliance and Renewal */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ongoing Compliance and Renewal</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              NDIS registration is not a one-time process. Registered providers must maintain ongoing compliance with standards, participate in regular audits, and renew their registration periodically to continue providing services.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ongoing Compliance Requirements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-red-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-red-900 mb-3">Regular Audits</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Annual compliance audits</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Random spot checks</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Incident-triggered audits</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Complaint-based investigations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Reporting Obligations</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Clock className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Quarterly service delivery reports</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Incident and complaint reporting</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Changes to key personnel</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Financial and operational updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Registration Renewal Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Renewal Notification</h4>
                      <p className="text-gray-700 text-sm">The NDIS Commission will notify you 6 months before your registration expires with renewal requirements.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Compliance Review</h4>
                      <p className="text-gray-700 text-sm">Complete a comprehensive review of your compliance with NDIS Practice Standards and address any identified issues.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Submit Renewal Application</h4>
                      <p className="text-gray-700 text-sm">Submit your renewal application with updated documentation and evidence of ongoing compliance.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Audit and Assessment</h4>
                      <p className="text-gray-700 text-sm">Undergo a renewal audit to verify continued compliance with standards and requirements.</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need to be registered to work as a support provider?</h3>
              <p className="text-gray-700">
                Registration is not always required, but it significantly expands your opportunities. You can work as an unregistered provider if participants self-manage their NDIS funding or if you work through a registered provider. However, registration allows you to work directly with all participants and often provides higher rates.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does NDIS registration cost?</h3>
              <p className="text-gray-700">
                Registration costs vary based on the number of registration groups and your organisation size. For individual providers, costs typically range from $1,000 to $3,000 for the initial application, plus ongoing audit costs of $1,500 to $4,000 annually. These costs are generally tax-deductible business expenses.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does registration last?</h3>
              <p className="text-gray-700">
                NDIS registration is typically valid for 3 years, after which you must renew. The renewal process involves demonstrating ongoing compliance with standards and may include another audit. It's important to maintain compliance throughout your registration period to ensure smooth renewal.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I register as an individual or do I need a company?</h3>
              <p className="text-gray-700">
                You can register as an individual sole trader, but many providers choose to register as a company for liability protection and business structure benefits. Consider your business goals, liability concerns, and tax implications when deciding on your registration structure.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens if I fail the audit or don't meet standards?</h3>
              <p className="text-gray-700">
                If you don't meet the required standards, the auditor will provide a report identifying areas for improvement. You may be given time to address these issues before a re-audit, or your application may be rejected. It's important to thoroughly prepare and address any identified gaps before the audit.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Final Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand NDIS registration, it's time to learn about growing your support provider business and scaling your operations for long-term success.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/growing-your-support-business"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About Growing Your Support Business
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/superannuation-for-support-providers"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Superannuation for Support Providers
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/growing-your-support-business"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Growing Your Support Business
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
