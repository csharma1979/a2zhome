import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import {
    kitchenLimitedOffer,
  kitchenGalleryImages,
} from "../../Data/ServiceData/KitchenData";

const ServiceSection3 = () => {
  return (
    <div>
      <div className="comp-color comp-space">
        <div className="container d-flex flex-column justify-content-center align-items-center mx-auto">
          {/* <h5 className="text-center ">Limited Time Offers</h5> */}
          <h3 className="py-2">Limited Time Offers</h3>
          <p className="text-center ">
            Don’t miss out on Expo Home Improvement’s exclusive limited-time
            offers to upgrade your home with incredible savings! Act now—these
            deals won’t last forever, and your dream home is just a call away!
          </p>

          <div className="d-flex flex-row justify-content-center align-items-center mx-auto gap-3 my-3">
            {kitchenLimitedOffer.map((step) => (
              <Box
                key={step.id}
                className="d-flex flex-column justify-content-center align-items-center border rounded  p-2"
              >
                <Typography
                  variant="h4"
                  className=" kitchen-icon-bg py-1 px-3 rounded text-center my-2"
                >
                  {step.id}
                </Typography>
                <Typography variant="h6" align="center">
                  {step.title}
                </Typography>
                <Typography className="py-2 text-center">
                  {step.description}
                </Typography>
              </Box>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection3;
