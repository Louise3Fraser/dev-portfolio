import React from "react";
import ProjectCards from "../components/cards/ProjectCards";
import carshare from "../media/carshare/carshare.png";
import mushroom from "../media/mushroom/mushroomCover.png";
import sarratt from "../media/sarratt/sarrattCover.png";

import "../pages-css/Projects.css";
import v1Big from "../media/versions/v1Cover.png";
import v2Big from "../media/versions/v2Cover.png";
import moti from "../media/moti/motiCover.png";
import itell from "../media/itell/itellCover.png";

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
