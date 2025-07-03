"use client";
import { Star, ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function Clienttrust() {

  
  const features = [
    {
      icon: Star,
      title: "5-Star Client Satisfaction",
      desc: "Our clients consistently rate us 5-stars for our dedication and results.",
    },
    {
      icon: TrendingUp,
      title: "100+ Projects Delivered",
      desc: "Helping brands scale their digital presence with tailor-made solutions.",
    },
    {
      icon: Users,
      title: "Global Clientele",
      desc: "Serving clients across 10+ countries with strategic expertise.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Partnerships",
      desc: "Building long-term collaborations with transparency and trust.",
    },
  ];

  return (
    <section className="relative bg-black py-12 sm:py-24 overflow-hidden" id="trust">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              We partner with visionaries to build what matters.
            </h2>
            <p className="text-neutral-400 text-lg font-light max-w-lg">
              Partner with a team that believes in elevating brands through
              creativity, technology, and data-driven strategies.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map(({ icon: Icon, title, desc }, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800 hover:scale-105 hover:border-indigo-500/50 transition-transform duration-300 hover:duration-200"
              >
                <Icon className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                <p className="text-neutral-400 text-sm font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
