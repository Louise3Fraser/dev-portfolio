import React from "react";
import ProjectCards from "../components/ProjectCards";
import carshare from "../media/carshare.png";
import mushroom from "../media/mushroom.png";
import "../pages-css/Projects.css";
import v1 from "../media/v1.mp4";

export default function Projects() {
  return (
    <div className="projects">
      <div className="project-grid">
        <ProjectCards
          title={"CarShare"}
          src={carshare}
          color={"#f6e7c9"}
          about={"Fullstack Application"}
          path={"/carshare"}
        />
        <ProjectCards
          title={"Mushroom Mayhem"}
          src={mushroom}
          color={"#cdecf9"}
          about={"Unity Game"}
          path={"/mushroom-mayhem"}
        />
        <ProjectCards
          title={"V1 Portfolio"}
          src={v1}
          type={"video"}
          about={"Frontend Application"}
          path={"/v1-portfolio"}
        />
      </div>
    </div>
  );
}
