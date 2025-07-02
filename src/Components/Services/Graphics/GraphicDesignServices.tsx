"use client";

import {
  Paintbrush,
  Image as ImageIcon,
  PenTool,
  FileText,
  Layers3,
  Sparkles,
} from "lucide-react";

const graphicServices = [
  {
    title: "Brand Identity",
    icon: <Paintbrush className="w-6 h-6 text-blue-500" />,
    desc: "Logo, color palette, typography everything your brand needs to stand tall and consistent.",
  },
  {
    title: "Social Media Graphics",
    icon: <ImageIcon className="w-6 h-6 text-pink-500" />,
    desc: "Eye-catching visuals tailored for each platform reels, posts, covers, carousels, and more.",
  },
  {
    title: "Custom Illustrations",
    icon: <PenTool className="w-6 h-6 text-yellow-400" />,
    desc: "Bespoke illustrations that enhance storytelling and give your brand a unique creative edge.",
  },
  {
    title: "Marketing Collateral",
    icon: <FileText className="w-6 h-6 text-green-500" />,
    desc: "Brochures, flyers, banners, pitch decks designed to convert interest into action.",
  },
  {
    title: "UI Mockups & Assets",
    icon: <Layers3 className="w-6 h-6 text-purple-500" />,
    desc: "Polished interface elements and mobile/web mockups ready for dev handoff or stakeholder review.",
  },
  {
    title: "Creative Retouching",
    icon: <Sparkles className="w-6 h-6 text-sky-500" />,
    desc: "Enhance imagery, apply effects, and perfect every visual detail with precision edits.",
  },
];

const GraphicDesignServices = () => {
  return (
    <section className="relative bg-[#0c0c0c] py-28 px-6 text-white border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-neutral-200">
              Graphic Design
            </span>{" "}
            Services
          </span>
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
          Scroll-stopping visuals that don’t just look good they communicate, convert, and elevate your brand presence.
        </p>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          {graphicServices.map((service, i) => (
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

export default GraphicDesignServices;
