import React from "react";

import "./About.css";
import aboutImage from "../../images/common/ABOUT.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={aboutImage} alt="About" className="about-image" />
      </div>
    </div>
  );
};

export default About;
