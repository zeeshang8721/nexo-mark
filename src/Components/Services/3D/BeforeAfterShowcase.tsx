"use client";
import Image from "next/image";

const projects = [
  {
    title: "Interior Scene Revamp",
    before: "/Blanche_Raw.png",
    after: "/Blanche_Render.png",
  },
  {
    title: "Product Visualization",
    before: "/DG_Raw.png",
    after: "/DG_Render.png",
  },
  {
    title: "Architectural Elevation",
    before: "/Dior_Raw.png",
    after: "/Dior_Render.png",
  },
  {
    title: "Architectural Elevation",
    before: "/GAMING_SETUP_RAW.png",
    after: "/GAMING_SETUP_RENDER.png",
  },
];

const BeforeAfterShowcase = () => {
  return (
    <section className="py-28 px-6 bg-[#0b0b0b] text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-8 leading-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
            Transformation in Every Frame
          </span>
        </h2>

        <p
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
          From basic scenes to breathtaking visuals each project shows our
          ability to shape ideas into 3D stories that engage and inspire.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-blue-500/10 transition-all duration-300"

            >
              <div className="p-5 border-b border-gray-800">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <div className="grid grid-cols-2">
                <div className="relative aspect-video border-r border-gray-800">
                  <Image
                    src={project.before}
                    alt="Before"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 text-sm bg-black/60 px-2 py-1 rounded">
                    Raw
                  </div>
                </div>
                <div className="relative aspect-video">
                  <Image
                    src={project.after}
                    alt="After"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 text-sm bg-blue-600/80 px-2 py-1 rounded">
                    Render
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;
