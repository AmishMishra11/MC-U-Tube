import React from "react";
import { useVideo } from "../../Context/VideoContext";
import { CardHorizontal } from "../CardHorizontal/CardHorizontal";
import "./liked.css";

function Liked() {
  const { stateVideo } = useVideo();
  const { liked } = stateVideo;

  const name = localStorage.getItem("first");
  return (
    <div className="liked-container">
      <main className="liked-content-container">
        <div className="liked-info">
          <h3>See your videos you have liked, {name}</h3>
          <p>So far you have liked {liked.length} videos</p>
        </div>

        {liked.length === 0 ? (
          <div>
            <h1>Liked Video is Empty</h1>
          </div>
        ) : (
          <main className="liked-card-container">
            <div className="liked-card">
              {liked.map((item) => (
                <CardHorizontal key={item._id} item={item} cardType={"liked"} />
              ))}
            </div>
          </main>
        )}
      </main>
    </div>
  );
}

export { Liked };
