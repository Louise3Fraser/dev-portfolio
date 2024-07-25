import React from "react";
import { Typography, ThemeProvider } from "@mui/material";
import { theme } from "../Theme";
import "../pages-css/Home.css";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="home-title">
        <h1 style={{ fontSize: "25px" }}>About</h1>
        {/* <Typography
          align="justify"
          variant="h3"
          fontSize={"16px"}
          color="#63605b"
          lineHeight={"25px"}
        >
         <i>Nice to meet you, and welcome to my dev portfolio!</i>
        </Typography> */}
        <Typography
          align="justify"
          variant="h3"
          fontSize={"16px"}
          color="#63605b"
          lineHeight={"25px"}
        >          
           I am a current senior at Vanderbilt University double majoring in
          <b> computer science </b> and <b> psychology</b>. 
        </Typography>
        <Typography
          align="justify"
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
          align="justify"
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
