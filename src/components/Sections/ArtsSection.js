import React from "react";
import { makeArticleCards } from "./utilities";
import ArtsHeader from "../../images/common/ARTS.png";
import "./Sections.css";
import ArtLayout from "../../layouts/ArtLayout";

const ArtsSection = () => {
  return (
    <div className="section">
      <div className="section-header">
        <img src={ArtsHeader} alt="Arts" className="header-image" />
      </div>
      <ArtLayout/>
    </div>
  );
};

export default ArtsSection;
