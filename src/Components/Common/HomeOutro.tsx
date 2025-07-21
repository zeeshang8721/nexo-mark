"use client";
import { useEffect, useState } from "react";

export default function HomeOutro() {
  const [hideOutro, setHideOutro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideOutro(true); // Hide after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-black flex justify-center items-center z-[999999] ${
        hideOutro ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        className="w-full max-w-[400px] md:max-w-full h-auto object-contain"
      >
        <source src="/BLACKIntroAnimation.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
