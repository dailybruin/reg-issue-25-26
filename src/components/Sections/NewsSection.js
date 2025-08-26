import React from "react";
import { makeArticleCards } from "./utilities";
import NewsHeader from "../../images/common/News.png";
import "./Sections.css";

const NewsSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={NewsHeader} alt="News" className="header-image" />
      </div>
      <div className="section-content news-grid">
        {makeArticleCards(9)}
      </div>
    </div>
  );
};

export default NewsSection;
