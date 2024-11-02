import React, { useEffect } from "react";
import "../../pages-css/Projects.css";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Description({ title, desc, images, yes }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className="descriptions">
      <h4 className="header-bold-small">{title}</h4>
      <div
        style={{
          display: "flex",
          flexDirection: yes ? "row" : "column",
          gap: images[0] ? "20px" : "0px",
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
            flex: yes ? "1" : ""
          }}
        >
          {desc.map((p) => {
            return <p className="body-main overview-p">{p}</p>;
          })}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: screenSizeSm ? "row" : "column",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          {images.map((img) => {
            return (
              <img loading="eager"
                alt="img"
                src={img}
                style={{
                  margin: "0px",
                  objectFit: "contain",
                  maxWidth: images.length > 1 ? "50%" : "100%",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
