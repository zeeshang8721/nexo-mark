"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full  pt-36 pb-20 flex items-center justify-center px-4 sm:px-10 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-30 blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500 opacity-30 blur-3xl animate-pulse z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
        >
          Building Web Experiences <br className="hidden sm:inline" />
          That Actually Convert
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto"
        >
          Whether you need a high-converting site or a complex web solution, we
          blend creativity and code to help you grow online with impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <Link
            href="/contact-us"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition duration-200 shadow-lg"
          >
            Let’s Work Together
          </Link>
          <Link
            href="/about-us"
            className="flex items-center gap-2 px-6 py-3 text-white border border-white/30 rounded-full hover:border-white hover:bg-white/10 transition duration-200"
          >
            About Us <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
