import React, { useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  ThemeProvider,
  Typography,
  Drawer,
  Button,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../pages-css/Layout.css";
import { theme } from "../Theme";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import title from "../images/title.png";

const fadeIn = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 1 },
};

// MAKE MENU COLLAPSABLE
export default function Layout() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const control = useAnimation();
  const [refAbout, inViewAbout] = useInView();
  const [refSkill, inViewSkill] = useInView();
  const [refPort, inViewPort] = useInView();

  useEffect(() => {
    if (inViewAbout) {
      control.start("visible");
    }
    if (inViewSkill) {
      control.start("visible");
    }
    if (inViewPort) {
      control.start("visible");
    }
  }, [control, inViewAbout, inViewPort, inViewSkill]);

  const executeScroll = (ref) => {
    ref.current && ref?.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            backgroundColor: "#f7f2ee",
          }}
        >
          <img src={title} style={{ paddingTop: "25px", maxWidth: "280px" }} />
          <div style={{ paddingBottom: "10px" }}>
            <Button
              onClick={() => executeScroll(aboutRef)}
              sx={{
                color: "#222020",
                borderRadius: "20px",
                backgroundColor: "#f7f2ee",
              }}
            >
              <Typography fontSize={"15px"} variant="h3">
                About
              </Typography>
            </Button>
            <Button
              onClick={() => executeScroll(portfolioRef)}
              sx={{
                color: "#222020",
                borderRadius: "20px",
                backgroundColor: "#f7f2ee",
              }}
            >
              <Typography fontSize={"15px"} variant="h3">
                Portfolio
              </Typography>
            </Button>
            <Button
              onClick={() => executeScroll(skillsRef)}
              sx={{
                color: "#222020",
                borderRadius: "20px",
                backgroundColor: "#f7f2ee",
              }}
            >
              <Typography fontSize={"15px"} variant="h3">
                Skills
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <div className="main">
        <Home />
        <div ref={aboutRef} className="about">
          <motion.div
            ref={refAbout}
            variants={fadeIn}
            animate={control}
            initial="hidden"
          >
            <About />
          </motion.div>
        </div>
        <div ref={portfolioRef} className="portfolio">
          <motion.div
            ref={refPort}
            variants={fadeIn}
            animate={control}
            initial="hidden"
          >
            <Portfolio />
          </motion.div>
        </div>
        <div ref={skillsRef} className="skills">
          <motion.div
            ref={refSkill}
            variants={fadeIn}
            animate={control}
            initial="hidden"
          >
            <Skills />
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  );
}
