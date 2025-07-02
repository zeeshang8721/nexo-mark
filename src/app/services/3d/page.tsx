import Modeling from "@/Components/Services/3D/Index";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional 3D Modeling & Animation Services | Nexo Mark",
  description:
    "High-end 3D modeling, product visualization, architectural rendering & animation. Blender, Maya & 3ds Max experts delivering photorealistic 3D assets.",

  openGraph: {
    title: "3D Design & Animation Studio | Nexo Mark",
    description:
      "Product modeling, architectural visualization, character animation & VFX. 200+ 3D projects delivered with 24/7 support.",
    url: "https://www.nexomark.agency/services/3d",
    images: [
      {
        url: "https://www.nexomark.agency/social-image.png",
        width: 1200,
        height: 630,
        alt: "Nexo Mark 3D Modeling & Animation Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Studio-Quality 3D Services | Nexo Mark",
    description:
      "From product mockups to animated explainers - we bring ideas to life in 3D",
    images: ["https://www.nexomark.agency/social-image.png"],
  },

  alternates: {
    canonical: "https://www.nexomark.agency/services/3d",
  },
};

const page = () => {
  return (
    <main>
      <Modeling />
    </main>
  );
};

export default page;
