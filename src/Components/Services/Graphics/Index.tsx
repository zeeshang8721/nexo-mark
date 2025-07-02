import React from "react";
import GraphicsDesignHero from "./Hero";
import GraphicDesignServices from "./GraphicDesignServices";
import GraphicDesignApproach from "./GraphicDesignApproach";
import GraphicDesignStacks from "./GraphicDesignStacks";
import Cta from "@/Components/Common/Cta";

const GraphicsDesigning = () => {
  return (
    <div>
      <GraphicsDesignHero />
      <GraphicDesignServices />
      <GraphicDesignApproach />
      <GraphicDesignStacks />
      <Cta />
    </div>
  );
};

export default GraphicsDesigning;
