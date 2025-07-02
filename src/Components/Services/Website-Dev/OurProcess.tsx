"use client";

import { LayoutGrid, PenTool, MonitorSmartphone, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: <LayoutGrid size={30} className="text-blue-500" />,
    title: "Discovery & Strategy",
    desc: "We dive deep into your business, goals, and audience to shape a sharp, focused digital plan.",
  },
  {
    icon: <PenTool size={30} className="text-pink-500" />,
    title: "Creative Design",
    desc: "UI/UX that speaks your brand language, balancing aesthetics with user-centric functionality.",
  },
  {
    icon: <MonitorSmartphone size={30} className="text-yellow-500" />,
    title: "Development & Build",
    desc: "We turn ideas into high-performance websites using modern stacks.",
  },
  {
    icon: <Rocket size={30} className="text-green-500" />,
    title: "Launch & Growth",
    desc: "We launch, test, and scale with confidence with continuous support and growth strategies.",
  },
];

// Instead of variants as a function, use inline animation with `custom` prop
const OurProcess = () => {
  return (
    <section className="relative py-28 px-6 bg-[#0d0d0d] text-white overflow-hidden z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          The Nexo Approach
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-16">
          Not just a process a proven approach designed to deliver clarity,
          creativity, and conversion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 relative z-10">
          {processSteps.map((step, i) => (
            <div
              key={i}
    
              className="relative group bg-[#131313] border border-gray-800 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-800 rounded-xl">{step.icon}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-400">{step.desc}</p>
              <div className="absolute inset-0 z-[-1] blur-[80px] opacity-20 bg-gradient-to-tr from-blue-500/20 via-pink-500/20 to-purple-500/20 group-hover:opacity-40 transition duration-500 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
