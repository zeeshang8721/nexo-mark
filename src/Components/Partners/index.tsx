import React from "react";
import PartnerHero from "./Hero";
import PartnerBenefits from "./PartnerBenefits";
import { PartnerWorkflow } from "./PartnerWorkflow";
import { ComprehensiveFAQ } from "./ExhaustiveFAQ";
import Cta from "../Common/Cta";

const Partners = () => {
  return (
    <div>
      <PartnerHero />
      <PartnerBenefits />
      <PartnerWorkflow />
      <ComprehensiveFAQ />
      <Cta />
    </div>
  );
};

export default Partners;
