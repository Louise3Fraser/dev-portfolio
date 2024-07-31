import React from "react";
import { Typography, ThemeProvider } from "@mui/material";
import { theme } from "../Theme";
import "../pages-css/Home.css";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="home-title">
        {/* <h4>About</h4> */}
        <Typography
          align="left"
          variant="h3"
          fontSize={"16px"}
          color="#63605b"
          lineHeight={"25px"}
        >          
           I am a current senior at Vanderbilt University double majoring in
          <b> computer science </b> and <b> psychology</b>. 
        </Typography>
        <Typography
          align="left"
          variant="h3"
          fontSize={"16px"}
          color="#63605b"
          lineHeight={"25px"}
        >
          Coding and design are two things I love to challenge myself with. I am particularly
          interested in exploring <b> frontend</b> or <b>full-stack</b> development. I have a solid foundation in JavaScript, React.js, 
          and Python.
        </Typography>
        <Typography
          align="left"
          variant="h3"
          fontSize={"16px"}
          color="#63605b"
          lineHeight={"25px"}
        >
          I have two years of internship experience where I worked as a software engineer intern under the mentorship of experienced professionals. During this time, I developed and deployed an app and created applets, gaining expertise in React, JavaScript, Typescript, Python, and AWS.
        </Typography>
        <Typography
          align="left"
          variant="h3"
          fontSize={"16px"}
          color="#63605b"
          lineHeight={"25px"}
        >
         In my free time, I enjoy drawing, watching movies/tv, reading fantasy novels, playing videogames, going to
          the gym, and trying new cuisines.
        </Typography>
      </div>
    </ThemeProvider>
  );
}
