import React, { useEffect } from "react";
import "../../pages-css/Projects.css";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Description({ title, desc, yes }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="descriptions" style={{marginBottom: "50px"}}>
      <h4 className="job-header">{title}</h4>
      <div
        style={{
          display: "flex",
          flexDirection: yes ? "row" : "column",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          {desc.map((p, index) => {
            return (
              <>
                {p}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
