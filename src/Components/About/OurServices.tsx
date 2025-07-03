"use client";

import {
  Code2,
  Brush,
  PenTool,
  MousePointerClick,
  Video,
  Shapes,
} from "lucide-react";
import { memo } from "react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  color: string;
  title: string;
  desc: string;
  points: string[];
}

const services: Service[] = [
  {
    icon: Code2,
    color: "text-blue-500",
    title: "Web Development",
    desc: "Responsive, fast, and scalable websites built for real business performance.",
    points: [
      "Custom Frontend (Next.js)",
      "Shopify & CMS Setup",
      "SEO-optimized code",
      "Speed-focused builds",
    ],
  },
  {
    icon: PenTool,
    color: "text-pink-500",
    title: "UI/UX Design",
    desc: "Human-centered design for apps, websites, and dashboards — intuitive and beautiful.",
    points: [
      "Wireframes & Prototypes",
      "Mobile-first approach",
      "User Journey Optimization",
      "Dev-ready design systems",
    ],
  },
  {
    icon: Brush,
    color: "text-yellow-500",
    title: "Graphic Design",
    desc: "Visuals that tell your brand story with clarity and consistency across all channels.",
    points: [
      "Brand Identity & Logos",
      "Social Media Posts",
      "Marketing Creatives",
      "Print & Packaging",
    ],
  },
  {
    icon: MousePointerClick,
    color: "text-green-500",
    title: "Digital Marketing",
    desc: "Strategies that attract, convert, and retain — with performance you can measure.",
    points: [
      "SEO & PPC",
      "Social Media Ads",
      "Email Campaigns",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Video,
    color: "text-purple-500",
    title: "Video Editing",
    desc: "Engaging video content for ads, reels, YouTube, and storytelling across platforms.",
    points: [
      "Social Media Reels",
      "Product Videos",
      "Promo & Explainers",
      "Motion Graphics",
    ],
  },
  {
    icon: Shapes,
    color: "text-indigo-500",
    title: "3D & Animation",
    desc: "Bring products and ideas to life through immersive 3D visuals and animations.",
    points: [
      "3D Mockups",
      "Logo Animations",
      "Product Renders",
      "Lottie or Web Animations",
    ],
  },
];

// Typed, memoized ServiceCard with display name
const ServiceCard = memo(
  ({ icon: Icon, color, title, desc, points }: Service) => (
    <div className="bg-[#141414] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 hover:shadow-blue-500/10 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 bg-gray-800 rounded-xl ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 text-base mb-4">{desc}</p>
      <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  )
);
ServiceCard.displayName = "ServiceCard";

const OurServices = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-28 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            Here&rsquo;s How We Help You With
          </span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          We partner with you to plan, build, and grow your brand using proven
          strategies and a tailored approach.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <a
          href="#our-story"
          className="group relative flex justify-between max-w-[210px] sm:max-w-full w-full sm:w-auto items-center px-8 py-4 text-sm font-semibold text-white hover:text-black rounded-full overflow-hidden transition-all duration-500 bg-transparent border border-white hover:bg-white"
        >
          <span className="relative z-10 mr-8">Work With Us</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative left-[10px] z-10 transition-all duration-500 group-hover:rotate-45 group-hover:translate-x-1"
          >
            <path
              d="M4.66669 11.3334L11.3334 4.66669"
              stroke="black"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66669 4.66669H11.3334V11.3334"
              stroke="black"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute right-4 w-8 h-8 bg-[white] rounded-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0"></span>
        </a>
      </div>
    </section>
  );
};

export default OurServices;
