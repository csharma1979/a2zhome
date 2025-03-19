"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { features } from "../../Data/Navbar";
import "../../../styles/Footer.css"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#f8f9fa",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              A2Zhome-Solutions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Empowering businesses with intelligent customer support solutions.
              Transform your customer experience with AI-powered automation.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Solutions
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {features.map((feature, index) => (
                <Link
                  href={feature.link}
                  key={index}
                 
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {feature.title}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Resources
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="/blog" color="text.secondary" sx={{ mb: 1 }}>
                Blog
              </Link>
              <Link href="/help-center" color="text.secondary" sx={{ mb: 1 }}>
                Help Center
              </Link>

              <Link href="/guides" color="text.secondary" sx={{ mb: 1 }}>
                Guides
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="/about" color="text.secondary" sx={{ mb: 1 }}>
                About
              </Link>

              <Link href="/contact" color="text.secondary" sx={{ mb: 1 }}>
                Contact
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5, pt: 2, borderTop: "1px solid #eee" }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Trae AI. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
