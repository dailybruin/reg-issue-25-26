import React from "react";
import "./ArticleCard.css";
import paperclip from "../../images/common/paper-clip.png"; 
import sampleImg from "../../images/common/sample-img.png";

const Vert = () => {
  return (
    <a className="article-card" href="https://unsplash.com/s/photos/cat">
      <img src={paperclip} alt="paperclip" className="paperclip" />
      <div className="card-content">
        <h2 className="headline">
          Headline Goes Here! <br />
          Here are some more words until we reach the 82 character limit
        </h2>
        <img src={sampleImg} alt="article" className="article-img" />
        <p className="byline">
          By this person, more bylines and maybe even more names AHHHHHHHH
        </p>
      </div>
    </a>
  );
};

export default Vert;
