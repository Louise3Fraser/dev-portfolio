import React from "react";
import { Typography } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { motion } from "framer-motion";
import "../../pages-css/ExperienceCards.css";

export default function ExperienceCards({ job }) {
  const findColor = (skill) => {
    if (skill === "Javascript") return "#ee919b";
    if (skill === "React") return "#f9ac1e";
    if (skill === "AWS") return "#cfdae5";
    if (skill === "APIs") return "#c1e5d3";
    if (skill === "Typescript") return "#f67d41";
    if (skill === "Python") return "#699b8a";
    if (skill === "Cypress") return "#e5c6d6";
  };

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
      <div className="job">
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
            align="left"
            variant="h3"
            fontSize={"16px"}
            color="#63605b"
            lineHeight={"25px"}
          >
            {job.description}
          </Typography>
        </div>
        <div className="skills-list">
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
