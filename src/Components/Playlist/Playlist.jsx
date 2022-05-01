import React from "react";
import { useState } from "react";
import { useVideo } from "../../Context/VideoContext";
import { loadPlaylistVideo } from "../../Services/Playlist/loadPlaylistVideo";
import { removePlaylist } from "../../Services/Playlist/removePlaylist";
import { CardHorizontal } from "../CardHorizontal/CardHorizontal";

import "./playlist.css";
function Playlist() {
  const { stateVideo, dispatchVideo } = useVideo();
  const { playlist } = stateVideo;

  const [showCurrentPlaylist, setShowCurrentPlaylist] = useState("");

  const displayCurrPlaylist = playlist?.find(
    (item) => item.title === showCurrentPlaylist
  );

  const deletePlaylistHandler = async (e, _id) => {
    e.stopPropagation();
    await removePlaylist(_id, dispatchVideo);
    setShowCurrentPlaylist("");
  };

  return (
    <div className="playlist-container">
      <main className="playlist-content-container">
        <div className="playlist-aside-container">
          <div className="palylist-info-header">
            <h3>See your playlist </h3>
          </div>

          <div className="show-all-palylist">
            {playlist.length === 0 ? (
              <div>
                <h1>You have not Created Any Playlist</h1>
              </div>
            ) : (
              <main className="playlist-list-container">
                {playlist.map(({ title, videos, _id }) => (
                  <div
                    key={_id}
                    className="playlist-info"
                    onClick={() => {
                      setShowCurrentPlaylist(title);
                      loadPlaylistVideo(_id, dispatchVideo);
                    }}
                  >
                    <div className="playlist-info-header">
                      <h4>{title}</h4>
                      <div className="playlist-info-footer">
                        <p>Videos: {videos.length}</p>
                        <button onClick={(e) => deletePlaylistHandler(e, _id)}>
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </main>
            )}
          </div>
        </div>

        {showCurrentPlaylist === "" ? (
          playlist.length === 0 ? (
            <h1>Make a Playlist</h1>
          ) : (
            <h1>Select A Playlist</h1>
          )
        ) : displayCurrPlaylist?.videos?.length === 0 ? (
          <div>
            <h1>Playlist is Empty</h1>
          </div>
        ) : (
          <main className="playlist-card-container">
            <div className="playlist-card">
              {displayCurrPlaylist?.videos?.map((item) => (
                <CardHorizontal
                  key={item._id}
                  item={item}
                  playlist={displayCurrPlaylist}
                  cardType={"playlist"}
                />
              ))}
            </div>
          </main>
        )}
      </main>
    </div>
  );
}

export { Playlist };
