import React from "react";
import ArticleCard from "../../components/ArticleCard";
import EditorsLetter from "../../components/EditorsLetter";
import Interactive from "../../components/Interactive";

const FourCardsLayout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
      }}
    >
      <EditorsLetter />
      <Interactive />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 320px))",
          gap: 12,
          width: "100%",
          maxWidth: 720,
        }}
      >
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default FourCardsLayout;
