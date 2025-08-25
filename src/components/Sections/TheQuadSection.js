import React from "react";
import ArticleCard from "../ArticleCard";
import TheQuadHeader from "../../images/common/THE QUAD.png";
import "./Sections.css";

const TheQuadSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={TheQuadHeader} alt="The Quad" className="header-image" />
      </div>
      <div className="section-content thequad-grid">
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default TheQuadSection;
