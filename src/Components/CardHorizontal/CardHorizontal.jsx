import React from "react";
import "./cardHorizontal.css";
import { Link } from "react-router-dom";
import { removeHistory } from "../../Services/History/removeHistory";
import { useVideo } from "../../Context/VideoContext";
import { removeWatchlater } from "../../Services/Watchlater/removeWatchlater";
import { removeliked } from "../../Services/Liked/removeLiked";
import { removePlaylistVideo } from "../../Services/Playlist/removePlaylistVideo";

function CardHorizontal({ item, cardType, playlist }) {
  const removeCard = (id) => {
    if (cardType === "history") {
      removeHistory(id, dispatchVideo);
    }

    if (cardType === "watchlater") {
      removeWatchlater(id, dispatchVideo);
    }

    if (cardType === "liked") {
      removeliked(id, dispatchVideo);
    }

    if (cardType === "playlist") {
      removePlaylistVideo(playlist._id, item._id, dispatchVideo);
    }
  };

  const { dispatchVideo } = useVideo();

  const { _id, title, creator } = item;
  return (
    <div className="card-horizontal-container">
      <div className="histroy-video-info">
        <Link className="card-horizontal-image" to={`/video/${_id}`}>
          <img
            className="responsive-image"
            src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
            alt="video"
          />
        </Link>

        <div className="card-horizontal-text">
          <h4>{title}</h4>
          <p>{creator}</p>
        </div>
      </div>

      <div className="history-remove" onClick={() => removeCard(_id)}>
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
}

export { CardHorizontal };
