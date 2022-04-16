import React from "react";
import Aside from "../../Components/Sidebar";
import { Outlet } from "react-router-dom";
import "./styles.css";
function Landing() {
  return (
    <div className="landing">
      <div className="aside-container">
        <Aside />
      </div>

      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Landing;
