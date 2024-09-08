import React, {useEffect} from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import "../pages-css/Projects.css";
import "../pages-css/Animations.css"
import CallMadeIcon from "@mui/icons-material/CallMade";
import { motion } from "framer-motion";

export default function ProjectCards({ title, image, description, url }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
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
    <div className="project-cards fade-in-section" style={{
      display: "flex",
      flexDirection: screenSizeSm ? "row" : "column",
    }}>
      <img
        alt="project-img"
        src={image}
        className="card-image" 
        style={{
          margin: "0px",
          flex: screenSizeSm ? "1 0 50%" : "",
          objectFit: "contain",
          maxWidth: screenSizeSm ? "45%" : "60%",
          borderRadius: "5px"
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        <div className="title-desc">
          <h5>{title}</h5>
          <p className="body-text">{description}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p className="small">Learn more on my Github</p>
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open(url)}
          >
            <CallMadeIcon
              fontSize="small"
              style={{ color: "black", cursor: "pointer" }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
