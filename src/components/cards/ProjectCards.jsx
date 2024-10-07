import React, { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import "../../pages-css/Projects.css";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectCards({ title, src, subtext, path, desc }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("md"));

  const navigate = useNavigate();
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
    <div className="fade-in-section">
      <div className="project-card-container">
        <motion.div
          onClick={() => navigate(path)}
          className="project-card"
        >
          <img
            alt={title}
            src={src}
            className="card-src"
          />
          <div className="overlay">
            <h3 className="overlay-title job">{title}</h3>
            <p className="overlay-subtext body-main">{subtext}</p>
            <p className="overlay-subtext body-main">{desc}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
