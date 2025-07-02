"use client";

import {
  SearchCheck,
  Settings2,
  Link2,
  FileText,
  MapPin,
  TrendingUp,
} from "lucide-react";

const seoPoints = [
  {
    title: "On-Page SEO",
    icon: <SearchCheck className="w-6 h-6 text-green-500" />,
    desc: "Meta tags, keyword optimization, headings, image alt text, and internal linking everything aligned with SEO best practices.",
  },
  {
    title: "Technical SEO",
    icon: <Settings2 className="w-6 h-6 text-yellow-400" />,
    desc: "Site speed, mobile responsiveness, crawlability, structured data, and XML sitemaps we make your website technically perfect for search engines.",
  },
  {
    title: "Backlink Building",
    icon: <Link2 className="w-6 h-6 text-blue-500" />,
    desc: "We acquire high-authority backlinks via white-hat outreach, guest posts, and digital PR to boost your domain authority.",
  },
  {
    title: "SEO Content Strategy",
    icon: <FileText className="w-6 h-6 text-pink-500" />,
    desc: "Topic clusters, pillar pages, long-tail blog posts crafted with intent, keywords, and your ideal audience in mind.",
  },
  {
    title: "Local SEO",
    icon: <MapPin className="w-6 h-6 text-purple-500" />,
    desc: "GMB optimization, local citations, and geo-targeted content to dominate local search and maps listings.",
  },
  {
    title: "SEO Analytics & Reporting",
    icon: <TrendingUp className="w-6 h-6 text-sky-500" />,
    desc: "Track rankings, impressions, traffic sources, and conversions with monthly reports to guide strategy and ROI.",
  },
];

const SEO = () => {
  return (
    <section className="relative bg-[#0b0b0b] py-28 px-6 text-white border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            Search Engine Optimization (SEO)
          </span>
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
          From search engine visibility to real business results our
          full-suite SEO helps you win on Google and grow traffic that actually
          matters.
        </p>

        {/* Service Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          {seoPoints.map((service, i) => (
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

export default SEO;
