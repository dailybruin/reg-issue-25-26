
import React from "react";
import Vert from "../ArticleCard/Vert";
import Horz from "../ArticleCard/Horz";
import Large from "../ArticleCard/Large";

/**
 * Return an array of <ArticleCard /> elements to render inside a grid.
 *
 * @param {number} n - number of ArticleCard elements to produce. Non-integers are floored. <=0 yields an empty array.
 * @param {object} props - optional props to spread onto each ArticleCard
 * @returns {JSX.Element[]} array of ArticleCard elements
 */
export function makeArticleCards(n = 0, props = {}, type = 'Vert') {
    const count = Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
    return Array.from({ length: count }, (_v, i) => {
        switch (type) {
            case 'Vert':
                return <Vert key={`article-${i}`} {...props} />;
            case 'Horz':
                return <Horz key={`article-${i}`} {...props} />;
            case 'Large':
                return <Large key={`article-${i}`} {...props} />;
            default:
                return null;
        }
    });
}

export default makeArticleCards;

