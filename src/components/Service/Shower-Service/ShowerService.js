import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  showerWhyChooseUs,
  showerServices,
  showerFaqData,
} from "../../../Data/ServiceData/ShowerData";
import { kitchenService } from "../../../Data/ServiceData/KitchenData";
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
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Shower Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={showerServices}
      />
      <ServiceProcess />
      <ServiceGallary />

      <ServiceFaq data={showerFaqData} />

      <WhyChooseUs
        title="Why Choose Our Shower Services"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={showerWhyChooseUs}
      />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default ShowerService;
