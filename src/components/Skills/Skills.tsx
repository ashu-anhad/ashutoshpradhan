import React from "react";
import { ProgressBar } from "react-bootstrap";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="container skills">
      <h2>My Skills Values</h2>
      <div className="row">
        <div className="col-sm-6">
          <h4>Technical Skills</h4>
          <label className="progress-bar-label">Wordpress</label>
          <ProgressBar now={60} label={60} animated={true} />
          <label className="progress-bar-label">Wordpress</label>
          <ProgressBar now={60} label={60} animated={true} />
          <label className="progress-bar-label">Wordpress</label>
          <ProgressBar now={60} label={60} animated={true} />
          <label className="progress-bar-label">Wordpress</label>
          <ProgressBar now={60} label={60} animated={true} />
        </div>
        <div className="col-sm-6">
          <h4>Knowledge</h4>
          <div className="row">
            <div className="col-sm-6">
              <ul className="list-icons purple bold-list">
                <li>
                  <i className="md-arrow-forward"></i>Install and Configure
                </li>
                <li>
                  <i className="md-arrow-forward"></i>Web Usability
                </li>
                <li>
                  <i className="md-arrow-forward"></i>Digital Painting
                </li>
                <li>
                  <i className="md-arrow-forward"></i>Grid and Layout
                </li>
                <li>
                  <i className="md-arrow-forward"></i>Mobile App Design
                </li>
                <li>
                  <i className="md-arrow-forward"></i>Graphical Design
                </li>
                <li>
                  <i className="md-arrow-forward"></i>SEO Optimization
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list-icons purple bold-list">
                <li>
                  <i className="md-arrow-forward"></i>UX and UI Design
                </li>
                <li>
                  <i className="md-arrow-forward"></i>Logo Design
                </li>
                <li>
                  <i className="md-arrow-forward"></i>3D Animation &amp; Visual
                  Effects
                </li>
                <li>
                  <i className="md-arrow-forward"></i>Audio Video Editing
                </li>
                <li>
                  <i className="md-arrow-forward"></i>Photography
                </li>
                <li>
                  <i className="md-arrow-forward"></i>Web Development
                </li>
                <li>
                  <i className="md-arrow-forward"></i>Digital Marketing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <h4>Language Skills</h4>
      <div className="row">
        <div className="col-sm-4">
          <div className="circle-progress-wrapper clearfix">
            <div className="circle-progress">
              <ChangingProgressProvider
                values={[0, 50, 60, 90]}
                interval={500}
              >
                {(percentage: any) => (
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textColor: "#7c4dff",
                      pathColor: "#7c4dff",
                    })}
                  />
                )}
              </ChangingProgressProvider>
              ;
            </div>
            <div className="circle-progress-label-wrapper">
              <label className="circle-progress-label">
                English Experienced
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="circle-progress-wrapper clearfix">
            <div className="circle-progress">
              <ChangingProgressProvider
                values={[0, 50, 60, 80]}
                interval={500}
              >
                {(percentage: any) => (
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textColor: "#7c4dff",
                      pathColor: "#7c4dff",
                    })}
                  />
                )}
              </ChangingProgressProvider>
              ;
            </div>
            <div className="circle-progress-label-wrapper">
              <label className="circle-progress-label">French Advanced</label>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="circle-progress-wrapper clearfix">
            <div className="circle-progress">
              <ChangingProgressProvider
                values={[0, 50, 60, 70]}
                interval={500}
              >
                {(percentage: any) => (
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textColor: "#7c4dff",
                      pathColor: "#7c4dff",
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </div>
            <div className="circle-progress-label-wrapper">
              <label className="circle-progress-label">German Basic</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
