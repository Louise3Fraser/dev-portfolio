import React, { useRef, useEffect, useState } from "react";
import {
  ThemeProvider,
  Typography,
  Button,
  Drawer,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import "../pages-css/Layout.css";
import { theme } from "../Theme";
import Experience from "../pages/Experience";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import Socials from "./sub_components/Socials";

const drawerWidth = 300;
export default function Layout() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);

  const [currentSection, setCurrentSection] = useState(null);

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

  const executeScroll = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  const renderNavButton = (label, ref, section) => (
    <Button
      onClick={() => executeScroll(ref)}
      sx={{
        ":hover": { bgcolor: "transparent", color: "transparent" },
        paddingLeft: "0px",
      }}
    >
      <motion.div className="animatable" whileHover={{ scale: 1.1 }}>
        <div
          style={{
            transform: "skew(-20deg)",
            width: "80px",
            backgroundColor:
              currentSection === section ? "#c7d0d8" : "transparent",
            padding: "12px 30px",
            height: "5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            color="black"
            fontSize="15px"
            sx={{
              marginLeft: "-20px",
              transform: "skew(20deg)",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </Typography>
        </div>
      </motion.div>
    </Button>
  );

  const renderNavButtonCompact = (label, ref, section) => (
    <Button
      onClick={() => executeScroll(ref)}
      sx={{
        ":hover": { bgcolor: "transparent", color: "transparent" },
        paddingLeft: "0px",
      }}
    >
      <motion.div className="animatable" whileHover={{ scale: 1.1 }}>
        <Typography variant="h3" color="black" fontSize="15px">
          {label}
        </Typography>
      </motion.div>
    </Button>
  );

  return (
    <ThemeProvider theme={theme}>
      {screenSize ? (
        <>
          <Drawer
            sx={{
              width: "25vw",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                padding: 12,
                backgroundColor: "transparent",
                borderColor: "transparent",
                width: "25vw",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                paddingLeft: "3vw",
                gap: "5px",
              }}
            >
              <h3 className="h3-nowrap" style={{ paddingBottom: "5vh" }}>
                Louise Fraser
              </h3>
              {renderNavButton("About", homeRef, "home")}
              {renderNavButton("Experience", experienceRef, "experience")}
              {renderNavButton("Portfolio", portfolioRef, "portfolio")}
              <div style={{ height: "200px" }} />
              <div className="socials-drawer">
                <div className="spinner-container">
                  <svg viewBox="0 0 100 100" className="spinner">
                    <path
                      id="text-path"
                      d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                      fill="none"
                    />
                    <text>
                      <textPath
                        href="#text-path"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        My socials • My socials • My socials •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div style={{ height: "20px" }} />
                <Socials />
              </div>
            </Box>
          </Drawer>
          <Box
            sx={{
              position: "sticky",
              overflowY: "scroll",
              overflowX: "hidden",
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              paddingTop: "100px",
              paddingRight: "10vw",
              gap: "85px",
              maxWidth: "600px",
            }}
          >
            <div ref={homeRef} id="home" className="home">
              <Home />
            </div>
            <div ref={experienceRef} id="experience" className="about">
              <Experience />
            </div>
            <div ref={portfolioRef} id="portfolio" className="portfolio">
              <Portfolio />
            </div>
          </Box>
        </>
      ) : (
        <div className="main-compact">
          <div className="title">
            <h3 className="h3-nowrap" style={{ paddingTop: "2vh" }}>
              Louise Fraser
            </h3>
            <div id="buttons">
              {renderNavButtonCompact("About", homeRef, "home")}
              {renderNavButtonCompact(
                "Experience",
                experienceRef,
                "experience"
              )}
              {renderNavButtonCompact("Portfolio", portfolioRef, "portfolio")}
            </div>
            <Socials />
          </div>
          <div className="main-compact">
            <div ref={homeRef} id="home" className="home">
              <Home />
            </div>
            <div ref={experienceRef} id="experience" className="about">
              <Experience />
            </div>
            <div ref={portfolioRef} id="portfolio" className="portfolio">
              <Portfolio />
            </div>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}
