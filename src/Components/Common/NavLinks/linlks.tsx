import { ReactElement } from "react";
import { RiCodeSSlashLine, RiSmartphoneLine, RiBarChartLine, RiBrushLine, RiPaletteLine, RiVideoLine, RiHeartLine, RiTeamLine } from "react-icons/ri";

export type NavItem = {
  label: string;
  href: string;
  isMegaMenu?: boolean;
  children?: {
    title: string;
    icon: ReactElement;
    href: string;
    description: string;
  }[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    isMegaMenu: true,
    children: [
      {
        title: "Web Development",
        icon: <RiCodeSSlashLine />,
        href: "/services/website-development",
        description: "Custom websites and web applications that drive results",
      },
      {
        title: "UI/UX Design",
        icon: <RiSmartphoneLine />,
        href: "/services/ui-ux",
        description: "Beautiful interfaces with intuitive user experiences",
      },
      {
        title: "Digital Marketing",
        icon: <RiBarChartLine />,
        href: "/services/digital-marketing",
        description: "Data-driven campaigns that convert visitors to customers",
      },
      {
        title: "Graphics Design",
        icon: <RiBrushLine />,
        href: "/services/graphics-designing",
        description: "Visual branding that makes your business memorable",
      },
      {
        title: "3D Design",
        icon: <RiPaletteLine />,
        href: "/services/3d",
        description: "Stunning product visualizations and animations",
      },
      {
        title: "Video Editing",
        icon: <RiVideoLine />,
        href: "/services/video-editing",
        description: "Professional video content that tells your story",
      },
    ],
  },
  {
    label: "About",
    href: "/about-us",
    children: [
      {
        title: "Our Story",
        icon: <RiHeartLine />,
        href: "/about-us",
        description: "How we started and where we're going",
      },
      {
        title: "Our Team",
        icon: <RiTeamLine />,
        href: "/about/team",
        description: "Meet the experts behind the work",
      },
    ],
  },
  { label: "Partners Program", href: "/partners" },
];