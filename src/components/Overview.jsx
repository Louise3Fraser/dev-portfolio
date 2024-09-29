import React, { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import "../pages-css/Projects.css";
import "../pages-css/Animations.css";
import { useNavigate } from "react-router-dom";

export default function Overview({ overview, goals, problem }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("md"));

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
    <div className="overview">
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div className="descriptions">
          <h4 className="header-bold" style={{ flex: "1 0 34%" }}>
            Overview
          </h4>
          <p className="body-main">{overview}</p>
        </div>

        <div className="descriptions">
          <h4 className="header-bold" style={{ flex: "1 0 34%" }}>
            Goals
          </h4>
          <p className="body-main">{goals}</p>
        </div>
        {problem ? (
          <div className="descriptions">
            <h4 className="header-bold" style={{ flex: "1 0 34%" }}>
              Problem
            </h4>
            <p className="body-main">{problem}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
