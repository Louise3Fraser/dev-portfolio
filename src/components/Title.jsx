import React from "react";
import "../pages-css/MainSections.css";
import Socials from "./sub_components/Socials";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Title() {
    const themeQuery = useTheme();
  const screenSizeSm = useMediaQuery(themeQuery.breakpoints.up("sm"));


  return (
    <div className="title">
      <h4 className="h4-title">Louise Fraser</h4>
      <div className="socials-drawer">
        { screenSizeSm ? (<><div className="spinner-container">
          <svg viewBox="0 0 100 100" className="spinner">
            <path
              id="text-path"
              d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
              fill="none"
            />
            <text>
              <textPath href="#text-path" >
                My socials • My socials • My socials •
              </textPath>
            </text>
          </svg>
        </div> <div style={{ height: "20px" }} /> </>) : (<div/>)}
        
        
        <Socials />
      </div>
    </div>
  );
}
