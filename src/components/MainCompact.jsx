import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import "../pages-css/MainSections.css";
import Experience from "../pages/Experience";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import Socials from "./sub_components/Socials";

export default function MainFull({ homeRef, experienceRef, portfolioRef }) {
  const renderNavButtonCompact = (label, ref) => (
    <Button
      onClick={() => executeScroll(ref)}
      sx={{
        ":hover": { bgcolor: "transparent", color: "transparent" },
        paddingLeft: "0px",
      }}
    >
      <motion.div className="animatable" whileHover={{ scale: 1.1 }}>
        <body >
          {label}
        </body>
      </motion.div>
    </Button>
  );

  const executeScroll = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <div className="title">
        <h3 className="h3-nowrap" style={{ paddingTop: "2vh" }}>
          Louise Fraser
        </h3>
        <div id="buttons">
          {renderNavButtonCompact("About", homeRef)}
          {renderNavButtonCompact("Experience", experienceRef)}
          {renderNavButtonCompact("Portfolio", portfolioRef)}
        </div>
        <Socials />
      </div>
      <div className="main">
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
    </>
  );
}
