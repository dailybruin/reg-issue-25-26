import React from "react";
import "./ArtLayout.css";
import Vert from "../../components/ArticleCard/Vert";
import Horz from "../../components/ArticleCard/Horz";

const ArtLayout = () => {
  return (
    <section className="art-wrap">
      <div className="left-column">
        <Vert />
        <Vert />
      </div>

      <div className="right-column">
        <div style={{marginRight: '15%'}}>
          <Horz />
        </div>
        <div className="mid-vert">
          <Vert />
          <Vert />
        </div>
        <div style={{marginRight: '15%'}}>
          <Horz />
        </div>
      </div>
    </section>
  );
};

export default ArtLayout;
