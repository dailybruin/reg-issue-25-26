import React from "react";
import ArticleCard from "../ArticleCard/Vert";
import { makeArticleCards } from "./utilities";
import MultimediaHeader from "../../images/common/MULTIMEDIA.png";
import "./Sections.css";

const MultimediaSection = () => {
  return (
    <div className="section" id='multimedia'>
      <div className="section-header">
        <img src={MultimediaHeader} alt="Multimedia" className="header-image" />
      </div>
      <div className="section-content multimedia-grid">
        {makeArticleCards(11)}
      </div>
    </div>
  );
};

export default MultimediaSection;
