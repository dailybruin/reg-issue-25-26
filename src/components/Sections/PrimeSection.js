import React from "react";
import { makeArticleCards } from "./utilities";
import PrimeHeader from "../../images/common/PRIME.png";
import "./Sections.css";

const PrimeSection = () => {
  return (
    <div className="section" id='prime'>
      <div className="section-header">
        <img src={PrimeHeader} alt="Prime" className="header-image" />
      </div>
      <div className="section-content prime-grid">
        {makeArticleCards(1, {}, "Horz")}
      </div>
    </div>
  );
};

export default PrimeSection;
