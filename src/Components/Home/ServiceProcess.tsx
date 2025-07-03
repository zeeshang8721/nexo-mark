"use client";
import {
  RiSearchEyeLine,
  RiLightbulbFlashLine,
  RiMagicLine,
  RiBarChartBoxLine,
} from "react-icons/ri";

const steps = [
  {
    icon: RiSearchEyeLine,
    title: "Step 01",
    heading: "Deep Discovery",
    description:
      "We immerse ourselves in your brand, goals, and audience to identify key opportunities.",
  },
  {
    icon: RiLightbulbFlashLine,
    title: "Step 02",
    heading: "Strategic Planning",
    description:
      "Custom roadmap creation with measurable KPIs tailored to your business objectives.",
  },
  {
    icon: RiMagicLine,
    title: "Step 03",
    heading: "Creative Execution",
    description:
      "Our experts bring the strategy to life with cutting-edge design and technology.",
  },
  {
    icon: RiBarChartBoxLine,
    title: "Step 04",
    heading: "Performance Growth",
    description:
      "Continuous optimization based on data analytics to maximize your ROI.",
  },
];




const ServiceProcess = () => {
  return (
    <section className="pb-16 sm:pb-40 pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <span
            className="inline-block px-3 py-1 text-sm font-semibold text-white bg-gray-800 rounded-full mb-4"
          >
            Our Methodology
          </span>

          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            The Nexo Mark Difference
          </h2>

          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            A proven framework that delivers exceptional results across all our
            services
          </p>
        </div>

        {/* Process Steps */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-2 bg-gray-800 rounded-lg text-white">
                    <Icon className="text-3xl" />
                  </div>
                  <span className="text-sm font-medium text-gray-400">
                    {step.title}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.heading}
                </h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
