import React, { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import "../../pages-css/Projects.css";
import "../../pages-css/Animations.css";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectCards({ title, src, about, path }) {
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
      <div
        className="project-cards"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <motion.img
          onClick={() => navigate(path)}
          alt="project-img"
          src={src}
          className="card-src"
          style={{
            cursor: "pointer",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          // whileHover={{ scale: 1.1 }} // Scale the image on hover
          transition={{ duration: 0.3 }} // Optional: smooth transition
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            <p className="job" style={{ fontStyle: "italic" }}>
              {title}
            </p>
            <p className="job">{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
