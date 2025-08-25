import React from "react";
import ArticleCard from "../ArticleCard";
import ArtsHeader from "../../images/common/ARTS.png";
import "./Sections.css";

const ArtsSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={ArtsHeader} alt="Arts" className="header-image" />
      </div>
      <div className="section-content arts-grid">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default ArtsSection;
