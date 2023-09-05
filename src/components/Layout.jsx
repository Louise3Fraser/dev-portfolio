import React, { useRef, useEffect } from "react";
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
import title from "../images/title.png";
import Socials from "./sub_components/Socials";

export default function Layout() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("lg"));

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
  const drawerWidth = 300;

  return (
    <ThemeProvider theme={theme}>
      {screenSize ? (
        <>
          <Drawer
            sx={{
              width: "25vw",
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                padding: 9,
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
                justifyContent: "flex-start",
                alignItems: "flex-start",
                paddingLeft: "10vw",
                gap: "5px",
              }}
            >
              <img
                src={title}
                alt="logo"
                style={{
                  maxWidth: "245px",
                  paddingTop: "20px",
                  paddingBottom: "5vh",
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
                    scale: 1.1,
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
                    scale: 1.1,
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
                    scale: 1.1,
                  }}
                >
                  <div>
                    <Typography variant="h3" color="black" fontSize={"15px"}>
                      Portfolio
                    </Typography>
                  </div>
                </motion.div>
              </Button>
              <div style={{ height: "100px" }} />
              <Socials />
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
              paddingTop: "90px",
              paddingRight: "10vw",
              paddingLeft: "3vw",
              gap: "85px",
            }}
          >
            <div ref={homeRef} className="home">
              <Home />
            </div>
            <div ref={experienceRef} className="about">
              <Experience />
            </div>
            <div ref={portfolioRef} className="portfolio">
              <Portfolio />
            </div>
          </Box>
        </>
      ) : (
        <div className="main-compact">
          <div className="title">
            <img
              alt="logo"
              src={title}
              style={{
                maxWidth: "250px",
                paddingTop: "20px",
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
