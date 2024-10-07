import React, { useEffect, useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { motion } from "framer-motion";

export default function Callouts({ items }) {
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.up("md"));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const highlights = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    highlights.forEach((highlight) => {
      observer.observe(highlight);
    });

    return () => {
      highlights.forEach((highlight) => {
        observer.unobserve(highlight);
      });
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fade-in-section"
      style={{
        display: "flex",
        flexDirection: isSmallScreen ? "row" : "column",
        gap: "20px",
        marginBottom: "100px",
        marginTop: "30px",
        justifyContent: "space-evenly",
        alignSelf: "center"
      }}
    >
      {items.map((item) => {
        return (
          <div
            style={{
              backgroundColor: "#F4EBD4",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="body-main-black">"{item}"</p>
          </div>
        );
      })}
    </div>
  );
}
