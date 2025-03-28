import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  doorServices,
  doorWhyChooseUs,
  doorFaqData,
  doorGallaryImages,
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
        subtitle="Expert door services for installation, repair, and replacement. Enhance security, functionality, and style with high-quality craftsmanship for homes and businesses."
      />
      <ServiceCard
        title="Our Door Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={doorServices}
        showReadMore={false}
      />
      <ServiceProcess />
      <ServiceGallary data={doorGallaryImages} />

      <WhyChooseUs
        title="Why Choose Our Door Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={doorWhyChooseUs}
      />

      <ServiceFaq data={doorFaqData} />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default DoorService;
