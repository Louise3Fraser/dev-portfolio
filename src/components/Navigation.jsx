import React, { useEffect } from "react";
import "../pages-css/Animations.css";
import "../pages-css/Navigation.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  const renderMenuButton = (label, path) => (
    <button
      onClick={() => navigate(path)}
      sx={{
        ":hover": { bgcolor: "transparent", color: "transparent" },
        paddingLeft: "0px",
        padding: "0px",
      }}
    >
      <motion.div className="animatable" whileHover={{ scale: 1.1 }}>
        <h4 className="navigation">{label}</h4>
      </motion.div>
    </button>
  );

  return (
    <div className="navigation">
      <h4 className="navigation">
        Louise Fraser
        <span style={{ width: "10px" }} />
        <i className="em em-rosette" role="presentation" aria-label=""></i>
      </h4>
      <div className="menu-items">
        {renderMenuButton("Home", "/")}
        {renderMenuButton("About", "/about")}
      </div>
    </div>
  );
}
