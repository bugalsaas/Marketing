import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, DollarSign, TrendingUp, Calculator, PieChart } from 'lucide-react';

export default function FinancialManagementForSupportProvidersPage() {
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
                  <Link href="/starting-a-support-provider-journey/taking-on-new-participants" className="text-gray-500 hover:text-gray-700">
                    Taking on New Participants
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">Financial Management</span>
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
              Financial Management for Support Providers: Business Success Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Master the financial aspects of running a successful support provider business. Learn about budgeting, cash flow management, pricing strategies, and long-term financial planning.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-900">Why This Matters</h3>
              </div>
              <p className="text-green-800">
                Effective financial management is crucial for business sustainability, growth, and personal financial security. Good financial practices help you make informed decisions and build a thriving support provider business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Financial Management Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Financial Management Fundamentals</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              As a support provider, your financial success depends on understanding your business finances, managing cash flow effectively, and making informed decisions about pricing, expenses, and growth. Good financial management ensures you can provide quality services while building a sustainable business.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Financial Areas:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Budgeting and cash flow management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Pricing strategies and rate setting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Expense tracking and cost control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Tax planning and compliance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Goals:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Achieve sustainable profitability</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Build emergency savings</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Plan for business growth</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Secure personal financial future</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Budgeting and Cash Flow Management */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Budgeting and Cash Flow Management</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Effective budgeting and cash flow management are essential for maintaining financial stability. Understanding your income patterns, managing expenses, and planning for seasonal variations helps ensure your business remains viable throughout the year.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Creating Your Business Budget</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Income Sources</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <DollarSign className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">NDIS participant payments</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Private client fees</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Group program income</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Training and consultation fees</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Fixed Expenses</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Insurance premiums</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Professional memberships</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Software subscriptions</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Phone and internet</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Variable Expenses</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Transportation</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Fuel costs</li>
                      <li>• Vehicle maintenance</li>
                      <li>• Parking fees</li>
                      <li>• Public transport</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Development</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Training courses</li>
                      <li>• Conference attendance</li>
                      <li>• Certification renewals</li>
                      <li>• Professional materials</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Operations</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Office supplies</li>
                      <li>• Equipment purchases</li>
                      <li>• Marketing materials</li>
                      <li>• Bank fees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-yellow-900 mb-2">Cash Flow Management Tips:</h4>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Keep 3-6 months of expenses in emergency savings</li>
                  <li>• Invoice promptly and follow up on overdue payments</li>
                  <li>• Plan for seasonal variations in income</li>
                  <li>• Track your cash flow weekly to identify patterns</li>
                  <li>• Consider payment plans for large expenses</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Strategies and Rate Setting */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Strategies and Rate Setting</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Setting appropriate rates is crucial for business success. Your pricing should reflect your expertise, cover your costs, provide fair compensation, and remain competitive in the market while ensuring you can deliver quality services.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Factors to Consider When Setting Rates</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-purple-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-purple-900 mb-3">Your Costs</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Direct service costs (time, materials)</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Overhead expenses (insurance, equipment)</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Professional development costs</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Tax obligations and superannuation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-orange-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-orange-900 mb-3">Market Factors</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Local market rates and competition</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">NDIS price limits and guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Your experience and qualifications</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Specialised skills or services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Pricing Strategies</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Cost-Plus Pricing</h4>
                      <p className="text-gray-700 text-sm">Calculate your total costs and add a profit margin (typically 20-30%). This ensures you cover all expenses and earn a reasonable profit.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Value-Based Pricing</h4>
                      <p className="text-gray-700 text-sm">Price based on the value you provide to participants and families. This approach works well for specialised services or experienced providers.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                      <p className="text-gray-700 text-sm">Research local market rates and price within the range, adjusting based on your experience and service quality.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tiered Pricing</h4>
                      <p className="text-gray-700 text-sm">Offer different service levels at different price points, allowing participants to choose based on their needs and budget.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">NDIS Pricing Considerations:</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Check NDIS price limits for your service types</li>
                  <li>• Consider travel time and distance factors</li>
                  <li>• Factor in preparation and documentation time</li>
                  <li>• Account for cancellation and no-show policies</li>
                  <li>• Review rates annually and adjust as needed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expense Tracking and Cost Control */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Expense Tracking and Cost Control</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Effective expense tracking helps you understand where your money goes, identify cost-saving opportunities, and maximize your business profitability. Regular monitoring of expenses ensures you stay within budget and make informed financial decisions.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Essential Expense Categories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Direct Service Costs</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <PieChart className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Transportation and travel</span>
                      </li>
                      <li className="flex items-start">
                        <PieChart className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Activity materials and supplies</span>
                      </li>
                      <li className="flex items-start">
                        <PieChart className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Meals and refreshments (if applicable)</span>
                      </li>
                      <li className="flex items-start">
                        <PieChart className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Equipment and technology</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Business Overhead</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <PieChart className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Insurance premiums</span>
                      </li>
                      <li className="flex items-start">
                        <PieChart className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Professional development</span>
                      </li>
                      <li className="flex items-start">
                        <PieChart className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Marketing and advertising</span>
                      </li>
                      <li className="flex items-start">
                        <PieChart className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Administrative costs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cost Control Strategies</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Track Every Expense</h4>
                      <p className="text-gray-700 text-sm">Use accounting software or apps to record all business expenses immediately. Keep receipts and categorise expenses properly for tax purposes.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Review Expenses Monthly</h4>
                      <p className="text-gray-700 text-sm">Analyse your spending patterns to identify areas where you can reduce costs or find more cost-effective alternatives.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Negotiate Better Rates</h4>
                      <p className="text-gray-700 text-sm">Regularly review service contracts and negotiate better rates for insurance, software, and other recurring expenses.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Plan Major Purchases</h4>
                      <p className="text-gray-700 text-sm">Budget for large expenses and shop around for the best deals. Consider timing purchases to take advantage of sales or tax benefits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Planning and Compliance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tax Planning and Compliance</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Proper tax planning and compliance are essential for avoiding penalties and maximizing your after-tax income. Understanding your tax obligations and planning throughout the year helps ensure you meet all requirements while taking advantage of available deductions.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Tax Obligations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-red-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-red-900 mb-3">Income Tax</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Report all business income</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Claim legitimate business deductions</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Pay quarterly PAYG installments if required</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Lodge tax return by due date</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">GST Obligations</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Charge GST on taxable supplies</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Claim GST credits on business purchases</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Lodge quarterly BAS returns</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Pay GST liability by due date</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Common Business Deductions</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Vehicle Expenses</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Fuel and maintenance</li>
                      <li>• Registration and insurance</li>
                      <li>• Depreciation or lease costs</li>
                      <li>• Parking and tolls</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Home Office</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Rent or mortgage interest</li>
                      <li>• Utilities and internet</li>
                      <li>• Office equipment and furniture</li>
                      <li>• Phone and mobile costs</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Development</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Training courses and conferences</li>
                      <li>• Professional memberships</li>
                      <li>• Books and educational materials</li>
                      <li>• Certification renewals</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-green-900 mb-2">Tax Planning Tips:</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Keep detailed records of all business expenses</li>
                  <li>• Set aside money for tax payments throughout the year</li>
                  <li>• Consider making additional superannuation contributions</li>
                  <li>• Plan major purchases to optimise tax timing</li>
                  <li>• Consult with a tax professional for complex situations</li>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much should I set aside for taxes as a support provider?</h3>
              <p className="text-gray-700">
                As a general rule, set aside 25-30% of your gross income for taxes, including income tax, GST (if registered), and superannuation. The exact percentage depends on your income level and deductions. Consider setting up a separate savings account for tax payments.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the difference between cash flow and profit?</h3>
              <p className="text-gray-700">
                Cash flow is the money coming in and going out of your business, while profit is your revenue minus expenses. You can be profitable but have poor cash flow if clients pay slowly, or have good cash flow but low profits if your expenses are high. Both are important to monitor.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How often should I review my financial performance?</h3>
              <p className="text-gray-700">
                Review your financial performance monthly to track income, expenses, and cash flow. Conduct a more detailed analysis quarterly to assess profitability, identify trends, and make adjustments to your business strategy. Annual reviews help with long-term planning and goal setting.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Should I hire an accountant or bookkeeper?</h3>
              <p className="text-gray-700">
                For most support providers, hiring a bookkeeper for regular record-keeping and an accountant for tax preparation and advice is worthwhile. This frees up your time for client work and ensures compliance. Consider your business size, complexity, and comfort with financial tasks when deciding.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How can I improve my business profitability?</h3>
              <p className="text-gray-700">
                Focus on increasing revenue through higher rates, more clients, or additional services, while controlling costs through better expense management. Improve efficiency in service delivery, reduce waste, and regularly review your pricing strategy. Consider specializing in higher-value services.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand financial management, it's time to learn about superannuation requirements and strategies for building your retirement savings as a support provider.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/superannuation-for-support-providers"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About Superannuation for Support Providers
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/taking-on-new-participants"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Taking on New Participants
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/superannuation-for-support-providers"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Superannuation for Support Providers
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
