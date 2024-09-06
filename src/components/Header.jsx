import React from "react";
import "../pages-css/MainSections.css";

export default function Header({section}) {
  return (
    <div className="section-header">
      <h4 className="h4-sub">{section}</h4>
      <div style={{flexGrow: 1}} className="line" />
    </div>
  );
}