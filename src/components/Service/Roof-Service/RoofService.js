import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  roofingServices,
  roofingWhyChooseUs,
  roofingFaqData
} from "../../../Data/ServiceData/RoofData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const RoofService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Reliable Roof Installation, Repair & Maintenance Services"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Roof Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={roofingServices}
      />
      <ServiceProcess />
      <ServiceGallary />

      <ServiceFaq data={roofingFaqData} />

      <WhyChooseUs
        title="Why Choose Our Roof Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={roofingWhyChooseUs}
      />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default RoofService;
