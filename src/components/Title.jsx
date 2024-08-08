import React from "react";
import "../pages-css/MainSections.css";
import Socials from "./sub_components/Socials";

export default function Title() {
  return (
    <div className="title">
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
