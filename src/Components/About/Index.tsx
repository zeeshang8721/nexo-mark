import React from "react";
import AboutHero from "./Hero";
import AboutStory from "./OurStory";
import MissionSection from "./MissionSection";
import OurServices from "./OurServices";
import Cta from "../Common/Cta";
import IndustriesWeServe from "./IndustriesWeServe";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <AboutStory />
      <MissionSection />
      <OurServices />
      <IndustriesWeServe />
      <Cta />
    </div>
  );
};

export default AboutUs;
