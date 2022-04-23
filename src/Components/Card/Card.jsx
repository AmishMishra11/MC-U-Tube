import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import { addHistory } from "../../Services/History/addHistory";
import { addWatchlater } from "../../Services/Watchlater/addWatchlater";
import { removeWatchlater } from "../../Services/Watchlater/removeWatchlater";
import "./card.css";

const Card = ({ item }) => {
  const { _id, title, creator } = item;

  const [show, setShow] = useState(false);

  const { stateVideo, dispatchVideo } = useVideo();

  const { watchlater } = stateVideo;

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

        <div
          onClick={() =>
            watchlater.length === 0
              ? addWatchlater(item, dispatchVideo)
              : watchlater.find((video) =>
                  video._id === _id
                    ? removeWatchlater(_id, dispatchVideo)
                    : addWatchlater(item, dispatchVideo)
                )
          }
        >
          <i
            className={`fas fa-clock  ${
              watchlater.find((video) => video._id === _id) &&
              `watchlater-active`
            }  `}
          ></i>
        </div>

        <i className="fas fa-list"></i>
      </div>
    </div>
  );
};

export { Card };
