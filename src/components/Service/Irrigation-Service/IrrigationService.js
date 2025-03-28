import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  irrigationWhyChooseUs,
  irrigationServices,
  irrigationFaqData,
  irrigationGallaryImages,
} from "../../../Data/ServiceData/IrrigationData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const IrrigationService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title=" Reliable Irrigation System Installation & Maintenance Services"
        subtitle="Expert irrigation services for design, installation, and maintenance. Ensure optimal water efficiency with customized solutions for residential and commercial properties."
      />
      <ServiceCard
        title="Our Irrigation Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={irrigationServices}
        showReadMore={false}
      />
      <ServiceProcess />
      <ServiceGallary data={irrigationGallaryImages} />

      <WhyChooseUs
        title="Why Choose Our Irrigation Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={irrigationWhyChooseUs}
      />
      <ServiceFaq data={irrigationFaqData} />
      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default IrrigationService;
