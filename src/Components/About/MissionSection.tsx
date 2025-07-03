"use client";

import {
  Sparkles,
  Handshake,
  HeartHandshake,
} from "lucide-react";
import { memo } from "react";
import type { LucideIcon } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    color: "text-blue-500",
    title: "Creativity with Purpose",
    desc: "Every design and strategy we build is aligned with business outcomes — no fluff, just focused impact.",
  },
  {
    icon: Handshake,
    color: "text-pink-500",
    title: "True Collaboration",
    desc: "We work *with* our clients, not just for them. Transparency, feedback, and real partnerships lead our process.",
  },
  {
    icon: HeartHandshake,
    color: "text-purple-500",
    title: "Long-Term Thinking",
    desc: "We’re not here for quick wins. We build systems, brands, and results that last far beyond the launch.",
  },
];

// Define types
interface ValueCardProps {
  Icon: LucideIcon;
  color: string;
  title: string;
  desc: string;
}

// Memoized Card with type safety and display name
const ValueCard = memo(({ Icon, color, title, desc }: ValueCardProps) => (
  <div className="bg-[#121212] rounded-2xl p-6 border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/10 transition-all duration-300">
    <div className={`mb-4 text-2xl ${color}`}>
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-base">{desc}</p>
  </div>
));
ValueCard.displayName = "ValueCard";

const MissionSection = () => {
  return (
    <section className="bg-[#0c0c0c] py-24 px-6 border-t border-gray-800 text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            What Drives Us
          </span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          More than just pixels and posts — our mission is to empower brands with
          strategy, story, and systems that scale.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {values.map((item, i) => (
          <ValueCard
            key={i}
            Icon={item.icon}
            color={item.color}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
