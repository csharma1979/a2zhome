import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ServiceAreImage from "../../../public/assets/map.jpg";
import Image from "next/image";
import {
  kitchenProcessSteps,
  kitchenWhyChooseUs,
} from "../../Data/ServiceData/KitchenData";
import ServiceSection3 from "./ServiceSection3";
import ServiceFaq from "./ServiceFaq";
import ServiceGallary from "./ServiceGallary";
import CTA from "../commonComps/CTA";
import WhyChooseUs from "./WhyChooseUs";

const ServiceBanner = () => {
  return (
    <Box className="home-page">
      {/* Hero Section */}
      <Box className="hero-section kitchen-hero">
        <Box className="container">
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "40%" },
              ml: { md: "6rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <div className="service-banner">
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}
              >
                Get the Best Kitchen Cabinets Refinishing
              </Typography>
              <Typography
                variant="h6"
                sx={{ pt: 2, fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Get more out of your kitchen updates with quick, affordable
                cabinet refacing with stunning results.
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>

      <div className="comp-color comp-space">
        <div className="container text-center">
          <Typography variant="h5">Our Process</Typography>
          <h3 className="py-2">
            {" "}
            Refresh Your Kitchen Cabinets Without a Full Replacement
          </h3>

          {/* Responsive Bootstrap Grid */}
          <div className=" d-flex  align-items-center row mt-2 row g-3 justify-content-center">
            {kitchenProcessSteps.map((step) => (
              <div key={step.id} className="col-12 col-sm-6 col-md-4">
                <Box className="d-flex flex-column justify-content-center align-items-center border rounded p-3">
                  <Typography
                    variant="h5"
                    className="kitchen-icon-bg px-3 py-1 rounded text-center my-2"
                  >
                    {step.id}
                  </Typography>
                  <Typography variant="h6" align="center">
                    {step.title}
                  </Typography>
                  <Typography className="py-2 text-center">
                    {step.description}
                  </Typography>
                </Box>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceGallary />

      {/* Faq  */}
      <ServiceFaq />

      {/* <ServiceSection3 /> */}

      <WhyChooseUs />

      {/* service area */}
      {/* <div className="comp-space ">
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
      </div> */}
      <div className="comp-space">
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Left Content */}
            <div className="col-12 col-md-6">
              <h5>Service Areas</h5>
              <h3 className="py-2">
                Texas’s Most Reliable Kitchen Cabinet Refacing Contractor
              </h3>
              <p>
                With an extensive service radius spanning hundreds of miles and
                multiple cities, there’s no doubt that we’re the most trusted
                contractor in Texas. We operate numerous offices in cities like
                Houston, Dallas, San Antonio, and Georgetown, ensuring that
                millions of homeowners have access to our quality services.
                Whether you have a smaller, single-family home in the heart of
                these cities, or you live on an expansive ranch out in the
                country, we’re ready to tackle your cabinet refacing project.
                Find your immediate town on our service areas list to begin
                planning your installation.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-2">
                <Button variant="contained" size="large">
                  Get A Free Quote
                </Button>
                <Button variant="outlined" size="large">
                  View All Cities
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-12 col-md-6 text-center">
              <Image
                src={ServiceAreImage}
                alt="service-area-map"
                width={600}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </Box>
  );
};

export default ServiceBanner;
