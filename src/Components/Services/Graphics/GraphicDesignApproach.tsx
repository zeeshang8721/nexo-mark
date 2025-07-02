"use client";

import { Lightbulb, Layers3, Users, CheckCircle2 } from "lucide-react";

const approachPoints = [
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    title: "Creative Meets Strategy",
    desc: "We balance visual aesthetics with core messaging every design serves a purpose.",
  },
  {
    icon: <Layers3 className="w-6 h-6 text-blue-500" />,
    title: "Consistent Brand Systems",
    desc: "Designs that scale we build with systems in mind so you stay visually consistent across every touchpoint.",
  },
  {
    icon: <Users className="w-6 h-6 text-purple-500" />,
    title: "Client Collaboration",
    desc: "We listen, co-create, and iterate your feedback is at the center of our design process.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
    title: "Pixel-Perfect Delivery",
    desc: "We deliver production-ready files that developers love and your audience remembers.",
  },
];

const GraphicDesignApproach = () => {
  return (
    <section className="relative bg-[#0c0c0c] py-28 px-6 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            Our Creative Approach
          </span>
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
         {` Good design isn't just what you see it's how it makes you feel and
          act. Here’s how we make every pixel matter.`}
        </p>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16"
        >
          {approachPoints.map((point, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-gray-700 hover:border-blue-500 rounded-2xl p-6 text-left shadow-md hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignApproach;
