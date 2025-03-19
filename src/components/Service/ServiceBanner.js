import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ServiceAreImage from "../../../public/assets/map.jpg";

import Image from "next/image";
import {
  kitchenProcessSteps,
  kitchenWhyChooseUs,
  kitchenGalleryImages,
} from "../../Data/ServiceData/KitchenData";
import ServiceSection3 from "./ServiceSection3";
import ServiceFaq from "./ServiceFaq";
import ServiceGallary from "./ServiceGallary";

const ServiceBanner = () => {
  return (
    <Box className="home-page">
      {/* Hero Section */}
      <Box className="hero-section kitchen-hero">
        <div className="container">
          <div className="" style={{maxWidth:"40%" , marginLeft:"6rem"}}>
            <div className="service-banner">
              <Typography variant="h3">
                Get the Best Kitchen Cabinets Refinishing
              </Typography>
              <Typography variant="h6" className="pt-2">
                Get more out of your kitchen updates with quick, affordable
                cabinet refacing with stunning results.
              </Typography>
            </div>
          </div>
        </div>
       
      </Box>

      <div className="comp-space my-4">
        <div>
          <h4 className="text-center">
            Revamp Your Kitchen Cabinets Without the Hassle of a Full
            Replacement
          </h4>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            className="pt-2 pb-4"
          >
            As the premier kitchen remodeling company in Texas, our professional
            team at Expo Home Improvement offers top-of-the-line cabinet
            refacing services for your family to enjoy.
          </Typography>
        </div>

        {/* process */}
        <div className="comp-color py-4 ">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-center ">Our process</h5>
            <h3 className="py-2">
              Refresh Your Kitchen Cabinets Without a Full Replacement
            </h3>
            <p className="text-center">
              Want a kitchen upgrade without the time and cost of a full
              remodel? Cabinet refacing is the ideal solution! Our efficient,
              budget-friendly process revitalizes your kitchen’s look by
              updating your existing cabinets with a sleek new finish.
            </p>

            <div className=" d-flex flex-row justify-content-center align-items-center mx-auto gap-3 my-3">
              {kitchenProcessSteps.map((step) => (
                <div
                  key={step.id}
                  className="d-flex flex-column justify-content-center align-items-center  border rounded  p-2"
                >
                  <Typography
                    variant="h4"
                    align="center"
                    className="bg-white py-1 px-3 rounded text-center"
                  >
                    {step.id}
                  </Typography>
                  <Typography variant="h6" align="center">
                    {step.title}
                  </Typography>
                  <Typography align="center" className="py-2 text-center">
                    {step.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ServiceFaq />
      {/* Faq  */}

      {/* <ServiceSection3 /> */}

      <ServiceGallary />

      {/* why choose us section */}
      <div className="comp-color comp-space">
        <div className="container d-flex flex-column justify-content-center align-items-center mx-auto">
          <h5 className="text-center ">Why Choose Us</h5>
          <h3 className="py-2">Quality Kitchen Cabinet Refacing in Texas</h3>
          <p className="text-center ">
            Transform your kitchen with expert cabinet refacing services from a
            trusted Texas-based company. Since 2006, we have been delivering
            top-quality craftsmanship, earning an A+ rating from the Better
            Business Bureau. Here’s why homeowners choose us:
          </p>

          <div className="d-flex flex-row justify-content-center align-items-center mx-auto gap-3 my-3">
            {kitchenWhyChooseUs.map((step) => (
              <Box
                key={step.id}
                className="d-flex flex-column justify-content-center align-items-center border rounded  p-2"
              >
                <Typography
                  variant="h4"
                  className=" kitchen-icon-bg p-3 rounded text-center my-2"
                >
                  {step.icon}
                </Typography>
                <Typography variant="h6" align="center">
                  {step.title}
                </Typography>
                <Typography className="py-2 text-center">
                  {step.description}
                </Typography>
              </Box>
            ))}
          </div>
        </div>
      </div>

      {/* service area */}
      <div className="comp-space ">
        <div className="container d-flex flex-row gap-3 ">
          <div className="d-flex flex-column w-50">
            <h5 className="">Service Areas</h5>
            <h3 className="py-2">
              Texas’s Most Reliable Kitchen Cabinet Refacing Contractor
            </h3>
            <p className="">
              With an extensive service radius spanning hundreds of miles and
              multiple cities, there’s no doubt that we’re the most trusted
              contractor in Texas. We operated numerous offices in cities like
              Houston, Dallas, San Antonio, and Georgetown, ensuring that
              millions of homeowners have access to our quality services.
              Whether you have a smaller, single-family home in the heart of
              these cities, or you live on an expansive ranch out in the
              country, we’re ready to tackle your cabinet refacing project. Find
              your immediate town on our service areas list to begin planning
              your installation.
            </p>
            <div className="d-flex flex-row gap-2">
              <Button variant="contained" size="large" sx={{ mt: 4 }}>
                Get A Free Quote
              </Button>
              <Button variant="outlined" size="large" sx={{ mt: 4 }}>
                View All Cities
              </Button>
            </div>
          </div>
          <div className="">
            <Image
              src={ServiceAreImage}
              alt="service-are-map"
              width={600}
              //height={450}
            />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ServiceBanner;
