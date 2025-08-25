import React from "react";
import ArticleCard from "../ArticleCard";
import PrimeHeader from "../../images/common/PRIME.png";
import "./Sections.css";

const PrimeSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={PrimeHeader} alt="Prime" className="header-image" />
      </div>
      <div className="section-content prime-grid">
        <ArticleCard />
      </div>
    </div>
  );
};

export default PrimeSection;
