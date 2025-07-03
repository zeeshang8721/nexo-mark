"use client";

import { motion } from "framer-motion";
import { Handshake, Briefcase, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PartnerHero = () => {
  return (
   <section className="relative overflow-hidden bg-[#0c0c0c] text-white pt-40 pb-28 px-6">
  <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
    {/* Headline */}
    <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      className="text-4xl md:text-6xl font-bold leading-tight">
      <span className="block">
        <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90">
          Your
        </span>{" "}
        Unmatched
      </span>
      <span
        className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
        Unstoppable Partner.
      </span>
    </motion.h1>

    {/* Subheading */}
    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2
      }} className="text-lg md:text-xl text-gray-400 max-w-2xl mt-6">
      Reduce your internal workload and scale smarter. Our white-label
      services empower agencies and companies to deliver more — we handle
      the execution, you keep the credit.
    </motion.p>

    {/* CTA Button (only 1) */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}
      className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full max-w-[250px]">
      <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/contact-us"
        className="group relative flex justify-between w-full items-center px-8 py-4 text-sm font-semibold text-white hover:text-black rounded-full overflow-hidden transition-all duration-500 bg-transparent border border-white hover:bg-white">
        <span className="relative z-10 mr-8"> Become a Partner</span>
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="relative left-[10px] z-10 transition-all duration-500 group-hover:rotate-45 group-hover:translate-x-1">
          <path d="M4.66669 11.3334L11.3334 4.66669" stroke="black" strokeWidth="1.33333" strokeLinecap="round"
            strokeLinejoin="round" />
          <path d="M4.66669 4.66669H11.3334V11.3334" stroke="black" strokeWidth="1.33333" strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
        <span
          className="absolute right-4 w-8 h-8 bg-[white] rounded-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0"></span>
      </motion.a>
    </motion.div>

    {/* Floating Icons for Depth */}
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.08 }} transition={{ duration: 1, delay: 0.5 }}
      className="absolute inset-0 pointer-events-none">
      <div className="absolute top-16 left-10 text-neutral-500 animate-pulse">
        <Handshake size={48} />
      </div>
      <div className="absolute bottom-20 right-14 text-neutral-400 animate-pulse">
        <Briefcase size={50} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-700 opacity-10">
        <Globe size={100} />
      </div>
    </motion.div>
  </div>
</section>
  );
};

export default PartnerHero;