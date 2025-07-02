"use client";

import { SiReact, SiNextdotjs, SiTailwindcss, SiAngular, SiFramer, SiNodedotjs, SiExpress, SiFirebase, SiMongodb, SiPostgresql, SiMysql, SiShopify, SiWordpress, SiSanity, SiGithub, SiGit, SiVercel, SiDocker, SiFigma, SiAdobephotoshop, SiAdobexd } from "react-icons/si";

const stacks = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#fff" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
  { name: "Framer Motion", icon: <SiFramer />, color: "#ffffff" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#8CC84B" },
  { name: "Express", icon: <SiExpress />, color: "#ffffff" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
  { name: "Shopify", icon: <SiShopify />, color: "#7AB55C" },
  { name: "WordPress", icon: <SiWordpress />, color: "#21759B" },
  { name: "Sanity", icon: <SiSanity />, color: "#F03E2F" },
  { name: "GitHub", icon: <SiGithub />, color: "#fff" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
  { name: "Docker", icon: <SiDocker />, color: "#0db7ed" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Adobe XD", icon: <SiAdobexd />, color: "#FF61F6" },
  { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
];


const WebStacks = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          The Stack Behind Every Pixel
        </h2>

        <div
          className="flex flex-wrap justify-center gap-6"
        >
          {stacks.map((stack, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-[#1f1f1f] border border-gray-800 hover:border-blue-500 rounded-xl p-4 w-[100px] h-[110px] justify-center shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div
                className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: stack.color }}
              >
                {stack.icon}
              </div>
              <p className="text-sm text-center text-gray-300">{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebStacks;
