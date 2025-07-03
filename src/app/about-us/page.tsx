import AboutUs from "@/Components/About/Index";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nexo Mark | Trusted Digital Solutions Provider",
  description:
    "Nexo Mark A global digital agency powering 500+ brands across 10+ countries with web, design, and marketing solutions. Meet our expert team.",

  openGraph: {
    title: "Our Story | Nexo Mark Digital Agency",
    description:
      "From startup to international agency - delivering cutting-edge digital solutions since 2015. 50+ specialists across 3 continents.",
    url: "https://www.nexomark.agency/about-us",
    images: [
      {
        url: "https://www.nexomark.agency/social-image.png",
        width: 1200,
        height: 630,
        alt: "Nexo Mark Team - Digital Solutions Experts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Nexo Mark Story | Digital Innovation Since 2015",
    description:
      "Discover the team behind 500+ successful digital projects worldwide",
    images: ["https://www.nexomark.agency/social-image.png"],
  },

  alternates: {
    canonical: "https://www.nexomark.agency/about-us",
  },
};

const page = () => {
  return (
    <main>
      <AboutUs />
    </main>
  );
};

export default page;
