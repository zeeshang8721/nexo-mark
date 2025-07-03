"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import Link from "next/link";

interface DataItem {
  type: string;
  btn: string;
  img: string;
  link: string;
}

const data: DataItem[] = [
  {
    type: "Web Development",
    btn: "Explore",
    img: "/Webdevelopment_Image_2.png",
    link: "/services/website-development",
  },
  {
    type: "UI/UX Design",
    btn: "Explore",
    img: "/Ui_Ux_Image.png",
    link: "/services/ui-ux",
  },
  {
    type: "Digital Marketing",
    btn: "Explore",
    img: "/Digital_Marketing_Image-nexomarkagency.png",
    link: "/services/digital-marketing",
  },
  {
    type: "Graphics Designing",
    btn: "Explore",
    img: "/Graphics_Designing_Image-nexomarkagency.png",
    link: "/services/graphics-designing",
  },
  {
    type: "Video Editing",
    btn: "Explore",
    img: "/Video_Editing_Image-nexomarkagency.png",
    link: "/services/video-editing",
  },
  {
    type: "3D Services",
    btn: "Explore",
    img: "/3d_service_Image-nexomarkagency.png",
    link: "/services/3d",
  },
];

const Services = () => {
  const [activeType, setActiveType] = useState<string>(data[0].type);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const headings = section.querySelectorAll<HTMLElement>(".heading-item");

    for (const heading of headings) {
      const rect = heading.getBoundingClientRect();
      if (rect.top >= 100 && rect.bottom <= window.innerHeight - 200) {
        const newType = heading.dataset.type;
        if (newType && newType !== activeType) {
          setActiveType(newType);
        }
        break;
      }
    }
  }, [activeType]);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const activeImage = useMemo(() => {
    return data.find((item) => item.type === activeType)?.img || data[0].img;
  }, [activeType]);

  return (
    <section ref={sectionRef} className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:pb-20">
        {/* Section Heading */}
        <h2 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90 text-5xl sm:text-6xl pb-20">
          Explore Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left List */}
          <div className="space-y-6">
            {data.map((item) => (
              <div
                key={item.type}
                className={`heading-item border-b border-gray-800 pb-6 cursor-pointer ${
                  activeType === item.type
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-80"
                }`}
                data-type={item.type}
                onMouseEnter={() => setActiveType(item.type)}
              >
                <Link href={item.link}>
                  <h3
                    className={`text-3xl md:text-4xl font-medium transition-all duration-300 ${
                      activeType === item.type ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {item.type}
                  </h3>
                </Link>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="sticky top-20 hidden md:block">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden">
              <div key={activeType} className="absolute inset-0">
                <Image
                  src={activeImage}
                  alt={activeType || "Service"}
                  fill
                  className="object-cover"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
