import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { kitchenfaqData } from "../../Data/ServiceData/KitchenData";

const ServiceFaq = () => {
  return (
    <div className="faq-section comp-space">
      <Container maxWidth="lg">
        <Typography variant="h4" textAlign="center" gutterBottom>
          FAQ
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          Trusted By Growing Business
        </Typography>
        <Container maxWidth="md" sx={{ mt: 4 }}>
          {kitchenfaqData.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default ServiceFaq;
