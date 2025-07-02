import UiUx from "@/Components/Services/Ui/Ux/Index";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Mobile & Web App Interfaces | Nexo Mark",
  description: "Award-winning UI/UX design for web and mobile apps. User-centered interfaces with Figma, Adobe XD & prototyping. 80%+ faster conversions through optimized user flows.",

  openGraph: {
    title: "UI/UX Design That Converts | Web & Mobile Experiences | Nexo Mark",
    description: "End-to-end UX research, wireframing, and UI design for SaaS, eCommerce, and mobile apps. 300+ successful projects across 10+ industries.",
    url: "https://www.nexomark.agency/services/ui-ux",
    images: [{
      url: "https://www.nexomark.agency/social-image.png",
      width: 1200,
      height: 630,
      alt: "Nexo Mark UI/UX Design Services",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Conversion-Focused UI/UX Design | Nexo Mark",
    description: "From wireframes to high-fidelity prototypes - designed for results",
    images: ["https://www.nexomark.agency/social-image.png"],
  },

  alternates: {
    canonical: "https://www.nexomark.agency/services/ui-ux",
  },
};


const page = () => {
  return (
    <main>
      <UiUx />
    </main>
  );
};

export default page;
