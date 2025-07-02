"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const comprehensiveFAQs = [
  // ========== GENERAL PARTNERSHIP ========== //
  {
    question: "How does your white-label partnership program work?",
    answer: (
      <div className="space-y-3">
        <p>Our turnkey solution handles all execution while you maintain client relationships:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Brand transparency:</strong> We never disclose our partnership</li>
          <li><strong>Unified communication:</strong> Use our white-labeled project portal</li>
          <li><strong>Flexible engagement:</strong> Project-based or monthly retainers</li>
          <li><strong>Scalable capacity:</strong> From 10 to 100+ hours/week</li>
        </ul>
      </div>
    )
  },

  // ========== WEB DEVELOPMENT ========== //
  {
    question: "What complex web development projects can you handle?",
    answer: (
      <div className="space-y-3">
        <p>Our full-stack team delivers:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Custom web apps:</strong> SaaS platforms, ERPs, CRMs with React/Node.js</li>
          <li><strong>E-commerce:</strong> Headless Shopify, WooCommerce, custom marketplaces</li>
          <li><strong>Web portals:</strong> Member areas with subscription logic</li>
          <li><strong>API integrations:</strong> Payment gateways, shipping providers, CRMs</li>
          <li><strong>Database solutions:</strong> MongoDB, PostgreSQL, Firebase implementations</li>
        </ul>
        <p className="pt-2 text-blue-400">Typical project timeline: 4-12 weeks</p>
      </div>
    )
  },

  // ========== UI/UX DESIGN ========== //
  {
    question: "What's included in your UI/UX design service?",
    answer: (
      <div className="space-y-3">
        <p>End-to-end design execution:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>User research:</strong> Personas, journey maps, competitive analysis</li>
          <li><strong>Wireframing:</strong> Low-fi to interactive prototypes</li>
          <li><strong>UI design:</strong> Pixel-perfect screens with design systems</li>
          <li><strong>Handoff:</strong> Developer-ready Figma files with specs</li>
          <li><strong>Specializations:</strong> Mobile apps, dashboards, landing pages</li>
        </ul>
        <p className="pt-2 text-blue-400">Standard deliverable: 50+ screen designs</p>
      </div>
    )
  },

  // ========== GENERAL PARTNERSHIP ========== //
  {
    question: "How do you ensure consistent quality across services?",
    answer: (
      <div className="space-y-3">
        <p>Our 3-tier quality framework:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Specialist review:</strong> Initial quality check by production team</li>
          <li><strong>Technical audit:</strong> Senior expert verification</li>
          <li><strong>Client-ready review:</strong> Final polish matching brand guidelines</li>
        </ul>
        <p className="pt-2">Plus automated testing for web projects and accessibility checks for designs.</p>
      </div>
    )
  },

  // ========== DIGITAL MARKETING ========== //
  {
    question: "What digital marketing services do you provide?",
    answer: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Paid Media:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Google Ads (Search, Display, YouTube)</li>
            <li>Meta Ads (Facebook, Instagram)</li>
            <li>LinkedIn B2B campaigns</li>
            <li>Programmatic display</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Organic Growth:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Technical + on-page SEO</li>
            <li>Content marketing strategy</li>
            <li>Email campaign automation</li>
            <li>Social media management</li>
          </ul>
        </div>
        <p className="md:col-span-2 pt-2 text-blue-400">Average client ROI: 3-5x ad spend</p>
      </div>
    )
  },

  // ========== GRAPHIC DESIGN ========== //
  {
    question: "What types of graphic design do you deliver?",
    answer: (
      <div className="space-y-3">
        <p>Comprehensive visual assets:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Brand identity:</strong> Logo suites, style guides, visual systems</li>
          <li><strong>Marketing collateral:</strong> Brochures, flyers, banners</li>
          <li><strong>Digital assets:</strong> Social media templates, email headers</li>
          <li><strong>Presentation design:</strong> Investor decks, sales materials</li>
          <li><strong>Packaging:</strong> Product labels, retail displays</li>
        </ul>
        <p className="pt-2 text-blue-400">Standard turnaround: 3-5 business days</p>
      </div>
    )
  },

  // ========== GENERAL PARTNERSHIP ========== //
  {
    question: "What's your typical project workflow?",
    answer: (
      <div className="space-y-3">
        <ol className="list-decimal pl-5 space-y-3">
          <li><strong>Discovery:</strong> Requirements gathering (1-3 days)</li>
          <li><strong>Planning:</strong> Technical specs and timeline approval</li>
          <li><strong>Execution:</strong> Weekly progress updates</li>
          <li><strong>Delivery:</strong> Final files and documentation</li>
          <li><strong>Support:</strong> Post-launch optimization</li>
        </ol>
        <p className="pt-2 text-blue-400">Flexible to adapt to your existing processes</p>
      </div>
    )
  },

  // ========== VIDEO PRODUCTION ========== //
  {
    question: "What video production services do you offer?",
    answer: (
      <div className="space-y-3">
        <p>Full-cycle video solutions:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Explainer videos:</strong> 2D/3D animation</li>
          <li><strong>Product demos:</strong> Feature highlights with motion graphics</li>
          <li><strong>Testimonials:</strong> Client case study videos</li>
          <li><strong>Social content:</strong> Platform-optimized shorts</li>
          <li><strong>Training videos:</strong> Instructional screencasts</li>
        </ul>
        <p className="pt-2 text-blue-400">Standard package: 3 video versions + project files</p>
      </div>
    )
  },

  // ========== 3D SERVICES ========== //
  {
    question: "What 3D visualization can you create?",
    answer: (
      <div className="space-y-3">
        <p>High-fidelity 3D assets:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Product modeling:</strong> Photorealistic renders</li>
          <li><strong>Architectural viz:</strong> Interior/exterior walkthroughs</li>
          <li><strong>Medical animation:</strong> Procedure visualizations</li>
          <li><strong>AR/VR content:</strong> WebXR and mobile experiences</li>
          <li><strong>Game assets:</strong> Low-poly models for Unity/Unreal</li>
        </ul>
        <p className="pt-2 text-blue-400">File formats: FBX, OBJ, GLTF, USDZ</p>
      </div>
    )
  }
];

export const ComprehensiveFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
              Partnership & Service FAQs
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything about working with us and our service capabilities.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-2">
          {comprehensiveFAQs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className=" cursor-pointer w-full flex justify-between items-start text-left focus:outline-none py-6 hover:bg-gray-900/30 transition-colors px-4 rounded-lg"
              >
                <h3 className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </h3>
                <div
                  className="flex-shrink-0 mt-1"
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </button>

                {activeIndex === index && (
                  <div
                    className="overflow-hidden"
                  >
                    <div className="pb-6 px-4 text-gray-300">
                      {faq.answer}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};