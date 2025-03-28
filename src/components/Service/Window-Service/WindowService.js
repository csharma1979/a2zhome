import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  windowWhyChooseUs,
  windowServices,
  windowFaqData,
  windowGallaryImages,
} from "../../../Data/ServiceData/WindowData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const WindowService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title=" Superior Window Installation & Repair Services"
        subtitle=" Professional window solutions offering precise installation, repairs, and replacements for enhanced beauty and efficiency."
      />
      <ServiceCard
        title="Our Window Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={windowServices}
        showReadMore={false}
      />
      <ServiceProcess />
      <ServiceGallary data={windowGallaryImages} />

      <WhyChooseUs
        title="Why Choose Our Window Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={windowWhyChooseUs}
      />
      <ServiceFaq data={windowFaqData} />
      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default WindowService;
