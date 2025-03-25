import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  paintingServices,
  paintingFaqData ,
  paintingWhyChooseUs,
} from "../../../Data/ServiceData/PaintingData";
import { kitchenService } from "../../../Data/ServiceData/KitchenData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const PaintingService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="High-Quality Painting Services for Homes & Businesses"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Painting Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={paintingServices}
      />
      <ServiceProcess />
      <ServiceGallary />

      <ServiceFaq data={paintingFaqData } />

      <WhyChooseUs
        title="Why Choose Our Painting Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={paintingWhyChooseUs}
      />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default PaintingService;
