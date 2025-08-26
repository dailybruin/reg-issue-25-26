import React from "react";
import { makeArticleCards } from "./utilities";
import OpinionHeader from "../../images/common/OPINION.png";
import "./Sections.css";

const OpinionSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={OpinionHeader} alt="Opinion" className="header-image" />
      </div>
      <div className="section-content opinion-grid">
        {makeArticleCards(4, {}, "Horz")}
      </div>
    </div>
  );
};

export default OpinionSection;
