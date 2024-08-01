import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import "../../pages-css/ProjectCards.css";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { motion } from "framer-motion";

export default function ProjectCards({ title, image, description, url }) {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      className="Stats"
      display={screenSize ? "flex" : "block"}
      flexDirection={screenSize ? "row" : "column"}
      justifyContent={screenSize ? "start" : "start"}
      alignItems={screenSize ? "start" : "start"}
      sx={{ gap: "20px" }}
    >
      {screenSize ? (
        <img alt="project-img" src={image} style={{ maxWidth: "50%" }} />
      ) : (
        <img alt="project-img" src={image} style={{ maxWidth: "100%" }} />
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        <h5>{title}</h5>

        <body>{description}</body>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <body sx={{ fontStyle: "oblique" }}>Learn more on my Github</body>
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
    </Box>
  );
}
