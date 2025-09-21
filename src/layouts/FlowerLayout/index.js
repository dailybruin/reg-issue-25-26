import React from "react";
import "./FlowerLayout.css";
// import Vert from "../../components/ArticleCard/Vert";
// import Horz from "../../components/ArticleCard/Horz";
import makeArticleCards from "../../components/Sections/utilities";

const FlowerLayout = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  if (isMobile) {
    return (
      <div className="section-content opinion-grid">
        {/* {[...Array(4)].map((_, i) => (
          <Vert key={i} />
        ))} */}
        {makeArticleCards("opinion_articles", { limit: 4 })}
      </div>
    );
  }
  return (
    <section className="flower-wrap">
      <div className="top-flower">
        <div className="petal top-left">
          {makeArticleCards("opinion_articles", { limit: 1 }, "Horz")}
          {/* <Horz /> */}
        </div>
        <div className="petal top-right">
          {/* <Vert /> */}
          {makeArticleCards("opinion_articles", { limit: 1, offset: 1 }, "Vert")}
        </div>
      </div>
      <div className="bot-flower">
        <div className="petal bottom-left">
          {/* <Vert /> */}
          {makeArticleCards("opinion_articles", { limit: 1, offset: 2 }, "Vert")}
        </div>
        <div className="petal bottom-right">
          {/* <Horz /> */}
          {makeArticleCards("opinion_articles", { limit: 1, offset: 3 }, "Horz")}
        </div>
      </div>
    </section>
  );
};

export default FlowerLayout;
