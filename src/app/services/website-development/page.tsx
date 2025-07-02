import WebsiteSer from "@/Components/Services/Website-Dev/Indexs";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Website & eCommerce Development Services | Nexo Mark",
  description: "Professional website development, eCommerce stores (Shopify/WooCommerce), and custom business dashboards. Responsive, scalable solutions built with React, Next.js, and headless CMS.",
  openGraph: {
    title: "Website Development Services | Nexo Mark",
    description: "Custom web solutions for businesses across 10+ countries. Mobile-first, fast-loading websites.",
    url: "https://www.nexomark.agency/services/website-development",
    images: [{
      url: "https://www.nexomark.agency/social-image.png",
      width: 1200,
      height: 630,
      alt: "Nexo Mark Website Development Services",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Professional Website Development | Nexo Mark",
    description: "Custom-built websites for optimal performance and conversions",
    images: ["https://www.nexomark.agency/social-image.png"],
  },

  alternates: {
    canonical: "https://www.nexomark.agency/services/website-development",
  },
};

const page = () => {
  return (
    <main>
      <WebsiteSer />
    </main>
  );
};

export default page;
