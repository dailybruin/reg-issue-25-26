import React, { useState, useEffect } from "react";
import "./Interactive.css";
import interactiveImage from "../../images/desktop/INTERACTIVE.png";
import mobileInteractive from "../../images/mobile/Interactive_mobile.png";

const Interactive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="interactive-container" id="interactive">
      <div className="interactive-content">
        <img
          src={isMobile ? mobileInteractive : interactiveImage}
          alt="Interactive background"
          className="interactive-image"
        />

        <div className="map-overlay">
          <div className="map-text">
            {/* Title: Completed construction projects at UCLA from 2018-2024 */}
            <h3>Completed construction projects at UCLA from 2018-2024</h3> 
            {/* Subtitle */}
            <p> 
              This map displays 11 major construction projects completed on UCLA’s campus. The earliest start date for a project was 2018 and the most recent project was completed in 2024. New construction projects are a representation of how UCLA continues to build and improve our physical campus to serve the evolving needs, interests and growth of the university community.
            </p>
            {/* Byline */}
            <p>Ayushi Kadakia, Data editor</p>
          </div>
          <iframe
            src={`${process.env.PUBLIC_URL}/dataregissue/regmap.html`}
            title="Interactive Map"
            className="map-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default Interactive;
