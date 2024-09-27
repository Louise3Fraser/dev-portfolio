import React, { useRef, useEffect, useState } from "react";
import "../pages-css/About.css"
import { useMediaQuery, useTheme } from "@mui/material";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import AboutMain from "../sections/AboutMain";
import Navigation from "../components/Navigation";

export default function About() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

  return (
    <div className="about">
      <Navigation />
      <div className="main">
        <AboutMain />
        <Experience />
      </div>
    </div>
  );
}
