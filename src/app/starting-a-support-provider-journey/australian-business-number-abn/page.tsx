import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, Building, DollarSign } from 'lucide-react';

export default function AustralianBusinessNumberPage() {
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
                  <Link href="/starting-a-support-provider-journey/tax-file-number" className="text-gray-500 hover:text-gray-700">
                    Tax File Number
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">Australian Business Number</span>
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
              Australian Business Number (ABN) for Support Providers: Essential Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your ABN is your business identity in Australia. Learn everything you need to know about obtaining and using your ABN as an independent NDIS support provider.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Why This Matters</h3>
              </div>
              <p className="text-blue-800">
                Without an ABN, you can't invoice clients, claim GST credits, or operate as a legitimate business. Your ABN is essential for all commercial activities as a support provider.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* What is an ABN */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is an ABN and Why Do You Need One?</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              An Australian Business Number (ABN) is a unique 11-digit identifier issued by the Australian Taxation Office (ATO) to businesses and organisations. It's your business's "identity number" that allows you to operate legally and professionally in Australia.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Characteristics:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Unique 11-digit number (e.g., 12 345 678 901)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Free to obtain and maintain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Valid for your entire business lifetime</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Required for all business transactions</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What It's Used For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Building className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Invoicing clients and participants</span>
                  </li>
                  <li className="flex items-start">
                    <Building className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Registering for GST</span>
                  </li>
                  <li className="flex items-start">
                    <Building className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Opening business bank accounts</span>
                  </li>
                  <li className="flex items-start">
                    <Building className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Business identification and credibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ABN vs TFN */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">ABN vs TFN: Key Differences for Support Providers</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Understanding the difference between your ABN and TFN is crucial for proper business operation. Both are important but serve different purposes.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-blue-200 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Tax File Number (TFN)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                    <p className="text-gray-700 text-sm">Personal tax identification for individuals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Format:</h4>
                    <p className="text-gray-700 text-sm">9 digits (e.g., 123 456 789)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Used for:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Personal tax returns</li>
                      <li>• Opening bank accounts</li>
                      <li>• Superannuation</li>
                      <li>• Government benefits</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">When needed:</h4>
                    <p className="text-gray-700 text-sm">Before starting any work or business</p>
                  </div>
                </div>
              </div>

              <div className="border border-green-200 rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Australian Business Number (ABN)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                    <p className="text-gray-700 text-sm">Business identification for commercial activities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Format:</h4>
                    <p className="text-gray-700 text-sm">11 digits (e.g., 12 345 678 901)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Used for:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Business transactions</li>
                      <li>• Invoicing clients</li>
                      <li>• GST registration</li>
                      <li>• Business identification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">When needed:</h4>
                    <p className="text-gray-700 text-sm">When starting business activities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Key Takeaway for Support Providers:</h4>
              <p className="text-gray-700">
                You need BOTH a TFN and an ABN to operate as an independent support provider. Your TFN is for personal tax purposes, while your ABN is for business activities like invoicing participants and claiming business expenses.
              </p>
            </div>
          </div>
        </section>

        {/* When to Apply for ABN */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">When to Apply for Your ABN</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">You Should Apply When:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Starting to Invoice Clients</h4>
                    <p className="text-gray-600 text-sm">As soon as you plan to charge for support services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Earning Business Income</h4>
                    <p className="text-gray-600 text-sm">When you start earning money from support work</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Registering for GST</h4>
                    <p className="text-gray-600 text-sm">ABN is required before GST registration</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Opening Business Accounts</h4>
                    <p className="text-gray-600 text-sm">Banks require ABN for business banking</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">You Don't Need One If:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Only Volunteering</h4>
                    <p className="text-gray-600 text-sm">Volunteer work doesn't require an ABN</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Employee Only</h4>
                    <p className="text-gray-600 text-sm">Working as an employee doesn't require an ABN</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hobby Activities</h4>
                    <p className="text-gray-600 text-sm">Hobbies and personal activities don't need an ABN</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">One-Off Services</h4>
                    <p className="text-gray-600 text-sm">Occasional, non-business activities</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Complete ABN Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete ABN Application Process</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-8">
              Applying for an ABN is straightforward and can be completed online in about 15-20 minutes. Here's the complete step-by-step process:
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Gather Required Information</h3>
                  <p className="text-gray-700 mb-4">
                    Before starting your application, collect all the necessary information about your business and personal details.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Information You'll Need:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-blue-800 text-sm">
                      <div>
                        <h5 className="font-semibold mb-1">Personal Details:</h5>
                        <ul className="space-y-1">
                          <li>• Full name and date of birth</li>
                          <li>• Tax File Number (TFN)</li>
                          <li>• Current residential address</li>
                          <li>• Contact phone number and email</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Business Details:</h5>
                        <ul className="space-y-1">
                          <li>• Business name (if different from your name)</li>
                          <li>• Business address</li>
                          <li>• Business activity description</li>
                          <li>• Expected annual turnover</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-green-600">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit the ATO Website</h3>
                  <p className="text-gray-700 mb-4">
                    Go to the official ATO ABN application page and start your application.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Application Steps:</h4>
                    <ol className="text-green-800 space-y-1 text-sm list-decimal list-inside">
                      <li>Go to <a href="https://www.ato.gov.au/businesses-and-organisations/abn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">ATO ABN Application</a></li>
                      <li>Click "Apply for an ABN"</li>
                      <li>Select "Individual/Sole Trader" as entity type</li>
                      <li>Choose "I am starting a new business"</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-purple-600">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete the Application Form</h3>
                  <p className="text-gray-700 mb-4">
                    Fill out all sections of the application form with accurate information about your support provider business.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Form Sections:</h4>
                    <ul className="text-purple-800 space-y-1 text-sm">
                      <li>• Personal identification details</li>
                      <li>• Business name and address</li>
                      <li>• Business activity description (e.g., "Disability support services")</li>
                      <li>• Expected annual turnover</li>
                      <li>• GST registration intention</li>
                      <li>• Contact details and preferences</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-orange-600">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Review and Submit</h3>
                  <p className="text-gray-700 mb-4">
                    Carefully review all information before submitting. Any errors can delay your application or cause issues later.
                  </p>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 mb-2">Before Submitting:</h4>
                    <ul className="text-orange-800 space-y-1 text-sm">
                      <li>• Double-check all personal details</li>
                      <li>• Verify business address is correct</li>
                      <li>• Ensure business activity description is accurate</li>
                      <li>• Confirm contact details are current</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-red-600">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Receive Your ABN</h3>
                  <p className="text-gray-700 mb-4">
                    If your application is successful, you'll receive your ABN immediately online and by mail within 14 days.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-2">What Happens Next:</h4>
                    <ul className="text-red-800 space-y-1 text-sm">
                      <li>• ABN provided immediately if approved</li>
                      <li>• Confirmation letter sent by mail</li>
                      <li>• Update your business records</li>
                      <li>• Start using your ABN for invoicing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Required Business Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Required Business Information</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              To successfully apply for an ABN, you'll need to provide specific information about your support provider business. Here's exactly what you need to prepare:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Full Legal Name</h4>
                    <p className="text-gray-600 text-sm">As it appears on your birth certificate or passport</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Date of Birth</h4>
                    <p className="text-gray-600 text-sm">DD/MM/YYYY format</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tax File Number (TFN)</h4>
                    <p className="text-gray-600 text-sm">Your 9-digit TFN (required for ABN application)</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Residential Address</h4>
                    <p className="text-gray-600 text-sm">Your current home address (not PO Box)</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Contact Details</h4>
                    <p className="text-gray-600 text-sm">Phone number and email address</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Business Information</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Name</h4>
                    <p className="text-gray-600 text-sm">Your trading name (can be your personal name or a business name)</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Address</h4>
                    <p className="text-gray-600 text-sm">Where you conduct business (can be same as residential)</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Activity</h4>
                    <p className="text-gray-600 text-sm">Description of your services (e.g., "Disability support services")</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expected Turnover</h4>
                    <p className="text-gray-600 text-sm">Estimated annual business income</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">GST Registration</h4>
                    <p className="text-gray-600 text-sm">Whether you plan to register for GST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-900 mb-2">Important Tips:</h4>
              <ul className="text-yellow-800 space-y-1 text-sm">
                <li>• Use your legal name as it appears on official documents</li>
                <li>• Business address can be your home address if you work from home</li>
                <li>• Be specific about your business activity (e.g., "NDIS disability support services")</li>
                <li>• Estimate turnover conservatively - you can update this later</li>
                <li>• Consider GST registration if you expect to earn over $75,000 annually</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABN Registration Costs and Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">ABN Registration Costs and Timeline</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Costs</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-green-500 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">ABN Application</h4>
                    <p className="text-gray-600">Completely FREE - no application fees</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-green-500 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">ABN Maintenance</h4>
                    <p className="text-gray-600">No ongoing fees or renewal costs</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-green-500 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Updates and Changes</h4>
                    <p className="text-gray-600">Free to update business details</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Total Cost: $0</h4>
                <p className="text-green-800 text-sm">
                  ABN registration and maintenance is completely free. Be wary of third-party services that charge fees for ABN applications.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-500 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Online Application</h4>
                    <p className="text-gray-600">15-20 minutes to complete</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-500 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Immediate Approval</h4>
                    <p className="text-gray-600">ABN provided instantly if approved</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-500 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Confirmation Letter</h4>
                    <p className="text-gray-600">Mailed within 14 days</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-500 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">ABN Validity</h4>
                    <p className="text-gray-600">Valid for life of your business</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Fast Track Option:</h4>
                <p className="text-blue-800 text-sm">
                  Most applications are approved immediately. Only complex cases or missing information may require additional processing time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens After ABN Registration */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Happens After ABN Registration</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Once you receive your ABN, there are several important steps to take to properly set up your support provider business and start operating legally.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Update Your Business Records</h3>
                  <p className="text-gray-700">Record your ABN in a safe place and update all business documentation. This includes business cards, letterheads, and any existing contracts.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Start Invoicing with Your ABN</h3>
                  <p className="text-gray-700">Include your ABN on all invoices to participants and support coordinators. This is legally required and builds credibility.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Consider GST Registration</h3>
                  <p className="text-gray-700">If you expect to earn over $75,000 annually, you must register for GST. Your ABN is required for GST registration.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Open Business Bank Account</h3>
                  <p className="text-gray-700">Use your ABN to open a separate business bank account. This keeps your business and personal finances separate for tax purposes.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Update Your Professional Profile</h3>
                  <p className="text-gray-700">Add your ABN to your professional profiles, NDIS provider listings, and any marketing materials to build trust and credibility.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common ABN Mistakes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common ABN Mistakes and How to Avoid Them</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Application Mistakes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Incorrect Business Activity Description</h4>
                    <p className="text-gray-600 text-sm">Be specific: "NDIS disability support services" not just "support work"</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Wrong Entity Type</h4>
                    <p className="text-gray-600 text-sm">Choose "Individual/Sole Trader" not "Company" for independent work</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Inconsistent Addresses</h4>
                    <p className="text-gray-600 text-sm">Ensure all addresses match your official documents</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Usage Mistakes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Not Including ABN on Invoices</h4>
                    <p className="text-gray-600 text-sm">ABN must be on all business invoices by law</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Using ABN for Personal Transactions</h4>
                    <p className="text-gray-600 text-sm">Only use ABN for business activities, not personal purchases</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Not Updating Business Details</h4>
                    <p className="text-gray-600 text-sm">Update ATO when you change address or business name</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does it take to get an ABN?</h3>
              <p className="text-gray-700">
                Most ABN applications are approved immediately online. If your application is successful, you'll receive your ABN instantly and a confirmation letter within 14 days.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I work without an ABN?</h3>
              <p className="text-gray-700">
                You can work as an employee without an ABN, but independent support providers need an ABN to invoice clients, claim business expenses, and operate as a legitimate business.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What if my ABN application is rejected?</h3>
              <p className="text-gray-700">
                If rejected, the ATO will explain why. Common reasons include insufficient business activity or incorrect information. You can reapply once you address the issues.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need to renew my ABN?</h3>
              <p className="text-gray-700">
                No, ABNs don't expire and don't need renewal. However, you must keep your business details updated with the ATO and notify them of any changes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I have multiple ABNs?</h3>
              <p className="text-gray-700">
                Generally, no. One person can only have one ABN. If you operate different businesses, you typically use the same ABN for all activities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What if I stop working as a support provider?</h3>
              <p className="text-gray-700">
                You should cancel your ABN if you're no longer operating a business. This can be done online through your MyGov account or by calling the ATO.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you have your ABN, it's time to understand GST requirements and determine if you need to register for GST as a support provider.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/goods-and-services-tax-gst"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About GST Registration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/tax-file-number"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Tax File Number
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/goods-and-services-tax-gst"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Goods and Services Tax
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
