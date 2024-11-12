import React, { useEffect } from "react";
import "../../pages-css/Projects.css";
import { useTheme, useMediaQuery } from "@mui/material";

export default function SideImage({ title, subtitle, desc, content, list }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div
      className="side-image"
      style={{
        display: "grid",
        gridTemplateColumns: screenSizeSm ? "1fr 1fr" : "1fr",
        gap: "20px",
        justifyItems: "start",
        alignItems: "start",
      }}
    >
      {content}

      <div style={{ display: "flex", flexDirection: "column" }}>
        {title ? <div className="job">{title}</div> : <></>}
        {desc ? (
          <div
            style={{
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "flex-start",
              paddingTop: "20px",
            }}
          >
            {desc.map((p) => {
              return <p className="body-main overview-p">{p}</p>;
            })}
          </div>
        ) : (
          <></>
        )}

        {list ? (
          <div
            style={{
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "flex-start",
              paddingTop: "30px",
            }}
          >
            {list.map((p) => {
              return <p className="job overview-p"> {p}</p>;
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
