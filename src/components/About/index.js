import React from "react";

import "./About.css";
import aboutImageNOBOX from "../../images/common/ABOUT_NOBOX.png";

const About = () => {
  return (
    <div className="about-container" id='about'>
      <div className="about-section">
        <img
          src={aboutImageNOBOX}
          alt="About Daily Bruin"
          className="about-img"
        />

        <div className="apply-box">
          <div className="dashed-lines1"></div>
          <div className="dashed-lines2"></div>

          <div className="apply-overlay">
            <p>
              Like what you see? <br />
              <a
                href="https://apply.uclastudentmedia.com/"
                className="apply-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                APPLY HERE
              </a>
              <br />
              for a Daily Bruin internship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
