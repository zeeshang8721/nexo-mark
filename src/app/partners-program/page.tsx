import Partners from "@/Components/Partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label Partner Program | Reduce Workload for Digital Agencies",
  description: "We serve as your white label partner to handle overflow work - web development, SEO & marketing services delivered under your brand. Scale without hiring.",

  openGraph: {
    title: "White Label Partner Program | Reduce Agency Workload | Nexo Mark",
    description: "Let us handle your overflow projects as invisible backend partners. Web, SEO & marketing services delivered under your agency's brand.",
    url: "https://www.nexomark.agency/partners-program",
    images: [{
      url: "https://www.nexomark.agency/social-image.png", // Consistent path
      width: 1200,
      height: 630,
      alt: "Nexo Mark White Label Partner Program",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "White Label Partner Program for Overwhelmed Agencies",
    description: "We reduce workload for other agencies with white label web, SEO & marketing services",
    images: ["https://www.nexomark.agency/social-image.png"], // Consistent path
  },

  alternates: {
    canonical: "https://www.nexomark.agency/partners-program",
  },
};
const page = () => {
  return (
    <main>
      <Partners />
    </main>
  );
};

export default page;