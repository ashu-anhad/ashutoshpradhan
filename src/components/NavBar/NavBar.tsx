import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = (): any => {
  return (
    <div className="nav-bar">
      <div className="bottom clearfix">
        <div className="title">
          <Link to="/">Ashutosh</Link>
        </div>

        <Link className="responsive-menu-open" to="/about">
          Menu <i className="fa fa-bars"></i>
        </Link>
        <nav className="main-nav">
          <ul className="list-unstyled">
            <li className="active">
              <a href="#section1" className="">
                Home
              </a>
            </li>
            <li className="">
              <Link to="/about">About</Link>
            </li>
            <li className="">
              <Link to="/skill">Skill</Link>
            </li>
            <li className="">
              <Link to="/experience">Experience</Link>
            </li>
            <li className="">
              <Link to="/education">Education</Link>
            </li>
            <li className="">
              <Link to="/work">Work</Link>
            </li>
            <li className="">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
