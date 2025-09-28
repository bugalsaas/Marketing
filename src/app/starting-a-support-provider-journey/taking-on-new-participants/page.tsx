import Link from 'next/link';
import { CheckCircle, ArrowRight, AlertCircle, ExternalLink, Clock, FileText, Shield, Users, Handshake, Clipboard, Heart } from 'lucide-react';

export default function TakingOnNewParticipantsPage() {
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
                  <Link href="/starting-a-support-provider-journey/marketing-for-support-provider" className="text-gray-500 hover:text-gray-700">
                    Marketing
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-900 font-medium">Taking on New Participants</span>
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
              Taking on New Participants: Client Onboarding Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn how to effectively onboard new participants, establish clear service agreements, and build strong working relationships that benefit both you and your clients.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">Why This Matters</h3>
              </div>
              <p className="text-blue-800">
                Proper onboarding sets the foundation for successful long-term relationships. Clear expectations, thorough documentation, and effective communication ensure both you and your participants have a positive experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Initial Consultation Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Initial Consultation Process</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              The initial consultation is your opportunity to understand the participant's needs, assess compatibility, and determine if you're the right fit for each other. This meeting sets the tone for your entire working relationship.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Before the Meeting:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Review any available NDIS plan details</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Prepare questions about their goals and needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Bring your professional materials and references</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Choose a comfortable, accessible meeting location</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">During the Meeting:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Listen actively to their needs and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Explain your approach and experience</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Discuss expectations and boundaries</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Answer questions about your services and rates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Agreement Development */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Agreement Development</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              A comprehensive service agreement protects both you and your participants by clearly outlining expectations, responsibilities, and terms of service. This document is essential for professional practice and legal protection.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Essential Elements of a Service Agreement</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Service Details</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Specific services to be provided</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Service delivery schedule and frequency</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Location of service delivery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Expected outcomes and goals</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Financial Terms</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Hourly rates and payment terms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">NDIS funding arrangements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Cancellation and rescheduling policies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Expense reimbursement procedures</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Important Clauses</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Confidentiality and Privacy</h4>
                      <p className="text-gray-700 text-sm">Clear statements about how participant information will be protected and used, including compliance with privacy laws and NDIS requirements.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Code of Conduct</h4>
                      <p className="text-gray-700 text-sm">Reference to NDIS Code of Conduct and your commitment to professional standards and ethical practice.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Termination and Notice Periods</h4>
                      <p className="text-gray-700 text-sm">Clear procedures for ending the service relationship, including notice periods and transition planning.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Emergency Procedures</h4>
                      <p className="text-gray-700 text-sm">Protocols for handling emergencies, including contact information and escalation procedures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation and Record Keeping */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Documentation and Record Keeping</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Proper documentation is essential for quality service delivery, legal compliance, and professional accountability. Good record keeping helps track progress, ensures continuity of care, and protects both you and your participants.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Essential Documentation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-purple-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-purple-900 mb-3">Participant Records</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Personal information and contact details</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">NDIS plan details and funding information</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Medical information and support needs</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Emergency contacts and preferences</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-orange-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-orange-900 mb-3">Service Records</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Clipboard className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Daily activity logs and progress notes</span>
                      </li>
                      <li className="flex items-start">
                        <Clipboard className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Incident reports and safety concerns</span>
                      </li>
                      <li className="flex items-start">
                        <Clipboard className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Communication with families and support coordinators</span>
                      </li>
                      <li className="flex items-start">
                        <Clipboard className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Goal tracking and outcome measurements</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Record Keeping Best Practices</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Document Immediately</h4>
                      <p className="text-gray-700 text-sm">Record information as soon as possible after each interaction to ensure accuracy and completeness.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Use Clear, Objective Language</h4>
                      <p className="text-gray-700 text-sm">Write in a professional, factual manner that focuses on observable behaviours and outcomes rather than opinions.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Maintain Security and Privacy</h4>
                      <p className="text-gray-700 text-sm">Store records securely, use password protection, and ensure only authorised personnel can access sensitive information.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Regular Review and Updates</h4>
                      <p className="text-gray-700 text-sm">Periodically review and update participant information to ensure it remains current and relevant.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building Effective Relationships */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Building Effective Relationships</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Strong relationships with participants and their families are the foundation of effective support work. Building trust, maintaining professional boundaries, and fostering open communication creates positive outcomes for everyone involved.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Relationship Principles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-green-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-green-900 mb-3">Trust and Respect</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Heart className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Listen actively and show genuine interest</span>
                      </li>
                      <li className="flex items-start">
                        <Heart className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Respect participant choices and preferences</span>
                      </li>
                      <li className="flex items-start">
                        <Heart className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Maintain confidentiality and privacy</span>
                      </li>
                      <li className="flex items-start">
                        <Heart className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Be reliable and consistent</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Professional Boundaries</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Maintain appropriate personal space</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Avoid dual relationships and conflicts of interest</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Keep personal and professional lives separate</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">Follow NDIS Code of Conduct</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Communication Strategies</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Active Listening</h4>
                      <p className="text-gray-700 text-sm">Give your full attention, ask clarifying questions, and reflect back what you've heard to ensure understanding.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-green-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Clear and Simple Language</h4>
                      <p className="text-gray-700 text-sm">Use language that is appropriate for the participant's communication needs and avoid jargon or complex terms.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Regular Check-ins</h4>
                      <p className="text-gray-700 text-sm">Schedule regular meetings to discuss progress, concerns, and any changes in needs or preferences.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Family Involvement</h4>
                      <p className="text-gray-700 text-sm">Include family members and carers in communication when appropriate and with participant consent.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Managing Challenges and Difficult Situations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Managing Challenges and Difficult Situations</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8">
              Working with participants can sometimes present challenges. Being prepared with strategies for difficult situations helps you maintain professionalism and provide effective support even when things don't go as planned.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Common Challenges and Solutions</h3>
                <div className="space-y-6">
                  <div className="border border-yellow-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-yellow-900 mb-3">Behavioural Challenges</h4>
                    <p className="text-gray-700 mb-3">When participants display challenging behaviours, it's important to remain calm and use appropriate de-escalation techniques.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Stay calm and use a gentle, non-threatening approach</li>
                      <li>• Identify triggers and work to prevent escalation</li>
                      <li>• Use positive reinforcement and redirection</li>
                      <li>• Document incidents and seek support when needed</li>
                    </ul>
                  </div>

                  <div className="border border-red-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-red-900 mb-3">Communication Difficulties</h4>
                    <p className="text-gray-700 mb-3">Some participants may have communication challenges that require patience and alternative communication methods.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Use visual aids, gestures, or assistive technology</li>
                      <li>• Allow extra time for responses</li>
                      <li>• Work with speech therapists or communication specialists</li>
                      <li>• Learn about the participant's preferred communication methods</li>
                    </ul>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-blue-900 mb-3">Family Conflicts</h4>
                    <p className="text-gray-700 mb-3">Sometimes family members may have different expectations or concerns about the support being provided.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Listen to concerns and validate feelings</li>
                      <li>• Clarify roles and responsibilities</li>
                      <li>• Involve support coordinators when necessary</li>
                      <li>• Focus on the participant's best interests</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold text-orange-900 mb-2">When to Seek Additional Support:</h4>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• If you feel unsafe or unable to manage a situation</li>
                  <li>• When participant needs exceed your expertise or qualifications</li>
                  <li>• If there are concerns about participant safety or wellbeing</li>
                  <li>• When family conflicts cannot be resolved through discussion</li>
                  <li>• If you need guidance on complex behavioural or medical issues</li>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do I know if a participant is a good fit for my services?</h3>
              <p className="text-gray-700">
                Consider your skills, experience, and comfort level with their specific needs. Assess whether you can provide the level of support required, if your schedules align, and if you feel you can build a positive working relationship. Trust your instincts and be honest about your limitations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What should I do if a participant's needs change significantly?</h3>
              <p className="text-gray-700">
                Communicate openly with the participant and their family about the changes. Assess whether you can adapt your services or if additional support is needed. Update service agreements as necessary and involve support coordinators if the changes affect NDIS funding or plan requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How often should I review and update service agreements?</h3>
              <p className="text-gray-700">
                Review service agreements at least annually or whenever there are significant changes in the participant's needs, goals, or circumstances. Regular reviews ensure the agreement remains relevant and that both parties are clear about expectations and responsibilities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What if a participant or family is unhappy with my services?</h3>
              <p className="text-gray-700">
                Listen to their concerns without becoming defensive. Ask specific questions about what isn't working and what they would like to see changed. Be open to feedback and willing to make adjustments where appropriate. If issues cannot be resolved, consider involving a mediator or support coordinator.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How can I maintain professional boundaries while building rapport?</h3>
              <p className="text-gray-700">
                Be friendly and personable while maintaining appropriate professional distance. Avoid sharing personal problems or becoming overly involved in the participant's personal life. Focus on their goals and needs, and remember that you're there to provide support, not friendship. Regular supervision or peer support can help you maintain perspective.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Next Step?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Now that you understand how to take on new participants, it's time to learn about effective financial management strategies for your growing support provider business.
            </p>
            <Link 
              href="/starting-a-support-provider-journey/financial-management-for-support-providers"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn About Financial Management
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/starting-a-support-provider-journey/marketing-for-support-provider"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            ← Back to Marketing for Support Providers
          </Link>
          <Link 
            href="/starting-a-support-provider-journey/financial-management-for-support-providers"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Next: Financial Management
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
