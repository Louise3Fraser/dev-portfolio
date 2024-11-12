import React, { useEffect } from "react";
import "../../pages-css/Projects.css";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Side({ title, subtitle, desc, bottom }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div
      className="side"
      style={{
        display: "grid",
        gridTemplateColumns: screenSizeSm ? "1fr 1.75fr" : "1fr",
        gap: "20px",
        alignItems: "start",
        marginBottom: bottom ? "100px" : "20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h4 className="job-header">{title}</h4>
      </div>
      <div
        style={{
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        {subtitle ? <h4 className="job-subheader">{subtitle}</h4> : <></>}
        {desc.map((p, index) => {
          return (
            <p key={index} className="body-main overview-p">
              {p}
            </p>
          );
        })}
      </div>
    </div>
  );
}
