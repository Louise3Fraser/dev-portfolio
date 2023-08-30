import React from "react";
import { CardContent, Card, Typography, ThemeProvider } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import "../pages-css/About.css";
import { motion } from "framer-motion";
import { theme } from "../Theme";
import ProjectCards from "../components/sub_components/ProjectCards";
import carshare from "../images/carshare.png";
import todo from "../images/todo.png";
import "../pages-css/Portfolio.css";

export default function Portfolio() {
  return (
    <ThemeProvider theme={theme}>
      <h1 style={{ fontSize: "25px", paddingBottom: "30px" }}>Recent Work</h1>
      <div className="portfolio-cards">
        <ProjectCards
          title={"CarShare"}
          image={carshare}
          description={
            "My first major app that I designed to assist in the sharing of a car. The app financial organ"
          }
        />
        <ProjectCards
          title={"FancyTodo"}
          image={todo}
          description={
            "A fun project created by my friend and I, this small app is a fancy todo list. Our goal was to become familiar with SQL and mySQL by implementing a simple design."
          }
        />
      </div>
    </ThemeProvider>
  );
}
