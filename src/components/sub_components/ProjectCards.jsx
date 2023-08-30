import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import "../../pages-css/ProjectCards.css";

export default function ProjectCards({ title, image, description }) {
  return (
    <div className="project">
      <img src={image} style={{maxWidth: "50%"}}/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          display: "flex",
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
      </div>
    </div>
  );
}
