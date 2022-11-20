import React from "react";
import { Link } from "react-router-dom";
import me from "../../assets/images/me.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-7 main-content">
          <h1>
            Develop<sup>+</sup> Design<sup>+</sup> Interactive
            <sup>+</sup> Art<sup>+</sup>
          </h1>
          <p>
            Hello, I’m Ashutosh Pradhan. I have 8+ years of experience in web
            development. I have worked for variety of sectors and with companies
            both big and small.
          </p>
          <p className="button-row">
            <Link to="/contact" className="button solid-button white">
              Hire Me Now
            </Link>
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
  );
};

export default Home;
