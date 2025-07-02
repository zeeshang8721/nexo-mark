import React from "react";
import Hero from "./Hero";
import UIUXServices from "./Services";
import UIUXProcess from "./UxProcess";
import UIUXStacks from "./UiUxStacks";

const UiUx = () => {
  return (
    <div>
      <Hero />
      <UIUXServices />
      <UIUXProcess />
      <UIUXStacks />
      {/* <Cta /> */}
    </div>
  );
};

export default UiUx;
