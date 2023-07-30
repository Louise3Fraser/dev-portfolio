import React from "react";
import { Typography, ThemeProvider } from "@mui/material";
import AWS from "../images/aws.png";
import cplus from "../images/c++.png";
import java from "../images/java.png";
import javascript from "../images/javascript.png";
import python from "../images/python.png";
import react from "../images/react.png";
import typescript from "../images/typescript.png";
import "../pages-css/Skills.css";
import SkillCard from "../components/SkillCard";
import { theme } from "../Theme";

export default function Skills() {
  return (
    <div className="skills">
      <div className="first-row">
        <SkillCard
          image={cplus}
          description={
            "C++ is the primary language used in computer science classes at Vanderbilt. As such, I have "
          }
        />
        <SkillCard image={java} description={"Hi this is a description"} />
        <SkillCard
          image={javascript}
          description={"Hi this is a description"}
        />
        <SkillCard image={react} description={"Hi this is a description"} />
        <SkillCard image={python} description={"Hi this is a description"} />
        <SkillCard image={AWS} description={"Hi this is a description"} />
        <SkillCard
          image={typescript}
          description={"Hi this is a description"}
        />
      </div>
    </div>
  );
}
