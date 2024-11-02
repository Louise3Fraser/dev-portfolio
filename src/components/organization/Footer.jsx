import React, { useEffect } from "react";
import "../../pages-css/Animations.css";
import "../../pages-css/Footer.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Footer() {
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
    <div className="footer">
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="body-main">@2024</p>
        <p className="body-main">
          Coded from scratch by me
          <i className="em em-star2" role="presentation" aria-label=""></i>
        </p>
      </div>
    </div>
  );
}
