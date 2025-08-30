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

    // cleanup listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="interactive-container" id="interactive">
      <div className="interactive-content">
        <img
          src={isMobile ? mobileInteractive : interactiveImage}
          alt="Interactive content"
          className="interactive-image"
        />
      </div>
    </div>
  );
};

export default Interactive;
