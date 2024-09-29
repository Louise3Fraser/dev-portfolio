import React, { useRef, useEffect, useState } from "react";
import "../pages-css/About.css";
import { useMediaQuery, useTheme } from "@mui/material";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import AboutMain from "../sections/AboutMain";
import Navigation from "../components/organization/Navigation";
import Footer from "../components/organization/Footer";

export default function About() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

  return (
    <div className="about-wrapper">
      <Navigation />
      <div className="about">
        <div className="main-about">
          <AboutMain />
          <Experience />
        </div>
      </div>
      <Footer />
    </div>
  );
}
