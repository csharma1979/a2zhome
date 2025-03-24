import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import "../../../styles/CommonStyles.css";

const CTA = () => {
  return (
    <div className="comp-space">
      <Container>
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            Ready to Transform Your Home?
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Contact us today for a free consultation
          </Typography>
          <button
            className="custom-button rounded" 
            size="large"
            
          >
          Request a Free Quote
          </button>
        </Box>
      </Container>
    </div>
  );
};

export default CTA;
