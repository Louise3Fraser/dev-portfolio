import React, {useEffect} from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { motion } from "framer-motion";
import "../pages-css/Experience.css";

export default function ExperienceCards({ job }) {
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.up("sm"));

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
      className={isSmallScreen ? "experience-cards fade-in-section" : "experience-cards-mobile fade-in-section"}
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "column",
        gap: isSmallScreen ? "1vw" : "1vh",
      }}
    >
      <div style={{ padding: "30px" }}>
        <h5
          style={{
            color: "#562525",
            flex: isSmallScreen ? "1 0 20%" : "",
            marginBottom: "10px"
          }}
        >
          {job.title}
        </h5>

        <div className="info">
          <div className="experience-card-heading">
            <p className="job">{job.place}</p>
            <p className="job">|</p>
            <p className="small">{job.date}</p>
            <motion.button
              className="link"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(job.url)}
            >
              <CallMissedOutgoingIcon
                style={{ color: "#562525", cursor: "pointer" }}
              />
            </motion.button>
          </div>
          <ul>
            {job.description.map((item) => (
                  <li className="body-sub">{item}</li>
            ))}
       </ul>
        </div>
      </div>
    </div>
  );
}
