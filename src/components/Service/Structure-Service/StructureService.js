import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  structuralWhyChooseUs,
  structuralServices,
  structuralFaqData,
  structureGallaryImages,
} from "../../../Data/ServiceData/StructureData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const StructureService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Expert Structural Services for Strong & Lasting Buildings"
        subtitle="Expert structural services for residential, commercial, and industrial projects. We ensure safety, durability, and compliance through design, analysis, repairs, and reinforcement."
      />
      <ServiceCard
        title="Our Structural Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={structuralServices}
        showReadMore={false}
      />
      <ServiceProcess />
      <ServiceGallary data={structureGallaryImages} />

      <WhyChooseUs
        title="Why Choose Our Structural Service"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={structuralWhyChooseUs}
      />
      <ServiceFaq data={structuralFaqData} />
      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default StructureService;
