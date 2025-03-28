import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  paintingServices,
  paintingFaqData,
  paintingWhyChooseUs,
  paintingGallaryImages,
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
        subtitle="Professional painting services for interiors, exteriors, and custom projects. Get flawless, durable results with premium materials and expert craftsmanship."
      />
      <ServiceCard
        title="Our Painting Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={paintingServices}
        showReadMore={false}
      />
      <ServiceProcess />
      <ServiceGallary data={paintingGallaryImages} />

      <WhyChooseUs
        title="Why Choose Our Painting Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={paintingWhyChooseUs}
      />
      <ServiceFaq data={paintingFaqData} />
      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default PaintingService;
