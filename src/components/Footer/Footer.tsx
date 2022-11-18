import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h4>Address</h4>
              <p>
                SA 8/34 DPR, Buddha Nagar Colony
                <br />
                Varanasi, Uttar Pradesh (IN)
              </p>
            </div>
            <div className="col-sm-4">
              <h4>Connect</h4>
              <div className="social-icons">
                <a href="" className="social-icon">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fa fa-behance"></i>
                </a>
                <a href="" className="social-icon">
                  <i className="fa fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-4">
              <h4>Contact</h4>
              <p>
                Tel: +91 705-359-2528
                <br />
                Mail: ashuanhad@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">Copyright © All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
