import React from "react";
import ArticleCard from "../ArticleCard";
import MultimediaHeader from "../../images/common/MULTIMEDIA.png";
import "./Sections.css";

const MultimediaSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={MultimediaHeader} alt="Multimedia" className="header-image" />
      </div>
      <div className="section-content multimedia-grid">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
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

export default MultimediaSection;
