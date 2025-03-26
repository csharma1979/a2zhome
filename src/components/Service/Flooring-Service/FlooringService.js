import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  flooringServices,
  flooringWhyChooseUs,
  flooringFaqData,
  flooringGalleryImages
} from "../../../Data/ServiceData/FlooringData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const FlooringService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Transform Your Space with Our Expert Flooring Services"
        subtitle="Professional flooring services for installation, repairs, and maintenance. Get flawless hardwood, tile, laminate, or vinyl flooring for homes and businesses."
      />
      <ServiceCard
        title="Our Flooring Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={flooringServices}
      />
      <ServiceProcess />
      <ServiceGallary data={flooringGalleryImages}/>

    

      <WhyChooseUs
        title=" Why Choose Our Flooring Services?"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={flooringWhyChooseUs}
      />

<ServiceFaq data={flooringFaqData} />

      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default FlooringService;
