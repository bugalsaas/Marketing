import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, Umbrella, Car, Home, Heart } from 'lucide-react';

export default function SupportProviderInsurancePage() {
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
                  <Link href="/starting-a-support-provider-journey/support-provider-certifications" className="text-gray-500 hover:text-gray-700">
                    Certifications
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">Insurance</span>
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
              Support Provider Insurance: Complete Coverage Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Protect yourself and your business with comprehensive insurance coverage. Learn about essential policies, coverage options, and risk management strategies for NDIS support providers.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Why Insurance is Critical</h3>
              </div>
              <p className="text-blue-800">
                Working with vulnerable people carries inherent risks. Proper insurance protects you from financial ruin and ensures you can continue providing quality support services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Essential Insurance Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Insurance Coverage for Support Providers</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              As an NDIS support provider, you face unique risks that require specialised insurance coverage. Understanding what coverage you need and how much protection is adequate is crucial for your business success and personal security.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mandatory Coverage:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Professional Indemnity Insurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Public Liability Insurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Workers Compensation (if employing staff)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Cyber Liability Insurance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Coverage:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Umbrella className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Income Protection Insurance</span>
                  </li>
                  <li className="flex items-start">
                    <Umbrella className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Equipment and Contents Insurance</span>
                  </li>
                  <li className="flex items-start">
                    <Umbrella className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Commercial Vehicle Insurance</span>
                  </li>
                  <li className="flex items-start">
                    <Umbrella className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Business Interruption Insurance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Indemnity Insurance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Indemnity Insurance</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Professional Indemnity Insurance is the most critical coverage for NDIS support providers. It protects you against claims of professional negligence, errors, or omissions in your work with participants.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What Professional Indemnity Covers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Coverage Includes:</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Legal defense costs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Settlement payments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Court-ordered damages</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Investigation costs</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Common Claims:</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Inadequate care provision</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Failure to follow care plans</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Medication administration errors</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Breach of confidentiality</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Coverage Recommendations</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Minimum Coverage: $2 Million</h4>
                    <p className="text-gray-600 text-sm">Suitable for new support providers or those working with low-risk participants.</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Recommended Coverage: $5 Million</h4>
                    <p className="text-blue-800 text-sm">Ideal for most support providers, especially those working with complex needs or multiple participants.</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-900 mb-2">High Coverage: $10 Million+</h4>
                    <p className="text-green-800 text-sm">Required for support providers working with high-risk participants or in specialised areas.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-yellow-900 mb-2">Cost Factors:</h4>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Coverage amount: $500-$2,000 annually for $2-5 million coverage</li>
                  <li>• Claims history: Clean record reduces premiums</li>
                  <li>• Experience level: New providers may pay higher rates</li>
                  <li>• Services provided: Higher-risk services increase costs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Public Liability Insurance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Public Liability Insurance</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Public Liability Insurance protects you if someone is injured or property is damaged as a result of your work activities. This coverage is essential when working in participants' homes or public spaces.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What Public Liability Covers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-purple-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-purple-900 mb-3">Coverage Includes:</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Third-party injury claims</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Property damage claims</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Legal defense costs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Settlement payments</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-orange-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-orange-900 mb-3">Common Scenarios:</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Accidental injury to participant</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Damage to participant's property</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Injury to family members</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Damage to public property</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Coverage Recommendations</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Minimum Coverage: $5 Million</h4>
                    <p className="text-gray-600 text-sm">Basic coverage for low-risk support work, often bundled with professional indemnity.</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Recommended Coverage: $10 Million</h4>
                    <p className="text-blue-800 text-sm">Comprehensive coverage for most support providers, especially those working in participants' homes.</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-900 mb-2">High Coverage: $20 Million+</h4>
                    <p className="text-green-800 text-sm">Required for high-risk activities or when working with multiple participants simultaneously.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Insurance Coverage */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Insurance Coverage</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Beyond the essential coverage, additional insurance policies can provide comprehensive protection for your business and personal financial security.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Income Protection Insurance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Income Protection Insurance replaces a portion of your income if you're unable to work due to illness or injury. This is crucial for self-employed support providers who don't have sick leave entitlements.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Covers up to 75% of your income</li>
                      <li>• Waiting periods: 14-90 days</li>
                      <li>• Benefit periods: 2-5 years or to age 65</li>
                      <li>• Cost: 1-3% of your annual income</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Own occupation definition</li>
                      <li>• Partial disability benefits</li>
                      <li>• Rehabilitation support</li>
                      <li>• Tax-deductible premiums</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Equipment and Contents Insurance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Protect your work equipment, technology, and business contents from theft, damage, or loss. This is especially important if you work from home or carry expensive equipment.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Laptops, tablets, and phones</li>
                      <li>• Medical equipment and supplies</li>
                      <li>• Office furniture and equipment</li>
                      <li>• Business documents and records</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Coverage Options:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Replacement value coverage</li>
                      <li>• Worldwide coverage</li>
                      <li>• Accidental damage protection</li>
                      <li>• Data recovery services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Commercial Vehicle Insurance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      If you use your personal vehicle for work purposes, you need commercial vehicle insurance. Personal car insurance typically doesn't cover business use.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Higher coverage limits</li>
                      <li>• Business use coverage</li>
                      <li>• Equipment and supplies coverage</li>
                      <li>• Passenger liability protection</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Important Notes:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Required for business use</li>
                      <li>• Higher premiums than personal</li>
                      <li>• May need commercial registration</li>
                      <li>• Keep detailed mileage logs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cyber Liability Insurance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Cyber Liability Insurance</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              With increasing digitalization of NDIS services and participant data, cyber liability insurance is becoming essential for support providers who handle sensitive information electronically.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Cyber Insurance is Important</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-red-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-red-900 mb-3">Cyber Risks:</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Data breaches and hacking</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Ransomware attacks</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Phishing and social engineering</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Accidental data disclosure</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Coverage Includes:</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Data breach notification costs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Legal defense and settlements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">IT forensic investigation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Business interruption losses</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-2">NDIS-Specific Considerations:</h4>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• Participant data is highly sensitive and protected by privacy laws</li>
                  <li>• NDIS Commission may require cyber incident reporting</li>
                  <li>• Data breaches can result in significant penalties</li>
                  <li>• Consider coverage of $1-5 million depending on data volume</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does insurance cost for support providers?</h3>
              <p className="text-gray-700">
                Insurance costs vary based on coverage levels and risk factors. Professional Indemnity and Public Liability typically cost $800-$2,000 annually for $2-5 million coverage. Additional policies like Income Protection may cost 1-3% of your annual income.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I get insurance if I'm just starting out?</h3>
              <p className="text-gray-700">
                Yes, most insurers offer coverage for new support providers. You may pay higher premiums initially, but rates typically decrease as you gain experience and maintain a clean claims record. Some insurers offer new business discounts or payment plans.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens if I don't have insurance?</h3>
              <p className="text-gray-700">
                Working without proper insurance is extremely risky. You could face personal liability for claims, legal costs, and damages that could bankrupt you. Many NDIS providers and participants require proof of insurance before engaging your services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need separate insurance for each participant?</h3>
              <p className="text-gray-700">
                No, your insurance policies cover all your work activities. However, you should ensure your coverage limits are adequate for the number of participants you work with and the level of risk involved in your services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How often should I review my insurance coverage?</h3>
              <p className="text-gray-700">
                Review your insurance annually or whenever your business changes significantly. Consider factors like increased participant numbers, new service types, equipment purchases, or business growth that might require higher coverage limits.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand your insurance requirements, it's time to learn how to effectively market your services and attract participants as a support provider.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/marketing-for-support-provider"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About Marketing for Support Providers
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/support-provider-certifications"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Support Provider Certifications
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/marketing-for-support-provider"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Marketing for Support Providers
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
