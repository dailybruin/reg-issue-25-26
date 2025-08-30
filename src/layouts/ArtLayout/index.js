import React from "react";
import "./ArtLayout.css";
import Vert from "../../components/ArticleCard/Vert";
import Horz from "../../components/ArticleCard/Horz";

const ArtLayout = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  if (isMobile) {
    return (
      <div className="section-content arts-grid">
        {[...Array(6)].map((_, i) => (
          <Vert key={i} />
        ))}
      </div>
    );
  }
  return (
    <section className="art-wrap">
      <div className="left-column">
        <Vert />
        <Vert />
      </div>
      <div className="right-column">
        <div style={{ marginRight: "15%" }}>
          <Horz />
        </div>
        <div className="mid-vert">
          <Vert />
          <Vert />
        </div>
        <div style={{ marginRight: "15%" }}>
          <Horz />
        </div>
      </div>
    </section>
  );
};

export default ArtLayout;
