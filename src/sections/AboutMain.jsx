import React, { useEffect } from "react";
import "../pages-css/About.css";
import "../pages-css/Animations.css";
import "../pages-css/Art.css";
import { useTheme, useMediaQuery } from "@mui/material";
import Column from "../components/organization/Column";
import taz from "../media/taz.jpg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";
import resume from "../docs/resume.pdf"

const jobs = [
  ["'Dores Design • Graphic Designer", "2021 - Current"],
  ["University of Melbourne • CASA Student", "Spring/Summer 2024"],
  ["hc1 • Software Engineer Intern", "Summer 2023"],
  ["LifeOmic • Computer Science Intern", "Summer 2022"],
];

const connect = [
  [
    ["Resume"],
    [resume],
    [<ArrowOutwardIcon style={{ color: "black", cursor: "pointer" }} />],
  ],
  [
    ["Github"],
    ["https://github.com/Louise3Fraser"],
    [<ArrowOutwardIcon style={{ color: "black", cursor: "pointer" }} />],
  ],
  [
    ["LinkedIn"],
    ["https://www.linkedin.com/in/louise-fraser-379b0b251/"],
    [<ArrowOutwardIcon style={{ color: "black", cursor: "pointer" }} />],
  ],
  [["Email"], ["mailto:louise.b.fraser@vanderbilt.edu"], [<ArrowOutwardIcon style={{ color: "black", cursor: "pointer" }} />]],
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
    "Figma",
    "Python",
    "HTML/CSS",
    "Adobe Creative Suite",
    "Graphic design",
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
  const screenSizeSm = useMediaQuery(themeQuery.breakpoints.up("lg"));

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
          gap: screenSizeSm ? "50px" : "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: screenSizeSm ? "45%" : "100%",
          }}
        >
          <img loading="eager"
            alt="img"
            src={taz}
            className="nav-image"
            style={{
              flex: "1",
              margin: "0px",
            }}
          />
          <p className="body-main-link">
            My friends and I in Tasmania! (I'm the tall one:))
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            flex: "1",
          }}
        >
          <p className="header-bold-large">Nice to meet you!</p>

          <p
            style={{
              maxWidth: "100%",
            }}
            className="body-main "
          >
            I'm Louise, and I have a passion for design and technology. I grew
            up sketching and painting on anything I could find. In more recent
            years, I've been a graphic designer at 'Dores Design, a student-run
            part of Vanderbilt's administration.
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
            professionals. I hope to combine my interest in design and
            technology in my future roles, as well as my background in
            psychology.
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

      <div
        style={{
          display: "flex",
          flexDirection: screenSizeSm ? "row" : "column",
          marginTop: "20px",
          justifyContent: "space-between",
          gap: screenSizeSm ? "0px" : "40px",
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
                  width: "380px",
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
          flexDirection: screenSizeSm ? "row" : "column",
          marginTop: "20px",
          justifyContent: "space-between",
          gap: screenSizeSm ? "0px" : "40px",
        }}
      >
        <p className="header-bold-small">Connect</p>
        <div>
          {connect.map((connection) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  width: "380px",
                }}
              >
                <p className="body-main">{connection[0]}</p>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => window.open(connection[1])}
                >
                  {connection[2]}
                </motion.button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
