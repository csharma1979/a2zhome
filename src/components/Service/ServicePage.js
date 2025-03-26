import React from "react";
import ServiceBanner from "./ServiceBanner";
import ServiceCard from "./ServiceCard";
import { Box } from "@mui/material";
import { features } from "../../Data/Navbar";
import CTA from "../commonComps/CTA";

const ServicePage = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Services"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={features}
      />
      <CTA />
    </Box>
  );
};

export default ServicePage;
