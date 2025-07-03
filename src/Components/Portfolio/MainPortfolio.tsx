// "use client";

// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Film,
//   Scissors,
//   Globe,
//   LayoutGrid,
//   PenTool,
//   MonitorSmartphone,
//   Box,
// } from "lucide-react";

// const categories = [
//   { id: "all", name: "All", icon: <LayoutGrid size={18} /> },
//   { id: "web", name: "Web Development", icon: <MonitorSmartphone size={18} className="text-blue-400" /> },
//   { id: "design", name: "UI/UX", icon: <PenTool size={18} className="text-purple-400" /> },
//   { id: "graphicsdesigning", name: "Graphics Design", icon: <Globe size={18} className="text-yellow-400" /> },
//   { id: "editing", name: "Video Editing", icon: <Scissors size={18} className="text-pink-400" /> },
//   { id: "shorts", name: "Short Form", icon: <Film size={18} className="text-blue-500" /> },
//   { id: "marketing", name: "Marketing", icon: <Globe size={18} className="text-green-400" /> },
//   { id: "3ddesign", name: "3D Design", icon: <Box size={18} className="text-red-400" /> },
// ];

// // Add both video and/or image per project
// const projects = [
//   {
//     title: "E-Commerce Storefront",
//     category: "web",
//     video: "/videos/webstore.mp4",
//     thumbnail: "/images/webstore.jpg",
//   },
//   {
//     title: "UI Design for App",
//     category: "design",
//     thumbnail: "/images/figma-ui-long.png",
//   },
//   {
//     title: "3D Product Showcase",
//     category: "3ddesign",
//     video: "/videos/3d-model.mp4",
//   },
//   {
//     title: "Logo & Branding",
//     category: "graphicsdesigning",
//     thumbnail: "/images/branding.jpg",
//   },
//   {
//     title: "Travel Reel",
//     category: "editing",
//     video: "/videos/travel.mp4",
//   },
//   {
//     title: "Instagram Ad",
//     category: "shorts",
//     video: "/videos/insta.mp4",
//   },
// ];

// export default function PortfolioSection() {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredProjects =
//     activeCategory === "all"
//       ? projects
//       : projects.filter((p) => p.category === activeCategory);

//   return (
//     <section className="bg-[#0a0a0a] text-white px-6 py-24">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
//         {/* Sidebar */}
//         <aside className="hidden lg:flex flex-col gap-3 w-64 border-r border-gray-800 pr-6">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
//                 activeCategory === cat.id
//                   ? "bg-white text-black"
//                   : "hover:bg-[#1a1a1a] text-gray-300"
//               }`}
//             >
//               {cat.icon}
//               {cat.name}
//             </button>
//           ))}
//         </aside>

//         {/* Mobile Tabs */}
//         <div className="lg:hidden flex overflow-x-auto gap-4 pb-4 border-b border-gray-800">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`whitespace-nowrap flex items-center gap-2 px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
//                 activeCategory === cat.id
//                   ? "bg-white text-black"
//                   : "border-gray-700 text-gray-300 hover:border-white"
//               }`}
//             >
//               {cat.icon}
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
//           {filteredProjects.map((project, index) => {
//             const videoRef = useRef<HTMLVideoElement | null>(null);

//             const handleMouseEnter = () => {
//               if (videoRef.current) {
//                 videoRef.current.muted = false;
//                 videoRef.current.play();
//               }
//             };

//             const handleMouseLeave = () => {
//               videoRef.current?.pause();
//             };

//             return (
//               <motion.div
//                 key={index}
//                 className="relative overflow-hidden rounded-xl group shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 {project.video ? (
//                   <video
//                     ref={videoRef}
//                     src={project.video}
//                     controls={false}
//                     playsInline
//                     muted={false}
//                     preload="metadata"
//                     className="w-full h-[500px] object-cover object-top transition-all duration-500"
//                     style={{ aspectRatio: "16/9" }}
//                   />
//                 ) : (
//                   <img
//                     src={project.thumbnail}
//                     alt={project.title}
//                     className="w-full h-auto object-cover max-h-[700px]"
//                     style={{ aspectRatio: "16/9" }}
//                   />
//                 )}

//                 {/* Title Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-10 transition-all duration-300 flex items-end p-4">
//                   <h3 className="text-lg font-semibold text-white drop-shadow-lg">
//                     {project.title}
//                   </h3>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
