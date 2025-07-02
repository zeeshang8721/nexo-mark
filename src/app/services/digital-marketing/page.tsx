import DigitalMarketing from "@/Components/Services/Digital-Marketing/Index";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results-Driven Digital Marketing Services | Nexo Mark",
  description: "End-to-end digital marketing solutions: SEO, PPC, social media & content marketing. Data-driven strategies to grow your business in 10+ countries.",

  openGraph: {
    title: "Digital Marketing That Delivers ROI | Nexo Mark",
    description: "360° marketing solutions: Google/Facebook ads, influencer campaigns, email marketing & conversion rate optimization. 300+ clients scaled.",
    url: "https://www.nexomark.agency/services/digital-marketing",
    images: [{
      url: "https://www.nexomark.agency/social-image.png",
      width: 1200,
      height: 630,
      alt: "Nexo Mark Digital Marketing Services",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "ROI-Focused Digital Marketing | Nexo Mark",
    description: "From startups to enterprises - we scale businesses through data-powered marketing",
    images: ["https://www.nexomark.agency/social-image.png"],
  },

  alternates: {
    canonical: "https://www.nexomark.agency/services/digital-marketing",
  },
};

const page = () => {
  return (
    <main>
      <DigitalMarketing />
    </main>
  );
};

export default page;
