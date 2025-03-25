import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  windowWhyChooseUs ,
  windowServices ,
  windowFaqData
} from "../../../Data/ServiceData/WindowData";
import { kitchenService } from "../../../Data/ServiceData/KitchenData";
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
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Window Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={windowServices}
      />
      <ServiceProcess />
      <ServiceGallary />

      <ServiceFaq data={windowFaqData} />

      <WhyChooseUs
        title="Why Choose Our Window Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={windowWhyChooseUs }
      />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default WindowService;
