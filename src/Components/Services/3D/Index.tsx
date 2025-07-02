import React from "react";
import IndustriesWeServe from "./IndustriesWeServe";
import ThreeDServices from "./ThreeDServices";
import OurProcess from "./OurProcess";
import BeforeAfterShowcase from "./BeforeAfterShowcase";
import Cta from "@/Components/Common/Cta";
import Hero3D from "./Hero";

const Modeling = () => {
  return (
    <div>
      <Hero3D />
      <ThreeDServices />
      <OurProcess />
      <BeforeAfterShowcase />
      <IndustriesWeServe />
      <Cta />
    </div>
  );
};

export default Modeling;
