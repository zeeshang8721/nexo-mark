"use client";

import {
  Film,
  BookmarkCheck,
  BookOpenCheck,
  Clock9,
  Mic2,
  Eye,
} from "lucide-react";

const youtubeEditing = [
  {
    icon: <Film className="w-6 h-6 text-red-500" />,
    title: "Dynamic Editing",
    desc: "Jump cuts, overlays, zooms, captions — all synced to pacing for maximum engagement.",
  },
  {
    icon: <BookmarkCheck className="w-6 h-6 text-yellow-400" />,
    title: "Content Structuring",
    desc: "We refine your raw footage into structured, high-retention chapters with clear flow.",
  },
  {
    icon: <BookOpenCheck className="w-6 h-6 text-blue-500" />,
    title: "Storytelling Pacing",
    desc: "Every video follows a hook–build–value–outro rhythm that retains and converts.",
  },
  {
    icon: <Clock9 className="w-6 h-6 text-sky-400" />,
    title: "Timestamp & Highlights",
    desc: "We add timestamps and smart jump markers for viewer navigation and binge-worthy flow.",
  },
  {
    icon: <Mic2 className="w-6 h-6 text-purple-500" />,
    title: "Audio Enhancement",
    desc: "We clean and enhance voice clarity, sync background music, and adjust sound levels.",
  },
  {
    icon: <Eye className="w-6 h-6 text-pink-500" />,
    title: "Thumbnail & Title Support",
    desc: "We help brainstorm titles and thumbnails that click — based on what actually performs.",
  },
];

const YouTubeEditing = () => {
  return (
    <section className="relative bg-[#0b0b0b] py-28 px-6 text-white border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            Long-Form Videos
          </span>{" "}
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
        >
          We turn long videos into binge-worthy content that keeps your audience
          engaged, informed, and coming back for more.
        </p>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          {youtubeEditing.map((point, i) => (
            <div
              key={i}
              className="bg-[#121212] border border-gray-700 hover:border-blue-500 rounded-2xl p-6 text-left shadow-md hover:shadow-red-500/10 transition-all duration-300"
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

export default YouTubeEditing;
