import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";

const ServiceCard = ({ title, subtitle, data }) => {
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
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceCard;
