import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  glassServices,
  glassWhyChooseUs,
  glassFaqData,
  glassGallaryImages
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
        subtitle="Expert glass services for installation, repair, and replacement. Enhance your space with custom designs and energy-efficient solutions for homes and businesses."
      />
      <ServiceCard
        title="Our Glass Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={glassServices}
        showReadMore={false}
      />
      <ServiceProcess />
      <ServiceGallary data={glassGallaryImages}/>

      <WhyChooseUs
        title="Why Choose Our Glass Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={glassWhyChooseUs}
      />

      <ServiceFaq data={glassFaqData} />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default GlassService;
