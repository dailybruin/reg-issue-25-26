import React from "react";
import "./Horz.css";
import paperclip from "../../images/common/paper-clip.png";
// import sampleImg from "../../images/common/sample-img.png";

const Horz = ({
  image,
  article_url,
  article_title,
  author_byline,
  article_text
}) => (
  <a className="article-card-horz" href={article_url}>
    <img src={paperclip} alt="paperclip" className="paperclip-horz" />
    <div className="card-content-horz">
      <div className="text-col">
        <h2 className="headline-horz">{article_title}</h2>
        <p className="byline-horz">By {author_byline}</p>
      </div>
      <div className="img-col">
        <img src={image} alt="article" className="article-img-horz" />
      </div>
    </div>
  </a>
);

export default Horz;