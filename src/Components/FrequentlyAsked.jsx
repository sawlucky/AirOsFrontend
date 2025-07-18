import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const FrequentlyAsked = () => {
  const [questions] = useState([
    {
      title: "1. How can I listen to the radio?",
      content:
        "You can listen to our radio directly from the website or through our mobile app. Just click on the ‘Live’ tab!",
    },
    {
      title: "2. Is the radio free to listen to?",
      content:
        "Absolutely! Our radio services are completely free to enjoy anytime, anywhere.",
    },
    {
      title: "3. Do I need to create an account?",
      content:
        "No, creating an account is not mandatory. However, having one allows you to interact in chats and access saved preferences.",
    },
    {
      title: "4. Can I chat with other listeners?",
      content:
        "Yes! Once you're logged in, join our live chat rooms and connect with the community.",
    },
    {
      title: "5. How can I contact you?",
      content:
        "You can reach out via our Contact page or email us directly at support@airos.com.",
    },
  ]);

  return (
    <div className="bg-[#122] w-full min-h-screen flex flex-col items-center justify-start py-10 sm:py-16 px-2 sm:px-4">
      {/* Title */}
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-['Nunito Sans'] leading-tight sm:leading-[58.67px] tracking-wide text-center">
        📻 Frequently Asked Questions
      </h2>

      {/* Accordion */}
      <div className="w-full max-w-[95vw] sm:max-w-[600px] md:max-w-[800px] mt-8 sm:mt-10 space-y-3 sm:space-y-4">
        {questions.map((ques, index) => (
          <Accordion
            key={index}
            sx={{
              bgcolor: "#1f2a38",
              color: "white",
              borderRadius: "12px",
              "&:before": { display: "none" },
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon sx={{ color: "white" }} />
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                paddingX: { xs: 2, sm: 3 },
                paddingY: { xs: 1.5, sm: 2 },
                fontWeight: 600,
                fontSize: { xs: "16px", sm: "18px" },
              }}
            >
              <Typography component="div">{ques.title}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "#fff",
                color: "#000",
                paddingX: { xs: 2, sm: 3 },
                paddingY: { xs: 1.5, sm: 2 },
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                fontSize: { xs: "15px", sm: "16px" },
              }}
            >
              <Typography>{ques.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAsked;