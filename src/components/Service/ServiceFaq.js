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
      <Typography variant="h4" align="center" gutterBottom>
        Benefits of Kitchen Cabinet Refacing
      </Typography>
      <Container maxWidth="md">
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
    </div>
  );
};

export default ServiceFaq;
