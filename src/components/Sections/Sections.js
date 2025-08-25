import React from "react";
import NewsSection from "./NewsSection";
import SportsSection from "./SportsSection";
import ArtsSection from "./ArtsSection";
import OpinionSection from "./OpinionSection";
import TheQuadSection from "./TheQuadSection";
import MultimediaSection from "./MultimediaSection";
import PrimeSection from "./PrimeSection";
import "./Sections.css";

const Sections = () => {
  return (
    <div className="sections-container">
      <NewsSection />
      <SportsSection />
      <ArtsSection />
      <OpinionSection />
      <TheQuadSection />
      <MultimediaSection />
      <PrimeSection />
    </div>
  );
};

export default Sections;
