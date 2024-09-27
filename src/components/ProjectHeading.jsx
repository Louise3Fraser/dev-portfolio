import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import "../pages-css/Projects.css"
export default function ProjectHeading({
  title,
  subTitle,
  desc,
  tasks,
  dates,
  img,
}) {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

  return (
    <div className="project-heading">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h4 className="header-large">{title}</h4>
          <h4 className="header-sub">{subTitle}</h4>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
          <div>
            <p className="job">Tasks + Skills</p>
            {tasks.map((task) => {
              return <p className="body-main">{task}</p>;
            })}
          </div>
          <div>
            <p className="job">Time</p>
            <p className="body-main">{dates}</p>
          </div>
        </div>
      </div>
      <img
        alt="img"
        src={img}
        className="fade-in-section"
        style={{
          margin: "0px",
          objectFit: "contain",
          maxWidth: "100%",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}
