"use client";

export default function Philosophy() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black border-t border-neutral-800 overflow-hidden">
      <div className="container relative z-10 px-6 mx-auto pt-10 sm:pt-24 pb-14 max-w-screen-xl">
        {/* Section Header */}
        <div
          className="max-w-4xl mx-auto text-center mb-4"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-100 mb-6">
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90">
              Nexo Mark
            </span>
          </h2>
          <p className="pt-1 text-xl text-neutral-400">
            Where Vision Meets Reality
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Mission */}
          <div
          >
            <h3 className="text-2xl font-light text-neutral-300 mb-6 tracking-wide">
              OUR PHILOSOPHY
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-neutral-400 leading-relaxed">
                {`We don't just build brands we architect digital experiences that redefine industries. At Nexo Mark, we believe exceptional design should be indistinguishable from flawless functionality.`}
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                {`Our team of strategists, designers, and engineers collaborate to create solutions that don't just meet expectations they establish new benchmarks.`}
              </p>
            </div>
          </div>

          {/* Right Column - Lazy Loaded Video */}
          <div
            className="w-full"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="/video-preview.jpg"
              className="rounded-lg w-full h-auto object-cover"
            >
              <source src="/Section01-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
