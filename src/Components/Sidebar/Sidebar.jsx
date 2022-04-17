import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="aside zi-3 ">
      <ul className="aside-ul">
        <li>
          <NavLink to="/home">
            <i className="fas fa-home"></i>
            <h4>Home</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore">
            <i className="fas fa-compass"></i>
            <h4>Explore</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to="/playlist">
            <i className="fas fa-list"></i>
            <h4>Playlist</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to="/liked">
            <i className="fas fa-thumbs-up"></i>
            <h4>Liked</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to="/history">
            <i className="fas fa-history"></i>
            <h4>History</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to="/watchlater">
            <i className="fas fa-clock"></i>
            <h4>Watch</h4>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export { Sidebar };
