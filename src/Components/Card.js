// REACT
import React from "react";
// CSS
import "./Card.css";

const Card = ({ details, linkBook, linkChapter, viewList, onClick }) => (
  <div className={`${viewList ? "list" : "grid"}-card`}>
    <div className="info-card">
      <div className="img-info-card" onClick={() => onClick(details.id)}>
        <img src={details.image} alt={details.id} />
      </div>
      <div className="txt-info-card">
        <h3>
          <a
            href={`https://www.japscan.cc/mangas/${details.id}`}
            target="_blank"
          >
            {details.title}
          </a>
        </h3>
        <h4>n° {details.chapter}</h4>
      </div>
    </div>
  </div>
);

export default Card;
