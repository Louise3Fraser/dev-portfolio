import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import {
  ThemeProvider,
  Button,
  Drawer,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import Sidebar from "./components/Sidebar.jsx";
import MainFull from "./components/MainFull.jsx";
import MainCompact from "./components/MainCompact.jsx";

function App() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);

  const [currentSection, setCurrentSection] = useState(null);


  // 
  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    const sections = [homeRef, experienceRef, portfolioRef];
    sections.forEach(
      (section) => section.current && observer.observe(section.current)
    );

    return () =>
      sections.forEach(
        (section) => section.current && observer.unobserve(section.current)
      );
  }, []);

  return (
    <div className="layout">
      {screenSize ? (
        <div className="main-full">
          <Sidebar
            homeRef={homeRef}
            experienceRef={experienceRef}
            portfolioRef={portfolioRef}
            currentSection={currentSection}
          />
          <MainFull
            homeRef={homeRef}
            experienceRef={experienceRef}
            portfolioRef={portfolioRef}
          />
        </div>
      ) : (
        <MainCompact
          homeRef={homeRef}
          experienceRef={experienceRef}
          portfolioRef={portfolioRef}
        />
      )}
    </div>
  );
}

export default App;
