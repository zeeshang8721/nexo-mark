"use client";

import { Timer, Zap, Eye, Volume2, Laugh, Scissors } from "lucide-react";

const shortFormEditing = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Hook-Driven Intros",
    desc: "We grab attention in the first 3 seconds with bold visuals, sounds, and text.",
  },
  {
    icon: <Eye className="w-6 h-6 text-blue-500" />,
    title: "Retention-Boost Cuts",
    desc: "Fast pacing, zooms, jump cuts, and subtitles that keep viewers watching till the end.",
  },
  {
    icon: <Scissors className="w-6 h-6 text-pink-500" />,
    title: "Trendy Transitions",
    desc: "On-beat motion transitions, sound FX, and movement that syncs with content style.",
  },
  {
    icon: <Volume2 className="w-6 h-6 text-green-500" />,
    title: "Viral Sound Syncing",
    desc: "We pair your videos with trending sounds and match visuals for maximum reach.",
  },
  {
    icon: <Laugh className="w-6 h-6 text-purple-500" />,
    title: "Meme & Reaction Layers",
    desc: "We use layers of emojis, captions, reactions, and gifs to make content pop and go viral.",
  },
  {
    icon: <Timer className="w-6 h-6 text-sky-500" />,
    title: "Perfect Duration",
    desc: "Optimized lengths (6–30 sec) for each platform: TikTok, Reels, YouTube Shorts.",
  },
];

const ShortFormVideoEditing = () => {
  return (
    <section className="relative bg-[#0a0a0a] py-28 px-6 text-white border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            Short Form Videos
          </span>{" "}
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
          We don’t just trim clips we engineer watch-worthy content with
          scroll-stopping edits and engagement-first storytelling.
        </p>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          {shortFormEditing.map((point, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-gray-700 hover:border-blue-500 rounded-2xl p-6 text-left shadow-md hover:shadow-pink-500/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortFormVideoEditing;
