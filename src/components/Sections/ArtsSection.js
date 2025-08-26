import React from "react";
import { makeArticleCards } from "./utilities";
import ArtsHeader from "../../images/common/ARTS.png";
import "./Sections.css";

const ArtsSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={ArtsHeader} alt="Arts" className="header-image" />
      </div>
      <div className="section-content arts-grid">
       {makeArticleCards(6)}
      </div>
    </div>
  );
};

export default ArtsSection;
