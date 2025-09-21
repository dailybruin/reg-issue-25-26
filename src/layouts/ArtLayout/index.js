import React from "react";
import "./ArtLayout.css";
// import Vert from "../../components/ArticleCard/Vert";
// import Horz from "../../components/ArticleCard/Horz";
import makeArticleCards from "../../components/Sections/utilities";

const ArtLayout = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  if (isMobile) {
    return (
      <div className="section-content arts-grid">
        {/* {[...Array(6)].map((_, i) => (
          <Vert key={i} />
        ))} */}
        {makeArticleCards("arts_articles", { limit: 6 })}
      </div>
    );
  }
  return (
    <section className="art-wrap">
      <div className="left-column">
        {/* <Vert />
        <Vert /> */}
        {makeArticleCards("arts_articles", { limit: 2 }, "Vert")}
      </div>
      <div className="right-column">
        <div style={{ marginRight: "15%" }}>
          {/* <Horz /> */}
          {makeArticleCards("arts_articles", { limit: 1, offset: 2 }, "Horz")}
        </div>
        <div className="mid-vert">
          {/* <Vert />
          <Vert /> */}
          {makeArticleCards("arts_articles", { limit: 2, offset: 3 }, "Vert")}
        </div>
        <div style={{ marginRight: "15%" }}>
          {/* <Horz /> */}
          {makeArticleCards("arts_articles", { limit: 1, offset: 5 }, "Horz")}
        </div>
      </div>
    </section>
  );
};

export default ArtLayout;
