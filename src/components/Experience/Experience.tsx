import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Experience.scss";
import c1 from "../../assets/images/c1.jpg";

const Experience = () => {
  return (
    <div className="container exp">
      <h2>8 Years Experience</h2>
      <div className="experience-timeline">
        <div className="experience-block clearfix">
          <div className="meta">
            <span className="year">2019 - Current</span>
            <span className="company">Sopra Steria</span>
          </div>
          <div className="content">
            <h5>Senior Technical Lead</h5>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velitus sed quia non num quam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-crown"></i>
          </div>
          <div className="line"></div>
        </div>
        <div className="experience-block clearfix">
          <div className="meta">
            <span className="year">2016 - 2019</span>
            <span className="company">HCL Technologies</span>
          </div>
          <div className="content">
            <h5>Senior Developer</h5>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velitus sed quia non num quam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>
          <div className="icon">
            <i className="fa-regular fa-images"></i>
          </div>
          <div className="line"></div>
        </div>
        <div className="experience-block clearfix">
          <div className="meta">
            <span className="year">2014 - 2016</span>
            <span className="company">Edoofa</span>
          </div>
          <div className="content">
            <h5>Web Developer</h5>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velitus sed quia non num quam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>
          <div className="icon">
            <i className="fa-regular fa-credit-card"></i>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm testimonial-slider">
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            stopOnHover={false}
          >
            <div>
              <img className="circular-image" src={c1} alt="testimonial" />
              <div className="legend">
                <p>
                  "Awesome to work with. Incredibly organized, easy to
                  communicate with, responsive with next iterations, and
                  beautiful work."
                </p>
                <span className="author">swetain , CEO of Texco Company</span>
              </div>
            </div>
            <div>
              <img className="circular-image" src={c1} alt="testimonial" />
              <div className="legend">
                <p>
                  "Awesome to work with. Incredibly organized, easy to
                  communicate with, responsive with next iterations, and
                  beautiful work."
                </p>
                <span className="author">swetain , CEO of Texco Company</span>
              </div>
            </div>
            <div>
              <img className="circular-image" src={c1} alt="testimonial" />
              <div className="legend">
                <p>
                  "Awesome to work with. Incredibly organized, easy to
                  communicate with, responsive with next iterations, and
                  beautiful work."
                </p>
                <span className="author">swetain , CEO of Texco Company</span>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Experience;
