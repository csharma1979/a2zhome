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


const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: "auto",
      }}
      className="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} className="footer-font-color">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              A2Zhome-Solutions
            </Typography>
            <Typography variant="body2" className="footer-font-color">
              Empowering businesses with intelligent customer support solutions.
              Transform your customer experience with AI-powered automation.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="Twitter" className="footer-icon">
                <TwitterIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton aria-label="LinkedIn" className="footer-icon">
                <LinkedInIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton aria-label="Facebook" className="footer-icon">
                <FacebookIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton aria-label="Instagram" className="footer-icon">
                <InstagramIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Solutions
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {features.map((feature, index) => (
                <Link
                  href={feature.link}
                  key={index}
                  className="footer-font-color"
                  sx={{ mb: 1 }}
                >
                  {feature.title}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              className="footer-font-color"
            >
              <Link href="/blog" sx={{ mb: 1 }} className="footer-font-color">
                Blog
              </Link>
              <Link
                href="/help-center"
                sx={{ mb: 1 }}
                className="footer-font-color"
              >
                Help Center
              </Link>

              <Link href="/guides" sx={{ mb: 1 }} className="footer-font-color">
                Guides
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="/about" sx={{ mb: 1 }} className="footer-font-color">
                About
              </Link>

              <Link
                href="/contact"
                sx={{ mb: 1 }}
                className="footer-font-color"
              >
                Contact
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5, pt: 2, borderTop: "1px solid #eee" }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} A2Z Home Solutions. All rights reserved |Technology Partner - <Link href="https://fritado.com/" style={{color:'white'}}> Fritado AI </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
