import React from "react";
import SportsHeader from "../../images/common/SPORTS.png";
import "./Sections.css";
import { makeArticleCards } from "./utilities";


const SportsSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={SportsHeader} alt="Sports" className="header-image" />
      </div>
      <div className="section-content sports-grid">
        {makeArticleCards(9)}
      </div>
    </div>
  );
};

export default SportsSection;
