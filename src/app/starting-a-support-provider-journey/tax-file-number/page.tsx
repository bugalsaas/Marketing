import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield } from 'lucide-react';

export default function TaxFileNumberPage() {
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
                  <span className="text-gray-900 font-medium">Tax File Number</span>
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
              Tax File Number (TFN) for NDIS Support Providers: Complete Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your Tax File Number is the foundation of your financial identity in Australia. Learn everything you need to know about obtaining and using your TFN as an independent support provider.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Why This Matters</h3>
              </div>
              <p className="text-blue-800">
                Without a TFN, you'll pay the highest tax rate on all your income and won't be able to claim business expenses. Getting your TFN is the first critical step in setting up your support provider business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* What is a TFN */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is a Tax File Number (TFN)?</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              A Tax File Number (TFN) is a unique 9-digit number issued by the Australian Taxation Office (ATO) to individuals and organizations for tax and superannuation purposes. Think of it as your financial identity number in Australia.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Characteristics:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Unique 9-digit number (e.g., 123 456 789)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Free to obtain and maintain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Valid for your entire lifetime</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Required for all tax-related activities</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What It's Used For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FileText className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Lodging tax returns</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Opening bank accounts</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Claiming government benefits</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Superannuation contributions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Support Providers Need a TFN */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Support Providers Need a TFN</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tax Benefits</h3>
              <p className="text-gray-700 mb-6">
                Without a TFN, you'll be taxed at the highest marginal rate (currently 47%) on all your income. With a TFN, you can:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Pay tax at your correct marginal rate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Claim business expenses and deductions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Access tax-free thresholds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Receive tax refunds if overpaid</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Business Requirements</h3>
              <p className="text-gray-700 mb-6">
                As an independent support provider, your TFN is essential for:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Opening business bank accounts</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Applying for an Australian Business Number (ABN)</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Registering for GST if required</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Setting up superannuation accounts</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step-by-Step Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step TFN Application Process</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-8">
              Applying for a TFN is straightforward and can be done online in most cases. Here's exactly what you need to do:
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Check Your Eligibility</h3>
                  <p className="text-gray-700 mb-4">
                    You can apply for a TFN if you're an Australian citizen, permanent resident, or have a valid visa that allows you to work in Australia.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Eligibility Requirements:</h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Australian citizen or permanent resident, OR</li>
                      <li>• Valid visa allowing work in Australia, OR</li>
                      <li>• New Zealand citizen living in Australia</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-green-600">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Gather Required Documents</h3>
                  <p className="text-gray-700 mb-4">
                    You'll need specific identity documents to prove who you are. The ATO requires documents from different categories.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Required Documents:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-green-800 text-sm">
                      <div>
                        <h5 className="font-semibold mb-1">Primary Documents (choose 1):</h5>
                        <ul className="space-y-1">
                          <li>• Australian birth certificate</li>
                          <li>• Australian passport</li>
                          <li>• Australian citizenship certificate</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Secondary Documents (choose 2):</h5>
                        <ul className="space-y-1">
                          <li>• Driver's license</li>
                          <li>• Medicare card</li>
                          <li>• Bank statement</li>
                          <li>• Utility bill</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-purple-600">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply Online</h3>
                  <p className="text-gray-700 mb-4">
                    Visit the ATO website and complete the online application form. The process takes about 10-15 minutes.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Application Steps:</h4>
                    <ol className="text-purple-800 space-y-1 text-sm list-decimal list-inside">
                      <li>Go to <a href="https://www.ato.gov.au/individuals-and-families/tax-file-number/what-is-a-tax-file-number" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">ATO TFN Application</a></li>
                      <li>Click "Apply for a TFN online"</li>
                      <li>Select "Individual" as the entity type</li>
                      <li>Enter your personal details</li>
                      <li>Upload or enter document details</li>
                      <li>Review and submit your application</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-xl font-bold text-orange-600">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Wait for Processing</h3>
                  <p className="text-gray-700 mb-4">
                    Your TFN will be processed and sent to you within 28 days. You'll receive it by mail at your registered address.
                  </p>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-900 mb-2">Processing Timeline:</h4>
                    <ul className="text-orange-800 space-y-1 text-sm">
                      <li>• Online applications: Up to 28 days</li>
                      <li>• Paper applications: Up to 6 weeks</li>
                      <li>• You'll receive a letter with your TFN</li>
                      <li>• Keep this letter in a safe place</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents and Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Required Documents and Information</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              The ATO requires specific documents to verify your identity. You need one document from the primary category and two from the secondary category.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Primary Documents (Choose 1)</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Australian Birth Certificate</h4>
                    <p className="text-gray-600 text-sm">Must be an original or certified copy issued by the Registry of Births, Deaths and Marriages</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Australian Passport</h4>
                    <p className="text-gray-600 text-sm">Current or expired within the last 2 years</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Australian Citizenship Certificate</h4>
                    <p className="text-gray-600 text-sm">Issued by the Department of Home Affairs</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Secondary Documents (Choose 2)</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Driver's License</h4>
                    <p className="text-gray-600 text-sm">Current Australian driver's license or learner's permit</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Medicare Card</h4>
                    <p className="text-gray-600 text-sm">Current Medicare card with your name on it</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Bank Statement</h4>
                    <p className="text-gray-600 text-sm">Recent bank statement (within 12 months) showing your name and address</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Utility Bill</h4>
                    <p className="text-gray-600 text-sm">Recent utility bill (within 12 months) in your name</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-yellow-900 mb-2">Important Notes:</h4>
              <ul className="text-yellow-800 space-y-1 text-sm">
                <li>• All documents must be in your current name</li>
                <li>• If your name has changed, you may need additional documents</li>
                <li>• Documents must be original or certified copies</li>
                <li>• Photocopies or screenshots are not accepted</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Application Mistakes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Application Mistakes to Avoid</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Document Mistakes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Using Expired Documents</h4>
                    <p className="text-gray-600 text-sm">Ensure all documents are current and valid</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Name Mismatches</h4>
                    <p className="text-gray-600 text-sm">All documents must show the same name as your application</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Poor Quality Photos</h4>
                    <p className="text-gray-600 text-sm">Ensure document photos are clear and all text is readable</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Application Mistakes</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Incorrect Personal Details</h4>
                    <p className="text-gray-600 text-sm">Double-check all personal information matches your documents</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Wrong Address</h4>
                    <p className="text-gray-600 text-sm">Use your current residential address, not a PO Box</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Rushing the Process</h4>
                    <p className="text-gray-600 text-sm">Take your time to ensure all information is accurate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TFN vs ABN */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">TFN vs ABN: Understanding the Difference</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Many new support providers confuse TFN and ABN. While both are important, they serve different purposes in your business setup.
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
                    <h4 className="font-semibold text-gray-900 mb-2">Who needs it:</h4>
                    <p className="text-gray-700 text-sm">Every person who works in Australia</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">When to get it:</h4>
                    <p className="text-gray-700 text-sm">Before starting any work or business</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cost:</h4>
                    <p className="text-gray-700 text-sm">Free</p>
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
                    <h4 className="font-semibold text-gray-900 mb-2">Who needs it:</h4>
                    <p className="text-gray-700 text-sm">Businesses and self-employed individuals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">When to get it:</h4>
                    <p className="text-gray-700 text-sm">When starting business activities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cost:</h4>
                    <p className="text-gray-700 text-sm">Free</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Key Differences Summary:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-blue-900 mb-2">TFN is for:</h5>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Personal tax returns</li>
                    <li>• Opening bank accounts</li>
                    <li>• Claiming government benefits</li>
                    <li>• Superannuation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-green-900 mb-2">ABN is for:</h5>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>• Business transactions</li>
                    <li>• Invoicing clients</li>
                    <li>• GST registration</li>
                    <li>• Business identification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Do After Receiving Your TFN */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Do After Receiving Your TFN</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Once you receive your TFN, there are several important steps to take to set up your support provider business properly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Store It Securely</h3>
                  <p className="text-gray-700">Keep your TFN letter in a safe place. You'll need it for future reference and when applying for other business documents.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Open a Business Bank Account</h3>
                  <p className="text-gray-700">Use your TFN to open a separate business bank account. This keeps your business and personal finances separate.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Apply for Your ABN</h3>
                  <p className="text-gray-700">Your TFN is required when applying for an Australian Business Number (ABN), which you'll need for invoicing clients.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Set Up MyGov Account</h3>
                  <p className="text-gray-700">Link your TFN to your MyGov account to access ATO online services and manage your tax affairs easily.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Start Record Keeping</h3>
                  <p className="text-gray-700">Begin keeping records of all business-related expenses and income. Your TFN will be used for tax purposes.</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does it take to get a TFN?</h3>
              <p className="text-gray-700">
                Online applications are typically processed within 28 days, while paper applications can take up to 6 weeks. You'll receive your TFN by mail at your registered address.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I work without a TFN?</h3>
              <p className="text-gray-700">
                While you can technically work without a TFN, you'll be taxed at the highest rate (47%) on all income and won't be able to claim business expenses. It's essential to get your TFN before starting work.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What if I already have a TFN?</h3>
              <p className="text-gray-700">
                If you already have a TFN from previous work or study, you don't need to apply for a new one. Your existing TFN is valid for life and can be used for your support provider business.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I apply for a TFN if I'm on a visa?</h3>
              <p className="text-gray-700">
                Yes, if your visa allows you to work in Australia, you can apply for a TFN. You'll need to provide your visa details and may need additional documentation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What if I lose my TFN letter?</h3>
              <p className="text-gray-700">
                You can find your TFN through your MyGov account linked to the ATO, or by calling the ATO. It's important to keep your TFN secure and not share it unnecessarily.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand the importance of your TFN, it's time to apply for your Australian Business Number (ABN) to start invoicing clients.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/australian-business-number-abn"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About ABN Registration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/intro"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Introduction
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/australian-business-number-abn"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Australian Business Number
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
