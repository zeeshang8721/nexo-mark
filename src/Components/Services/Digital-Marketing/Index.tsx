import React from "react";
import DigitalMarketingHero from "./Hero";
import DigitalMarketingOverview from "./MarketingServices";
import SocialMediaMarketing from "./SocialMediaMarketing";
import PPCMarketing from "./PPCMarketing";
import SEO from "./SEO";
import Cta from "@/Components/Common/Cta";

const DigitalMarketing = () => {
  return (
    <div>
      <DigitalMarketingHero />
      <DigitalMarketingOverview />
      <SocialMediaMarketing />
      <PPCMarketing />
      <SEO />
      <Cta />
    </div>
  );
};

export default DigitalMarketing;
