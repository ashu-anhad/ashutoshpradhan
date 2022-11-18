import React from "react";
import "./NavBar.scss";

const NavBar = (): any => {
  return (
    <div className="nav-bar">
      <div className="bottom clearfix">
        <div className="title">
          <a>
            Ashutosh
          </a>
        </div>
        <div className="header-action-button-wrapper">
          <a className="header-action-button action-button">
            <i className="md md-add"></i>
          </a>
        </div>

        <a className="responsive-menu-open">
          Menu <i className="fa fa-bars"></i>
        </a>
        <nav className="main-nav">
          <ul className="list-unstyled">
            <li className="active">
              <a href="#section1" className="">
                Home
              </a>
            </li>
            <li className="">
              <a href="#section2">About</a>
            </li>
            <li className="">
              <a href="#section3">Skill</a>
            </li>
            <li className="">
              <a href="#section4">Experience</a>
            </li>
            <li className="">
              <a href="#section5">Education</a>
            </li>
            <li className="">
              <a href="#section6" className="">
                Work
              </a>
            </li>
            <li className="">
              <a href="#section7" className="">
                Blog
              </a>
            </li>
            <li className="">
              <a href="#section8">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
