import React from "react";
import "./home.css";
import { categories } from "../../backend/db/categories";
import wallpaper from "../../assets/wallpaper.jpg";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../Context/CategoryContext";

function Home() {
  const navigate = useNavigate();
  const { setFilterCaregory } = useCategory();

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-image">
          <img className="responsive-image" src={wallpaper} alt="coding" />
        </div>

        <div className="home-discription">
          <div className="home-title">
            <h1>
              Welcome to <span>MCU-Tube</span>
            </h1>
            <h3>An MCU themed video library for Marvel fans</h3>
          </div>
          <p>
            A place where you can watch all the mcu related viedos. We have
            Marvel trailers, Marvel Memes, Marvel theory discussions.
          </p>
          <button onClick={() => navigate("/explore")}>Explore</button>
        </div>
      </header>

      <div className="home-category ">
        <div className="category-header">
          <h2>Categories:</h2>
          <button onClick={() => navigate("/explore")}>See All</button>
        </div>
        <div className="categories">
          <ul>
            {categories.map(({ _id, categoryName, imageUrl }) => (
              <li
                key={_id}
                onClick={() => {
                  setFilterCaregory(categoryName);
                  navigate("/explore");
                }}
              >
                <div>
                  <img
                    className="responsive-image"
                    src={imageUrl}
                    alt="coding"
                  />
                </div>
                <h2>{categoryName}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Home };
