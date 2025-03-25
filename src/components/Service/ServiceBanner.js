"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import EnquiryModal from "../commonComps/EnquiryModal";
const ServiceBanner = ({ title, subtitle }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Box className="hero-section kitchen-hero">
        <Box className="container">
          <Box
          
          >
            <div className="service-banner">
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}
              >
                {title}
              </Typography>
              <Typography
                variant="h6"
                sx={{ pt: 2, pb:2, fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                {subtitle}
              </Typography>
            </div>
            <button
              className="custom-button rounded"
              onClick={() => setShowModal(true)}
            >
              Request a Free Quote
            </button>
          </Box>
        </Box>
        <EnquiryModal
          show={showModal}
          handleClose={() => setShowModal(false)}
        />
      </Box>
    </>
  );
};

export default ServiceBanner;
