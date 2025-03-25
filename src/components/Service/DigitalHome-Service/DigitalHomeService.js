import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  digitalHomeServices ,
  digitalHomeWhyChooseUs,
  digitalHomeFaqData
} from "../../../Data/ServiceData/DigitalHomeData";
import { kitchenService } from "../../../Data/ServiceData/KitchenData";
import ServiceBanner from "../ServiceBanner";
import ServiceProcess from "../ServiceProcess";
import ServiceGallary from "../ServiceGallary";
import ServiceFaq from "../ServiceFaq";
import ServiceCard from "../ServiceCard";
import WhyChooseUs from "../WhyChooseUs";
import ServiceArea from "../ServiceArea";
import CTA from "../../commonComps/CTA";


const DigitalHomeService = () => {
  return (
    <Box className="home-page">
    <ServiceBanner
      title="Transform Your Space with Smart Digital Home Solutions"
      subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
    />
    <ServiceCard
      title="Our Digital Home Services"
      subtitle="Expert solutions for your kitchen upgrades"
      data={digitalHomeServices }
    />
    <ServiceProcess />
    <ServiceGallary />

    

    <WhyChooseUs
      title="Why Choose Our Digital Home Service"
      subtitle="Quality Kitchen Cabinet Refacing in Texas"
      data={digitalHomeWhyChooseUs}
    />
<ServiceFaq data={digitalHomeFaqData} />
    <ServiceArea />

    <CTA />
  </Box>
  )
}

export default DigitalHomeService
