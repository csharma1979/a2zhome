import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  flooringServices,
  flooringWhyChooseUs,
  flooringFaqData,
} from "../../../Data/ServiceData/FlooringData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const FlooringService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Transform Your Space with Our Expert Flooring Services"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Flooring Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={flooringServices}
      />
      <ServiceProcess />
      <ServiceGallary />

      <ServiceFaq data={flooringFaqData} />

      <WhyChooseUs
        title=" Why Choose Our Flooring Services?"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={flooringWhyChooseUs}
      />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default FlooringService;
