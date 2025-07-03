"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "./NavLinks/linlks";
import { RiContactsLine } from "react-icons/ri";
import Image from "next/image";
import { Drawer, SwipeableDrawer } from "@mui/material";

export const MobileNavbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleMenuToggle = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center lg:hidden">
      <div className="w-full max-w-full bg-gray-900/30 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <div>
              <Link href={"/"}>
                <Image
                  src="/logotext.png"
                  alt="Logo"
                  width={150}
                  height={80}
                  priority
                  loading="eager"
                  className="max-h-[70px] object-cover"
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#1a1a1a]"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <SwipeableDrawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpen={() => setMobileMenuOpen(true)}
        PaperProps={{
          sx: {
            width: "85%",
            maxWidth: "320px",
            backgroundColor: "#121212",
            color: "white",
          },
        }}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#1a1a1a]"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 overflow-y-auto flex-grow">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {!item.children ? (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.href
                        ? "bg-[#1a1a1a] text-blue-400"
                        : "text-gray-300 hover:bg-[#1a1a1a] hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => handleMenuToggle(item.label)}
                      className={`flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                        pathname.startsWith(item.href)
                          ? "bg-[#1a1a1a] text-blue-400"
                          : "text-gray-300 hover:bg-[#1a1a1a] hover:text-white"
                      }`}
                      aria-expanded={openSubMenu === item.label}
                    >
                      {item.label}
                      <span
                        className={`h-5 w-5 transition-transform ${
                          openSubMenu === item.label ? "rotate-180" : ""
                        }`}
                      >
                        <ArrowDown />
                      </span>
                    </button>
                    <AnimatePresence>
                      {openSubMenu === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-2 mt-1 overflow-hidden"
                        >
                          {item.children?.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`block px-3 py-3 rounded-md ${
                                pathname === service.href
                                  ? "bg-blue-600/20 text-blue-400"
                                  : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="flex items-center">
                                <div className="mr-3 text-blue-400">
                                  {service.icon}
                                </div>
                                <div>
                                  <div className="font-medium">
                                    {service.title}
                                  </div>
                                  <div className="text-xs mt-1">
                                    {service.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="block px-3 py-2 text-sm text-blue-400 hover:text-blue-300"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            View all services →
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4">
            <Link
              href="/contact"
              className="block w-full px-3 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-500 text-center shadow-lg flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <RiContactsLine className="mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </SwipeableDrawer>
    </header>
  );
};