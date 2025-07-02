"use client";

import {
  Scissors,
  Film,
  Sparkles,
  Music,
  Captions,
  SquareStack,
} from "lucide-react";

const videoEditingCore = [
  {
    icon: <Scissors className="w-6 h-6 text-pink-500" />,
    title: "Cinematic Cuts",
    desc: "Smooth, story-driven editing with perfect timing, transitions, and flow.",
  },
  {
    icon: <Film className="w-6 h-6 text-yellow-400" />,
    title: "Shorts & Reels",
    desc: "We create scroll-stopping short videos for Instagram, TikTok, and YouTube Shorts.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-500" />,
    title: "Motion Graphics",
    desc: "Add energy, character, and polish with transitions, intros, and animated overlays.",
  },
  {
    icon: <Music className="w-6 h-6 text-green-500" />,
    title: "Sound Design",
    desc: "Impactful sound effects, syncs, music, and voice everything flows with clarity.",
  },
  {
    icon: <Captions className="w-6 h-6 text-purple-500" />,
    title: "Captions & Subtitles",
    desc: "Perfectly timed captions that increase retention and accessibility.",
  },
  {
    icon: <SquareStack className="w-6 h-6 text-sky-500" />,
    title: "YouTube Editing",
    desc: "We edit high-retention content with hooks, b-roll, zooms, cuts, and pacing that keeps viewers watching.",
  },
];

const VideoEditingServices = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 text-white border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-neutral-200">
              Video Editing
            </span>{" "}
            That Tells Stories
          </span>
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
          From fast-paced reels to cinematic YouTube edits we make sure your visuals not only look good but feel powerful.
        </p>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          {videoEditingCore.map((service, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-gray-700 hover:border-blue-500 rounded-2xl p-6 text-left shadow-md hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoEditingServices;
