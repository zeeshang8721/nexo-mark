import React from 'react'

const TermsAndConditions = () => {
  return (
    <section className="bg-[#0a0a0a] text-white pt-40 pb-26 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
          Terms & Conditions
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-400 mb-8">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* Introduction */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            1. Introduction
          </h2>
          <p className="mb-4">
           {` These Terms and Conditions ("Terms") constitute a legally binding
            agreement between Nexo Mark Digital Agency ("Company", "we", "us",
            or "our") and the client ("Client", "you", or "your") regarding the
            provision of digital services through our website at`}
            <span className="text-blue-400">nexomark.agency</span> {`(the "Site")`}.
          </p>
          <p>
            By accessing our Site or engaging our services, you acknowledge that
            you have read, understood, and agree to be bound by these Terms in
            their entirety. If you disagree with any part of these Terms, you
            must discontinue use of our services immediately.
          </p>

          {/* Definitions */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            2. Definitions
          </h2>
          <ul className="list-disc pl-5 space-y-2 my-4">
            <li>
              <span className="font-semibold">Services</span>: The digital
              services offered by Nexo Mark as detailed in Section 3
            </li>
            <li>
              <span className="font-semibold">Deliverables</span>: All
              materials, products, and work product developed by Nexo Mark for
              the Client
            </li>
            <li>
              <span className="font-semibold">Partner Agency</span>: A digital
              agency enrolled in our white-label partnership program
            </li>
            <li>
              <span className="font-semibold">Project</span>: A defined scope of
              work with specific deliverables and timeline
            </li>
          </ul>

          {/* Services */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            3. Services Overview
          </h2>
          <p className="mb-4">
            Nexo Mark provides comprehensive digital solutions including but not
            limited to:
          </p>
          <ul className="list-disc pl-5 space-y-2 my-4">
            <li>
              <span className="font-semibold">Custom Web Development</span>:
              Responsive websites, web applications, and e-commerce solutions
            </li>
            <li>
              <span className="font-semibold">UI/UX Design</span>: User
              interface design, user experience optimization, and prototyping
            </li>
            <li>
              <span className="font-semibold">Digital Marketing</span>: SEO,
              PPC, social media marketing, and content strategy
            </li>
            <li>
              <span className="font-semibold">Graphic Design</span>: Brand
              identity, print materials, and digital assets
            </li>
            <li>
              <span className="font-semibold">Video Production</span>:
              Commercial, explainer, and promotional video content
            </li>
            <li>
              <span className="font-semibold">3D Visualization</span>: Product
              renders, architectural visualization, and animations
            </li>
          </ul>
          <p>
            Specific services will be detailed in individual Statements of Work
            (SOW) or Service Agreements.
          </p>

          {/* Agency Partnership Program */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            4. Agency Partnership Program
          </h2>
          <div className="bg-[#121212] border border-blue-900/30 rounded-xl p-6 my-4">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              4.1 White-Label Solutions
            </h3>
            <p className="mb-3">
              Our Partner Program enables digital agencies to{" "}
              <span className="font-semibold">
                scale operations efficiently
              </span>{" "}
              through our white-label services:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
{`                All deliverables are produced under your agency's brand identity
`}              </li>
              <li>
                Direct client communication is maintained through your team
              </li>
              <li>NDA protection for all partner projects</li>
              <li>Tiered partnership levels with increasing benefits</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">
              4.2 Partner Obligations
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Accurate representation of project requirements and client
                expectations
              </li>
              <li>Timely provision of all necessary assets and information</li>
              <li>Adherence to agreed payment schedules</li>
              <li>
                Proper attribution of work in compliance with copyright laws
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">
              4.3 Partner Benefits
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Priority scheduling for partner projects</li>
              <li>Volume-based pricing discounts</li>
              <li>Dedicated account management</li>
              <li>Quarterly business reviews and strategy sessions</li>
            </ul>

            <p className="mt-4 text-blue-300">
              <a
                href="/partners-program"
                className="hover:underline flex items-center"
              >
                View complete Partnership Program terms and requirements →
              </a>
            </p>
          </div>

          {/* Payments */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            5. Payment Terms
          </h2>
          <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 my-4">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              5.1 Fee Structure
            </h3>
            <p className="mb-3">
              All projects require a{" "}
              <span className="font-bold text-white">
                50% non-refundable deposit
              </span>{" "}
              before commencement, with the remaining balance due upon project
              completion unless otherwise specified in the SOW.
            </p>

            <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">
              5.2 Payment Methods
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bank transfers (preferred for large projects)</li>
              <li>Credit card payments (3% processing fee applies)</li>
              <li>Cryptocurrency payments (ETH/BTC accepted)</li>
              <li>Recurring billing for retainer clients</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">
              5.3 Late Payments
            </h3>
            <p className="mb-2">Payments overdue by:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>1-15 days: 5% late fee assessed</li>
              <li>16-30 days: Project work suspended</li>
              <li>30+ days: Legal collection proceedings initiated</li>
            </ul>
            <p className="mt-3 text-sm text-gray-400">
              * Partner agencies in good standing may qualify for extended
              payment terms
            </p>
          </div>

          {/* Intellectual Property */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            6. Intellectual Property
          </h2>
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            6.1 Client Rights
          </h3>
          <p className="mb-4">
            Upon full payment, Clients receive worldwide, perpetual,
            non-exclusive rights to use the Deliverables for their intended
            purpose. All final source files will be transferred unless otherwise
            specified.
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            6.2 Agency Rights
          </h3>
          <p className="mb-4">Nexo Mark retains the right to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Display completed work in our portfolio and marketing materials
            </li>
            <li>Use anonymized project data for internal improvement</li>
            <li>Reuse non-client-specific code snippets and design patterns</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            6.3 Third-Party Assets
          </h3>
          <p>
            Client is responsible for licensing any third-party assets (fonts,
            stock media, etc.) unless procured by Nexo Mark as part of the
            project budget.
          </p>

          {/* Project Timeline */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            7. Project Management
          </h2>
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            7.1 Standard Timelines
          </h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <span className="font-semibold">Web Development</span>: 4-12 weeks
              depending on complexity
            </li>
            <li>
              <span className="font-semibold">Design Projects</span>: 2-6 weeks
              with 3 revision rounds
            </li>
            <li>
              <span className="font-semibold">Marketing Campaigns</span>:
              Minimum 3-month commitment recommended
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            7.2 Client Responsibilities
          </h3>
          <p className="mb-2">
            To maintain project timelines, Clients agree to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Provide all required assets and information by agreed dates</li>
            <li>Respond to requests for feedback within 3 business days</li>
            <li>Designate a single point of contact for project decisions</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            7.3 Change Management
          </h3>
          <p>
            Scope changes requested after project commencement may result in
            adjusted timelines and/or additional fees. Formal change requests
            will be documented and require written approval.
          </p>

          {/* Confidentiality */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            8. Confidentiality
          </h2>
          <p className="mb-4">
            Both parties agree to maintain the confidentiality of all
            proprietary information exchanged during the project term and for 3
            years thereafter. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Business strategies and internal documents</li>
            <li>Unreleased product information</li>
            <li>Proprietary methodologies</li>
            <li>Financial arrangements</li>
          </ul>
          <p>
            Standard NDAs are executed for all Partner Agency engagements and
            available upon request for direct clients.
          </p>

          {/* Limitation of Liability */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            9. Liability
          </h2>
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            9.1 General Limitations
          </h3>
          <p className="mb-4">
           {` Nexo Mark's total liability for any claim related to our services
            shall not exceed the total fees paid by Client for the specific
            project giving rise to the claim. We are not liable for:`}
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Third-party platform changes (e.g., CMS updates, API
              modifications)
            </li>
            <li>Delays caused by late Client feedback or asset delivery</li>
            <li>Downtime of Client-hosted systems</li>
            <li>Consequential or incidental damages</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            9.2 Warranties
          </h3>
          <p>
          {`  All services are provided "as is" without warranty of
            merchantability or fitness for a particular purpose. We warrant that
            deliverables will conform to the specifications in the SOW when
            delivered.`}
          </p>

          {/* Termination */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            10. Termination
          </h2>
          <p className="mb-4">
            Either party may terminate an engagement with 30 days written
            notice. In the event of termination:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Client pays for all work completed through termination date</li>
            <li>Deposits remain non-refundable</li>
            <li>Nexo Mark will deliver work-in-progress materials</li>
            <li>Outstanding balances become immediately due</li>
          </ul>
          <p>
         {`   Partner Agencies may be subject to additional termination terms as
            specified in their Partnership Agreement.`}
          </p>

          {/* Governing Law */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            11. Governing Law
          </h2>
          <p className="mb-4">
          {`  These Terms shall be governed by and construed in accordance with
            the laws of the State of Delaware, without regard to its conflict of
            law provisions. The United Nations Convention on Contracts for the
            International Sale of Goods shall not apply.`}
          </p>
          <p>
         {`   Any disputes arising under these Terms will be resolved through
            binding arbitration in Wilmington, Delaware under the rules of the
            American Arbitration Association. The prevailing party shall be
            entitled to recover reasonable attorneys' fees and costs.`}
          </p>

          {/* General */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            12. General Provisions
          </h2>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              These Terms constitute the entire agreement between the parties
            </li>
            <li>Amendments must be in writing and signed by both parties</li>
            <li>
              If any provision is held invalid, the remainder shall remain in
              effect
            </li>
            <li>
              No waiver of any breach shall constitute a waiver of any
              subsequent breach
            </li>
            <li>Client may not assign rights without our written consent</li>
          </ul>

          {/* Contact */}
          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            13. Contact Information
          </h2>
          <p className="mb-2">
            For questions regarding these Terms or to request a signed copy:
          </p>
          <p className="text-blue-400 mb-1">Nexo Mark Digital Agency</p>
          <p className="text-blue-400 mb-1">1201 Orange Street, Suite 600</p>
          <p className="text-blue-400 mb-1">Wilmington, DE 19801</p>
          <p className="text-blue-400 mb-1">Email: info@nexomark.agency</p>
          <p className="text-blue-400">Phone: +1 (302) 555-0142</p>
        </div>
      </div>
    </section>
  )
}

export default TermsAndConditions