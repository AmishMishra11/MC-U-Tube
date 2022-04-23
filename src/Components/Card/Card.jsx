import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import { addHistory } from "../../Services/History/addHistory";
import "./card.css";
const Card = ({ item }) => {
  const { _id, title, creator } = item;

  const [show, setShow] = useState(false);

  const { dispatchVideo } = useVideo();

  return (
    <div className="card-container">
      <Link
        className="card-image"
        to={`/video/${_id}`}
        onClick={() => addHistory(item, dispatchVideo)}
      >
        <img
          className="responsive-image"
          src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
          alt="video"
        />
      </Link>
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
