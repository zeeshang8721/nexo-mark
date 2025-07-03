import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import {
  RiCodeSSlashLine,
  RiSmartphoneLine,
  RiBarChartLine,
  RiBrushLine,
  RiPaletteLine,
  RiVideoLine,
  RiHeartLine,
  RiTeamLine,
} from "react-icons/ri";

const DesktopNav = () => {
  const [selectedItem, setSelectedItem] = useState<string>("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback((title: string | null) => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setHoveredItem(title);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutId.current = setTimeout(() => {
      setHoveredItem(null);
    }, 100);
  }, []);

  const toggleMobileItem = useCallback((label: string) => {
    setExpandedMobileItem(prev => prev === label ? null : label);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setExpandedMobileItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  const navItems = useMemo(() => [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      isMegaMenu: true,
      children: [
        {
          title: "Web Development",
          icon: <RiCodeSSlashLine className="text-blue-400" />,
          href: "/services/website-development",
          description: "Custom websites and web applications that drive results",
        },
        {
          title: "UI/UX Design",
          icon: <RiSmartphoneLine className="text-purple-400" />,
          href: "/services/ui-ux",
          description: "Beautiful interfaces with intuitive user experiences",
        },
        {
          title: "Digital Marketing",
          icon: <RiBarChartLine className="text-green-400" />,
          href: "/services/digital-marketing",
          description: "Data-driven campaigns that convert visitors to customers",
        },
        {
          title: "Graphics Design",
          icon: <RiBrushLine className="text-pink-400" />,
          href: "/services/graphics-designing",
          description: "Visual branding that makes your business memorable",
        },
        {
          title: "3D Design",
          icon: <RiPaletteLine className="text-yellow-400" />,
          href: "/services/3d",
          description: "Stunning product visualizations and animations",
        },
        {
          title: "Video Editing",
          icon: <RiVideoLine className="text-red-400" />,
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
          icon: <RiHeartLine className="text-blue-400" />,
          href: "/about-us",
          description: "How we started and where we're going",
        },
        {
          title: "Our Team",
          icon: <RiTeamLine className="text-purple-400" />,
          href: "/about/team",
          description: "Meet the experts behind the work",
        },
      ],
    },
    { label: "Partners Program", href: "/partners-program" },
    { label: "Contact", href: "/contact" },
  ], []);

  const LazyMegaMenu = ({ item, onClose }: { item: any, onClose: () => void }) => (
    <div className="fixed left-0 mt-2 w-screen bg-black/95 backdrop-blur-lg shadow-xl rounded-b-lg p-8 flex flex-col lg:flex-row gap-10 z-50 border-t border-gray-800">
      <div className="w-full lg:w-2/3">
        <h3 className="text-2xl font-bold mb-6 text-white">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {item.children.map((child: any, i: number) => (
            <Link
              key={i}
              href={child.href}
              className="group p-4 rounded-lg hover:bg-gray-900/50 border border-gray-800 hover:border-blue-400/30 transition-all"
              onClick={onClose}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">{child.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-400">
                    {child.title}
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">{child.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3 bg-gradient-to-br from-blue-900/20 to-black/50 p-6 rounded-lg border border-gray-800">
        <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us?</h3>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-blue-400">✓</span>
            <span>Industry-leading expertise</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400">✓</span>
            <span>Custom solutions for your business</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400">✓</span>
            <span>Transparent communication</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-400">✓</span>
            <span>Proven track record of success</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const RegularDropdown = ({ item, onClose }: { item: any, onClose: () => void }) => (
    <div className="absolute -left-14 mt-2 w-64 bg-black/95 backdrop-blur-lg rounded-lg shadow-lg p-4 z-50 border border-gray-800">
      {item.children.map((child: any, i: number) => (
        <Link
          key={i}
          href={child.href}
          className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-900/50 text-white hover:text-blue-400 transition-colors"
          onClick={onClose}
        >
          {child.icon}
          <div>
            <h4 className="font-medium">{child.title}</h4>
            <p className="text-xs text-gray-400">{child.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="fixed w-full bg-black/80 backdrop-blur-md z-[1000] border-b border-gray-800" ref={navbarRef}>
      <div className="max-w-7xl flex flex-col lg:flex-row justify-between items-center py-4 px-5 mx-auto">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="focus:outline-none">
            <div className="w-[150px] h-[70px] relative">
              <Image
                src="/logotext.png"
                width={150}
                height={70}
                priority
                className="object-cover"
                alt="Nexo Mark Agency Logo"
              />
            </div>
          </Link>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-400 transition-colors p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="text-2xl" />
              ) : (
                <RiMenu3Line className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-8 lg:gap-10 text-[16px] font-light">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={item.children ? handleMouseLeave : undefined}
            >
              <div
                className={`flex items-center gap-1 cursor-pointer ${
                  selectedItem === item.label.toLowerCase() || hoveredItem === item.label
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                } transition-colors`}
                onClick={() => setSelectedItem(item.label.toLowerCase())}
              >
                <Link
                  href={item.href}
                  className="focus:outline-none"
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault();
                    } else {
                      handleMouseEnter(null);
                    }
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <IoIosArrowDown
                    className={`${hoveredItem === item.label ? "rotate-180" : ""} transition-transform`}
                  />
                )}
              </div>

              {/* Mega Menu for Services */}
              {item.isMegaMenu && hoveredItem === item.label && (
                <LazyMegaMenu item={item} onClose={() => handleMouseEnter(null)} />
              )}

              {/* Regular Dropdown for About */}
              {!item.isMegaMenu && item.children && hoveredItem === item.label && (
                <RegularDropdown item={item} onClose={() => handleMouseEnter(null)} />
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link href="/contact" className="focus:outline-none">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 py-3 px-6 shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-[90px] left-0 w-full h-[calc(100vh-90px)] bg-black/95 backdrop-blur-lg z-40 overflow-y-auto">
            <div className="container mx-auto px-6 pt-5 pb-10">
              <div className="flex flex-col space-y-6 text-xl">
                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-800 pb-4">
                    <div
                      className={`flex items-center justify-between ${
                        item.children ? "cursor-pointer" : ""
                      }`}
                      onClick={() => {
                        if (item.children) {
                          toggleMobileItem(item.label);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`${
                          selectedItem === item.label.toLowerCase()
                            ? "text-blue-400"
                            : "text-white"
                        } focus:outline-none`}
                        onClick={(e) => {
                          if (item.children) {
                            e.preventDefault();
                          } else {
                            handleMouseEnter(null);
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <IoIosArrowForward
                          className={`transition-transform ${
                            expandedMobileItem === item.label ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </div>

                    {/* Mobile Dropdown Content */}
                    {item.children && expandedMobileItem === item.label && (
                      <div className="mt-4 ml-4 space-y-4">
                        {item.isMegaMenu ? (
                          <div className="grid grid-cols-1 gap-4">
                            {item.children.map((child, i) => (
                              <Link
                                key={i}
                                href={child.href}
                                className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="mt-1">{child.icon}</div>
                                <div>
                                  <h4 className="font-medium text-white">{child.title}</h4>
                                  <p className="text-sm text-gray-400">{child.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          item.children.map((child, i) => (
                            <Link
                              key={i}
                              href={child.href}
                              className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.icon}
                              <div>
                                <h4 className="font-medium">{child.title}</h4>
                                <p className="text-xs text-gray-400">{child.description}</p>
                              </div>
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ))}
                {/* Mobile CTA Button */}
                <div className="mt-8">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="focus:outline-none">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg py-3 px-6 shadow-lg hover:shadow-blue-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(DesktopNav);