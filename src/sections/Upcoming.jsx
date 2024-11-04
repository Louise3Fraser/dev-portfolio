import React from "react";
import ProjectCards from "../components/cards/ProjectCards";
import "../pages-css/Projects.css";
import itell from "../media/itell/itellCoverBlurred.png";

export default function Upcoming() {
  return (
    <div className="projects upcoming">
      <p className="header-bold-small" style={{marginBottom: "30px"}}>Upcoming</p>

      <div className="project-grid">
        <ProjectCards
          title={"iTell"}
          src={itell}
          subtext={"ux/ui class project"}
          desc={`This semester, I am taking a UX Design class at Vanderbilt. 
          We have been connected to real companies and are working with them
          for the semester. `}
        />
      </div>
    </div>
  );
}
