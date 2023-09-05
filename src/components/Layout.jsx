import React, { useRef, useEffect } from "react";
import {
  ThemeProvider,
  Typography,
  Button,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import "../pages-css/Layout.css";
import { theme } from "../Theme";
import Experience from "../pages/Experience";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import title from "../images/title.png";
import Socials from "./sub_components/Socials";

export default function Layout() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const targetSections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
    });

    targetSections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  const executeScroll = (ref) => {
    ref.current && ref?.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      {screenSize ? (
        <>
          <Drawer
            sx={{
              width: 80,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                padding: 5,
                paddingLeft: "18vh",
                width: "40%",
                backgroundColor: "#f7f2ee",
                boxSizing: "border-box",
                display: "flex",
                borderColor: "transparent",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "5px",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <img
              src={title}
              alt="logo"
              style={{
                maxWidth: "250px",
                paddingTop: "20px",
                paddingBottom: "20px",
                paddingLeft: "8px",
              }}
            />
            <Button
              onClick={() => executeScroll(homeRef)}
              sx={{
                ":hover": {
                  bgcolor: "transparent",
                  color: "transparent",
                },
              }}
            >
              <motion.div
                key="about"
                className="animatable"
                whileHover={{
                  scale: 1.07,
                }}
              >
                <div>
                  <Typography variant="h3" color="black" fontSize={"15px"}>
                    About
                  </Typography>
                </div>
              </motion.div>
            </Button>
            <Button
              onClick={() => executeScroll(experienceRef)}
              sx={{
                ":hover": {
                  bgcolor: "transparent",
                  color: "transparent",
                },
              }}
            >
              <motion.div
                key="about"
                className="animatable"
                whileHover={{
                  scale: 1.07,
                }}
              >
                <div>
                  <Typography variant="h3" color="black" fontSize={"15px"}>
                    Experience
                  </Typography>
                </div>
              </motion.div>
            </Button>
            <Button
              onClick={() => executeScroll(portfolioRef)}
              sx={{
                ":hover": {
                  bgcolor: "transparent",
                  color: "transparent",
                },
              }}
            >
              <motion.div
                key="about"
                className="animatable"
                whileHover={{
                  scale: 1.07,
                }}
              >
                <div>
                  <Typography variant="h3" color="black" fontSize={"15px"}>
                    Portfolio
                  </Typography>
                </div>
              </motion.div>
            </Button>
            <div style={{height: "40px"}}/>
            <Socials />
          </Drawer>
          <div className="main">
            <div ref={homeRef} className="home">
              <Home />
            </div>
            <div ref={experienceRef} className="about">
              <Experience />
            </div>
            <div ref={portfolioRef} className="portfolio">
              <Portfolio />
            </div>
          </div>
        </>
      ) : (
        <div className="main-compact">
          <div className="title">
            <img
              alt="logo"
              src={title}
              style={{
                maxWidth: "250px",
                paddingTop: "10px",
              }}
            />
            <div id="buttons">
              <Button
                onClick={() => executeScroll(homeRef)}
                sx={{
                  ":hover": {
                    bgcolor: "transparent",
                    color: "transparent",
                  },
                }}
              >
                <motion.div
                  key="about"
                  className="animatable"
                  whileHover={{
                    scale: 1.07,
                  }}
                >
                  <div>
                    <Typography variant="h3" color="black" fontSize={"15px"}>
                      About
                    </Typography>
                  </div>
                </motion.div>
              </Button>
              <Button
                onClick={() => executeScroll(experienceRef)}
                sx={{
                  ":hover": {
                    bgcolor: "transparent",
                    color: "transparent",
                  },
                }}
              >
                <motion.div
                  key="about"
                  className="animatable"
                  whileHover={{
                    scale: 1.07,
                  }}
                >
                  <div>
                    <Typography variant="h3" color="black" fontSize={"15px"}>
                      Experience
                    </Typography>
                  </div>
                </motion.div>
              </Button>
              <Button
                onClick={() => executeScroll(portfolioRef)}
                sx={{
                  ":hover": {
                    bgcolor: "transparent",
                    color: "transparent",
                  },
                }}
              >
                <motion.div
                  key="about"
                  className="animatable"
                  whileHover={{
                    scale: 1.07,
                  }}
                >
                  <div>
                    <Typography variant="h3" color="black" fontSize={"15px"}>
                      Portfolio
                    </Typography>
                  </div>
                </motion.div>
              </Button>
            </div>
            <Socials />
          </div>
          <div className="main-compact">
            <div ref={homeRef} className="home">
              <Home />
            </div>
            <div ref={experienceRef} className="about">
              <Experience />
            </div>
            <div ref={portfolioRef} className="portfolio">
              <Portfolio />
            </div>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}
