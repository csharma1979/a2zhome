import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  electricalServices,
  electricalWhyChooseUs,
  electricalFaqData,
} from "../../../Data/ServiceData/ElectricalData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const ElectricalService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Reliable Electrical Services for Residential & Commercial Needs"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Electrical Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={electricalServices}
      />
      <ServiceProcess />
      <ServiceGallary />

     

      <WhyChooseUs
        title="Why Choose Our Electrical Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={electricalWhyChooseUs}
      />

<ServiceFaq data={electricalFaqData} />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default ElectricalService;
