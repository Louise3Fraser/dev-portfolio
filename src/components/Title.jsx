import React from "react";
import "../pages-css/MainSections.css";
import "../pages-css/Animations.css";
import Socials from "./Socials";
import { useTheme, useMediaQuery } from "@mui/material";
import resume from "../docs/resume.pdf";

export default function Title() {
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.up("md"));

  return (
    <div
      className="title"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: "9vh",
      }}
    >
      <h4 className="fade-in fade-in-1">Hello! My name is</h4>
      {isSmallScreen ? (
        <h5 className="h4-title fade-in fade-in-2">Louise Fraser</h5>
      ) : (
        <h5 className="h4-title fade-in fade-in-2">Louise Fraser</h5>
      )}
      <p
        style={{
          margin: "0px",
        }}
        className="body-main fade-in fade-in-3"
      >
        Computer Science and Psychology student at{"  "}
        <a href={"https://www.vanderbilt.edu/"} target="_blank">
          <span className="body-main-link">Vanderbilt University</span>
        </a>
      </p>
      <Socials />
      <a href={resume} target="_blank">
        <p className="small-link fade-in fade-in-7">Download resume</p>
      </a>
    </div>
  );
}
