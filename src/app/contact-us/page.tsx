import React from "react";
import { Metadata } from "next";
import MainContact from "@/Components/Contact/Index";

export const metadata: Metadata = {
  title: "Contact Nexo Mark | Global Digital Solutions Provider",
  description:
    "Get in touch with our team for Website Development, SEO, Graphics Designing, Digital Marketing, Video Editing and 3D services across 10+ countries.",

  openGraph: {
    title: "Contact Nexo Mark | Global Digital Agency",
    description:
      "Reach our team for expert web, design and marketing solutions. Available 24/7 for international clients.",
    url: "https://www.nexomark.agency/contact-us",
    images: [
      {
        url: "https://www.nexomark.agency/social-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Nexo Mark Digital Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Nexo Mark | Global Digital Solutions",
    description:
      "Get expert consultation for your web, SEO and marketing projects",
    images: ["https://www.nexomark.agency/social-image.png"],
  },

  alternates: {
    canonical: "https://www.nexomark.agency/contact-us",
  },
};

const page = () => {
  return (
    <main>
      <MainContact />
    </main>
  );
};

export default page;
