import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import "../../pages-css/Projects.css";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { motion } from "framer-motion";

export default function ProjectCards({ title, image, description, url }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className="project-cards">
      <img
        alt="project-img"
        src={image}
        style={{
          margin: "0px",
          flex: screenSizeSm ? "1 0 20%" : "",
          maxWidth: "50%"
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start",
          flex: "1 0 80%",
        }}
       
      >
        <h5>{title}</h5>

        <p className="body-text">{description}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p sx={{ fontStyle: "oblique" }}>Learn more on my Github</p>
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
