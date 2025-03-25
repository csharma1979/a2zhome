import React from 'react'
import { Container ,Button } from "@mui/material";
import ServiceAreImage from "../../../public/assets/service-area.png";
import Image from "next/image";

const ServiceArea = () => {
  return (
    <div className="comp-space comp-color">
    <Container maxWidth="lg"  className="">
      <div className="row g-4 align-items-center">
        {/* Left Content */}
        <div className="col-12 col-md-6">
          <h5>Service Areas</h5>
          <h3 className="py-2">
            Texas’s Most Reliable Kitchen Cabinet Refacing Contractor
          </h3>
          <p>
            With an extensive service radius spanning hundreds of miles and
            multiple cities, there’s no doubt that we’re the most trusted
            contractor in Texas. We operate numerous offices in cities like
            Houston, Dallas, San Antonio, and Georgetown, ensuring that
            millions of homeowners have access to our quality services.
            Whether you have a smaller, single-family home in the heart of
            these cities, or you live on an expansive ranch out in the
            country, we’re ready to tackle your cabinet refacing project.
            Find your immediate town on our service areas list to begin
            planning your installation.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-2">
            <Button variant="contained" size="large">
              Get A Free Quote
            </Button>
            <Button variant="outlined" size="large">
              View All Cities
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-12 col-md-6 text-center">
          <Image
            src={ServiceAreImage}
            alt="service-area-map"
            width={600}
            className="img-fluid"
          />
        </div>
      </div>
    </Container>
  </div>
  )
}

export default ServiceArea
