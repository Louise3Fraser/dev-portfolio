import React, { useEffect } from "react";
import "../pages-css/MainSections.css";
import "../pages-css/Animations.css";
import { motion } from "framer-motion";

export default function Column({ column }) {
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
    <div style={{ maxWidth: "25%", display: "flex", flexDirection: "column", gap: "5px"  }}>
      <p className="job fade-in-section">{column.title}</p>
      {column.items.map((item, index) => {
        return (
          <motion.div key={index} className="animatable" whileHover={{ scale: 1.1 }}>
            <p
              style={{ margin: "0px", cursor: "default" }}
              className="body-main fade-in-section"
            >
              {item}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
