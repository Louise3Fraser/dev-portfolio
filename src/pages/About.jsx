import React from "react";
import { ThemeProvider } from "@mui/material";
import ExperienceCards from "../components/sub_components/ExperienceCards";
import { useTheme, useMediaQuery, Box } from "@mui/material";

const hc1 = {
  date: "SUMMER 2023",
  title: "Software Engineer Intern - hc1",
  description:
    "Created a full React app for user management of 3Aware. App allows admin to edit, create, delete users. The App utilized CAS endpoints, MUI library, and React Final Form. It was eventually deployed to AWS using S3 and CloudFront.",
  img: "null",
  skills: ["Javascript", "React", "APIs", "AWS"],
  takeaways:
    "My experience with full stack development has skyrocketed since this internship.",
};

const lifeomic = {
  date: "SUMMER 2022",
  title: "Computer Science Intern - LifeOmic",
  description:
    "Created applet with APIs for searching physicians in a designated geographic region and providing physician information. Developed applets and translated code using React, Javascript, Typescript, and Python. Tested code with unit and Cypress testing",
  skills: ["Javascript", "React", "Typescript", "Python", "Cypress"],
  takeaways: "I learned",
};

export default function About() {
  const theme = useTheme();
  const screenSize = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ThemeProvider theme={theme}>
      <h1 style={{ fontSize: "25px", paddingBottom: "30px" }}>Experience</h1>
      <div className="experience-list">
        <ExperienceCards job={hc1} />
        <ExperienceCards job={lifeomic} />
      </div>
    </ThemeProvider>
  );
}
