import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  showerWhyChooseUs,
  showerServices,
  showerFaqData,
  showerGallaryImages,
} from "../../../Data/ServiceData/ShowerData";

import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const ShowerService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Premium Shower Installation & Repair Services"
        subtitle="Expert shower installation and repair services. Upgrade, fix leaks, or design a custom shower with durable, high-quality craftsmanship tailored to your needs."
      />
      <ServiceCard
        title="Our Shower Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={showerServices}
      />
      <ServiceProcess />
      <ServiceGallary data={showerGallaryImages} />

      <WhyChooseUs
        title="Why Choose Our Shower Services"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={showerWhyChooseUs}
      />
      <ServiceFaq data={showerFaqData} />
      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default ShowerService;
