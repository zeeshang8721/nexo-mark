"use client";

import {
  Lightbulb,
  PenTool,
  Cuboid,
  Camera,
  MonitorPlay,
  Rocket,
} from "lucide-react";

const threeDProcess = [
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    title: "Discovery & Research",
    desc: "We begin by understanding your vision, brand, and business goals to shape a solid creative direction.",
  },
  {
    icon: <PenTool className="w-6 h-6 text-blue-400" />,
    title: "Concept & Sketching",
    desc: "We craft early concepts and visual references to explore structure, emotion, and spatial feel.",
  },
  {
    icon: <Cuboid className="w-6 h-6 text-green-400" />,
    title: "3D Modeling & Detailing",
    desc: "From rough geometry to fine details — we sculpt scenes, objects, and environments with purpose.",
  },
  {
    icon: <Camera className="w-6 h-6 text-purple-400" />,
    title: "Lighting & Rendering",
    desc: "We build the mood and depth using advanced lighting, shading, and rendering techniques.",
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-cyan-400" />,
    title: "Integration & Animation",
    desc: "We bring visuals to life with movement or prepare assets for AR, VR, or real-time use.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-pink-400" />,
    title: "Delivery & Optimization",
    desc: "Files are delivered pixel-perfect, optimized for speed, platforms, and your use case.",
  },
];

const OurProcess = () => {
  return (
    <section className="relative bg-[#0c0c0c] py-28 px-6 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            Our 3D Workflow
          </span>
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
          From concept to final frame, every step is designed to elevate your
          brand’s story in three dimensions.
        </p>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16"
        >
          {threeDProcess.map((point, i) => (
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

export default OurProcess;
