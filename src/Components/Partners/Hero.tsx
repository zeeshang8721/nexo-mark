"use client";

import { motion } from "framer-motion";
import { Handshake, Briefcase, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PartnerHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] text-white pt-40 pb-28 px-6 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90">
                Your
              </span>{" "}
              Unmatched
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Unstoppable Partner.
            </motion.span>
          </motion.h1>

          <motion.p  
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mt-6"
          >
            Reduce your internal workload and scale smarter. Our white-label
            services empower agencies and companies to deliver more — we handle
            the execution, you keep the credit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex mt-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center px-8 py-4 text-sm font-semibold text-white rounded-full overflow-hidden transition-all duration-500 bg-transparent border border-white hover:bg-white hover:text-black"
            >
              <Link href="/contact" className="relative z-10 flex items-center">
                Become a Partner
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 transition-all duration-300 group-hover:rotate-45 group-hover:translate-x-1"
                >
                  <path
                    d="M4.66669 11.3334L11.3334 4.66669"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.66669 4.66669H11.3334V11.3334"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <span className="absolute right-4 w-8 h-8 bg-white rounded-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:right-0"></span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Image
            src="/images/partner-illustration.png"
            alt="Partnership Illustration"
            width={500}
            height={400}
            priority
            className="w-full max-w-md object-contain"
          />
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div 
            className="absolute top-16 left-10 text-neutral-500"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Handshake size={48} />
          </motion.div>
          <motion.div 
            className="absolute bottom-20 right-14 text-neutral-400"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
          >
            <Briefcase size={50} />
          </motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-700 opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <Globe size={120} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerHero;