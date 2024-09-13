import React from "react";
import ProjectCards from "../components/ProjectCards";
import carshare from "../media/carshare.png";
import mushroom from "../media/mushroom.png";
import "../pages-css/Projects.css";
import Header from "../components/Header";
import v1 from "../media/v1.mp4"

export default function Projects() {
  return (
    <div className="projects">
      <Header section={"Projects"} />
      <ProjectCards
        title={"CarShare"}
        src={carshare}
        type={"image"}
        description={
          "Designed to reduce car trips and gas usage by providing an efficient and organized way for people to share a car. App utilizes calendar React.js, API, MySQL database, and both frontend and backend development"
        }
        about={"Full-stack Application"}
        url="https://github.com/Louise3Fraser/car-share"
      />
      <ProjectCards
        title={"Mushroom Mayhem"}
        src={mushroom}
        type={"image"}
        description={
          "Introducing Mushroom Mayhem, a Unity platform-oriented game."
        }
        about={"Unity Game"}
        url="https://github.com/lisaliuu/Mushroom-Mayhem.git"
      />
       <ProjectCards
        title={"V1 Portfolio"}
        src={v1}
        type={"video"}
        description={
          "My first portfolio website I created!"
        }
        about={"Frontend Application"}
        url="https://github.com/Louise3Fraser/dev-portfolio/tree/v1"
      />
    </div>
  );
}
