import React from "react";
import ProjectCards from "../components/ProjectCards";
import carshare from "../images/carshare.png";
import mushroom from "../images/mushroom.png";
import "../pages-css/Projects.css";
import Header from "../components/Header";

export default function Projects() {
  return (
    <div className="projects">
      <Header section={"Projects"} />
      <ProjectCards
        title={"CarShare"}
        image={carshare}
        description={
          "Designed to reduce car trips and gas usage by providing an efficient and organized way for people to share a car. App utilizes calendar React.js, API, MySQL database, and both frontend and backend development"
        }
        url="https://github.com/Louise3Fraser/car-share"
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
  );
}
