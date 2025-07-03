// /Components/Common/ClientWrapper.tsx

"use client";

import { usePathname } from "next/navigation";
import HomeOutro from "./HomeOutro";
import Footer from "./Footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-black relative overflow-x-hidden">
      {pathname === "/" && <HomeOutro />}
      {/* <Navbar /> */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
