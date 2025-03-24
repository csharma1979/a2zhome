import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  plumbingFaqData,
  plumbingService,
  plumbingWhyChooseUs,
} from "../../../Data/ServiceData/PlumbingData";
import { kitchenService } from "../../../Data/ServiceData/KitchenData";
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
        title="Professional Plumbing Services You Can Trust"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Plumbering Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={kitchenService}
      />
      <ServiceProcess />
      <ServiceGallary />

      <ServiceFaq data={plumbingFaqData} />

      <WhyChooseUs
        title="Why Choose Us"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={plumbingWhyChooseUs}
      />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default IrrigationService;
