"use client";
import React from "react";
import TextPressure from "../Home/Textpressure";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/cta.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white space-y-6">
        {/* TextPressure Heading */}
        <div className="w-full max-w-4xl">
          <TextPressure
            text="Let's Work Together"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>

        {/* Sub Text + CTA */}
        <div className="max-w-2xl">
          <p className="text-lg md:text-xl mb-6">
            {` Let’s turn your vision into something powerful whatever it takes.`}
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact-us"
            className="group max-w-[275px] mx-auto relative flex justify-between w-full items-center px-8 py-4 text-sm font-semibold text-white hover:text-black rounded-full overflow-hidden transition-all duration-500 bg-transparent border border-white hover:bg-white"
          >
            <span className="relative z-10 mr-8">Get In Touch With Us</span>
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
            <span className="absolute right-4 w-8 h-8 bg-[white] rounded-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0"></span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
