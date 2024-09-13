import React from "react";
import { Button, Drawer, Box } from "@mui/material";
import { motion } from "framer-motion";
import "../pages-css/MainSections.css";
import Socials from "./sub_components/Socials";

export default function Sidebar({
  currentSection,
  homeRef,
  experienceRef,
  portfolioRef,
}) {
  const executeScroll = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  const renderNavButton = (label, ref, section) => (
    <Button
      onClick={() => executeScroll(ref)}
      sx={{
        ":hover": { bgcolor: "transparent", color: "transparent" },
        paddingLeft: "0px",
        padding: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            backgroundColor: "transparent",
            border: "1px solid #6287bc",
            borderRadius: "0px",
            height: "0px",
          }}
          animate={{ width: currentSection === section ? "50px" : "30px" }}
          transition={{ duration: 0.2 }} 
        />
        <motion.div className="animatable" whileHover={{ scale: 1.1 }}>
          <h6>{label}</h6>
        </motion.div>
      </div>
    </Button>
  );

  return (
    <Drawer
      sx={{
        width: "40vw",
        "& .MuiDrawer-paper": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundColor: "transparent",
          borderColor: "transparent",
          width: "40vw",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div className="title-full">
        <h3 className="h3-nowrap" style={{ paddingBottom: "5vh" }}>
          Louise Fraser
        </h3>
        {renderNavButton("About", homeRef, "home")}
        {renderNavButton("Experience", experienceRef, "experience")}
        {renderNavButton("Portfolio", portfolioRef, "portfolio")}
      </div>

      <div className="socials-drawer">
        <div className="spinner-container">
          <svg viewBox="0 0 100 100" className="spinner">
            <path
              id="text-path"
              d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
              fill="none"
            />
            <text>
              <textPath href="#text-path" startOffset="50%" textAnchor="middle">
                My socials • My socials • My socials •
              </textPath>
            </text>
          </svg>
        </div>
        <div style={{ height: "20px" }} />
        <Socials />
      </div>
    </Drawer>
  );
}
