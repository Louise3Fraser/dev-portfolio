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
  const screenSizeSm = useMediaQuery(themeQuery.breakpoints.up("sm"));
  const screenSizeMd = useMediaQuery(themeQuery.breakpoints.up("lg"));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: screenSizeMd ? "row" : "column",
      }}
    >
      <Typography
        fontSize={"13px"}
        color="#242526"
        variant="h3"
        style={{
          paddingTop: "5px",
          whiteSpace: "nowrap",
          flex: screenSizeSm ? "1 0 20%" : "",
        }}
      >
        {job.date}
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          flex: "1 0 80%",
        }}
      >
        <div style={{}}>
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
          <Typography
            align="left"
            variant="h3"
            fontSize={"16px"}
            color="#63605b"
            lineHeight={"25px"}
          >
            {job.description}
          </Typography>
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
                  // style={{ backgroundColor: `${findColor(skill)}` }}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #6287bc",
                  }}
                >
                  <Typography variant="h3" color="#6287bc" fontSize={"12px"}>
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
