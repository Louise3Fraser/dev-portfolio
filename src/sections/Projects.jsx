import React from "react";
import ProjectCards from "../components/cards/ProjectCards";
import carshare from "../media/carshare/carshare.png";
import mushroom from "../media/mushroom/mushroomCover.png";
import sarratt from "../media/sarratt/sarrattCover.png";
import itell from "../media/itell/itellCoverS.png";
import "../pages-css/Projects.css";
import v1Big from "../media/versions/v1Cover.png";
import v2Big from "../media/versions/v2Cover.png";
import moti from "../media/moti/motiCover.png";

export default function Projects() {
  return (
    <div className="projects">
      <div className="project-grid">
        <ProjectCards
          title={"Moti"}
          src={moti}
          path={"/moti"}
          subtext={"product design, branding, ux"}
        />
        <ProjectCards
          title={"iTELL"}
          src={itell}
          path={"/itell"}
          subtext={"company application redesign, UX/UI research, branding"}
          // desc={`This semester, I am taking a UX Design class at Vanderbilt.
          // We have been connected to real companies and are working with them
          // for the semester. `}
        />

        <ProjectCards
          title={"CarShare"}
          src={carshare}
          path={"/carshare"}
          subtext={"web design, full-stack engineering"}
        />
        <ProjectCards
          title={"Sarratt Art Studios"}
          src={sarratt}
          path={"/sarratt-art-studios"}
          subtext={"graphic design, logo, branding"}
        />
        <ProjectCards
          title={"Mushroom Mayhem"}
          src={mushroom}
          path={"/mushroom-mayhem"}
          subtext={"graphic design, game engineering"}
        />
        <ProjectCards
          title={"V1 Portfolio"}
          src={v1Big}
          path={"/v1-portfolio"}
          subtext={"frontend engineering, web design"}
        />
        <ProjectCards
          title={"V2 Portfolio"}
          src={v2Big}
          path={"/v2-portfolio"}
          subtext={"frontend engineering, web design"}
        />
      </div>
    </div>
  );
}
