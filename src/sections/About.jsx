import React, { useEffect } from "react";
import "../pages-css/About.css";
import "../pages-css/Animations.css";
import { useTheme, useMediaQuery } from "@mui/material";
import Column from "../components/Column";
import water from "../media/water.JPG";
import waterSmall from "../media/waterSmall.JPG";

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
  items: ["Cooking", "Hiking", "Drawing", "Gym", "Reading fantasy novels", "Trying new cuisines!"],
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
    <div className="about">
      {/* <Header section={"About"} /> */}

      <div
        className="about-content"
        style={{
          flexDirection: screenSizeSm ? "row" : "column",
        }}
      >
        <div
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
              }}
            />
          )}
          {/* <p className="small">New Zealand '24</p> */}
        </div>
        <div className="about-description">
          <p
            className="body-main fade-in-section"
            style={{ marginTop: "-5px" }}
          >
            I am a current <span style={{fontWeight:"600"}}>senior</span> at Vanderbilt double majoring in computer
            science and psychology. <span style={{fontWeight:"600"}}>Coding</span> and <span style={{fontWeight:"600"}}>design</span> are two things I love to
            challenge myself with.
          </p>
          <p className="body-main fade-in-section">
            I have <span style={{fontWeight:"600"}}>two</span> years of internship experience where I worked as a
            software engineer intern under the <span style={{fontWeight:"600"}}>mentorship</span> of experienced
            professionals. During this time, I developed and deployed an app and
            created applets, gaining expertise in React, JavaScript, Typescript,
            Python, and AWS.
          </p>
        </div>
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
