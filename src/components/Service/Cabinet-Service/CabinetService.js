import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  cabinetWhyChooseUs,
  cabinetServices ,
  cabinetFaqData ,
} from "../../../Data/ServiceData/CabinetsData";
import { kitchenService } from "../../../Data/ServiceData/KitchenData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const CabinetService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="High-Quality Cabinet Installation & Repair Services"
        subtitle="Expert cabinet services for installation, repairs, and makeovers. Get durable, stylish solutions with high-quality craftsmanship for kitchens, bathrooms, and more."
      />
      <ServiceCard
        title="Our Cabinet Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={cabinetServices}
      />
      <ServiceProcess />
      <ServiceGallary />

    

      <WhyChooseUs
        title="Why Choose Our Cabinet Services"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={cabinetWhyChooseUs}
      />
  <ServiceFaq data={cabinetFaqData} />
      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default CabinetService;
