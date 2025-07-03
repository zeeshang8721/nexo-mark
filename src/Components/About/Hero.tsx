"use client";

import { motion } from "framer-motion";
import { Users2, Sparkles } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative bg-[#0c0c0c] text-white pt-40 pb-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90">
            Who We Are
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/80">
            And What We Stand For
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mt-6 mx-auto"
        >
          We’re not just an agency — we’re a collective of creators, strategists,
          and problem solvers building brands that matter.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#our-story"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white rounded-full transition-all duration-300 border border-white hover:bg-white hover:text-black"
          >
            <span className="relative z-10">Work With Us</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1"
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
          </motion.a>
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.08 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute top-20 left-14 text-neutral-600"
          >
            <Users2 size={60} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute bottom-16 right-14 text-blue-800"
          >
            <Sparkles size={100} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
