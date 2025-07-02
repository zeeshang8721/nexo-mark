"use client";

import {
  MdArchitecture,
  MdMedicalServices,
  MdOutlinePrecisionManufacturing,
  MdSchool,
  MdShoppingCart,
  MdAnimation,
  MdBusiness,
  MdAgriculture,
  MdFlightTakeoff,
  MdEmojiTransportation,
  MdSmartphone,
  MdOutlineSportsEsports,
  MdTheaterComedy,
  MdEngineering,
  MdOutlineScience,
  MdOutlineBuild,
  MdOutlineStore,
  MdOutlineLocalPolice,
  MdOutlineEvent,
  MdOutlineLiveTv,
} from "react-icons/md";

const industries = [
  { name: "Architecture", icon: <MdArchitecture />, color: "#F59E0B" },
  { name: "Healthcare", icon: <MdMedicalServices />, color: "#3B82F6" },
  { name: "Manufacturing", icon: <MdOutlinePrecisionManufacturing />, color: "#10B981" },
  { name: "Education", icon: <MdSchool />, color: "#6366F1" },
  { name: "Ecommerce", icon: <MdShoppingCart />, color: "#EC4899" },
  { name: "Media", icon: <MdAnimation />, color: "#EF4444" },
  { name: "Corporate Training", icon: <MdBusiness />, color: "#14B8A6" },
  { name: "Agriculture", icon: <MdAgriculture />, color: "#84CC16" },
  { name: "Aerospace", icon: <MdFlightTakeoff />, color: "#38BDF8" },
  { name: "Automotive", icon: <MdEmojiTransportation />, color: "#F87171" },
  { name: "Mobile Tech", icon: <MdSmartphone />, color: "#A78BFA" },
  { name: "Gaming", icon: <MdOutlineSportsEsports />, color: "#E879F9" },
  { name: "Entertainment", icon: <MdTheaterComedy />, color: "#FACC15" },
  { name: "Engineering", icon: <MdEngineering />, color: "#60A5FA" },
  { name: "Science", icon: <MdOutlineScience />, color: "#4ADE80" },
  { name: "Product Design", icon: <MdOutlineBuild />, color: "#F472B6" },
  { name: "Retail Stores", icon: <MdOutlineStore />, color: "#34D399" },
  { name: "Defense", icon: <MdOutlineLocalPolice />, color: "#EF4444" },
  { name: "Events", icon: <MdOutlineEvent />, color: "#FB923C" },
  { name: "Broadcast", icon: <MdOutlineLiveTv />, color: "#0EA5E9" },
];

const IndustriesWeServe = () => {
  return (
    <section className="py-20 px-4 sm:px-8 text-white relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          Industries We Transform with 3D
        </h2>

        <div
          className="flex flex-wrap justify-center gap-6"
        >
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-[#1f1f1f] border border-gray-800 hover:border-blue-500 rounded-xl p-4 w-[100px] h-[110px] justify-center shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div
                className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: industry.color }}
              >
                {industry.icon}
              </div>
              <p className="text-sm text-center text-gray-300">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
