import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import { addHistory } from "../../Services/History/addHistory";
import { addLiked } from "../../Services/Liked/addLiked";
import { removeliked } from "../../Services/Liked/removeLiked";
import { addWatchlater } from "../../Services/Watchlater/addWatchlater";
import { removeWatchlater } from "../../Services/Watchlater/removeWatchlater";
import { ModalPlaylist } from "../ModalPlaylist/ModalPlaylist";

import "./card.css";

const Card = ({ item }) => {
  const { _id, title, creator } = item;

  const [show, setShow] = useState(false);

  const { stateVideo, dispatchVideo } = useVideo();

  const { watchlater, liked } = stateVideo;

  const [showModal, setShowModal] = useState(false);

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
        <div
          onClick={() =>
            liked.length === 0
              ? addLiked(item, dispatchVideo)
              : liked.find((video) =>
                  video._id === _id
                    ? removeliked(_id, dispatchVideo)
                    : addLiked(item, dispatchVideo)
                )
          }
        >
          <i
            className={`fas fa-thumbs-up  ${
              liked.find((video) => video._id === _id) && `liked-active`
            }  `}
          ></i>
        </div>

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

        <i className="fas fa-list" onClick={() => setShowModal(true)}></i>
      </div>

      {showModal && <ModalPlaylist item={item} setShowModal={setShowModal} />}
    </div>
  );
};

export { Card };
