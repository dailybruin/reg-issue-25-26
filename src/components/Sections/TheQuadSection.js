import React from "react";
import TheQuadHeader from "../../images/common/THE QUAD.png";
import { makeArticleCards } from "./utilities";

import "./Sections.css";

const TheQuadSection = () => {
  return (
    <div className="section" id='quad'>
      <div className="section-header">
        <img src={TheQuadHeader} alt="The Quad" className="header-image" />
      </div>
      <div className="section-content thequad-grid">
        {makeArticleCards(1)}
        {makeArticleCards(1, {}, "Horz")}
      </div>
    </div>
  );
};

export default TheQuadSection;
