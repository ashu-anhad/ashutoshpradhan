import React from "react";
import me from "../../assets/images/me2.png";
import signature from "../../assets/images/signature.png";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="container about-me">
      <h2>About Me</h2>
      <div className="row">
        <div className="col-sm-3">
          <img src={me} alt="man" className="img-responsive section-img" />
        </div>
        <div className="col-sm-9">
          <h3 className="small-margin-bottom">Ashutosh Pradhan</h3>
          <h5>Web Developer</h5>
          <p>
            Ultricies nisi voluptatem, illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo nemo enim ipsam
            voluptatem. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque latu dantium, totam rem aperiam,
            eaque ipsa quae ab illo tempor dignissim at.{" "}
          </p>
          <div className="signature">
            <img src={signature} alt="signature" className="img-responsive" />
          </div>
          <ul className="list-unstyled text-uppercase">
            <li>
              <b>Date Of Birth:</b> 09 Jan 1992
            </li>
            <li>
              <b>Phone:</b> 705-359-2528
            </li>
            <li>
              <b>Email:</b> ashuanhad@gmail.com
            </li>
            <li>
              <b>Address:</b> SA 8/34 DPR, Buddha Nagar Colony
              <br />
              Varanasi, Uttar Pradesh (IN)
            </li>
            <li>
              <b>Website:</b> http://www.ashutoshpradhan.in
            </li>
          </ul>
          <div className="spacer"></div>
          <h3>What I'm Doing</h3>
          <div className="row">
            <div className="col-sm-4">
              <div className="service">
                <div className="icon">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <h5>Web &amp; Development</h5>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <div className="icon">
                  <i className="fa-solid fa-mobile"></i>
                </div>
                <h5>App Development</h5>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="service">
                <div className="icon">
                  <i className="fa-solid fa-trophy"></i>
                </div>
                <h5>Marketing</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
