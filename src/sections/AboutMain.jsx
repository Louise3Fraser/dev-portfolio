import React, { useEffect } from "react";
import "../pages-css/About.css";
import "../pages-css/Animations.css";
import "../pages-css/Art.css";
import { useTheme, useMediaQuery } from "@mui/material";
import Column from "../components/organization/Column";
import water from "../media/water.JPG";
import nz from "../media/nz.png";
import taz from "../media/taz.jpg";
import ta from "../media/ta.JPG";
import melb from "../media/melb.JPG";

const jobs = [
  ["'Dores Design • Graphic Designer", "2021 - Current"],
  ["University of Melbourne • CASA Student", "Spring/Summer 2024"],
  ["hc1 • Software Engineer Intern", "Summer 2023"],
  ["LifeOmic • Computer Science Intern", "Summer 2022"],
];

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
  title: "Areas of Interest",
  items: ["UX/UI Design", "Frontend Engineer"],
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
      <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <p className="header-bold-large">Nice to meet you!</p>

        <p
          style={{
            maxWidth: "100%",
          }}
          className="body-main "
        >
          I'm Louise, and I have a passion for design and technology. I grew up
          sketching and painting on anything I could find. In more recent years,
          I've been a graphic designer at 'Dores Design, a student-run part of
          Vanderbilt's administration.
        </p>
        <p
          style={{
            maxWidth: "100%",
            paddingBottom: "20px",
          }}
          className="body-main "
        >
          I've had two years of internship experience where I worked as a
          software engineer intern under the mentorship of experienced
          professionals. I hope to combine my interest in design and technology
          in my future roles, as well as my background in psychology.
        </p>

        {/* <p className="header-bold-small">Find me:</p> */}
        {/* <p className="header-bold-small">Combining tech and art</p>
        <div>
          <p
            style={{ display: "flex", gap: "20px" }}
            className="body-main fade-in-section"
          >
            <i
              className="em em-brain"
              role="presentation"
              aria-label="BRAIN"
            ></i>
            Psychology Major
          </p>
          <p
            style={{ display: "flex", gap: "20px" }}
            className="body-main fade-in-section"
          >
            <i
              class="em em-computer"
              aria-role="presentation"
              aria-label="PERSONAL COMPUTER"
            ></i>
            Computer Science Major
          </p>
        </div>{" "}
        <p
          style={{
            maxWidth: "100%",
            paddingBottom: "20px",
          }}
          className="body-main fade-in-section"
        >
          Coding and design are two things I love to challenge myself with. I am
          particularly interested in front-end development as well as UX/UI
          design.
        </p> */}
      </div>
      {/* <img
                alt="img"
                src={taz}
                className="nav-image fade-in-section"
                style={{ margin: "0px" }}
              /> */}
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <p className="header-bold-small">Experience</p>
        <div>
          {jobs.map((job) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "10px",
                }}
              >
                <div className="job" style={{ margin: "0px" }}>
                  {job[0]}
                </div>
                <div className="body-main">{job[1]}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <p className="header-bold-small">Some places I've visited:)</p>
        <div
          style={{
            position: "relative",
            maxHeight: "550px",
            overflow: "hidden",
          }}
        >
          <div className="masonry-grid">
            <div className="masonry-column">
              <img
                alt="img"
                src={ta}
                className="nav-image fade-in-section"
                style={{ margin: "0px" }}
              />
              <img
                alt="img"
                src={melb}
                className="nav-image fade-in-section"
                style={{ margin: "0px" }}
              />
            </div>

            <div className="masonry-column">
              <img
                alt="img"
                src={nz}
                className="nav-image fade-in-section"
                style={{ margin: "0px" }}
              />
            </div>
            <div className="masonry-column">
              <img
                alt="img"
                src={taz}
                className="nav-image fade-in-section"
                style={{ margin: "0px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
