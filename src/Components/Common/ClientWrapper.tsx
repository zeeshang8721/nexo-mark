// /Components/Common/ClientWrapper.tsx

"use client";

import { usePathname } from "next/navigation";
import HomeOutro from "./HomeOutro";
import Footer from "./Footer";
import DesktopNav from "./DesktopNav";
import { FaWhatsapp } from "react-icons/fa";
import MobileNav from "./MobileNav";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-black relative overflow-x-hidden">
      {pathname === "/" && <HomeOutro />}
      <div className="fixed left-4 bottom-4 z-[999]">
        <a
          href="https://wa.me/+447340150626"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-all duration-300 animate-bounce"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-4xl" />
        </a>
      </div>
      <div className="md:block hidden">
        <DesktopNav />
      </div>
      <div className="block md:hidden">

        <MobileNav />
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
