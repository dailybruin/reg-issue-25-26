import React from "react";
import ArticleCard from "../ArticleCard";
import SportsHeader from "../../images/common/SPORTS.png";
import "./Sections.css";

const SportsSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={SportsHeader} alt="Sports" className="header-image" />
      </div>
      <div className="section-content sports-grid">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
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

export default SportsSection;
