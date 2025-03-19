"use client";

import React from "react";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/Home.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { features } from "../../Data/Navbar";

const Home = () => {
  const heroSlides = [
    {
      title: "Full Service Home Remodeling Experts",
      subtitle: "One Call Does It All!",
      image: "/assets/kitchen/A2z-home-kitchen-service-1.jpg",
    },
    {
      title: "Transform Your Space with Our Experts",
      subtitle: "Quality & Craftsmanship You Can Trust!",
      image: "/assets/kitchen/A2z-home-kitchen-service-2.jpg",
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
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Customer Service Manager",
      company: "Tech Solutions Inc.",
      image: "/images/testimonial1.jpg",
      quote:
        "Chatwoots has transformed how we handle customer support. The omnichannel capabilities are game-changing.",
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Growth Startup",
      image: "/images/testimonial2.jpg",
      quote:
        "The automation features have helped us scale our support without increasing headcount. Excellent platform!",
    },
    {
      name: "Emma Davis",
      role: "Support Lead",
      company: "E-commerce Pro",
      image: "/images/testimonial3.jpg",
      quote:
        "Integration was seamless, and our team productivity has increased significantly. Highly recommended!",
    },
  ];

  const analytics = [
    {
      number: "10K+",
      label: "Active Users",
    },
    {
      number: "99.9%",
      label: "Uptime",
    },
    {
      number: "5M+",
      label: "Messages Handled",
    },
    {
      number: "50+",
      label: "Integrations",
    },
  ];

  return (
    <Box className="home-page">
      {/* Hero Section */}
      {/* <Box className="hero-section">
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            Full Service Home Remodeling Experts
          </Typography>
          <Typography variant="h5" gutterBottom color="text.secondary">
            One Call Does It All!
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 4 }}>
            Get Started
          </Button>
        </Container>
      </Box> */}
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
                minHeight: "500px",
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
                <Button variant="contained" size="large" sx={{ mt: 4 }}>
                  Get Started
                </Button>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          Everything you need to deliver exceptional customer service
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper className="feature-card">
                <Box className="feature-icon">{feature.icon}</Box>
                <Typography variant="h5" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
                <Button color="primary" sx={{ mt: 2 }}>
                  Learn More →
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Analytics Section */}
      <Box className="analytics-section">
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Trusted by Growing Businesses
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {analytics.map((item, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper className="analytics-card" elevation={0}>
                  <Typography className="analytics-number">
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
      </Box>

      {/* Testimonials Section */}
      <Box className="testimonials-section">
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            What Our Customers Say
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper className="testimonial-card" elevation={0}>
                  <FormatQuoteIcon
                    sx={{ fontSize: 40, color: "#3b82f6", mb: 2 }}
                  />
                  <Typography paragraph>"{testimonial.quote}"</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.company}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
