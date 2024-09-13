import React, { useEffect } from "react";
import "../pages-css/MainSections.css";
import "../pages-css/Animations.css";

export default function Header({ section }) {
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
    <div className="section-header">
      <h4 className="h4-sub fade-in-section">{section}.</h4>
      <div className="line fade-in-section"/>
    </div>
  );
}
