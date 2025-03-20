import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { kitchenGalleryImages } from "../../Data/ServiceData/KitchenData";

const Gallery = () => {
  return (
    
      <Box className="container comp-space my-4">
        <Typography variant="h4" className="mt-4">GALLARY</Typography>

        <div className="row g-3">
          <Typography variant="h4" className="mt-4 py-2">
            Kitchen
          </Typography>
          {kitchenGalleryImages.map((img, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center px-2"
            >
              <div className="image-container w-100">
                <Image
                  src={img}
                  alt={`Kitchen ${index + 1}`}
                  layout="responsive"
                  width={200}
                  height={70}
                  className="img-fluid  shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </Box>
  
  );
};

export default Gallery;
