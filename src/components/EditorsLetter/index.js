import React from "react";
import "./EditorsLetter.css";
import letterImage from "../../images/common/LETTER.png";

const EditorsLetter = () => {
  return (
    <div className="editors-letter-container">
      <div className="editors-letter-content">
        <img
          src={letterImage}
          alt="Letter from the editors"
          className="editors-letter-image"
        />
      </div>
    </div>
  );
};

export default EditorsLetter;
