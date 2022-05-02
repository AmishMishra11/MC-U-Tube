import React from "react";
import { useState } from "react";
import { useVideo } from "../../Context/VideoContext";
import { addPlaylist } from "../../Services/Playlist/addPlaylist";
import { addPlaylistVideo } from "../../Services/Playlist/addPlaylistVideo";
import { removePlaylistVideo } from "../../Services/Playlist/removePlaylistVideo";
import "./modalplaylist.css";

function ModalPlaylist({ item, setShowModal }) {
  const { stateVideo, dispatchVideo } = useVideo();
  const { playlist } = stateVideo;
  const [playlistTitle, setPlaylistTitle] = useState("");

  const playlistHandler = () => {
    addPlaylist(playlistTitle, dispatchVideo);
    setPlaylistTitle("");
  };

  const addPlaylistVideoHandler = (id) => {
    addPlaylistVideo(id, item, dispatchVideo);
  };

  const removePlaylistVideoHandler = (id) => {
    removePlaylistVideo(id, item._id, dispatchVideo);
  };

  return (
    <div className="modal-playlist zi-4">
      <div className="modal-playlist-header">
        <h1>Save to Playlist</h1>
        <i
          className="fa-2x fa-solid fa-xmark"
          onClick={() => setShowModal(false)}
        ></i>
      </div>

      <main className="modal-playlist-items">
        {playlist.map((playlistItem) => {
          var alreadyInPlaylist = playlistItem?.videos?.some(
            (playlistVideo) => playlistVideo._id === item._id
          );

          return (
            <div key={playlistItem._id} className="modal-item-name">
              {!alreadyInPlaylist ? (
                <i
                  className="fas fa-plus-circle"
                  onClick={() => addPlaylistVideoHandler(playlistItem._id)}
                ></i>
              ) : (
                <i
                  className="fas fa-check-circle"
                  onClick={() => removePlaylistVideoHandler(playlistItem._id)}
                ></i>
              )}

              <p>{playlistItem.title}</p>
            </div>
          );
        })}
      </main>

      <div className="modal-playlist-text">
        <input
          value={playlistTitle}
          onChange={(e) => setPlaylistTitle(e.target.value)}
        />
        <button onClick={playlistHandler}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

export { ModalPlaylist };
