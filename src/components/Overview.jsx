import React, { useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import "../pages-css/Projects.css";
import "../pages-css/Animations.css";
import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
  client,
  clientURL,
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
    <div style={{marginBottom:"100px"}}>
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
        {client ? (
          <div>
            <p className="job">Client</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p className="body-main">{client}</p>
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(clientURL)}
              >
                <ArrowOutwardIcon
                  style={{ color: "black", cursor: "pointer" }}
                />
              </motion.button>
            </div>
          </div>
        ) : (
          <></>
        )}
        {project ? (
          <div>
            <p className="job">Project</p>
            <p className="body-main">{project}</p>
          </div>
        ) : (
          <></>
        )}
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

        {url ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <p className="body-main">Github</p>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(url)}
            >
              <ArrowOutwardIcon style={{ color: "black", cursor: "pointer" }} />
            </motion.button>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* <div className="overview" style={{ flexDirection: "column" }}>
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
            1. OVERVIEW
          </h4>
          {overview ? (
            <div className="descriptions">
              <h4 className="header-bold-small" style={{ flex: "1 0 30%" }}>
                Background
              </h4>
              {overview.map((p) => {
                return <p className="body-main overview-p">{p}</p>;
              })}
            </div>
          ) : (
            <></>
          )}

          {goals ? (
            <div className="descriptions">
              <h4 className="header-bold-small" style={{ flex: "1 0 30%" }}>
                Goals
              </h4>
              {goals.map((p) => {
                return <p className="body-main overview-p">{p}</p>;
              })}
            </div>
          ) : (
            <></>
          )}

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
      </div>{" "} */}
    </div>
  );
}
