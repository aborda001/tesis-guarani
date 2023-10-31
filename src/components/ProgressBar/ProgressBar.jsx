import React from "react";
import "./ProgressBar.css";
import closeIcon from "./close-icon.png";
import lifeIcon from "./life-icon.png";
import { Link } from "react-router-dom";

const ProgressBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={closeIcon} alt="" />
      </Link>
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
