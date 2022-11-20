import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = (): any => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleResponsiveMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  const getMenuOptions = () => {
    return (
      <ul className="list-unstyled">
        <li>
          <NavLink
            className={(isActive) => (isActive.isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => (isActive.isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => (isActive.isActive ? "active" : "")}
            to="/skill"
          >
            Skill
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => (isActive.isActive ? "active" : "")}
            to="/experience"
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => (isActive.isActive ? "active" : "")}
            to="/education"
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => (isActive.isActive ? "active" : "")}
            to="/work"
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => (isActive.isActive ? "active" : "")}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => (isActive.isActive ? "active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <>
      <div className="nav-bar">
        <div className="bottom clearfix">
          <div className="title">
            <Link to="/">Ashutosh</Link>
          </div>
          <NavLink
            to="#"
            className="responsive-menu-open"
            onClick={toggleResponsiveMenu}
          >
            Menu <i className="fa fa-bars"></i>
          </NavLink>
          <nav className="main-nav">{getMenuOptions()}</nav>
        </div>
      </div>

      <div className={`responsive-menu ${isMenuVisible ? "open" : "close"}`}>
        <NavLink
          to="#"
          className="responsive-menu-close"
          onClick={toggleResponsiveMenu}
        >
          Close <i className="fa-solid fa-xmark"></i>
        </NavLink>
        <nav className="responsive-nav" onClick={toggleResponsiveMenu}>
          {getMenuOptions()}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
