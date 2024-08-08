import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { motion } from "framer-motion";
import "../../pages-css/Experience.css";

const colorMap = {
  Javascript: "#ee919b",
  React: "#f9ac1e",
  AWS: "#cfdae5",
  APIs: "#c1e5d3",
  Typescript: "#f67d41",
  Python: "#699b8a",
  Cypress: "#e5c6d6",
  Procreate: "#ed9488",
  Photoshop: "#ed9488",
  Illustrator: "#ed9488",
};

export default function ExperienceCards({ job }) {
  const themeQuery = useTheme();
  const screenSizeSm = useMediaQuery(themeQuery.breakpoints.up("sm"));

  return (
    <div
      className="experience-cards"
      style={{
        display: "flex",
        flexDirection: screenSizeSm ? "row" : "column",
      }}
    >
      <p
        className="small"
        style={{
          margin: "0px",
          flex: screenSizeSm ? "1 0 30%" : "",
        }}
      >
        {job.date}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flex: "1 0 70%",
        }}
      >
        <div className="job-info">
          <div className="link">
            <h5 fontSize={"22px"} color="#s">
              {job.title}
              
            </h5>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(job.url)}
            >
              <CallMissedOutgoingIcon
                style={{ color: "black", cursor: "pointer" }}
              />
            </motion.button>
          </div>
          <p className="body-text">{job.description}</p>
        </div>
        <div className="skills-list" style={{ flexDirection: "row" }}>
          {job.skills.map((skill) => {
            return (
              <motion.div
                key={skill}
                className="animatable"
                whileHover={{
                  scale: 1.07,
                }}
              >
                <div
                  className="skill"
                  style={{
                    backgroundColor: "#222021",
                    borderRadius: "20px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <p className="body-skill">{skill}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
