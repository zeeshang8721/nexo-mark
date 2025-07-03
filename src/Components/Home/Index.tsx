import React from "react";
import ServiceProcess from "./ServiceProcess";
import Services from "./ServicesSection";
import Philosophy from "./Philosophy";
import Clienttrust from "./Clienttrust";
import HeroSection from "./Hero";
import Cta from "../Common/Cta";
import ProjectsFolders from "./Projects";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <ServiceProcess />
      <Services />
      <ProjectsFolders />
      <Philosophy />
      <Clienttrust />
      <Cta />
    </div>
  );
};

export default Index;
