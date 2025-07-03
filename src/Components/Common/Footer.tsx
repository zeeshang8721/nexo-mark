import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black px-6 lg:px-20 py-16 text-white">
      {/* TOP SECTION: Brand + Newsletter */}
      <div className="flex md:flex-nowrap flex-wrap justify-between items-center border-b border-b-[#383A3E] pt-20 pb-10">
        <div className="">
          <p className="text-[#FDFDFE] text-[80px] sm:text-[100px] leading-0 sm:pt-10">Nexo</p>
          <p className="text-[#C3C5C6] text-[130px] sm:text-[150px] pl-10">Mark</p>
        </div>
        <div className="mt-10">
          <p className="text-[#C3C5C6] text-lg mb-4">
            Sign up for our <span className="text-[#FDFDFE]">Newsletter</span>
          </p>

          <div className="relative w-full md:w-[400px] sm:max-w-md">
            {/* Left Icon */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail size={20} />
            </span>

            {/* Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white text-black py-3 pl-12 pr-12 rounded-md focus:outline-none"
            />

            {/* Right Arrow Button */}
            <button className="absolute cursor-pointer right-1 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-md ">
              <ArrowRight size={20} />
            </button>
          </div>
          <p className="text-[#C3C5C6] text-sm mt-3">
            or reach us at:{" "}
            <span className="text-white underline underline-offset-4">
              business@nexomark.agency
            </span>
          </p>
        </div>
      </div>

      {/* MID SECTION: Quick Links + Socials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 text-[#C3C5C6] text-sm">
        <div>
          <p className="text-white font-medium mb-3">Find Your Way</p>
          <ul className="space-y-2">
            <li>
              <Link href={"/about-us"} className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href={"/partners-program"} className="hover:text-white transition">
                Partners Program
              </Link>
            </li>
            <li>
              <Link href={"/contact-us"} className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-white font-medium mb-3">Our Services</p>
          <ul className="space-y-2">
            <li>
              <Link 
                href={"/services/website-development"} 
                className="hover:text-white transition"
              >
                Website Development
              </Link>
            </li>
            <li>
              <Link href={"/services/ui-ux"} className="hover:text-white transition">
                UI/UX Designing
              </Link>
            </li>
            <li>
              <Link 
                href={"/services/digital-marketing"} 
                className="hover:text-white transition"
              >
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link 
                href={"/services/graphics-designing"} 
                className="hover:text-white transition"
              >
                Graphic Designing
              </Link>
            </li>
            <li>
              <Link href={"/services/video-editing"} className="hover:text-white transition">
                Video Editing
              </Link>
            </li>
            <li>
              <Link href={"/services/3d"} className="hover:text-white transition">
                3D Designing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-white font-medium mb-3">Our Offices</p>
          <ul className="space-y-2">
            <li className="hover:text-white transition cursor-default">
              GGICO METRO STATION EXIT 2, THE ARCADE BUILDING OFFICE, NO 203, AL
              GARhoud Deira Dubai
            </li>
            <li className="hover:text-white transition cursor-default">
              9H Sunny Side Road, ML5 3DG, Glasgow
            </li>
            <li className="hover:text-white transition cursor-default">
              Setten Rd, Al Faisaliyyah, Jeddah
            </li>
            <li className="hover:text-white transition cursor-default">
              Mall Of Lyallpur - Office No Mz-94, D-Ground Faisalabad
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <p className="text-white font-medium mb-3">Connect With Us</p>
          <div className="flex gap-4 mt-4">
            <a 
              href="https://www.instagram.com/nexomark.agency/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1E1E1E] hover:bg-[#2E2E2E] p-3 rounded-full transition-all duration-300"
              aria-label="Instagram"
            >
              <FiInstagram className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/107739849/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1E1E1E] hover:bg-[#2E2E2E] p-3 rounded-full transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1E1E1E] hover:bg-[#2E2E2E] p-3 rounded-full transition-all duration-300"
              aria-label="Facebook"
            >
              <FiFacebook className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-6 text-[#C3C5C6]">
            Follow us for updates, tips, and more.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION: Legal */}
      <div className="border-t border-[#383A3E] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[#777] text-xs">
        <p>
          © {new Date().getFullYear()} NexoMark Agency. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/policies/privacy-policy"
            className="hover:text-white transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/policies/terms-and-conditions"
            className="hover:text-white transition"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/policies/cookie-policy"
            className="hover:text-white transition"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;