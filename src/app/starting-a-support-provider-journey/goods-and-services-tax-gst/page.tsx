import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, Calculator, DollarSign, TrendingUp } from 'lucide-react';

export default function GoodsAndServicesTaxPage() {
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
                  <Link href="/starting-a-support-provider-journey/australian-business-number-abn" className="text-gray-500 hover:text-gray-700">
                    ABN
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">GST</span>
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
              GST Registration for NDIS Support Providers: Complete Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Understanding GST in the NDIS context is crucial for support providers. Learn when to register, how to manage GST, and the specific rules that apply to disability support services.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Why This Matters</h3>
              </div>
              <p className="text-blue-800">
                GST registration affects your pricing, invoicing, and tax obligations. Many NDIS services are GST-free, but understanding the rules is essential for proper business operation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Understanding GST in NDIS Context */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding GST in the NDIS Context</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              The Goods and Services Tax (GST) is a 10% tax on most goods and services in Australia. However, the NDIS has specific rules that make many disability support services GST-free, which significantly impacts how support providers manage their tax obligations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key GST Facts:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">GST rate is 10% on most goods and services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Many NDIS services are GST-free</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Registration threshold is $75,000 annually</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Must register if you exceed the threshold</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">NDIS GST Rules:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Core supports are usually GST-free</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Capacity building supports may attract GST</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Transport services are often GST-free</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Equipment and consumables may attract GST</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When Support Providers Must Register for GST */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">When Support Providers Must Register for GST</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mandatory Registration</h3>
              <p className="text-gray-700 mb-6">
                You MUST register for GST if your business meets any of these criteria:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Annual Turnover Over $75,000</h4>
                    <p className="text-gray-600 text-sm">If your business income exceeds $75,000 in any 12-month period</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expected Turnover Over $75,000</h4>
                    <p className="text-gray-600 text-sm">If you expect to earn over $75,000 in the next 12 months</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Taxi or Ride-Share Services</h4>
                    <p className="text-gray-600 text-sm">Any amount of income from taxi or ride-share services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Voluntary Registration</h4>
                    <p className="text-gray-600 text-sm">You can choose to register even if under the threshold</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Optional Registration</h3>
              <p className="text-gray-700 mb-6">
                You can choose to register for GST even if you're under the threshold. Consider these benefits:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Claim GST Credits</h4>
                    <p className="text-gray-600 text-sm">Get back GST paid on business expenses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Credibility</h4>
                    <p className="text-gray-600 text-sm">Shows you're a serious, established business</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Simplified Accounting</h4>
                    <p className="text-gray-600 text-sm">Easier to track business vs personal expenses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Future-Proofing</h4>
                    <p className="text-gray-600 text-sm">Already registered when you reach the threshold</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* GST-Free vs GST-Inclusive Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">GST-Free vs GST-Inclusive Services</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Understanding which NDIS services are GST-free and which attract GST is crucial for proper pricing and invoicing. This affects how you charge participants and what you can claim back from the ATO.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-green-200 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">GST-Free Services</h3>
                <p className="text-gray-700 mb-4">These NDIS services are generally GST-free:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Core supports (personal care, domestic assistance)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Transport services for NDIS participants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Therapeutic supports (physiotherapy, occupational therapy)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Assistive technology (if GST-free)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Home modifications</span>
                  </li>
                </ul>
                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Important:</h4>
                  <p className="text-green-800 text-sm">
                    Even if your services are GST-free, you still need to register for GST if you exceed the $75,000 threshold to claim back GST on business expenses.
                  </p>
                </div>
              </div>

              <div className="border border-orange-200 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-orange-900 mb-4">GST-Inclusive Services</h3>
                <p className="text-gray-700 mb-4">These services generally attract GST:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Capacity building supports (training, education)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Equipment and consumables</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Non-NDIS services (if you provide them)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Administrative services</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Some assistive technology</span>
                  </li>
                </ul>
                <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-900 mb-2">Important:</h4>
                  <p className="text-orange-800 text-sm">
                    If you provide GST-inclusive services, you must add 10% GST to your prices and remit this to the ATO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step GST Registration Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step GST Registration Process</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-8">
              Registering for GST is straightforward and can be done online through your MyGov account linked to the ATO. Here's the complete process:
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ensure You Have an ABN</h3>
                  <p className="text-gray-700 mb-4">
                    You must have an Australian Business Number (ABN) before you can register for GST. If you don't have one yet, complete that step first.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Prerequisites:</h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Valid ABN (Australian Business Number)</li>
                      <li>• MyGov account linked to ATO</li>
                      <li>• Business details and expected turnover</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-green-600">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Log into MyGov</h3>
                  <p className="text-gray-700 mb-4">
                    Access your MyGov account and navigate to the ATO section. You'll need to link your ATO account if you haven't already.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Steps:</h4>
                    <ol className="text-green-800 space-y-1 text-sm list-decimal list-inside">
                      <li>Go to <a href="https://my.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">my.gov.au</a></li>
                      <li>Log in with your credentials</li>
                      <li>Click on "Australian Taxation Office"</li>
                      <li>Ensure your ABN is linked to your account</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-purple-600">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Start GST Registration</h3>
                  <p className="text-gray-700 mb-4">
                    In the ATO section, look for "Business" or "GST" options and start the registration process.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Navigation:</h4>
                    <ul className="text-purple-800 space-y-1 text-sm">
                      <li>• Look for "Business" menu</li>
                      <li>• Select "GST" or "Register for GST"</li>
                      <li>• Choose "Register for GST"</li>
                      <li>• Follow the prompts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-orange-600">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Registration Form</h3>
                  <p className="text-gray-700 mb-4">
                    Fill out the GST registration form with your business details and GST preferences.
                  </p>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 mb-2">Information Required:</h4>
                    <ul className="text-orange-800 space-y-1 text-sm">
                      <li>• Business activity description</li>
                      <li>• Expected annual turnover</li>
                      <li>• GST reporting frequency preference</li>
                      <li>• Business address and contact details</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-red-600">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Submit and Confirm</h3>
                  <p className="text-gray-700 mb-4">
                    Review all information carefully before submitting. You'll receive immediate confirmation of your GST registration.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-2">After Submission:</h4>
                    <ul className="text-red-800 space-y-1 text-sm">
                      <li>• Immediate confirmation of registration</li>
                      <li>• GST registration number provided</li>
                      <li>• Confirmation letter sent by mail</li>
                      <li>• Start date for GST obligations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GST Registration Thresholds and Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">GST Registration Thresholds and Requirements</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Understanding the GST registration thresholds and requirements is essential for compliance. Here's everything you need to know about when and how to register.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Registration Thresholds</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">$75,000 Annual Turnover</h4>
                    <p className="text-gray-600 text-sm">You must register if your business income exceeds $75,000 in any 12-month period</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expected Turnover</h4>
                    <p className="text-gray-600 text-sm">You must register if you expect to earn over $75,000 in the next 12 months</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Taxi/Ride-Share Services</h4>
                    <p className="text-gray-600 text-sm">Any amount of income from taxi or ride-share services requires registration</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Voluntary Registration</h4>
                    <p className="text-gray-600 text-sm">You can choose to register even if under the threshold</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Registration Requirements</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Valid ABN</h4>
                    <p className="text-gray-600 text-sm">Must have an Australian Business Number before registering for GST</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Activity</h4>
                    <p className="text-gray-600 text-sm">Must be carrying on a business or intending to carry on a business</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Australian Business</h4>
                    <p className="text-gray-600 text-sm">Business must be operating in Australia</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">GST Turnover</h4>
                    <p className="text-gray-600 text-sm">Must meet or expect to meet the GST turnover threshold</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-900 mb-2">Important Notes:</h4>
              <ul className="text-yellow-800 space-y-1 text-sm">
                <li>• GST turnover includes all business income, not just NDIS income</li>
                <li>• The threshold is calculated on a rolling 12-month basis</li>
                <li>• You have 21 days to register once you exceed the threshold</li>
                <li>• Late registration can result in penalties and backdated GST obligations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Managing GST as a Support Provider */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Managing GST as a Support Provider</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Once registered for GST, you have ongoing obligations to collect, report, and remit GST. Here's how to manage these requirements effectively as a support provider.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">GST Collection and Invoicing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-4">GST-Free Services</h4>
                    <p className="text-gray-700 mb-4">For NDIS services that are GST-free:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Don't add 10% GST to your prices</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Include "GST-free" on invoices</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Still claim GST credits on business expenses</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-orange-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-orange-900 mb-4">GST-Inclusive Services</h4>
                    <p className="text-gray-700 mb-4">For services that attract GST:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Add 10% GST to your prices</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Show GST amount separately on invoices</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Remit GST collected to the ATO</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">GST Reporting and Compliance</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Reporting Frequency</h4>
                    <p className="text-gray-700 text-sm mb-3">Choose how often you report GST:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Monthly (if turnover > $20M)</li>
                      <li>• Quarterly (most common)</li>
                      <li>• Annually (if turnover < $75K)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">GST Returns</h4>
                    <p className="text-gray-700 text-sm mb-3">What to include in your GST return:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• GST collected on sales</li>
                      <li>• GST credits on purchases</li>
                      <li>• Net GST payable/refundable</li>
                      <li>• Business activity statement</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Record Keeping</h4>
                    <p className="text-gray-700 text-sm mb-3">Maintain these records:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• All invoices and receipts</li>
                      <li>• Bank statements</li>
                      <li>• GST calculations</li>
                      <li>• Business activity statements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common GST Mistakes to Avoid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common GST Mistakes to Avoid</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Pricing and Invoicing Mistakes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Adding GST to GST-Free Services</h4>
                    <p className="text-gray-600 text-sm">Don't add 10% GST to NDIS core supports that are GST-free</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Not Including ABN on Invoices</h4>
                    <p className="text-gray-600 text-sm">All business invoices must include your ABN</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Incorrect GST Calculations</h4>
                    <p className="text-gray-600 text-sm">Double-check your GST calculations to avoid errors</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Compliance Mistakes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Late Registration</h4>
                    <p className="text-gray-600 text-sm">Register within 21 days of exceeding the threshold</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Poor Record Keeping</h4>
                    <p className="text-gray-600 text-sm">Maintain detailed records of all GST transactions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Missing GST Returns</h4>
                    <p className="text-gray-600 text-sm">Submit GST returns on time to avoid penalties</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need to register for GST if I only provide NDIS services?</h3>
              <p className="text-gray-700">
                You still need to register for GST if your annual turnover exceeds $75,000, even if all your services are GST-free. This allows you to claim back GST credits on business expenses.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I know if my NDIS services are GST-free?</h3>
              <p className="text-gray-700">
                Most core NDIS supports (personal care, domestic assistance, transport) are GST-free. Capacity building supports and equipment may attract GST. Check the NDIS website or consult with a tax professional for specific services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I claim GST credits if my services are GST-free?</h3>
              <p className="text-gray-700">
                Yes, you can still claim GST credits on business expenses even if your services are GST-free. This includes office supplies, equipment, training, and other business-related purchases.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens if I don't register for GST when I should?</h3>
              <p className="text-gray-700">
                You may face penalties and be required to pay backdated GST on all sales since you exceeded the threshold. It's important to register within 21 days of exceeding $75,000 turnover.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How often do I need to submit GST returns?</h3>
              <p className="text-gray-700">
                Most small businesses submit quarterly GST returns. You can choose monthly, quarterly, or annual reporting depending on your turnover and preferences.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I cancel my GST registration?</h3>
              <p className="text-gray-700">
                Yes, you can cancel your GST registration if your turnover falls below $75,000 and you expect it to stay below this threshold. You must notify the ATO within 21 days.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand GST requirements, it's time to learn about proper bookkeeping and financial record-keeping practices for your support provider business.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/bookkeeping-best-practices"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About Bookkeeping Best Practices
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/australian-business-number-abn"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Australian Business Number
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/bookkeeping-best-practices"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Bookkeeping Best Practices
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
