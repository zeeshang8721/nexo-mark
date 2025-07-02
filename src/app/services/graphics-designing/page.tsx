import GraphicsDesigning from "@/Components/Services/Graphics/Index";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Graphic Design Services | Branding & Marketing Assets | Nexo Mark",
  description: "Stunning visual design for logos, branding, social media, and print. Adobe Creative Suite experts delivering pixel-perfect designs for businesses worldwide.",

  openGraph: {
    title: "Impactful Graphic Design for Brands | Nexo Mark",
    description: "Logo design, brand identities, marketing collateral, and social media graphics. 500+ brands empowered with memorable visual assets.",
    url: "https://www.nexomark.agency/services/graphics-designing",
    images: [{
      url: "https://www.nexomark.agency/social-image.png",
      width: 1200,
      height: 630,
      alt: "Nexo Mark Professional Graphic Design Services",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brand-Transforming Graphic Design | Nexo Mark",
    description: "From logos to complete brand systems - designed to make your business unforgettable",
    images: ["https://www.nexomark.agency/social-image.png"],
  },

  alternates: {
    canonical: "https://www.nexomark.agency/services/graphics-designing",
  },
};


const page = () => {
  return (
    <main>
      <GraphicsDesigning />
    </main>
  );
};

export default page;
