import React from "react";
import { makeArticleCards } from "./utilities";
import PrimeHeader from "../../images/common/PRIME.png";
import "./Sections.css";

const PrimeSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={PrimeHeader} alt="Prime" className="header-image" />
      </div>
      <div className="section-content prime-grid">
        {makeArticleCards(1)}
      </div>
    </div>
  );
};

export default PrimeSection;
