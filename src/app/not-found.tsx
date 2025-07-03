// app/not-found.tsx
"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-screen bg-[#0c0c0c] text-white pt-40 pb-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Error Icon */}
        <div
          className="mb-8"
        >
          <div className="relative">
            <AlertTriangle className="w-24 h-24 text-blue-500" />
            <span
              className=" -top-2 -right-2 text-4xl font-bold text-blue-500"
            >
              4
            </span>
            <span
              className=" -top-2 -right-2 text-4xl font-bold text-blue-500"
            >
              0
            </span>
            <span
              className=" -top-2 -right-2 text-4xl font-bold text-blue-500"
            >
              4
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90">
            Page Not Found
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        >
        {`  The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.`}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
        >
          <div
            className="w-full"
          >
            <Link
              href="/"
              className="group relative flex justify-center w-full items-center px-8 py-4 text-sm font-semibold hover:text-black hover:bg-white bg-transparent text-white rounded-full overflow-hidden transition-all duration-500 border border-white"
            >
              <span className="relative z-10">Go Back To Home</span>
            </Link>
          </div>

          <div
            className="w-full"
          >
            <Link
              href="/contact-us"
              className="group relative flex justify-center w-full items-center px-8 py-4 text-sm font-semibold text-black bg-white hover:bg-transparent hover:text-white rounded-full overflow-hidden transition-all duration-500 border border-white"
            >
              <span className="relative z-10">Contact Support</span>
            </Link>
          </div>
        </div>

        {/* Floating Elements for Depth */}
        <div
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-16 left-10 text-neutral-500 animate-pulse">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-14 text-neutral-400 animate-pulse">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v4" />
              <path d="m16.24 7.76 2.83-2.83" />
              <path d="M18 12h4" />
              <path d="m16.24 16.24 2.83 2.83" />
              <path d="M12 18v4" />
              <path d="m4.93 19.07 2.83-2.83" />
              <path d="M2 12h4" />
              <path d="m4.93 4.93 2.83 2.83" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-700 opacity-10">
            <svg
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
              <path d="M7 3.34V5a2 2 0 0 0 2 2h2.5" />
              <path d="M2.5 12.5a10 10 0 1 0 5-7.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
