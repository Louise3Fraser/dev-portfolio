import React, { useEffect, useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { motion } from "framer-motion";
import "../pages-css/Experience.css";

const boldWords = [
  "banners",
  "fliers",
  "posters",
  "logos",
  "graphics",
  "React",
  "CASA",
  "CAS",
  "MUI",
  "AWS",
  "scrum",
  "JavaScript",
  "Typescript",
  "Python",
  "Cypress",
  "APIs",
  "creative", 
  "development",
  "planning"
];

export default function ExperienceCards({ job }) {
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.up("md"));
  const [isHovered, setIsHovered] = useState(false);

  const findBoldWords = (description) => {
    return description.split(" ").map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/g, "");
      if (boldWords.includes(cleanWord)) {
        return (
          <span
            className={`body-main ${isHovered ? "bold-hover" : ""}` }
            key={index}
            style= {{fontWeight: "600"}}
          >
            {word}{" "}
          </span>
        );
      } else {
        return (
          <span className="body-main" key={index}>
            {word}{" "}
          </span>
        );
      }
    });
  };

  useEffect(() => {
    const highlights = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    highlights.forEach((highlight) => {
      observer.observe(highlight);
    });

    return () => {
      highlights.forEach((highlight) => {
        observer.unobserve(highlight);
      });
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fade-in-section"
    >
      <div
        className="experience-cards"
        style={{ flexDirection: isSmallScreen ? "row" : "column" }}
      >
        <p
          className="small"
          style={{
            flex: isSmallScreen ? "1 0 25%" : "",
            marginBottom: "10px",
            flexDirection: "column",
            fontStyle: "italic",
            color: "#7F7F7F",
          }}
        >
          {job.date}
        </p>
        <div className="info">
          <div
            className={`experience-card-heading ${isHovered ? "extend" : ""}`}
          >
            <p className="job" style={{ fontStyle: "italic" }}>
              {job.place}
            </p>
            <p className="job">|</p>
            <p className="job">{job.title}</p>
            <motion.button
              className="link"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(job.url)}
            >
              <CallMissedOutgoingIcon style={{ cursor: "pointer" }} />
            </motion.button>
          </div>
          <p className="body-main">{findBoldWords(job.description)}</p>
        </div>
      </div>
    </div>
  );
}
