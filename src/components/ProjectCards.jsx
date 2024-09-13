import React, { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import "../pages-css/Projects.css";
import "../pages-css/Animations.css";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { motion } from "framer-motion";

export default function ProjectCards({
  title,
  src,
  type,
  description,
  about,
  url,
}) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("md"));

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
          flexDirection: screenSizeSm ? "row" : "column",
        }}
      >
        {type == "image" ? (
          <img
            alt="project-img"
            src={src}
            className="card-src"
            style={{
              margin: "0px",
              flex: screenSizeSm ? "1 0 50%" : "",
              objectFit: "contain",
              maxWidth: screenSizeSm ? "45%" : "100%",
            }}
          />
        ) : (
          <video
            src={src}
            className="card-src"
            autoPlay
            loop
            muted
            style={{
              margin: "0px",
              flex: screenSizeSm ? "1 0 50%" : "",
              objectFit: "contain",
              maxWidth: screenSizeSm ? "45%" : "100%",
            }}
          />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-start",
          }}
        >
          <div className="title-desc">
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <p className="job" style={{ fontStyle: "italic" }}>
                {title}
              </p>
              <p className="job">|</p>
              <p className="job">{about}</p>
            </div>
            <p className="body-main">{description}</p>
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
    </div>
  );
}
