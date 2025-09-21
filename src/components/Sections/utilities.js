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
export function makeArticleCards(n = 0, props = {}, type = "Vert") {
  // const count = Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 600;
  const cardType = isMobile ? "Vert" : type;
  const Comp = cardType === "Horz" ? Horz : cardType === "Large" ? Large : Vert;
  // return Array.from({ length: count }, (_v, i) => {
  //   switch (cardType) {
  //     case "Vert":
  //       return <Vert key={`article-${i}`} {...props} />;
  //     case "Horz":
  //       return <Horz key={`article-${i}`} {...props} />;
  //     case "Large":
  //       return <Large key={`article-${i}`} {...props} />;
  //     default:
  //       return null;
  //   }
  // });
  if (typeof n === "string") {
    const aml = typeof window !== "undefined" ? window.__ARTICLE_AML__ : null;
    const items = Array.isArray(aml?.[n]) ? aml[n] : [];

    const { limit, offset, ...rest } = props || {};
    const start = Number.isFinite(offset) && offset > 0 ? Math.floor(offset) : 0;
    const end = Number.isFinite(limit) && limit > 0 ? start + Math.floor(limit) : undefined;
    const slice = items.slice(start, end);

    return slice.map((item, i) => (
      <Comp
        key={`article-${n}-${start + i}`}
        image={item?.article_image ?? rest.image}
        article_url={item?.article_url ?? rest.article_url}
        article_title={item?.article_title ?? rest.article_title}
        author_byline={item?.article_byline ?? rest.author_byline}
        article_text={item?.article_text}
        {...rest}
      />
    ));
  }
}

export default makeArticleCards;
