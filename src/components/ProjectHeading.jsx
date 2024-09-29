import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import "../pages-css/Projects.css";

export default function ProjectHeading({
  title,
  subTitle,
  projectType,
  tasks,
  dates,
  img,
  type,
  url,
  team,
}) {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("lg"));

  return (
    <div className="project-heading">
      <div
        style={{
          display: "flex",
          flexDirection: screenSize ? "row" : "column",
          justifyContent: "space-between",
          gap: screenSize ? "0px" : "20px",
        }}
      >
        <div>
          <h4 className="header-large">{title}</h4>
          <h4
            className="header-sub"
            style={{ maxWidth: screenSize ? "80%" : "100%", marginTop: "20px" }}
          >
            {subTitle}
          </h4>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
            <div style={{ flex: "1" }}>
              <p className="job">Tasks + Skills</p>
              {tasks.map((task) => {
                return <p className="body-main">{task}</p>;
              })}
            </div>
            <div style={{ flex: "1" }}>
              <p className="job">Time</p>
              <p className="body-main">{dates}</p>
            </div>
            {team ? (
              <div style={{ flex: "1" }}>
                <p className="job">Teammates</p>
                <p className="body-main">{team}</p>
              </div>
            ) : (
              <></>
            )}

            {projectType ? (
              <div style={{ flex: "1" }}>
                <p className="job">Type</p>
                <p className="body-main">{projectType}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          {url ? (
            <p className="body-main-link" onClick={() => window.open(url)}>
              See on my Github!
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      {type === "img" ? (
        <img
          alt="img"
          src={img}
          style={{
            margin: "0px",
            objectFit: "contain",
            maxWidth: "100%",
            borderRadius: "10px",
          }}
        />
      ) : (
        <video
          src={img}
          className="card-src"
          autoPlay
          playsInline
          loop
          muted
          style={{
            margin: "0px",
            objectFit: "contain",
            maxWidth: "100%",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      )}
    </div>
  );
}
