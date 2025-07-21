"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Drawer } from "vaul";
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
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const navItems = useMemo(
        () => [
            { label: "Home", href: "/" },
            {
                label: "Services",
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
                        href: "/our-team",
                        description: "Meet the experts behind the work",
                    },
                ],
            },
            { label: "Partners Program", href: "/partners-program" },
            { label: "Contact Us", href: "/contact-us" },
        ],
        []
    );

    const toggleItem = (label: string) => {
        setExpandedItem(prev => (prev === label ? null : label));
    };

    useEffect(() => {
        const handleKeyClose = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKeyClose);
        return () => window.removeEventListener("keydown", handleKeyClose);
    }, []);

    return (
        <>
            {/* Top Logo and Toggle */}
            <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-gray-800 bg-black z-[9999] fixed top-0 left-0 right-0">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/LogoHorisvg-01.svg"
                            alt="Company Logo"
                            className="max-h-[60px] object-cover"
                            width={180}
                            height={60}
                        />
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white hover:text-blue-400 p-2"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Drawer */}
            <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed md:hidden inset-0 bg-black/40 z-[9998]" />
                    <Drawer.Content className="fixed top-[78px] bottom-0 left-0 right-0 bg-black/95 z-[9999] backdrop-blur-lg border-t border-gray-800 rounded-t-xl max-h-[90%] overflow-y-auto">
                        <div className="mx-auto w-12 h-1.5 rounded-full bg-gray-600 mt-2 mb-4" />
                        <div className="px-6 pt-2 pb-10 space-y-6 text-xl text-white">
                            {navItems.map((item, index) => (
                                <div key={index} className="border-b border-gray-800 pb-4">
                                    <div
                                        className={`flex items-center justify-between ${item.children ? "cursor-pointer" : ""}`}
                                        onClick={() => {
                                            if (item.children) {
                                                toggleItem(item.label);
                                            } else {
                                                setIsOpen(false);
                                            }
                                        }}
                                    >
                                        {item.href && !item.children ? (
                                            <Link href={item.href} onClick={() => setIsOpen(false)}>
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <span>{item.label}</span>
                                        )}

                                        {item.children && (
                                            <IoIosArrowForward
                                                className={`transition-transform ${expandedItem === item.label ? "rotate-90" : ""}`}
                                            />
                                        )}
                                    </div>

                                    {item.children && expandedItem === item.label && (
                                        <div className="mt-4 ml-4 space-y-4">
                                            {item.isMegaMenu ? (
                                                <div className="grid grid-cols-1 gap-4">
                                                    {item.children.map((child, i) => (
                                                        <Link
                                                            key={i}
                                                            href={child.href}
                                                            className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50"
                                                            onClick={() => setIsOpen(false)}
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
                                                        className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-900/50"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <div>{child.icon}</div>
                                                        <div>
                                                            <h4 className="font-medium text-white">{child.title}</h4>
                                                            <p className="text-sm text-gray-400">{child.description}</p>
                                                        </div>
                                                    </Link>
                                                ))
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>

            {/* FIX: Add this class to hero section or page wrapper */}
            {/* In your hero section/component, wrap with this: className="mt-[78px] lg:mt-0" */}
        </>
    );
};

export default MobileNav;
