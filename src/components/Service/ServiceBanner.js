import React from 'react'
import { Box, Typography, Button } from "@mui/material";

const ServiceBanner = ({ title, subtitle }) => {
  return (
    <>
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
                {title}
              </Typography>
              <Typography
                variant="h6"
                sx={{ pt: 2, fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                {subtitle}
              </Typography>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ServiceBanner
