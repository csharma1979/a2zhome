import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  glassServices ,
  glassWhyChooseUs,
  glassFaqData ,
} from "../../../Data/ServiceData/GlassData";

import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const GlassService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Premium Glass Installation & Repair Services"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Glass Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={glassServices }
      />
      <ServiceProcess />
      <ServiceGallary />

      

      <WhyChooseUs
        title="Why Choose Our Glass Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={glassWhyChooseUs}
      />

<ServiceFaq data={glassFaqData } />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default GlassService;
