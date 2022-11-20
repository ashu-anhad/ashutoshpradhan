import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <li>
              <NavLink
                className={(isActive) => (isActive.isActive ? "active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={(isActive) => (isActive.isActive ? "active" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={(isActive) => (isActive.isActive ? "active" : "")}
                to="/skill"
              >
                Skill
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={(isActive) => (isActive.isActive ? "active" : "")}
                to="/experience"
              >
                Experience
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={(isActive) => (isActive.isActive ? "active" : "")}
                to="/education"
              >
                Education
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={(isActive) => (isActive.isActive ? "active" : "")}
                to="/work"
              >
                Work
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={(isActive) => (isActive.isActive ? "active" : "")}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="">
              <NavLink
                className={(isActive) => (isActive.isActive ? "active" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
