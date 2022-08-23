import React from "react";
import OpportunityLg from "./opportunityLg";

const Hero = () => {
  return (
    <div className="hidden grid-in-hero md:hero ">
      <div className="hero-content flex-col">
        <div className="flex flex-col gap-4 items-center md:flex-row md:gap-8">
          <h1 className="text-5xl font-bold text-primary">Find AND Help</h1>
          <OpportunityLg />
        </div>
      </div>
    </div>
  );
};

export default Hero;
