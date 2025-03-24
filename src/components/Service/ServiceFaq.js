import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const ServiceFaq = ({ data = [] }) => {
  return (
    <div className="faq-section comp-space">
      <Container maxWidth="lg">
        <Typography variant="h4" textAlign="center" gutterBottom>
        Frequently Asked Questions (FAQ)
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary">
          Trusted By Growing Business
        </Typography>
        <Container maxWidth="md" sx={{ mt: 4 }}>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((faq, index) => (
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
            ))
          ) : (
            <Typography textAlign="center" color="text.secondary">
              No FAQs available.
            </Typography>
          )}
        </Container>
      </Container>
    </div>
  );
};

export default ServiceFaq;
