import React from "react";
import { Typography, ThemeProvider } from "@mui/material";
import "../pages-css/Home.css";
import { theme } from "../Theme";


export default function Portfolio() {
  return (
    <ThemeProvider theme={theme}>
      <div className="title-main">
        {/* <Typography variant="h2" fontSize={"20px"} color="#f7f3ef">
          Hello! My name is
        </Typography> */}
        <Typography variant="h1" fontSize={"60px"} color="#2f384a">
          Louise Fraser
        </Typography>
        <div style={{ height: "10px" }} />
        <Typography sx={{width: 300}} variant="h2" fontSize={"20px"} color="#f7f3ef">
          I am a full time student at Vanderbilt University, studying computer
          science and psychology. In multiple days
        </Typography>
      </div>
    </ThemeProvider>
  );
}
