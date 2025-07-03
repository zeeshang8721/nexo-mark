"use client";

import { useState, useEffect, useRef, ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDown, Menu, X } from "lucide-react";
import {
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiBarChartLine,
  RiBrushLine,
  RiPaletteLine,
  RiVideoLine,
  RiContactsLine,
  RiHeartLine,
  RiTeamLine,
} from "react-icons/ri";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
  isMegaMenu?: boolean;
  children?: {
    title: string;
    icon: ReactElement;
    href: string;
    description: string;
  }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    isMegaMenu: true,
    children: [
      {
        title: "Web Development",
        icon: <RiCodeSSlashLine />,
        href: "/services/website-development",
        description: "Custom websites and web applications that drive results",
      },
      {
        title: "UI/UX Design",
        icon: <RiSmartphoneLine />,
        href: "/services/ui-ux",
        description: "Beautiful interfaces with intuitive user experiences",
      },
      {
        title: "Digital Marketing",
        icon: <RiBarChartLine />,
        href: "/services/digital-marketing",
        description: "Data-driven campaigns that convert visitors to customers",
      },
      {
        title: "Graphics Design",
        icon: <RiBrushLine />,
        href: "/services/graphics-designing",
        description: "Visual branding that makes your business memorable",
      },
      {
        title: "3D Design",
        icon: <RiPaletteLine />,
        href: "/services/3d",
        description: "Stunning product visualizations and animations",
      },
      {
        title: "Video Editing",
        icon: <RiVideoLine />,
        href: "/services/video-editing",
        description: "Professional video content that tells your story",
      },
    ],
  },
  {
    label: "About",
    href: "/about-us",
    children: [
      {
        title: "Our Story",
        icon: <RiHeartLine />,
        href: "/about-us",
        description: "How we started and where we're going",
      },
      {
        title: "Our Team",
        icon: <RiTeamLine />,
        href: "/about/team",
        description: "Meet the experts behind the work",
      },
    ],
  },
  { label: "Partners Program", href: "/partners" },
  // { label: "Portfolio", href: "/portfolio" },
];
const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const mobileMenuVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const isOutsideAll =
        Object.values(navItemRefs.current).every(
          (ref) => ref && !ref.contains(target)
        ) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(target);

      const isMobileMenuButton = target.closest(
        'button[aria-controls="mobile-menu"]'
      );

      if (isOutsideAll && !isMobileMenuButton) {
        setOpenSubMenu(null);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !isMobileMenuButton
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenSubMenu(null);
  }, [pathname]);

  const handleMenuToggle = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setOpenSubMenu(label);
  };

  const handleMouseLeave = (label: string) => {
    hoverTimeoutRef.current = setTimeout(() => {
      if (megaMenuRef.current?.contains(document.activeElement)) return;
      if (
        !megaMenuRef.current?.matches(":hover") &&
        !navItemRefs.current[label]?.matches(":hover")
      ) {
        setOpenSubMenu(null);
      }
    }, 200);
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        isScrolled ? "top-0 sm:top-4" : "top-0"
      }`}
    >
      <div
        className={`w-full transition-all duration-500 ease-in-out bg-gray-900/30 backdrop-blur-md bg-clip-padding border-b border-white/10 ${
          isScrolled
            ? "max-w-[1000px] rounded-none sm:rounded-full"
            : "max-w-full"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-500">
          <div className="flex items-center justify-between transition-all duration-500 py-2">
            {/* Logo */}
            <div
              className={`transition-all duration-500 ${
                isScrolled ? "pl-0" : "pl-0"
              }`}
            >
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  ref={(el: HTMLDivElement | null) => {
                    navItemRefs.current[item.label] = el;
                  }}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={() => handleMouseLeave(item.label)}
                >
                  {!item.children ? (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        pathname === item.href
                          ? "text-blue-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="relative">
                      <button
                        onClick={() => handleMenuToggle(item.label)}
                        className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                          pathname.startsWith(item.href)
                            ? "text-blue-400"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {item.label}
                        <motion.span
                          animate={{
                            rotate: openSubMenu === item.label ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowDown className="ml-1 h-4 w-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {openSubMenu === item.label && (
                          <motion.div
                            ref={megaMenuRef}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={menuVariants}
                            onMouseEnter={() => {
                              clearTimeout(
                                hoverTimeoutRef.current as NodeJS.Timeout
                              );
                              setOpenSubMenu(item.label);
                            }}
                            onMouseLeave={() => handleMouseLeave(item.label)}
                            className={`absolute  transform -translate-x-1/2 mt-2 z-50 rounded-xl shadow-2xl border border-gray-800 overflow-hidden bg-[#121212] backdrop-blur-lg
    ${
      item.label === "About"
        ? "w-[320px] left-[50px]"
        : "w-[900px] left-[200px]"
    }`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.isMegaMenu ? (
                              <div className="p-8">
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 mb-6">
                                  Our Services
                                </h3>
                                <div className="grid grid-cols-3 gap-6">
                                  {item.children.map((service) => (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      className="group"
                                      onClick={() => setOpenSubMenu(null)}
                                    >
                                      <div className="flex items-start space-x-4 p-3 rounded-lg transition-all duration-300 group-hover:bg-[#1a1a1a]">
                                        <div className="p-2 rounded-lg bg-[#1a1a1a] text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                          {service.icon}
                                        </div>
                                        <div>
                                          <h4 className="text-lg font-semibold text-blue-400 transition-colors">
                                            {service.title}
                                          </h4>
                                          <p className="text-sm text-gray-400 mt-1">
                                            {service.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div className="py-2">
                                {item.children?.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    className="flex items-center px-4 py-3 text-sm transition-colors duration-200 hover:bg-[#1a1a1a]"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenSubMenu(null);
                                    }}
                                  >
                                    <span className="mr-3 text-blue-400">
                                      {service.icon}
                                    </span>
                                    <div>
                                      <div className="font-medium text-white">
                                        {service.title}
                                      </div>
                                      <div className="text-xs text-gray-400">
                                        {service.description}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden lg:flex transition-all duration-500">
              <Link
                href="/contact-us"
                className="flex items-center px-6 py-2 text-sm font-medium text-black bg-white border border-white rounded-full hover:bg-transparent hover:text-white transition-all duration-300 group"
              >
                <RiContactsLine className="mr-2 group-hover:text-white" />
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#1a1a1a] focus:outline-none transition-colors duration-200"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                ref={mobileMenuRef}
                id="mobile-menu"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mobileMenuVariants}
                className="lg:hidden bg-[#121212] backdrop-blur-lg shadow-xl overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {NAV_ITEMS.map((item) => (
                    <div key={item.label}>
                      {!item.children ? (
                        <Link
                          href={item.href}
                          className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
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
                            className={`flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                              pathname.startsWith(item.href)
                                ? "bg-[#1a1a1a] text-blue-400"
                                : "text-gray-300 hover:bg-[#1a1a1a] hover:text-white"
                            }`}
                            aria-expanded={openSubMenu === item.label}
                            aria-controls={`mobile-${item.label}-menu`}
                          >
                            {item.label}
                            <motion.span
                              animate={{
                                rotate: openSubMenu === item.label ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {openSubMenu === item.label ? (
                                <X className="h-5 w-5" />
                              ) : (
                                <ArrowDown className="h-5 w-5" />
                              )}
                            </motion.span>
                          </button>
                          <AnimatePresence>
                            {openSubMenu === item.label && (
                              <motion.div
                                id={`mobile-${item.label}-menu`}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={mobileMenuVariants}
                                className="pl-4 space-y-2 mt-1 overflow-hidden"
                              >
                                {item.children?.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    className={`block px-3 py-3 rounded-md transition-colors duration-200 ${
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
                  <Link
                    href="/contact"
                    className="block w-full px-3 py-3 mt-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-500 text-center shadow-lg transition-colors duration-200 flex items-center justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <RiContactsLine className="mr-2" />
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};
