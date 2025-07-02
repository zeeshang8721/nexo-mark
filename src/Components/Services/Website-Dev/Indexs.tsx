import React from "react";
import Hero from "./Hero";
import WebsiteServices from "./Webservices";
import WebStacks from "./WebStacks";
import OurProcess from "./OurProcess";
import Cta from "@/Components/Common/Cta";

const WebsiteSer = () => {
  return (
    <div>
      <Hero />
      <WebsiteServices />
      <OurProcess />
      <WebStacks />
      <Cta />
    </div>
  );
};

export default WebsiteSer;
