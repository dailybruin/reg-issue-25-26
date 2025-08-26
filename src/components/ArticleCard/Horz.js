import React from "react";
import "./Horz.css";
import paperclip from "../../images/common/paper-clip.png";
import sampleImg from "../../images/common/sample-img.png";

const Horz = () => (
  <a className="article-card-horz" href="https://unsplash.com/s/photos/cat">
    <img src={paperclip} alt="paperclip" className="paperclip-horz" />
    <div className="card-content-horz">
      <div className="text-col">
        <h2 className="headline-horz">
          Headline Goes Here! <br />
          Here are some more words until we reach the 82 character limit
        </h2>
        <p className="byline-horz">By this person, more bylines and maybe even more names</p>
      </div>
      <div className="img-col">
        <img src={sampleImg} alt="article" className="article-img-horz" />
      </div>
    </div>
  </a>
);

export default Horz;