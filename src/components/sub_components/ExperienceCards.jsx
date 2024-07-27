import React from "react";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { motion } from "framer-motion";
import "../../pages-css/ExperienceCards.css";

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
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("lg"));

  const findColor = (skill) => colorMap[skill] || "#000";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <Typography
        className="date"
        fontSize={"13px"}
        color="#242526"
        variant="h3"
      >
        {job.date}
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: screenSize ? "row": "column",
          gap: "20px",
          overflow: "hidden",
          padding: "10px"
        }}
      >
        <div style={{ minWidth: "80%" }}>
          <div className="link">
            <Typography variant="h3" fontSize={"22px"} color="#242526">
              {job.title}
            </Typography>
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

          <Typography
            align="justify"
            variant="h3"
            fontSize={"16px"}
            color="#63605b"
            lineHeight={"25px"}
          >
            {job.description}
          </Typography>
        </div>
        <div className="skills-list" style={{flexDirection: screenSize ? "column": "",}}>
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
                  style={{ backgroundColor: `${findColor(skill)}` }}
                >
                  <Typography variant="h3" color="#24252b" fontSize={"12px"}>
                    {skill}
                  </Typography>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
