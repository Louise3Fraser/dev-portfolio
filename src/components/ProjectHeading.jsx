import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import "../pages-css/Projects.css";

export default function ProjectHeading({
  title,
  subTitle,
  img,
  type,
  bool,
  progress,
  yes,
}) {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("lg"));

  return (
    <div className="project-heading">
      <div
        className="full-width-section"
        style={{ paddingBottom: yes ? "0px" : "" }}
      >
        <img
          loading="lazy"
          alt="img"
          src={img}
          style={{
            margin: "0px",
            marginBottom: bool ? "-280px" : "0px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h4
          style={{
            maxWidth: screenSize ? "50%" : "100%",
            marginBottom: "30px",
          }}
          className="header-largest"
        >
          {title}
        </h4>
        {/* <h4
          className="body-main"
          style={{
            maxWidth: screenSize ? "50%" : "100%",
            marginBottom: "30px",
          }}
        >
          {subTitle}

          {progress ? (
            <span style={{ color: "#EA5F27", fontWeight: "500" }}>
              {"  "}*In progress
            </span>
          ) : (
            <></>
          )}
        </h4> */}
      </div>
    </div>
  );
}
