import React from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import "./video.css";

import { Popular } from "../Popular/Popular";
import { useState, useEffect } from "react";
import { addLiked } from "../../Services/Liked/addLiked";
import { removeliked } from "../../Services/Liked/removeLiked";
import { addWatchlater } from "../../Services/Watchlater/addWatchlater";
import { removeWatchlater } from "../../Services/Watchlater/removeWatchlater";
import { ModalPlaylist } from "../ModalPlaylist/ModalPlaylist";
import { loadCurrentVideo } from "../../Services/Videos/loadCurrectVideo";

function Video() {
  const { videoId } = useParams();
  const { stateVideo, dispatchVideo } = useVideo();
  const { watchlater, liked, loading } = stateVideo;

  const [showDescription, setShowDescription] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [currVideo, setCurrVideo] = useState("");
  const { _id, title, category, creator, description } = currVideo;

  useEffect(() => {
    loadCurrentVideo(videoId, setCurrVideo);
  }, [videoId]);

  return (
    <div className="video-container">
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
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
              <div
                onClick={() =>
                  liked.length === 0
                    ? addLiked(currVideo, dispatchVideo)
                    : liked.find((video) =>
                        video._id === _id
                          ? removeliked(_id, dispatchVideo)
                          : addLiked(currVideo, dispatchVideo)
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
                    ? addWatchlater(currVideo, dispatchVideo)
                    : watchlater.find((video) =>
                        video._id === _id
                          ? removeWatchlater(_id, dispatchVideo)
                          : addWatchlater(currVideo, dispatchVideo)
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
          </div>

          {showModal && (
            <ModalPlaylist item={currVideo} setShowModal={setShowModal} />
          )}

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
      )}

      <div className="play-pupular-container">
        <Popular />
      </div>
    </div>
  );
}

export { Video };
