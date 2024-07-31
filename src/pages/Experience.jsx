import React from "react";
import { ThemeProvider } from "@mui/material";
import ExperienceCards from "../components/sub_components/ExperienceCards";
import { useTheme } from "@mui/material";

const hc1 = {
  date: "Summer 2023",
  title: "Software Engineer Intern - hc1",
  description:
    "Created a full React app for user management of 3Aware. App allows admin to edit, create, delete users. The App utilized CAS endpoints, MUI library, and React Final Form. It was eventually deployed to AWS using S3 and CloudFront.",
  img: "null",
  skills: ["Javascript", "React", "APIs", "AWS"],
  takeaways:
    "My experience with full stack development has skyrocketed since this internship.",
  url: "https://www.hc1.com/",
};

const lifeomic = {
  date: "Summer 2022",
  title: "Computer Science Intern - LifeOmic",
  description:
    "Created applet with APIs for searching physicians in a designated geographic region and providing physician information. Developed applets and translated code using React, Javascript, Typescript, and Python. Tested code with unit and Cypress testing",
  skills: ["Javascript", "React", "Typescript", "Python", "Cypress"],
  takeaways: "I learned",
  url: "https://lifeomic.com/",
};

const dores = {
  date: "2021 - Current",
  title: "Graphic Designer - Dores' Design",
  description:
    "Design posters, banners, fliers, logos, graphics, etc. for 200+ Vanderbilt Student Organizations. Manage ongoing requests for graphic design projects throughout the year. Conduct creative development meetings with Vanderbilt affiliated clients and administration.",
  skills: ["Illustrator", "Photoshop", "Procreate"],
  url: "https://anchorlink.vanderbilt.edu/organization/doresdesign",
};

const abroad = {
  date: "Spring 2024",
  title: "CASA – University of Melbourne",
  description:
    "Enrolled for the semester at the University of Melbourne while participating in the CASA (Consortium for Advanced Studies Abroad) program focusing on indigenous studies and Melbourne history.",
  skills: [],
  url: "https://casa.education/melbourne",
};

export default function Experience() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* <h4 style={{ paddingBottom: "10px" }}>Experience</h4> */}
      <div className="experience-list">
        <ExperienceCards job={hc1} />
        <ExperienceCards job={lifeomic} />
        <ExperienceCards job={dores} />
        <ExperienceCards job={abroad} />
      </div>
    </ThemeProvider>
  );
}
