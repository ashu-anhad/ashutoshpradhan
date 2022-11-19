import React from "react";
import "./TopBar.scss";

const TopBar = (): any => {
  return (
    <div className="top-bar clearfix">
      <a href="#section8" className="available">
        <i className="fa-regular fa-envelope"></i>
        <span>Available For Freelance</span>
      </a>
      <div className="right-icons">
        <a
          className="download"
          href="https://drive.google.com/file/d/12Jo-licvAXe-T9b8ws3iMCv4dR070GDa/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-cloud-arrow-down"></i>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
