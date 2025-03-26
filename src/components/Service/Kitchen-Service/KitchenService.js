import React from "react";
import { Box } from "@mui/material";
import {
  kitchenWhyChooseUs,
  kitchenfaqData,
  kitchenService,
  kitchenGalleryImages,
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
        subtitle="Get professional kitchen services for makeovers, cabinet installation, and appliance fitting. Transform your kitchen with stylish, high-quality solutions."
      />

      <ServiceCard
        title="Our Kitchen Services"
        subtitle="Expert solutions for your kitchen upgrades"
        data={kitchenService}
      />
      <ServiceProcess />
      <ServiceGallary data={kitchenGalleryImages} />

      {/* Faq  */}

      <WhyChooseUs
        title="Why Choose Us"
        subtitle="Quality Kitchen Cabinet Refacing in Texas"
        data={kitchenWhyChooseUs}
      />

      <ServiceFaq data={kitchenfaqData} />
      <ServiceArea />
      <CTA />
    </Box>
  );
};

export default KitchenService;
