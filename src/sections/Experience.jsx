import React from "react";
import ExperienceCards from "../components/cards/ExperienceCards";
import "../pages-css/Animations.css"

const hc1 = {
  date: "Summer 2023",
  title: "Software Engineer Intern",
  place: "hc1",
  description: "Created a full stack React app for user management of 3Aware which allows users to edit, create, and delete users. Utilized CAS endpoints, MUI library, and React Final Form and deployed to AWS using S3 and CloudFront. Collaborated with team members at daily scrum meetings, contributing to effective planning and project communication.",
  img: "null",
  skills: ["Javascript", "React", "APIs", "AWS"],
  takeaways:
    "My experience with full stack development has skyrocketed since this internship.",
  url: "https://www.hc1.com/",
};

const lifeomic = {
  date: "Summer 2022",
  title: "Computer Science Intern",
  place: "LifeOmic",
  description: "Worked on developing applets and translating code using React, JavaScript, TypeScript, and Python. Contributed to LifeOmic’s platform, which has 5 million mobile app downloads and over 300,000 monthly active users. Created and tested features for physician search and information retrieval.",
  skills: ["Javascript", "React", "Typescript", "Python", "Cypress"],
  takeaways: "I learned",
  url: "https://www.linkedin.com/company/lifeomic-inc",
};

const dores = {
  date: "2021 - Current",
  title: "Graphic Designer",
  place: "Dores' Design",
  description: "Design posters, banners, flyers, logos, and various graphics for over 200 Vanderbilt student organizations. Handle ongoing design requests throughout the year and lead creative development meetings with clients and administration.  ",
  skills: ["Illustrator", "Photoshop", "Procreate"],
  url: "https://anchorlink.vanderbilt.edu/organization/doresdesign",
};

const abroad = {
  date: "Spring 2024",
  title: " CASA Student",
  place: "University of Melbourne",
  description: "Enrolled for the semester at the University of Melbourne while participating in the CASA (Consortium for Advanced Studies Abroad) program focusing on indigenous studies and Melbourne history.",
  skills: [],
  url: "https://casa.education/melbourne",
};

// description: (
//   <>
//     Design <span className="bold">posters</span>,{" "}
//     <span className="bold">banners</span>,{" "}
//     <span className="bold">fliers</span>, <span className="bold">logos</span>,{" "}
//     <span className="bold">graphics</span>, etc. for 200+ Vanderbilt Student
//     Organizations. Manage ongoing requests for graphic design projects
//     throughout the year. Conduct creative development{" "}
//     <span className="bold">meetings</span> with Vanderbilt affiliated clients
//     and administration.
//   </>
// ),
export default function Experience() {
  return (
    <div className="experience">
      <div className="cards">
        <ExperienceCards job={dores} />
        <ExperienceCards job={abroad} />
        <ExperienceCards job={hc1} />
        <ExperienceCards job={lifeomic} />
      </div>
    </div>
  );
}
