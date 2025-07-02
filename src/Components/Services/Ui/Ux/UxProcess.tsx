"use client";

import {
  SearchCheck,
  PenTool,
  Layers3,
  Component,
  Eye,
  Send,
} from "lucide-react";

const processSteps = [
  {
    icon: <SearchCheck size={30} className="text-blue-500" />,
    title: "Research & Audit",
    desc: "Understand user behavior, pain points, and your brand through deep analysis & benchmarking.",
  },
  {
    icon: <PenTool size={30} className="text-pink-500" />,
    title: "Wireframes",
    desc: "Low-fidelity layouts that define the content structure, hierarchy, and user flow.",
  },
  {
    icon: <Layers3 size={30} className="text-yellow-500" />,
    title: "UI Design",
    desc: "We translate strategy into pixel perfect interfaces using modern design principles.",
  },
  {
    icon: <Component size={30} className="text-green-500" />,
    title: "Prototyping",
    desc: "Interactive click-throughs built in Figma ideal for internal review and user testing.",
  },
  {
    icon: <Eye size={30} className="text-indigo-500" />,
    title: "Usability Testing",
    desc: "We validate real user interactions and iterate based on feedback and analytics.",
  },
  {
    icon: <Send size={30} className="text-purple-500" />,
    title: "Handoff & Support",
    desc: "Dev-ready design files + ongoing iterations to ensure a seamless development experience.",
  },
];

const UIUXProcess = () => {
  return (
    <section className="relative py-10 sm:py-28 px-6 bg-[#0d0d0d] text-white overflow-hidden z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our UI/UX Process
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-16">
          A research-backed, user-focused approach crafted to align your brand with intuitive design and real impact.
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

export default UIUXProcess;
