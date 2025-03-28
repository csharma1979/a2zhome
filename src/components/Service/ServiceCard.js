import React from "react";
import {Button, Box, Container, Grid, Typography, Paper } from "@mui/material";
import Link from "next/link";

const ServiceCard = ({ title, subtitle, data ,showReadMore = true}) => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Benefits Section */}

      <Typography variant="h4" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary">
        {subtitle}
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {data.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper className="feature-card">
              <Box className="feature-icon color-blue">{feature.icon}</Box>
              <Typography variant="h5" gutterBottom>
                {feature.title}
              </Typography>
              <Typography color="text.secondary">
                {feature.description}
              </Typography>
              {showReadMore && feature?.link && (
                <Link href={feature.link} prefetch>
                  <Button className="color-blue" sx={{ mt: 2 }}>
                    Read more →
                  </Button>
                </Link>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceCard;
