import React from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { kitchenGalleryImages } from "../../Data/ServiceData/KitchenData";
const ServiceGallary = () => {
  return (
    <div className="comp-space">
      <div className="container d-flex flex-column justify-content-center align-items-center mx-auto ">
        <h5 className="text-center">GALLERY</h5>
        <h3 className="py-2">Elegant Kitchen Cabinet Refacing Services</h3>
        <p className="text-center">
          Investing in our services is a sure way to transform your kitchen’s
          visual appeal. Check out our gallery to see some examples of prior
          projects that we’ve completed.
        </p>

        {/* Gallery Images in One Row */}
        <Box className="d-flex flex-wrap flex-row justify-content-center align-items-center mx-auto gap-3 my-2 ">
          {kitchenGalleryImages.slice(0, 5).map((img, index) => (
            <Image
              key={`row1-${index}`}
              src={img}
              alt={`Kitchen ${index + 1}`}
              width={200}
              height={150}
              className="rounded"
            />
          ))}
        </Box>
        <Box className="d-flex flex-row justify-content-center align-items-center mx-auto gap-3 my-2">
          {kitchenGalleryImages.slice(5, 10).map((img, index) => (
            <Image
              key={`row2-${index}`}
              src={img}
              alt={`Kitchen ${index + 6}`}
              width={200}
              height={150}
              className="rounded"
            />
          ))}
        </Box>
        <Button variant="contained" size="large" sx={{ mt: 4 }}>
          View All Gallaries
        </Button>
      </div>
    </div>
  );
};

export default ServiceGallary;
