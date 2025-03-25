"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/Home.css";
import "../../../styles/CommonStyles.css";
import { features } from "../../Data/Navbar";
import ServiceFaq from "../Service/ServiceFaq";
import Testimonials from "./Testimonials";
import CTA from "../commonComps/CTA";
import {
  analytics,
  benefits,
  heroSlides,
  homeFaqData,
} from "../../Data/HomePageData";
import EnquiryModal from "../commonComps/EnquiryModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    customPaging: (i) => (
      <div className="custom-dot">
        <span></span>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <Box className="home-page">
      <Box className="hero-section">
        <Slider {...heroSettings}>
          {heroSlides.map((slide, index) => (
            <Box
              key={index}
              className="hero-slide"
              sx={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                position: "relative",
              }}
            >
              <Container
                maxWidth="lg"
                sx={{
                  textAlign: "center",
                  py: 8,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h2" gutterBottom>
                  {slide.title}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {slide.subtitle}
                </Typography>
                <button
                  className="custom-button mt-4"
                  onClick={() => setShowModal(true)}
                >
                  {" "}
                  Request a Free Quote
                </button>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" align="center" gutterBottom>
            Your Trusted Home Service Provider in Katy, Texas
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Professional home improvement and renovation services for your dream
            home
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <span className="color-blue">
              <LocationOnIcon />{" "}
            </span>
            <Typography variant="subtitle1">
              Serving Katy and Surrounding Areas
            </Typography>
          </Box>
        </Box>

        {/* Benefits Section */}
        <Grid container spacing={2} mb={8}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={1}
              >
                <span className="color-blue">
                  {" "}
                  <CheckCircleIcon />
                </span>
                <Typography align="center">{benefit}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          We offer a wide array of home improvement services to keep your home
          in pristine condition
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper className="feature-card">
                <Box className="feature-icon color-blue">{feature.icon}</Box>
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
                <Button className="color-blue" sx={{ mt: 2 }}>
                  Read more →
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Analytics Section */}
      <div className="analytics-sectionee comp-color comp-space">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {analytics.map((item, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper className="analytics-card" elevation={0}>
                  <Typography className="analytics-number color-blue">
                    {item.number}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {item.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      <ServiceFaq data={homeFaqData} />

      <Testimonials />

      <CTA />
      <EnquiryModal show={showModal} handleClose={() => setShowModal(false)} />
    </Box>
  );
};

export default Home;
