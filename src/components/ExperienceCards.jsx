import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { motion } from "framer-motion";
import "../pages-css/Experience.css";

export default function ExperienceCards({ job }) {
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.up("sm"));

  return (
    <div
      className="experience-cards"
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "row" : "column",
        gap: isSmallScreen ? "5vw" : "1vh",
      }}
    >
      <h5  style={{ fontSize:"23px", color: "#14131e", flex: isSmallScreen ? "1 0 20%" : "" }}>
        <span className="highlight">{job.title}</span>
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
              style={{ color: "black", cursor: "pointer" }}
            />
          </motion.button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingTop: "5px",
          }}
        >
          <p className="body-text">{job.description}</p>
          {/* <div className="skills-list" style={{ flexDirection: "column" }}>
            {job.skills.map((skill) => (
              <motion.div
                key={skill}
                className="animatable"
                whileHover={{ scale: 1.07 }}
              >
                <div
                  className="skill"
                  style={{
                    backgroundColor: "#222021",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <p className="body-skill">{skill}</p>
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
