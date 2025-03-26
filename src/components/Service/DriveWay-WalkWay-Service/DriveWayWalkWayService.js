import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  drivewayWalkwayServices,
  drivewayWalkwayWhyChooseUs,
  drivewayFaqData,
  drivewayWalkwayGallaryImages,
} from "../../../Data/ServiceData/DrivewayWalkwayData";

import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const DriveWayWalkWayService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Transform Your Property with Expert Driveway & Walkway Services"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Driveway & Walkway Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={drivewayWalkwayServices}
      />
      <ServiceProcess />
      <ServiceGallary data={drivewayWalkwayGallaryImages} />

      <WhyChooseUs
        title="Why Choose Our Driveway & Walkway Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={drivewayWalkwayWhyChooseUs}
      />

      <ServiceFaq data={drivewayFaqData} />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default DriveWayWalkWayService;
