"use client";

import { motion } from "framer-motion";
import { PenTool, Component, MousePointerClick } from "lucide-react";
import Link from "next/link";

const UIUXHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] text-white pt-40 pb-28 px-6">
      {/* Abstract Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-pink-500/20 via-blue-500/20 to-purple-500/20 blur-[120px] rounded-full animate-spin-slow" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-yellow-500/10 via-blue-500/10 to-pink-500/10 blur-[100px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Intuitive <span className="text-blue-500">UI</span>. Impactful{" "}
          <span className="text-pink-500">UX</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mt-6"
        >
          We create stunning, intuitive interfaces that convert blending design
          thinking with usability to bring your ideas to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex gap-4"
        >
          <Link href={"/cotnact-us"}>
            <button className=" cursor-pointer px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition text-white font-medium">
              Let’s Talk UI/UX
            </button>
          </Link>
        </motion.div>

        {/* Floating design icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-16 left-10 text-pink-500 animate-float-slow">
            <PenTool size={48} />
          </div>
          <div className="absolute bottom-20 right-14 text-blue-500 animate-float-fast">
            <MousePointerClick size={50} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-500 opacity-10">
            <Component size={100} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UIUXHero;
