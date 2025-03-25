import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  irrigationWhyChooseUs,
  irrigationServices,
  irrigationFaqData,
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
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Irrigation Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={irrigationServices}
      />
      <ServiceProcess />
      <ServiceGallary />

      <ServiceFaq data={irrigationFaqData} />

      <WhyChooseUs
        title="Why Choose Our Irrigation Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={irrigationWhyChooseUs}
      />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default IrrigationService;
