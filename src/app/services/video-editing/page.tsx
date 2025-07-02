import VideoEditing from "@/Components/Services/Video-Editing/Index";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Video Editing for YouTube, TikTok & Social Media | Nexo Mark",
  description:
    "Specialized editing for short-form (TikTok/Reels) and long-form (YouTube/docs). Premiere Pro & After Effects VFX + CapCut optimization. Retention-boosting cuts, transitions, and SFX.",
  openGraph: {
    title: "Social Media Video Editing (YouTube/TikTok/IG) | Nexo Mark",
    description:
      "Platform-optimized editing for YouTube (retention-focused), TikTok (viral hooks), Instagram Reels & LinkedIn. VFX, color grading, and motion graphics with Adobe Suite/CapCut.",
    url: "https://www.nexomark.agency/services/video-editing",
    images: [
      {
        url: "https://www.nexomark.agency/social-image.png",
        width: 1200,
        height: 630,
        alt: "Nexo Mark Social Media Video Editing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Viral Video Editing for TikTok/YouTube | Nexo Mark",
    description:
      "Adobe Premiere Pro & After Effects VFX + CapCut mobile editing for social media growth",
    images: ["https://www.nexomark.agency/social-image.png"],
  },

  alternates: {
    canonical: "https://www.nexomark.agency/services/video-editing",
  },
};

const page = () => {
  return (
    <main>
      <VideoEditing />
    </main>
  );
};

export default page;
