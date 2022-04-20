import React from "react";
import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { loadVideos } from "../../Services/User/Videos/loadVideos";
import "./explore.css";
import { useVideo } from "../../Context/VideoContext";
function Explore() {
  const { stateVideo, dispatchVideo } = useVideo();
  const { loading, video } = stateVideo;

  const [filterCategory, setFilterCaregory] = useState("All");

  useEffect(() => {
    loadVideos(dispatchVideo);
  }, []);
  let result;
  if (filterCategory === "All") {
    result = video;
  } else {
    result = video.filter((item) => item.category === filterCategory);
  }

  return (
    <div className="explore-main">
      <div className="explore-category-container">
        <label>
          <input
            type="radio"
            name="category"
            checked={filterCategory === "All"}
            onClick={() => setFilterCaregory("All")}
          />
          <p className={`${filterCategory === "All" && "filterSelected"}`}>
            All
          </p>
        </label>
        <label>
          <input
            type="radio"
            name="category"
            checked={filterCategory === "Trailer"}
            onClick={() => setFilterCaregory("Trailer")}
          />
          <p className={`${filterCategory === "Trailer" && "filterSelected"}`}>
            Trailer
          </p>
        </label>
        <label>
          <input
            type="radio"
            name="category"
            checked={filterCategory === "Discussion"}
            onClick={() => setFilterCaregory("Discussion")}
          />
          <p
            className={`${filterCategory === "Discussion" && "filterSelected"}`}
          >
            Discussion
          </p>
        </label>
        <label>
          <input
            type="radio"
            name="category"
            checked={filterCategory === "Entertainment"}
            onClick={() => setFilterCaregory("Entertainment")}
          />
          <p
            className={`${
              filterCategory === "Entertainment" && "filterSelected"
            }`}
          >
            Entertainment
          </p>
        </label>
        <label>
          <input
            type="radio"
            name="category"
            checked={filterCategory === "Shorts"}
            onClick={() => setFilterCaregory("Shorts")}
          />
          <p className={`${filterCategory === "Shorts" && "filterSelected"}`}>
            Shorts
          </p>
        </label>
      </div>

      <main>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="explore-card">
            {[...result].map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export { Explore };
