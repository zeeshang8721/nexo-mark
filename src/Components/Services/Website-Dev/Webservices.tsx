"use client";

import {
  Briefcase,
  ShoppingCart,
  LayoutDashboard,
  GraduationCap,
  Building2,
  BookText,
} from "lucide-react";

const services = [
  {
    title: "Corporate Presence",
    icon: <Building2 className="w-5 h-5 text-blue-500" />,
    desc: "Enterprise-grade websites tailored for scale, security, and brand authority.",
  },
  {
    title: "E-commerce Platforms",
    icon: <ShoppingCart className="w-5 h-5 text-blue-500" />,
    desc: "Optimized shopping experiences that convert visitors into loyal customers.",
  },
  {
    title: "Creative Portfolios",
    icon: <LayoutDashboard className="w-5 h-5 text-blue-500" />,
    desc: "Visually striking digital spaces to showcase your creative work with impact.",
  },
  {
    title: "Educational Portals",
    icon: <GraduationCap className="w-5 h-5 text-blue-500" />,
    desc: "Custom LMS systems designed for intuitive learning and seamless content delivery.",
  },
  {
    title: "Business Websites",
    icon: <Briefcase className="w-5 h-5 text-blue-500" />,
    desc: "Polished and strategic websites built to boost credibility and generate leads.",
  },
  {
    title: "Content Hubs & Blogs",
    icon: <BookText className="w-5 h-5 text-blue-500" />,
    desc: "Fast, readable, and SEO-ready content platforms for thought leaders and publishers.",
  },
];

const WebsiteServices = () => {
  return (
    <section className="bg-[#0a0a0a] py-28 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline Section */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            <span className="block">Custom Websites</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C3C5C6]  to-[#FDFDFE]">
              Built for Growth & Performance
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            From smart business sites to robust eCommerce platforms we build fast, scalable, and elegant digital solutions tailored for your goals.
          </p>
        </div>

        {/* Service Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, i) => (
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

export default WebsiteServices;
