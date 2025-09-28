import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, PiggyBank, TrendingUp, Calculator, Target } from 'lucide-react';

export default function SuperannuationForSupportProvidersPage() {
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
                  <Link href="/starting-a-support-provider-journey/financial-management-for-support-providers" className="text-gray-500 hover:text-gray-700">
                    Financial Management
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">Superannuation</span>
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
              Superannuation for Support Providers: Retirement Planning Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Secure your financial future with proper superannuation planning. Learn about contribution requirements, investment strategies, and retirement planning specifically for NDIS support providers.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-purple-900">Why This Matters</h3>
              </div>
              <p className="text-purple-800">
                As a self-employed support provider, you're responsible for your own superannuation. Proper planning ensures you build adequate retirement savings while taking advantage of tax benefits and government incentives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Superannuation Fundamentals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Superannuation Fundamentals for Support Providers</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Unlike employees who receive compulsory superannuation contributions from their employers, self-employed support providers must manage their own superannuation. Understanding your obligations and opportunities is crucial for building a secure retirement fund.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Concepts:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Self-employed superannuation obligations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Concessional and non-concessional contributions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Government co-contributions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Investment options and risk management</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of Superannuation:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <PiggyBank className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Tax-effective retirement savings</span>
                  </li>
                  <li className="flex items-start">
                    <PiggyBank className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Compound interest growth over time</span>
                  </li>
                  <li className="flex items-start">
                    <PiggyBank className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Government incentives and co-contributions</span>
                  </li>
                  <li className="flex items-start">
                    <PiggyBank className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Asset protection and estate planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Superannuation Contribution Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Superannuation Contribution Requirements</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              As a self-employed support provider, you're not legally required to make superannuation contributions, but it's highly recommended for your financial future. Understanding contribution limits and tax benefits helps you make informed decisions about your retirement savings.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contribution Types and Limits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Concessional Contributions (Before Tax)</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Taxed at 15% in super (vs your marginal rate)</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Annual limit: $27,500 (2023-24)</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Includes employer contributions and salary sacrifice</span>
                      </li>
                      <li className="flex items-start">
                        <Calculator className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Can carry forward unused amounts for 5 years</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Non-Concessional Contributions (After Tax)</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Made from after-tax income</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Annual limit: $110,000 (2023-24)</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">No tax on withdrawal after age 60</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Can bring forward 3 years ($330,000)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recommended Contribution Strategies</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Start with 10% of Income</h4>
                      <p className="text-gray-700 text-sm">Aim to contribute at least 10% of your gross income to superannuation. This provides a good foundation for retirement savings while remaining manageable for your budget.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Maximize Concessional Contributions</h4>
                      <p className="text-gray-700 text-sm">Take advantage of the 15% tax rate on concessional contributions, especially if you're in a higher tax bracket. This provides significant tax savings.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Regular Monthly Contributions</h4>
                      <p className="text-gray-700 text-sm">Set up automatic monthly contributions to ensure consistency. This dollar-cost averaging approach helps smooth out market volatility.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Increase Contributions Over Time</h4>
                      <p className="text-gray-700 text-sm">Gradually increase your contribution rate as your business grows and income increases. Aim to reach 15-20% of income by mid-career.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Government Co-Contributions and Incentives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Government Co-Contributions and Incentives</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              The Australian government offers several incentives to encourage superannuation contributions, particularly for low and middle-income earners. Understanding these programs can significantly boost your retirement savings.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Government Co-Contribution</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-green-900 mb-3">How It Works</h4>
                  <p className="text-green-800 mb-4">
                    If you make non-concessional contributions and your total income is below the threshold, the government will match your contribution up to a maximum amount.
                  </p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Maximum co-contribution: $500 (2023-24)</li>
                    <li>• Income threshold: $43,445 (2023-24)</li>
                    <li>• Reduces by 3.33 cents for every dollar above threshold</li>
                    <li>• Cuts out at $58,445 total income</li>
                    <li>• Must make at least $1,000 non-concessional contribution</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Low Income Super Tax Offset (LISTO)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Eligibility</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Total income below $37,000</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Have concessional contributions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Australian resident for tax purposes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Benefits</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Up to $500 tax offset per year</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Automatically paid to your super fund</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">No application required</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-semibold text-yellow-900 mb-2">Maximizing Government Incentives:</h4>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Make non-concessional contributions early in the financial year</li>
                  <li>• Keep track of your total income to stay within thresholds</li>
                  <li>• Consider timing of business income to optimise eligibility</li>
                  <li>• Review your super fund's co-contribution processing</li>
                  <li>• Check ATO website for current thresholds and rates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Choosing a Superannuation Fund */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Choosing a Superannuation Fund</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Selecting the right superannuation fund is crucial for maximizing your retirement savings. Consider fees, investment options, performance history, and services when making your choice.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Types of Superannuation Funds</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-purple-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-purple-900 mb-3">Industry Funds</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Not-for-profit structure</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Generally lower fees</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Good long-term performance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Member-focused approach</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-orange-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-orange-900 mb-3">Retail Funds</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Run by financial institutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Wide range of investment options</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Professional management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">May have higher fees</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Selection Criteria</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fees and Costs</h4>
                      <p className="text-gray-700 text-sm">Compare administration fees, investment fees, and other charges. Lower fees mean more money stays in your account to grow.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Investment Performance</h4>
                      <p className="text-gray-700 text-sm">Review historical performance across different investment options. Past performance doesn't guarantee future results, but it provides insight into fund management.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Investment Options</h4>
                      <p className="text-gray-700 text-sm">Consider the range of investment choices available, from conservative to growth options, and whether they align with your risk tolerance and timeline.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Insurance Options</h4>
                      <p className="text-gray-700 text-sm">Check if the fund offers life, total and permanent disability, and income protection insurance, and whether you can opt in or out.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Retirement Planning Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Retirement Planning Strategies</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Effective retirement planning involves setting clear goals, understanding your retirement needs, and implementing strategies to achieve them. As a support provider, consider both your personal retirement goals and the unique aspects of your career.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Setting Retirement Goals</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Financial Targets</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Target retirement age and lifestyle</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Required annual income in retirement</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Total superannuation balance needed</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Additional savings and investments</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Career Considerations</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Physical demands of support work</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Transition to less physically demanding roles</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Part-time or consulting opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Skills transfer to other industries</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Building Your Retirement Fund</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Start Early and Contribute Regularly</h4>
                      <p className="text-gray-700 text-sm">The power of compound interest means starting early has a huge impact. Even small regular contributions can grow significantly over time.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Diversify Your Investments</h4>
                      <p className="text-gray-700 text-sm">Don't put all your eggs in one basket. Consider a mix of growth and defensive assets appropriate for your age and risk tolerance.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Review and Adjust Regularly</h4>
                      <p className="text-gray-700 text-sm">Your circumstances and goals will change over time. Review your superannuation strategy annually and adjust as needed.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Consider Additional Strategies</h4>
                      <p className="text-gray-700 text-sm">Look into salary sacrifice, spouse contributions, and other strategies to maximize your superannuation benefits within legal limits.</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much superannuation should I have as a support provider?</h3>
              <p className="text-gray-700">
                A general rule is to have the equivalent of your annual salary in super by age 30, 3 times by age 40, 5 times by age 50, and 7 times by age 60. However, your specific needs depend on your desired retirement lifestyle, other assets, and expected expenses.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I access my superannuation early as a support provider?</h3>
              <p className="text-gray-700">
                Generally, you can only access superannuation after reaching preservation age (55-60 depending on birth date) and meeting a condition of release. Early access is only available in very limited circumstances like severe financial hardship or terminal illness. Plan your finances accordingly.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens to my superannuation if I change careers?</h3>
              <p className="text-gray-700">
                Your superannuation stays with you regardless of career changes. You can consolidate multiple super accounts, continue making contributions, or start a new account. The key is to keep track of all your superannuation and avoid paying multiple sets of fees.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Should I make extra contributions to superannuation or invest elsewhere?</h3>
              <p className="text-gray-700">
                Superannuation offers tax advantages but has restrictions on access. Consider your timeline, tax situation, and liquidity needs. Many people use a combination of superannuation for long-term retirement savings and other investments for medium-term goals or flexibility.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I choose between different investment options in my super fund?</h3>
              <p className="text-gray-700">
                Consider your age, risk tolerance, and time until retirement. Younger people can generally afford more growth-focused options, while those closer to retirement may prefer more conservative investments. Many funds offer lifecycle options that automatically adjust as you age.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand superannuation planning, it's time to learn about NDIS registration requirements and how to become a registered NDIS provider for enhanced opportunities.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/ndis-registration"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About NDIS Registration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/financial-management-for-support-providers"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Financial Management
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/ndis-registration"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: NDIS Registration
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
