import React from "react";
import { useVideo } from "../../Context/VideoContext";
import { CardHorizontal } from "../CardHorizontal/CardHorizontal";
import "./watchlater.css";

function WatchLater() {
  const { stateVideo } = useVideo();
  const { watchlater } = stateVideo;

  const name = localStorage.getItem("first");
  return (
    <div className="watchlater-container">
      <main className="watchlater-content-container">
        <div className="watchlater-info">
          <h3>See your videos which you have saved for Watchlater {name}</h3>
          <p>So far you have saved {watchlater.length} videos</p>
        </div>

        {watchlater.length === 0 ? (
          <div>
            <h1>Watchlater is Empty</h1>
          </div>
        ) : (
          <main className="watchlater-card-container">
            <div className="watchlater-card">
              {watchlater.map((item) => (
                <CardHorizontal
                  key={item._id}
                  item={item}
                  cardType={"watchlater"}
                />
              ))}
            </div>
          </main>
        )}
      </main>
    </div>
  );
}

export { WatchLater };
