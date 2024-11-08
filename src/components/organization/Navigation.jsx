import React, { useEffect } from "react";
import "../../pages-css/Animations.css";
import "../../pages-css/Navigation.css";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import logo from "../../media/logo.png"
export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("md"));

  const renderMenuButton = (label, path) => {
    let isActive;

    // Set "Work" as active if the current path is not /art or /about
    if (label === "Work") {
      isActive = location.pathname !== "/art" && location.pathname !== "/about";
    } else {
      isActive = location.pathname === path; // Normal isActive logic for other buttons
    }
    return (
      <button
        onClick={() => navigate(path)}
        sx={{
          ":hover": { bgcolor: "transparent", color: "transparent" },
          paddingLeft: "0px",
          padding: "0px",
          color: isActive ? "blue" : "black", // Change color based on active state
        }}
      >
        <motion.div className="animatable" whileHover={{ scale: 1.1 }}>
          <h4
            className="navigation"
            style={{
              fontWeight: isActive ? "600" : "400",
              color: isActive ? "#12144c" : "black",
            }}
          >
            {label}
          </h4>
        </motion.div>
      </button>
    );
  };

  return (
    <div style={{marginBottom: "100px"}}>
      <div
        className="navigation"
        style={{
          flexDirection: screenSizeSm ? "row" : "column",
          alignItems: screenSizeSm ? "flex-end" : "center",
          gap: screenSizeSm ? "0px" : "20px"
        }}
      >
         <img loading="lazy"
            alt="img"
            src={logo}
            
            onClick={() => navigate("/")}
            style={{
              margin: "0px",
              width: "40px",
              objectFit: "contain",
              cursor: "pointer"
            }}
          />
        <div className="menu-items">
          {renderMenuButton("Work", "/")}
          {renderMenuButton("Art", "/art")}
          {renderMenuButton("About", "/about")}
        </div>
      </div>
    </div>
  );
}
