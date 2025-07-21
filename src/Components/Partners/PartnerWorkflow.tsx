"use client";

import {
  ClipboardList,
  Handshake,
  Layers,
  Mail,
  MonitorCheck,
  Users2,
} from "lucide-react";
import Link from "next/link";

const workflowSteps = [
  {
    icon: <ClipboardList className="w-6 h-6 text-blue-500" />,
    title: "1. Submit Your Request",
    desc: "Share your project details through our portal or via email. The more details you provide, the better we can serve you.",
  },
  {
    icon: <Handshake className="w-6 h-6 text-blue-500" />,
    title: "2. Get Matched",
    desc: "We'll assign a dedicated team specialized in your project type within 24 hours.",
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-500" />,
    title: "3. Review Strategy",
    desc: "Receive initial concepts/strategy within 48 hours for your approval before we proceed.",
  },
  {
    icon: <MonitorCheck className="w-6 h-6 text-blue-500" />,
    title: "4. Work In Progress",
    desc: "Track progress through our dashboard with regular updates from your project manager.",
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-500" />,
    title: "5. Delivery & Review",
    desc: "Get final files delivered on time. We include 2 rounds of revisions at no extra cost.",
  },
  {
    icon: <Users2 className="w-6 h-6 text-blue-500" />,
    title: "6. Scale Together",
    desc: "As you grow, we scale our support to handle increased workloads seamlessly.",
  },
];

export const PartnerWorkflow = () => {
  return (
    <section className="relative bg-[#0c0c0c] py-28 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
              How Partnership Works
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A streamlined process designed for maximum efficiency and minimal
            friction. Focus on your clients while we handle the execution.
          </p>
        </div>

        {/* Workflow Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500 to-blue-500/20"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-[#121212] rounded-xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300 relative ${
                  index % 2 === 0
                    ? "lg:mr-auto lg:pr-16"
                    : "lg:ml-auto lg:pl-16"
                }`}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mr-4 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <div className="group relative flex justify-between items-center px-8 py-4 text-sm font-semibold text-white hover:text-black rounded-full overflow-hidden transition-all duration-500 bg-transparent border border-white hover:bg-white">
            <Link href="/contact-us" className="relative z-10 mr-8">
              Become a Partner
            </Link>
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
            <span className="absolute right-4 w-8 h-8 bg-white rounded-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
