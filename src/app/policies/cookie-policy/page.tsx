// app/cookie-policy/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Nexo Mark",
  description:
    "Comprehensive explanation of our use of cookies, tracking technologies, and your privacy controls in compliance with GDPR, CCPA, and other global privacy regulations",
  alternates: {
    canonical: "https://nexomark.agency/policies/cookie-policy",
  },
};

export default function CookiePage() {
  return (
    <section className="bg-[#0a0a0a] text-white pt-40 pb-26 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
          Cookie Policy
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

          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your device when visiting
            websites. We use them to:
          </p>
          <ul className="list-disc pl-5 space-y-2 my-4">
            <li>Remember user preferences</li>
            <li>Analyze site traffic</li>
            <li>Personalize content</li>
            <li>Improve user experience</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            2. Types of Cookies Used
          </h2>
          <div className="bg-[#121212] border border-blue-900/30 rounded-xl p-6 my-4">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Essential Cookies
            </h3>
            <p>Required for basic functionality:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Session management</li>
              <li>Security features</li>
              <li>Load balancing</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">
              Analytical Cookies
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Google Analytics</li>
              <li>Hotjar</li>
              <li>Mixpanel</li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">
              Marketing Cookies
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Facebook Pixel</li>
              <li>LinkedIn Insight Tag</li>
              <li>Google Ads</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            3. Cookie Management
          </h2>
          <p>You can control cookies through:</p>
          <ul className="list-disc pl-5 space-y-2 my-4">
            <li>Browser settings (disable/all)</li>
            <li>Our cookie consent banner</li>
            <li>Third-party opt-out tools</li>
          </ul>
          <p className="text-blue-300">
            <a
              href="https://optout.aboutads.info"
              className="hover:underline"
              target="_blank"
            >
              Digital Advertising Alliance opt-out tool →
            </a>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            4. Do Not Track Signals
          </h2>
          <p>
           {` We currently don't respond to DNT signals as no industry standard
            exists.`}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            5. Policy Updates
          </h2>
          <p>
            We update this policy annually or when adding new tracking
            technologies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
            6. Contact
          </h2>
          <p className="text-blue-400">info@nexomark.agency</p>
        </div>
      </div>
    </section>
  );
}
