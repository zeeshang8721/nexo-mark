"use client";

import { Cuboid, Camera, Film, ScanEye, Orbit, Shapes } from "lucide-react";

const threeDServices = [
  {
    title: "3D Modeling",
    icon: <Cuboid className="w-5 h-5 text-blue-500" />,
    desc: "Tailored 3D models for product, brand, or environment precision meets artistry.",
  },
  {
    title: "Product Visualization",
    icon: <Camera className="w-5 h-5 text-blue-500" />,
    desc: "Your products rendered in ultra-realistic detail ready to impress & sell.",
  },
  {
    title: "3D Animation",
    icon: <Film className="w-5 h-5 text-blue-500" />,
    desc: "Motion with meaning 3D explainer videos, product flows, and visual stories.",
  },
  {
    title: "AR/VR Ready Assets",
    icon: <ScanEye className="w-5 h-5 text-blue-500" />,
    desc: "Bring your experiences to life in Augmented & Virtual Reality environments.",
  },
  {
    title: "360° Renders",
    icon: <Orbit className="w-5 h-5 text-blue-500" />,
    desc: "Spin views that let customers explore your product from every angle.",
  },
  {
    title: "3D Brand Assets",
    icon: <Shapes className="w-5 h-5 text-blue-500" />,
    desc: "Create branded 3D visuals icons, scenes, and graphics that tell your story.",
  },
];

const ThreeDServices = () => {
  return (
    <section className="bg-[#0b0b0b] py-28 border-t border-[#1f1f1f] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-neutral-400">
              Next-Gen 3D Design Services
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Not just 3D we craft dimension, depth, and distinction for your
            brand.
          </p>
        </div>

        {/* Services */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {threeDServices.map((service, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeDServices;
