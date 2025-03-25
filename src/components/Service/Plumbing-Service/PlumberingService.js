import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  plumbingFaqData,
  plumbingService,
  plumbingWhyChooseUs,
  plumberingGalleryImages,
} from "../../../Data/ServiceData/PlumbingData";
import {kitchenService} from "../../../Data/ServiceData/KitchenData"
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";

const PlumberingService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Professional Plumbing Services You Can Trust"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />
      <ServiceCard
        title="Our Plumbering Services"
        subtitle="Expert solutions for your plumbering upgrades"
        data={kitchenService}
      />
      <ServiceProcess />
      <ServiceGallary data={plumberingGalleryImages}/>

      

      <WhyChooseUs
        title="Why Choose Our Plumbing Services"
        subtitle="Expert Plumbing Solutions in Texas"
        data={plumbingWhyChooseUs}
      />
<ServiceFaq data={plumbingFaqData} />
      <ServiceArea />

      <CTA />
    </Box>
  );
};

export default PlumberingService;
