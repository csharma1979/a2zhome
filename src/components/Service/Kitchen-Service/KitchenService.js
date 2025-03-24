import React from "react";
import { Box } from "@mui/material";
import {
  kitchenWhyChooseUs,
  kitchenfaqData,
  kitchenService,
} from "../../../Data/ServiceData/KitchenData";
import ServiceFaq from "../ServiceFaq";
import ServiceGallary from "../ServiceGallary";
import CTA from "../../commonComps/CTA";
import WhyChooseUs from "../WhyChooseUs";
import ServiceProcess from "../ServiceProcess";
import ServiceBanner from "../ServiceBanner";
import ServiceArea from "../ServiceArea";
import ServiceCard from "../ServiceCard";

const KitchenService = () => {
  return (
    <Box className="home-page">
      <ServiceBanner
        title="Expert Kitchen Services Tailored to Your Needs"
        subtitle="Get more out of your kitchen updates with quick, affordable cabinet refacing with stunning results."
      />

      <ServiceCard
       title="Our Kitchen Services"
       subtitle="Expert solutions for your kitchen upgrades"
       data={kitchenService}
      />

      <ServiceGallary />

      {/* Faq  */}
      <ServiceFaq data={kitchenfaqData} />

      <WhyChooseUs
        title="Why Choose Us"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={kitchenWhyChooseUs}
      />
      <ServiceProcess />
      <ServiceArea />
      <CTA />
    </Box>
  );
};

export default KitchenService;
