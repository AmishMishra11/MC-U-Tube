import React from "react";
import { useState } from "react";
import "./card.css";
const Card = ({ item }) => {
  const { _id, title, creator } = item;

  const [show, setShow] = useState(false);
  return (
    <div className="card-container">
      <div className="card-image">
        <img
          className="responsive-image"
          src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
          alt="video"
        />
      </div>
      <div className="card-text">
        <div>
          <h3>{title}</h3>
          <p>{creator}</p>
        </div>

        <i
          className="fas fa-ellipsis-v"
          onClick={() => setShow((preValue) => !preValue)}
        ></i>
      </div>

      <div className={`card-options ${show ? "show-options" : ""} `}>
        <i className="fas fa-thumbs-up"></i>
        <i className="fas fa-clock"></i>
        <i className="fas fa-list"></i>
      </div>
    </div>
  );
};

export { Card };
