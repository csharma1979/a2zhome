import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  hvacServices,
  hvacWhyChooseUs,
  hvacFaqData,
} from "../../../Data/ServiceData/HvacData";
import {kitchenService} from "../../../Data/ServiceData/KitchenData"
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";


const HVACService = () => {
  return (
    <Box className="home-page">
    <ServiceBanner
      title=" Expert HVAC Installation, Repair & Maintenance Services"
      subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
    />
    <ServiceCard
      title="Our HVAC Services"
      subtitle="Expert solutions for your kitchen upgrades"
      data={hvacServices}
    />
    <ServiceProcess />
    <ServiceGallary />

    <ServiceFaq data={hvacFaqData} />

    <WhyChooseUs
      title="Why Choose Our HVAC Services"
      subtitle="Quality Kitchen Cabinet Refacing in Texas"
      data={hvacWhyChooseUs}
    />

    <ServiceArea />

    <CTA />
  </Box>
  )
}

export default HVACService
