import React, { useEffect } from "react";
import phone from "../../media/phone.png";
import "../../pages-css/Projects.css";

export default function VideoOverlay({ video }) {
  return (
    <div className="container">
      <img src={phone} alt="Overlay" className="overlay-image" />
      <video
        src={video}
        className="overlay-video"
        autoPlay
        playsInline
        loop
        muted
      />
    </div>
  );
}
