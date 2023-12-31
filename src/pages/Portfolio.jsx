import React from "react";
import { ThemeProvider } from "@mui/material";
import "../pages-css/About.css";
import { theme } from "../Theme";
import ProjectCards from "../components/sub_components/ProjectCards";
import carshare from "../images/carshare.png";
import todo from "../images/todo.png";
import mushroom from "../images/mushroom.png";
import "../pages-css/Portfolio.css";

export default function Portfolio() {
  return (
    <ThemeProvider theme={theme}>
      <h1
        style={{ fontSize: "25px", paddingBottom: "30px"}}
      >
        Recent Work
      </h1>
      <div className="portfolio-cards">
        <ProjectCards
          title={"CarShare"}
          image={carshare}
          description={
            "My first major app that I designed to assist in the sharing of a car. Sharing a car can often be frustrating, expensive, and inconvenient..."
          }
          url="https://github.com/Louise3Fraser/car-share"
        />
        <ProjectCards
          title={"FancyTodo"}
          image={todo}
          description={
            "A fun project created by my friend and I, this small app is a fancy todo list. Our goal was to become familiar with SQL and mySQL by implementing a simple design."
          }
          url="https://github.com/Louise3Fraser/fancy-todo"
        />
        <ProjectCards
          title={"Mushroom Mayhem"}
          image={mushroom}
          description={
            "Introducing Mushroom Mayhem, a Unity platform-oriented game."
          }
          url="https://github.com/lisaliuu/Mushroom_Mayhem"
        />
      </div>
    </ThemeProvider>
  );
}
