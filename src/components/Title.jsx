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
          {/* <div
            className="blob a"
            style={{
              backgroundColor: "#ff8a80",
            }}
          ></div> */}
          <div
            className="blob b"
            style={{
              backgroundColor:  "#ffd385",
            }}
          ></div>
          {/* <div
            className="blob c"
            style={{
              backgroundColor: "#ff80ab",
            }}
          ></div> */}
        </div>
      </div>

      {/* <h4 className="h4-title">Louise Fraser</h4> */}
      <div className="about-title">
        <h5>Hello, it's nice to meet you</h5>
          <p className="body-main" style={{ marginTop: "0px" }}>
            I am a current senior at Vanderbilt University double majoring in
            <span className="highlight"> computer science </span> and <span className="highlight"> psychology</span>. Coding and design
            are two things I love to challenge myself with. I am particularly
            interested in exploring <span className="highlight">frontend</span> or
            <span className="highlight"> full-stack</span> development. I have a solid foundation in
            JavaScript, React.js, and Python.
          </p>
          <p className="body-main">
            I have two years of internship experience where I worked as a
            software engineer intern under the mentorship of experienced
            professionals. During this time, I developed and deployed an app and
            created applets, gaining expertise in React, JavaScript, Typescript,
            Python, and AWS.
          </p>
        </div>
      <div className="socials-drawer">
        {/* <div className="spinner-container">
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
        <div style={{ height: "20px" }} /> */}
        <Socials />
      </div>
    </div>
  );
}
