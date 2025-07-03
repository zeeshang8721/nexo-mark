"use client";
import { motion } from "framer-motion";
import RotatingText from "../Common/RotatingText";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[500px] sm:h-screen min-h-[600px] overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/herobanner.webp')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        marginTop: "70px",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Animated Content */}
      <div className="relative z-10 flex h-full px-4 sm:px-6 lg:px-8 pt-[80px] md:pt-[120px] pb-10 max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl w-full"
        >
          {/* Main Heading - Responsive text sizes */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl font-medium leading-tight"
            style={{ color: "#0038ca" }}
          >
            <span className="text-neutral-100">We</span>
            <span className="">
              <RotatingText />
            </span>
            <span className="block text-neutral-100 mt-2 md:mt-0">
              Digital Experiences
            </span>
          </motion.h1>

          {/* Description - Responsive text and spacing */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg max-w-full sm:max-w-[500px] md:max-w-[600px] text-gray-300"
          >
            Every business has potential we unlock it through smart, scalable
            digital solutions. From strategy to storytelling and powerful
            visuals we craft experiences that leave a mark.
          </motion.p>

          {/* CTA Buttons - Responsive layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 max-w-[240px] md:max-w-[490px]"
          >
            {/* Primary Button - Responsive sizing */}
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full flex justify-between items-center border border-white rounded-full bg-black hover:bg-white hover:text-black px-6  sm:px-8 py-4 text-sm  font-semibold text-white shadow-lg transition-all duration-300 cursor-pointer"
            >
              Explore Our Work
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 transition-all duration-300 group-hover:rotate-45 group-hover:translate-x-1"
              >
                <path
                  d="M4.66669 11.3334L11.3334 4.66669"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.66669 4.66669H11.3334V11.3334"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button> */}

            {/* Secondary Button - Responsive sizing */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact-us"
              className="group relative max-w-[250px] flex justify-between w-full items-center px-8 py-4 text-sm font-semibold text-white hover:text-black rounded-full overflow-hidden transition-all duration-500 bg-transparent border border-white hover:bg-white"
            >
              <span className="relative z-10 mr-8">Start Your Project</span>
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
          </motion.div>
        </motion.div>

        {/* Subtle Animated Scrolling Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0038ca"
              strokeWidth="2"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
