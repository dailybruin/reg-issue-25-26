import React from "react";
import "./FlowerLayout.css";
import Vert from "../../components/ArticleCard/Vert";
import Horz from "../../components/ArticleCard/Horz";

const FlowerLayout = () => {
  return (
    <section className="flower-wrap">
      <div className="top-flower">
        <div className="petal top-left">
          <Horz />
        </div>

        <div className="petal top-right">
          <Vert />
        </div>
      </div>
      <div className="bot-flower">
        <div className="petal bottom-left">
          <Vert />
        </div>

        <div className="petal bottom-right">
          <Horz />
        </div>
      </div>
    </section>
  );
};

export default FlowerLayout;
