import React, { useEffect } from "react";
import "../pages-css/About.css";
import "../pages-css/Animations.css";
import { useTheme, useMediaQuery } from "@mui/material";
import Column from "../components/organization/Column";
import water from "../media/water.JPG";
import waterSmall from "../media/waterSmall.JPG";
import Socials from "../components/Socials";

const education = {
  title: "Education",
  items: [
    "Vanderbilt University",
    "Double major: computer science, psychology",
  ],
};

const techSkills = {
  title: "Technical Skills",
  items: [
    "JavaScript",
    "React.Js",
    "Python",
    "HTML/CSS",
    "Adobe Creative Suite",
    "Graphic design",
    "Figma",
    "Unity",
    "MySQL",
    "C++",
  ],
};
const otherSkills = {
  title: "Other Skills",
  items: ["Communication", "Organization", "Critical thinking"],
};

const interests = {
  title: "Interests",
  items: [
    "Cooking",
    "Hiking",
    "Drawing",
    "Gym",
    "Reading fantasy novels",
    "Trying new cuisines!",
  ],
};

export default function About() {
  const themeQuery = useTheme();
  const screenSizeSm = useMediaQuery(themeQuery.breakpoints.up("md"));

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
    <div className="about-main">
      <div
        style={{
          display: "flex",
          flexDirection: screenSizeSm ? "row" : "column",
          gap: "60px",
        }}
      >
        <div className="about-description">
          <div style={{display:"flex", flexDirection: "column", gap: "20px", flex: "1 0 10%"}}>
            <p className="header-bold">Nice to meet you.</p>
            {/* <Socials /> */}
            <p
              style={{
                maxWidth: screenSizeSm ? "50%" : "100%",
                paddingBottom: "20px",
              }}
              className="body-main fade-in-section"
            >
              Coding and design are two things I love to challenge myself with.
              I am particularly interested in front-end development as well as
              UX/UI design. I have a solid foundation in JavaScript, React.js,
              and Python.
            </p>
          </div>
          <div>
            <p className="body-main fade-in-section">
              <i
                className="em em-handshake"
                role="presentation"
                aria-label="HANDSHAKE"
              ></i>
              Technology + Design
            </p>
            <p className="body-main fade-in-section">
              <i
                className="em em-brain"
                role="presentation"
                aria-label="BRAIN"
              ></i>
              Psychology
            </p>
            <p className="body-main fade-in-section">
              <i
                className="em em-handshake"
                role="presentation"
                aria-label="HANDSHAKE"
              ></i>
              Technology + Design
            </p>
          </div>
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0px",
            objectFit: "contain",
            maxWidth: screenSizeSm ? "40%" : "100%",
            height: "100%",
            gap: "10px",
          }}
        >
          {screenSizeSm ? (
            <img
              alt="img"
              src={water}
              className="nav-image fade-in-section"
              style={{
                margin: "0px",
                objectFit: "contain",
                maxWidth: "100%",
              }}
            />
          ) : (
            <img
              alt="img"
              src={waterSmall}
              className="nav-image fade-in-section"
              style={{
                margin: "0px",
                objectFit: "contain",
                maxWidth: "100%",
                borderRadius: "10px",
              }}
            />
          )}
        </div> */}
      </div>

      <div
        className="columns"
        style={{ flexDirection: screenSizeSm ? "row" : "column" }}
      >
        <Column column={education} />
        <Column column={techSkills} />
        <Column column={otherSkills} />
        <Column column={interests} />
      </div>
    </div>
  );
}
