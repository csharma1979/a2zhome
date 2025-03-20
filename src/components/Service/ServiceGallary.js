"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { kitchenGalleryImages } from "../../Data/ServiceData/KitchenData";
const ServiceGallary = () => {
  return (
    <div className="comp-space">
      <div className="container d-flex flex-column justify-content-center align-items-center mx-auto ">
        <Typography variant="h5">GALLARY</Typography>
        <h3 className="py-2">Elegant Kitchen Cabinet Refacing Services</h3>

        {/* Two Rows of Images with Five Images Each */}
        <div className="d-flex justify-content-center align-items-center row mt-2 g-3">
          {kitchenGalleryImages.slice(0, 5).map((img, index) => (
            <div
              key={`row1-${index}`}
              className="col-12 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center"
            >
              <Link href="/gallery" passHref>
                <Image
                  src={img}
                  alt={`Kitchen ${index + 1}`}
                  width={200}
                  height={150}
                  className="rounded img-fluid"
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center row mt-2 g-3">
          {kitchenGalleryImages.slice(5, 10).map((img, index) => (
            <div
              key={`row2-${index}`}
              className="col-12 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center"
            >
              <Link href="/gallery" passHref> 
              <Image
                src={img}
                alt={`Kitchen ${index + 6}`}
                width={200}
                height={150}
                className="rounded img-fluid"
              />
              </Link>
            </div>
          ))}
        </div>
        <Link href="/gallery" passHref> 
        <Button  className="custom-button"  size="large" sx={{ mt: 4 }}>
          View All Gallaries
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceGallary;
