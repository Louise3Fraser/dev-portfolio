import React from "react";
import { Box } from "@mui/material";
import Experience from "../pages/Experience";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";

const drawerWidth = 560;

export default function MainFull({ homeRef, experienceRef, portfolioRef }) {
  return (
    <Box
      sx={{
        position: "sticky",
        overflowY: "scroll",
        overflowX: "hidden",
        ml: `${drawerWidth}px`,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "100px",
        paddingRight: "13vw",
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
  );
}
