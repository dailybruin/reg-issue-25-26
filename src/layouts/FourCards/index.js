import React from "react";
import ArticleCard from "../../components/ArticleCard";

const FourCardsLayout = () => {
return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 320px))", gap: 12, width: "100%", maxWidth: 720 }}>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </div>
    </div>
);
};

export default FourCardsLayout;
