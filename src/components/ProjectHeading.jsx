import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import "../pages-css/Projects.css";

export default function ProjectHeading({
  title,
  subTitle,
  img,
  type,
  bool,
}) {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("lg"));

  return (
    <div className="project-heading">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4 className="header-largest">{title}</h4>
        <h4
          className="body-main"
          style={{
            maxWidth: screenSize ? "50%" : "100%",
            marginBottom: "30px",
          }}
        >
          {subTitle}
        </h4>
      </div>
      <div className="full-width-section">
        {type === "img" ? (
          <img
            alt="img"
            src={img}
            style={{
              margin: "0px",
              width: "50%",
              objectFit: "contain",
              borderRadius: "10px",
              marginBottom: bool ? "-280px" : "0px",
            }}
          />
        ) : (
          <video
            src={img}
            className="card-src"
            autoPlay
            playsInline
            loop
            muted
            style={{
              margin: "0px",
              objectFit: "contain",
              maxWidth: "35%",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        )}
      </div>
    </div>
  );
}
