import React from "react";
import "./App.scss";
import Home from "./Home/Home";
import TopBar from "./TopBar/TopBar";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";

const App = () => {
  return (
    <div className="body App">
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Skill" element={<Skills />} />
        <Route path="/education" element={<div>My Education</div>} />
        <Route path="/experience" element={<div>My Experience</div>} />
        <Route path="/work" element={<div>My Work</div>} />
        <Route path="/blog" element={<div>My Blog</div>} />
        <Route path="/contact" element={<div>Contact Me</div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
