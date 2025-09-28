import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, Calculator, DollarSign, TrendingUp, Database, Receipt } from 'lucide-react';

export default function BookkeepingBestPracticesPage() {
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
                  <Link href="/starting-a-support-provider-journey/goods-and-services-tax-gst" className="text-gray-500 hover:text-gray-700">
                    GST
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">Bookkeeping</span>
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
              Bookkeeping Best Practices for NDIS Support Providers
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Proper bookkeeping is essential for your support provider business success. Learn how to set up systems, maintain records, and stay compliant with ATO requirements.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Why This Matters</h3>
              </div>
              <p className="text-blue-800">
                Good bookkeeping helps you track income, claim deductions, prepare tax returns, and make informed business decisions. It's also required by law for tax compliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Why Proper Bookkeeping is Essential */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Proper Bookkeeping is Essential</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              As an independent support provider, maintaining accurate financial records isn't just good practice—it's a legal requirement and essential for business success. Proper bookkeeping helps you understand your business performance, claim all eligible deductions, and stay compliant with ATO requirements.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Requirements:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">ATO requires 5 years of financial records</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Must track all business income and expenses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">GST records required if registered</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Supporting documents for all claims</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Track business performance and profitability</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Maximize tax deductions and refunds</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Make informed pricing decisions</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Prepare for business growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Setting Up Your Business Bank Account */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Setting Up Your Business Bank Account</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              The first step in proper bookkeeping is separating your business and personal finances. This makes record-keeping easier and ensures you can accurately track business income and expenses.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why You Need a Separate Business Account</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-4">Legal Separation</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Clear distinction between business and personal funds</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Easier to prove business expenses to ATO</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Professional appearance for clients</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-4">Accounting Benefits</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Simplified income tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Easier expense categorization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Reduced bookkeeping errors</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">How to Set Up Your Business Account</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Choose Your Bank</h4>
                      <p className="text-gray-700 text-sm">Compare fees, features, and online banking capabilities. Consider business-specific accounts with lower fees for small businesses.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Gather Required Documents</h4>
                      <p className="text-gray-700 text-sm">You'll need your ABN, TFN, business name registration (if applicable), and personal identification documents.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Open the Account</h4>
                      <p className="text-gray-700 text-sm">Visit the bank or apply online. Choose account features like overdraft protection and business debit cards.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Set Up Online Banking</h4>
                      <p className="text-gray-700 text-sm">Enable online banking and download the mobile app for easy access to your business finances.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Bookkeeping Systems and Software */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Bookkeeping Systems and Software</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Choosing the right bookkeeping system is crucial for efficient record-keeping. From simple spreadsheets to comprehensive accounting software, there are options for every budget and skill level.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Software Options for Support Providers</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Basic: Spreadsheets</h4>
                    <p className="text-gray-600 text-sm mb-4">Microsoft Excel or Google Sheets</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Free or low cost</li>
                      <li>• Simple to use</li>
                      <li>• Good for small businesses</li>
                      <li>• Manual data entry</li>
                    </ul>
                    <div className="mt-4">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Best for: New businesses</span>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Intermediate: Cloud Software</h4>
                    <p className="text-gray-600 text-sm mb-4">Xero, QuickBooks, MYOB</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Automated features</li>
                      <li>• Bank integration</li>
                      <li>• GST handling</li>
                      <li>• Monthly subscription</li>
                    </ul>
                    <div className="mt-4">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Best for: Growing businesses</span>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Advanced: Professional</h4>
                    <p className="text-gray-600 text-sm mb-4">Sage, Reckon, MYOB AccountRight</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Full-featured</li>
                      <li>• Advanced reporting</li>
                      <li>• Multi-user access</li>
                      <li>• Higher cost</li>
                    </ul>
                    <div className="mt-4">
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Best for: Established businesses</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recommended Features for Support Providers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Essential Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Income and expense tracking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">GST calculation and reporting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Bank account integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Invoice generation</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Nice-to-Have Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Mobile app access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Receipt scanning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Financial reporting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Tax preparation tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Record-Keeping Requirements and Compliance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Record-Keeping Requirements and Compliance</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              The ATO requires you to keep detailed financial records for at least 5 years. Understanding what records to keep and how to organize them is essential for compliance and efficient tax preparation.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Required Records</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Income Records</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Receipt className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">All invoices issued to clients</span>
                      </li>
                      <li className="flex items-start">
                        <Receipt className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Bank statements showing deposits</span>
                      </li>
                      <li className="flex items-start">
                        <Receipt className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Payment confirmations</span>
                      </li>
                      <li className="flex items-start">
                        <Receipt className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">NDIS payment summaries</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Expense Records</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Receipt className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Receipts for all business purchases</span>
                      </li>
                      <li className="flex items-start">
                        <Receipt className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Bank statements showing payments</span>
                      </li>
                      <li className="flex items-start">
                        <Receipt className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Credit card statements</span>
                      </li>
                      <li className="flex items-start">
                        <Receipt className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Mileage logs for vehicle use</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Common Business Expenses for Support Providers</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Vehicle Expenses</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Fuel and maintenance</li>
                      <li>• Registration and insurance</li>
                      <li>• Parking fees</li>
                      <li>• Tolls and road charges</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Professional Development</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Training courses</li>
                      <li>• Certifications</li>
                      <li>• Conference attendance</li>
                      <li>• Professional memberships</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Business Operations</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Office supplies</li>
                      <li>• Phone and internet</li>
                      <li>• Software subscriptions</li>
                      <li>• Professional indemnity insurance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Bookkeeping Tasks Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Monthly Bookkeeping Tasks Checklist</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Regular bookkeeping tasks help you stay on top of your finances and avoid the stress of year-end catch-up. Here's a monthly checklist to keep your records organized and up-to-date.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Reconcile Bank Statements</h3>
                  <p className="text-gray-700">Match all transactions in your bookkeeping system with your bank statements to ensure accuracy.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Categorize All Transactions</h3>
                  <p className="text-gray-700">Ensure all income and expenses are properly categorized for accurate reporting and tax preparation.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Review Outstanding Invoices</h3>
                  <p className="text-gray-700">Follow up on any unpaid invoices and update your accounts receivable records.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Update Mileage Logs</h3>
                  <p className="text-gray-700">Record all business-related vehicle use for potential tax deductions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5. File Receipts and Documents</h3>
                  <p className="text-gray-700">Organize and file all receipts, invoices, and supporting documents for easy retrieval.</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long do I need to keep my business records?</h3>
              <p className="text-gray-700">
                The ATO requires you to keep business records for at least 5 years from the date you lodge your tax return. This includes all receipts, invoices, bank statements, and supporting documents.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I claim home office expenses as a support provider?</h3>
              <p className="text-gray-700">
                Yes, if you work from home for your support provider business, you can claim a portion of home office expenses including rent, utilities, internet, and phone costs based on the percentage of your home used for business.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the difference between cash and accrual accounting?</h3>
              <p className="text-gray-700">
                Cash accounting records income and expenses when money is received or paid. Accrual accounting records them when the work is done or the expense is incurred. Most small support providers use cash accounting.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need to hire a bookkeeper?</h3>
              <p className="text-gray-700">
                For small support provider businesses, you can often manage bookkeeping yourself with good software. Consider hiring a bookkeeper as your business grows or if you find it too time-consuming.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens if I don't keep proper records?</h3>
              <p className="text-gray-700">
                Poor record-keeping can result in ATO penalties, inability to claim legitimate deductions, and difficulties during tax audits. It's essential to maintain accurate records from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand bookkeeping basics, it's time to learn about the qualifications and certifications required to work as an NDIS support provider.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/support-provider-qualifications"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About Support Provider Qualifications
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/goods-and-services-tax-gst"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to GST Registration
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/support-provider-qualifications"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Support Provider Qualifications
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
