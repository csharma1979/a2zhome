import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  electricalServices,
  electricalWhyChooseUs,
  electricalFaqData,
  electricalGallaryImages,
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
        subtitle="Expert electrical services for installations and repairs. Our licensed electricians ensure safe, efficient solutions for residential and commercial properties."
      />
      <ServiceCard
        title="Our Electrical Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={electricalServices}
        showReadMore={false}
      />
      <ServiceProcess />
      <ServiceGallary data={electricalGallaryImages} />

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
