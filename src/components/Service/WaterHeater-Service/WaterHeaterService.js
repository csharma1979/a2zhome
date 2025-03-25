import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  waterHeaterServices,
  waterHeaterFaqData,
  waterHeaterGalleryImages,
  waterHeaterWhyChooseUs,
} from "../../../Data/ServiceData/WaterHeaterData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const WaterHeaterService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Reliable Water Heater Installation & Repair Services"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Water Heater Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={waterHeaterServices}
      />
      <ServiceProcess />
      <ServiceGallary data={waterHeaterGalleryImages} />

      

      <WhyChooseUs
        title="Why Choose Our Water Heater Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={waterHeaterWhyChooseUs}
      />
<ServiceFaq data={waterHeaterFaqData} />
      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default WaterHeaterService;
