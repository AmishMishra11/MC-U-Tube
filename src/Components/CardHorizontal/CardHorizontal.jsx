import React from "react";
import "./cardHorizontal.css";
import { Link } from "react-router-dom";
import { removeHistory } from "../../Services/History/removeHistory";
import { useVideo } from "../../Context/VideoContext";

function CardHorizontal({ item }) {
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

      <div
        className="history-remove"
        onClick={() => removeHistory(_id, dispatchVideo)}
      >
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
}

export { CardHorizontal };
