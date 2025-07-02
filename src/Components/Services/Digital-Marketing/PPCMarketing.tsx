"use client";

import {
  MonitorDot,
  BarChart4,
  Target,
  Search,
  Gauge,
  TrendingUp,
} from "lucide-react";

const ppcServices = [
  {
    icon: <Search className="w-6 h-6 text-yellow-400" />,
    title: "Google Ads (Search & Display)",
    desc: "Targeted campaigns that rank your offer on Google instantly — smart bidding, high ROI.",
  },
  {
    icon: <MonitorDot className="w-6 h-6 text-green-500" />,
    title: "Meta Ads (Facebook & IG)",
    desc: "Conversion-driven ad creatives that reach audiences by interests, behaviors, and intent.",
  },
  {
    icon: <Target className="w-6 h-6 text-pink-500" />,
    title: "Retargeting Ads",
    desc: "Bring back visitors with hyper-personalized ads and abandoned cart recovery funnels.",
  },
  {
    icon: <BarChart4 className="w-6 h-6 text-blue-500" />,
    title: "Performance Tracking",
    desc: "We monitor KPIs like CTR, CPC, ROAS daily — and tweak fast for optimal returns.",
  },
  {
    icon: <Gauge className="w-6 h-6 text-purple-500" />,
    title: "Landing Page Optimization",
    desc: "We align ad strategy with custom landing pages that convert visitors into leads and sales.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-sky-500" />,
    title: "Campaign Scaling",
    desc: "When results hit, we scale intelligently across channels while keeping CAC low.",
  },
];

const PPCMarketing = () => {
  return (
    <section className="relative bg-[#0c0c0c] py-28 px-6 text-white border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            PPC Campaigns
          </span>
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
          High-converting ad strategies across Google, Meta & more built for
          clicks, leads, and sales. Pay only for performance.
        </p>

        {/* Feature Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          {ppcServices.map((service, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-gray-700 hover:border-blue-500 rounded-2xl p-6 text-left shadow-md hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mb-4">
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

export default PPCMarketing;
