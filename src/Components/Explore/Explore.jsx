import React from "react";
import { Card } from "../Card/Card";
import { useVideo } from "../../Context/VideoContext";
import { useCategory } from "../../Context/CategoryContext";

import "./explore.css";

function Explore() {
  const { stateVideo } = useVideo();
  const { filterCategory, setFilterCaregory } = useCategory();
  const { loading, video } = stateVideo;

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
            onChange={() => setFilterCaregory("All")}
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
            onChange={() => setFilterCaregory("Trailer")}
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
            onChange={() => setFilterCaregory("Discussion")}
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
            onChange={() => setFilterCaregory("Entertainment")}
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
            onChange={() => setFilterCaregory("Shorts")}
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
