import React from "react";
import { useVideo } from "../../Context/VideoContext";
import { deleteHistory } from "../../Services/History/deleteHistory";
import { CardHorizontal } from "../CardHorizontal/CardHorizontal";
import "./history.css";
function History() {
  const { stateVideo, dispatchVideo } = useVideo();
  const { history } = stateVideo;

  const name = localStorage.getItem("first");
  return (
    <div className="history-container">
      <div className="history-clear-all">
        <h4 onClick={() => deleteHistory(dispatchVideo)}>Clear History</h4>
      </div>

      <main className="history-content-container">
        <div className="history-info">
          <h3>See your history {name}</h3>
          <p>So far you have seen {history.length} videos</p>
        </div>

        {history.length === 0 ? (
          <div>
            <h1>History is Empty</h1>
          </div>
        ) : (
          <main className="history-card-container">
            <div className="history-card">
              {history.map((item) => (
                <CardHorizontal
                  key={item._id}
                  item={item}
                  cardType={"history"}
                />
              ))}
            </div>
          </main>
        )}
      </main>
    </div>
  );
}

export { History };
