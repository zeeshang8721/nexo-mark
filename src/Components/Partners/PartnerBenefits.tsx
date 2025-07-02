"use client";

import {  useAnimation, useInView } from "framer-motion";
import { ShieldCheck, Zap, Clock, BarChart2, Users, Code } from "lucide-react";
import { useEffect, useRef, useState, ReactElement } from "react";

interface BenefitItem {
  icon: ReactElement;
  title: string;
  desc: string;
}

interface CounterItemProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

interface CountUpProps {
  end: number;
  duration: number;
  suffix: string;
}

const benefits: BenefitItem[] = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: "White-Label Excellence",
    desc: "We stay invisible — you take full credit. Perfect for agencies scaling silently.",
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    title: "Rapid Turnaround",
    desc: "Tight deadlines? Our optimized workflows get you delivery faster than ever.",
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    title: "Time Zone Aligned",
    desc: "We sync with your working hours to keep communication smooth and proactive.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-blue-500" />,
    title: "Scalable Teams",
    desc: "Need more hands? Instantly scale without the overhead of hiring or training.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "Dedicated Specialists",
    desc: "Work with the same experts long-term for consistency, reliability, and trust.",
  },
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    title: "Tech-Agnostic",
    desc: "From frameworks to workflows, we adapt to your ecosystem — not the other way around.",
  },
];

const CountUp = ({ end, duration, suffix }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    let frameId: number;

    const update = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        frameId = requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frameId);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const CounterItem = ({
  value,
  label,
  suffix = "+",
  duration = 2,
}: CounterItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 },
      });
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, controls]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 mb-2">
        {isInView ? (
          <CountUp end={value} duration={duration} suffix={suffix} />
        ) : (
          `0${suffix}`
        )}
      </div>
      <p className="text-gray-400">{label}</p>
    </div>
  );
};

const PartnerBenefits = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
              Why Partner With Us?
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We become your silent force — helping you scale, deliver faster, and
            win more clients without hiring, overhead, or hassle.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-[#121212] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mr-4 group-hover:bg-blue-900/30 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-400 pl-16 -mt-2">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-gray-800">
          <CounterItem value={100} label="Happy Partners" />
          <CounterItem value={500} label="Projects Delivered" />
          <CounterItem value={24} label="Support Availability" suffix="/7" />
          <CounterItem value={48} label="Avg. First Delivery" suffix="h" />
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
