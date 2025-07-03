"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Design", "Develop", "Scale"];

export default function RotatingWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative w-[6ch]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="absolute left-[15px] sm:left-[19px] -top-[38px] sm:-top-[37px] md:-top-[59px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90 text-5xl sm:text-7xl"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
