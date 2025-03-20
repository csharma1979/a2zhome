"use client";

import React from "react";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/Home.css";

import { features } from "../../Data/Navbar";
import ServiceFaq from "../Service/ServiceFaq";
import Testimonials from "./Testimonials";
import CTA from "../commonComps/CTA";

const Home = () => {
  const heroSlides = [
    {
      title: "Full Service Home Remodeling Experts",
      subtitle: "One Call Does It All!",
      image: "/assets/homebanner1.png",
    },
    {
      title: "Transform Your Space with Our Experts",
      subtitle: "Quality & Craftsmanship You Can Trust!",
      image: "/assets/homebanner2.jpeg",
    },
    {
      title: "Your Dream Home Starts Here",
      subtitle: "Let's Make It Happen Together!",
      image: "/assets/kitchen/A2z-home-kitchen-service-3.jpg",
    },
  ];

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

  const analytics = [
    {
      number: "10K+",
      label: "Project Completed",
    },
    {
      number: "99.9%",
      label: "Happy Clients",
    },
    {
      number: "5M+",
      label: "Average Rating",
    },
    {
      number: "10+",
      label: "Years of Experience",
    },
  ];

  const benefits = [
    "Licensed and Insured",
    "Free Estimates",
    "Local Katy Business",
    "Years of Experience",
    "Quality Workmanship",
    "Competitive Pricing",
  ];

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
                <Typography variant="h5" gutterBottom color="text.secondary">
                  {slide.subtitle}
                </Typography>
                <Button  className="custom-button" size="large" sx={{ mt: 4 }}>
                  Get Started
                </Button>
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
          Everything you need to deliver exceptional customer service
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
          {/* <Typography variant="h4" align="center" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary">
            Trusted By Growing Business
          </Typography> */}
          <Grid container spacing={4} >
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

      <ServiceFaq />
      {/* Testimonials Section */}
      <Testimonials />

      {/* CTS section */}
      <CTA />
    </Box>
  );
};

export default Home;
