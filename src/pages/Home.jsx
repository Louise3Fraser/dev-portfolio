import React from "react";
import { Typography, ThemeProvider } from "@mui/material";
import "../pages-css/Title.css";
import { theme } from "../Theme";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="title">
        <div className="name-rotate">
          <Typography variant="h1" fontSize={"55px"} color="#facdbc">
            Louise Fraser
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}
