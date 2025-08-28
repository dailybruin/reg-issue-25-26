import React from "react";
import { makeArticleCards } from "./utilities";
import OpinionHeader from "../../images/common/OPINION.png";
import "./Sections.css";
import FlowerLayout from "../../layouts/FlowerLayout";

const OpinionSection = () => {
  return (
    <div className="section" id='opinion'>
      <div className="section-header">
        <img src={OpinionHeader} alt="Opinion" className="header-image" />
      </div>
      <FlowerLayout />
    </div>
  );
};

export default OpinionSection;
