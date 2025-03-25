import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  doorServices ,
  doorWhyChooseUs,
  doorFaqData 
} from "../../../Data/ServiceData/DoorData";

import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const DoorService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Quality Door Installation & Repair Services"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Door Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={doorServices}
      />
      <ServiceProcess />
      <ServiceGallary />

     

      <WhyChooseUs
        title="Why Choose Our Door Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={doorWhyChooseUs}
      />

<ServiceFaq data={doorFaqData } />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default DoorService;
