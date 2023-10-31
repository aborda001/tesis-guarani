import React from "react";
import "./ProgressBar.css";
import closeIcon from "./close-icon.png"
import lifeIcon from "./life-icon.png"

const ProgressBar = () => {
  return (
    <nav>
      <img src={closeIcon} alt="" />
      <div className="bar">
        <span>.</span>
        <div className="progress">
          <span>.</span>
        </div>
        <div className="progress-item">
          <span>.</span>
        </div>
      </div>
      <img src={lifeIcon} alt="" />
    </nav>
  );
};

export default ProgressBar;
