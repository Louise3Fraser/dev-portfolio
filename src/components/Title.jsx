import React from "react";
import "../pages-css/MainSections.css";
import Socials from "./Socials";
import { useTheme, useMediaQuery } from "@mui/material";

// Currently not using mode
export default function Title({ mode }) {
  const themeQuery = useTheme();
  const screenSizeSm = useMediaQuery(themeQuery.breakpoints.up("sm"));

  return (
    <div className="title">
      <div className="container">
        <div className="blobs">
          <div
            className="blob a"
            style={{
              backgroundColor: "#ff8a80",
            }}
          ></div>
          <div
            className="blob b"
            style={{
              backgroundColor:  "#ffd385",
            }}
          ></div>
          <div
            className="blob c"
            style={{
              backgroundColor: "#ff80ab",
            }}
          ></div>
        </div>
      </div>

      <h4 className="h4-title">Louise Fraser</h4>
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
    </div>
  );
}
