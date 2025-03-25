import React from "react";
import { Box, Typography , Container,} from "@mui/material";


const WhyChooseUs = ({ title, subtitle, data }) => {
  return (
    <div className=" comp-color  comp-space">
      <Container maxWidth="lg" className=" text-center">
        <Typography variant="h5" align="center">{title}</Typography>
        <h3 className="py-2 text-center">{subtitle}</h3>

        {/* Responsive Bootstrap Grid */}
        <div className=" d-flex  align-items-center row mt-2 row g-3 justify-content-center">
          {data.map((step) => (
            <div key={step.id} className="col-12 col-sm-6 col-md-4">
              <Box className="d-flex flex-column justify-content-center align-items-center border rounded p-3">
                <Typography
                  variant="h4"
                  className="kitchen-icon-bg p-3 rounded text-center my-2"
                >
                  {step.icon}
                </Typography>
                <Typography variant="h6" align="center">
                  {step.title}
                </Typography>
                <Typography className="py-2 text-center">
                  {step.description}
                </Typography>
              </Box>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
