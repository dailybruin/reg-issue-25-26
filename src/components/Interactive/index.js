import React from "react";
import "./Interactive.css";
import interactiveImage from "../../images/common/INTERACTIVE.png";

const Interactive = () => {
  return (
    <div className="interactive-container">
      <div className="interactive-content">
        <img
          src={interactiveImage}
          alt="Interactive content"
          className="interactive-image"
        />
      </div>
    </div>
  );
};

export default Interactive;
