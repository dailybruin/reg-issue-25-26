import React from "react";
import "./ArticleCard.css";
import paperclip from "../../images/common/paper-clip.png"; 
import sampleImg from "../../images/common/sample-img.png";

const Vert = ({
  image,  
  article_url,   
  article_title,
  author_byline,
  article_text
}) => {
  return (
    <a className="article-card" href={article_url}>
      <img src={paperclip} alt="paperclip" className="paperclip" />
      <div className="card-content">
        <h2 className="headline">{article_title}</h2>
        <img src={image} alt="article" className="article-img" />
        <p className="byline">
          {author_byline}
        </p>
      </div>
    </a>
  );
};

export default Vert;
