import React, { Suspense } from "react";
import ContactUs from "../../Components/Contact/ContactUs";

export const metadata = {
  title: "Contact Nexo Mark | Web Development & Digital Solutions",
  description:
    "Have a project in mind? Contact Nexo Mark to turn your ideas into high-impact websites, SEO campaigns, and digital marketing strategies.",
  keywords: [
    "contact digital agency",
    "web development agency contact",
    "Nexo Mark contact",
    "hire web developers",
    "SEO agency near me",
    "digital marketing agency contact",
    "get in touch with developers",
    "professional branding team",
    "contact for web design",
    "schedule strategy call"
  ],
  openGraph: {
    title: "Contact Nexo Mark | Let's Build Something Great",
    description: "Reach out to Nexo Mark for custom digital solutions that drive results.",
    url: "https://www.nexomark.agency/contact-us",
    type: "website",
    siteName: "Nexo Mark"
  },
  alternates: {
    canonical: "https://www.nexomark.agency/contact-us"
  },
  other: {
    "instagram:creator": "@nexomark.agency",
    "linkedin:company": "nexo-mark",
    "fb:profile_id": "61575301816998",
    "og:social_links": JSON.stringify([
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/company/nexo-mark"
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/nexomark.agency/"
      },
      {
        platform: "facebook",
        url: "https://www.facebook.com/profile.php?id=61575301816998"
      }
    ])
  }
};

const Page = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactUs />
      </Suspense>
    </main>
  );
};

export default Page;