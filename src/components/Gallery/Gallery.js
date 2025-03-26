"use client";

import React, { useState , useEffect } from "react";
import Image from "next/image";
import ServiceBanner from "../Service/ServiceBanner";
import { Box, Typography, Container } from "@mui/material";
import { kitchenGalleryImages } from "../../Data/ServiceData/KitchenData";
import { plumberingGalleryImages } from "../../Data/ServiceData/PlumbingData";
import { flooringGalleryImages } from "../../Data/ServiceData/FlooringData";
import { showerGallaryImages } from "../../Data/ServiceData/ShowerData";
import { windowGallaryImages } from "../../Data/ServiceData/WindowData";
import { doorGallaryImages } from "../../Data/ServiceData/DoorData";
import { glassGallaryImages } from "../../Data/ServiceData/GlassData";
import { hvacGalleryImages } from "../../Data/ServiceData/HvacData";
import { paintingGallaryImages } from "../../Data/ServiceData/PaintingData";
import { digitalHomeGalleryImages } from "../../Data/ServiceData/DigitalHomeData";
import { electricalGallaryImages } from "../../Data/ServiceData/ElectricalData";
import { fenceGallaryImages } from "../../Data/ServiceData/FenceData";
import { structureGallaryImages } from "../../Data/ServiceData/StructureData";
import { waterHeaterGalleryImages } from "../../Data/ServiceData/WaterHeaterData";
import { drivewayWalkwayGallaryImages } from "../../Data/ServiceData/DrivewayWalkwayData";
import { roofGallaryImages } from "../../Data/ServiceData/RoofData";
import { irrigationGallaryImages } from "../../Data/ServiceData/IrrigationData";

const services = [
  { name: "Kitchen", images: kitchenGalleryImages },
  { name: "Plumbing", images: plumberingGalleryImages },
  { name: "Flooring", images: flooringGalleryImages },
  { name: "Shower", images: showerGallaryImages },
  { name: "Window", images: windowGallaryImages },
  { name: "Door", images: doorGallaryImages },
  { name: "Glass", images: glassGallaryImages },
  { name: "HVAC", images: hvacGalleryImages },
  { name: "Painting", images: paintingGallaryImages },
  { name: "Digital Home", images: digitalHomeGalleryImages },
  { name: "Electrical", images: electricalGallaryImages },
  { name: "Fence", images: fenceGallaryImages },
  { name: "Structural", images: structureGallaryImages },
  { name: "Water Heater", images: waterHeaterGalleryImages },
  { name: "DriveWay WalkWay", images: drivewayWalkwayGallaryImages },
  { name: "Roof", images: roofGallaryImages },
  { name: "Irrigation", images: irrigationGallaryImages },
];

const GallerySection = ({ title, images, onImageClick }) => (
  <Container maxWidth="lg" className="comp-space row g-3">
    <Typography variant="h4" className="">
      {title}
    </Typography>
    {images.map((img, index) => (
      <div
        key={index}
        className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center px-2 image-container"
        onClick={() => onImageClick(img)}
      >
        {/* <div className="image-container w-100"> */}
        <Image
          src={img}
          alt={`${title} ${index + 1}`}
          layout="responsive"
          width={200}
          height={70}
          className="img-fluid shadow-sm rounded"
        />
        {/* </div> */}
      </div>
    ))}
  </Container>
);
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  const closeModal = () => setSelectedImage(null);
  return (
    <Box className="home-page">
      <ServiceBanner title="Gallary" subtitle="" />

      {services.map((service, index) => (
        <GallerySection
          key={index}
          title={service.name}
          images={service.images}
          onImageClick={setSelectedImage}
        />
      ))}
      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div className="image-modal " onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged View" />
        </div>
      )}
    </Box>
  );
};

export default Gallery;
