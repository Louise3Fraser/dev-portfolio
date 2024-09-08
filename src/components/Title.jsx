import React from "react";
import "../pages-css/MainSections.css";
import "../pages-css/Animations.css"
import Socials from "./Socials";

export default function Title() {
  return (
    <div className="title">
      <div className="container">
        <div className="blobs">
          <div
            className="blob a"
            style={{
              backgroundColor: "#ff8a80",
            }}
          ></div>
          <div
            className="blob b"
            style={{
              backgroundColor: "#ffd385",
            }}
          ></div>
          <div
            className="blob c"
            style={{
              backgroundColor: "#ff80ab",
            }}
          ></div>
          <div
            className="blob d"
            style={{
              backgroundColor: "#f478c8",
            }}
            // style={{
            //   backgroundColor: "#ff80ab",
            // }}
          ></div>
        </div>
      </div>
      <h5 className="job fade-in fade-in-1" style={{ fontStyle: "italic" }}>
  Hi! My name is
</h5>
<h5 className="h4-title fade-in fade-in-2">Louise Fraser</h5>

<Socials className="fade-in fade-in-5" />
    </div>
  );
}
