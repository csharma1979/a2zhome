import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  fenceServices,
  fenceWhyChooseUs,
  fenceFaqData,
  fenceGallaryImages,
} from "../../../Data/ServiceData/FenceData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const FenceService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Secure & Beautify Your Property with Our Fence Services"
        subtitle="Expert fence services for installation, repair, and maintenance. Get durable, attractive fencing solutions for residential, commercial, and industrial properties."
      />
      <ServiceCard
        title="Our Fence Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={fenceServices}
      />
      <ServiceProcess />
      <ServiceGallary data={fenceGallaryImages} />

      <WhyChooseUs
        title=" Why Choose Our Fence Services"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={fenceWhyChooseUs}
      />
      <ServiceFaq data={fenceFaqData} />
      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default FenceService;
