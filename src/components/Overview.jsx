import React, { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import "../pages-css/Projects.css";
import "../pages-css/Animations.css";
import { useNavigate } from "react-router-dom";

{
  /* <div>
            <p className="job">Github</p>
            <p className="body-main-link" onClick={() => window.open({ url })}>
              View on my Github!
            </p>
          </div> */
}
export default function Overview({
  overview,
  goals,
  problem,
  tasks,
  dates,
  url,
  team,
  project,
  roles,
}) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const highlights = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    highlights.forEach((highlight) => {
      observer.observe(highlight);
    });

    return () => {
      highlights.forEach((highlight) => {
        observer.unobserve(highlight);
      });
    };
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: screenSizeSm ? "row" : "column",
          gap: "30px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p className="job">Role</p>
          {roles.map((role) => {
            return <p className="body-main">{role}</p>;
          })}
        </div>
       

        <div>
          <p className="job">Project</p>
          <p className="body-main">{project}</p>
        </div>
        {team ? (
          <div>
            <p className="job">Team</p>
            <p className="body-main">{team}</p>
          </div>
        ) : (
          <></>
        )}
        <div>
          <p className="job">Time</p>
          <p className="body-main">{dates}</p>
        </div>
        <div>
          <p className="job">Skills</p>
          {tasks.map((task) => {
            return <p className="body-main">{task}</p>;
          })}
        </div>
      </div>
      <div className="overview" style={{ flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            gap: "30px",
          }}
        >
          <h4
            className="job"
            style={{
              color: "#EA5F27",
              fontWeight: "600",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            OVERVIEW
          </h4>

          <div className="descriptions">
            <h4 className="header-bold-small" style={{ flex: "1 0 30%" }}>
              Background
            </h4>
            <p className="body-main overview-p">{overview}</p>
          </div>

          <div className="descriptions">
            <h4 className="header-bold-small" style={{ flex: "1 0 30%" }}>
              Goals
            </h4>
            <p className="body-main overview-p">{goals}</p>
          </div>
          {problem ? (
            <div className="descriptions">
              <h4 className="header-bold-small" style={{ flex: "1 0 30%" }}>
                Problem
              </h4>
              <p className="body-main overview-p">{problem}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>{" "}
      <hr style={{ width: "12vw" }} />
    </div>
  );
}
