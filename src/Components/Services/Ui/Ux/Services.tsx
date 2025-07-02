"use client";
import {
  PenTool,
  Layers,
  MousePointerClick,
  Palette,
  Component,
  Ruler,
} from "lucide-react";

const uiuxServices = [
  {
    title: "Wireframing",
    icon: <PenTool className="w-5 h-5 text-blue-500" />,
    desc: "Early blueprinting of your product’s layout, structure, and interaction flow.",
  },
  {
    title: "Prototyping",
    icon: <Layers className="w-5 h-5 text-blue-500" />,
    desc: "Clickable mockups to visualize user journeys and test ideas before development.",
  },
  {
    title: "User Journey Mapping",
    icon: <MousePointerClick className="w-5 h-5 text-blue-500" />,
    desc: "Strategic mapping of user paths to remove friction and enhance usability.",
  },
  {
    title: "UI Design",
    icon: <Palette className="w-5 h-5 text-blue-500" />,
    desc: "Clean, modern, and responsive interfaces tailored for brand consistency and appeal.",
  },
  {
    title: "Design Systems",
    icon: <Component className="w-5 h-5 text-blue-500" />,
    desc: "Reusable components, colors, and typography built to scale with clarity.",
  },
  {
    title: "Usability Testing",
    icon: <Ruler className="w-5 h-5 text-blue-500" />,
    desc: "Tested with real users validated through behavior, not assumptions.",
  },
];

const UIUXServices = () => {
  return (
    <section className="bg-[#0a0a0a] py-12 sm:py-28 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline Section */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            <span className="block">UI/UX Design Services</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C3C5C6] to-[#FDFDFE]">
              Crafted for Clarity & Delight
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            We don’t just design pretty screens we design user experiences that connect, convert, and captivate.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {uiuxServices.map((service, i) => (
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

export default UIUXServices;
