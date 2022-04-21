import React from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import "./video.css";

import { Popular } from "../Popular/Popular";
import { useState } from "react";

function Video() {
  const { videoId } = useParams();
  const { stateVideo } = useVideo();
  const { video } = stateVideo;

  const currVideo = video.find((video) => video._id === videoId);

  const { _id, title, category, creator, description } = currVideo;

  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="video-container">
      <div className="play-video-container">
        <iframe
          src={`https://www.youtube.com/embed/${_id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="play-video-title">
          <h2>{title}</h2>

          <div className="play-video-options">
            <i className="fas fa-thumbs-up"></i>
            <i className="fas fa-clock"></i>
            <i className="fas fa-list"></i>
          </div>
        </div>

        <div className="play-video-creator">
          <h3>{creator}</h3>
          <p>|</p>
          <h4>{category}</h4>
        </div>

        <div
          className="play-video-discription"
          onClick={() => setShowDescription((preVal) => !preVal)}
        >
          {showDescription && (
            <div className="play-video-description">{description}</div>
          )}
          {showDescription ? <p>Show Less</p> : <p>Show More</p>}
        </div>
      </div>

      <div className="play-pupular-container">
        <Popular />
      </div>
    </div>
  );
}

export { Video };
