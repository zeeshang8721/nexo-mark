"use client";

import {
  SearchCheck,
  Share2,
  Link,
  MousePointerClick,
  LineChart,
  Settings2,
} from "lucide-react";

const marketingServices = [
  {
    title: "Search Engine Optimization (SEO)",
    icon: <SearchCheck className="w-5 h-5 text-blue-500" />,
    desc: "Boost visibility and rank higher on Google with technical, on-page, and off-page SEO strategies.",
  },
  {
    title: "Social Media Marketing (SMM)",
    icon: <Share2 className="w-5 h-5 text-blue-500" />,
    desc: "Create, manage, and grow your presence across platforms like Instagram, Facebook, and LinkedIn.",
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    icon: <MousePointerClick className="w-5 h-5 text-blue-500" />,
    desc: "Google, Meta, and retargeting ads optimized for clicks, conversions, and real business growth.",
  },
  {
    title: "Technical SEO",
    icon: <Settings2 className="w-5 h-5 text-blue-500" />,
    desc: "Site speed, schema, core web vitals, crawling & indexing — handled with precision.",
  },
  {
    title: "Link Building",
    icon: <Link className="w-5 h-5 text-blue-500" />,
    desc: "High-quality backlinks that build authority and improve search rankings naturally.",
  },
  {
    title: "Performance Tracking",
    icon: <LineChart className="w-5 h-5 text-blue-500" />,
    desc: "Full analytics setup, conversion tracking, and transparent monthly reports.",
  },
];

const DigitalMarketingOverview = () => {
  return (
    <section className="bg-[#0a0a0a] py-28 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
              Digital Marketing Services
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
         {`   Whether it's SEO, paid ads, or social we build campaigns that get
            seen and get results.`}
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {marketingServices.map((service, i) => (
            <div
              key={i}
              className="bg-[#121212] rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-md hover:shadow-blue-500/10"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingOverview;
