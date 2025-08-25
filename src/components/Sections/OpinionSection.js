import React from "react";
import ArticleCard from "../ArticleCard";
import OpinionHeader from "../../images/common/OPINION.png";
import "./Sections.css";

const OpinionSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={OpinionHeader} alt="Opinion" className="header-image" />
      </div>
      <div className="section-content opinion-grid">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default OpinionSection;
