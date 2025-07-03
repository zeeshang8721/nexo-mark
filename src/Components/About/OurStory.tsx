"use client";

const AboutStory = () => {
  return (
    <section className="py-24 px-6 border-t border-gray-800 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div>
          <header>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
                Built for Brands
              </span>{" "}
              with Purpose
            </h2>
          </header>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            Our journey began with one goal — to help businesses stand out in a
            noisy digital world. What started as a small creative team is now a
            full-service agency helping ambitious brands grow through design,
            strategy, and smart execution.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We believe in partnerships, not transactions. Every pixel, post, and
            project is crafted with intention to tell your story, connect with
            your audience, and drive real results.
          </p>
        </div>

        {/* Video Block */}
        <div>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-700">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/video-poster.jpg" // optional placeholder for fast load
              src="/process.mp4" // optimized and compressed mp4 or webm
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
