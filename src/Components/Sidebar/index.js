import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
function Aside() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={`aside zi-3 ${isHover && "hover-aside"}`}>
      <ul
        className="aside-ul"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <li>
          <NavLink to="/home">
            <i className="fas fa-home"></i>
            {isHover && <h4>Home</h4>}
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore">
            <i className="fas fa-compass"></i>
            {isHover && <h4>Explore</h4>}
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlist">
            <i className="fas fa-list"></i>
            {isHover && <h4>Playlist</h4>}
          </NavLink>
        </li>
        <li>
          <NavLink to="/liked">
            <i className="fas fa-thumbs-up"></i>
            {isHover && <h4>Liked</h4>}
          </NavLink>
        </li>
        <li>
          <NavLink to="/history">
            <i className="fas fa-history"></i>
            {isHover && <h4>History</h4>}
          </NavLink>
        </li>
        <li>
          <NavLink to="/watchlater">
            <i className="fas fa-clock"></i>
            {isHover && <h4>Watch</h4>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Aside;
