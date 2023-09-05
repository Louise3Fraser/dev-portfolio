import React from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
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
        <Typography variant="h3" fontSize={"23px"} color="#242526">
          {title}
        </Typography>

        <Typography
          align="left"
          variant="h3"
          fontSize={"16px"}
          color="#63605b"
          lineHeight={"25px"}
        >
          {description}
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontStyle: 'oblique' }} fontSize={"14px"} variant="h3" color="grey">
            Learn more on my Github
          </Typography>
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open(url)}
          >
            <CallMadeIcon fontSize="small" style={{ color: "black", cursor: "pointer" }} />
          </motion.button>
        </div>
      </div>
    </Box>
  );
}
