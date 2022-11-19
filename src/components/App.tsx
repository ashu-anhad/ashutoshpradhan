import React from "react";
import me from "../assets/images/me.png";
import "./App.scss";
import TopBar from "./TopBar/TopBar";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="body App">
      <TopBar />
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-sm-7 main-content">
            <h1>
              Develop<sup>+</sup> Design<sup>+</sup> Interactive
              <sup>+</sup> Art<sup>+</sup>
            </h1>
            <p>
              Hello, I’m Ashutosh Pradhan. I have 8+ years of experience in web
              development. I have worked for variety of sectors and with
              companies both big and small.
            </p>
            <p className="button-row">
              <a href="/" className="button solid-button white">
                Hire Me Now
              </a>
              <a
                href="https://drive.google.com/file/d/12Jo-licvAXe-T9b8ws3iMCv4dR070GDa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="button solid-button purple"
              >
                Download CV
              </a>
            </p>
          </div>
          <div className="col-sm-5">
            <img src={me} alt="man" className="img-responsive section-img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
