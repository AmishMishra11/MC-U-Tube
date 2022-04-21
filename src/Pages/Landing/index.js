import React from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./styles.css";
function Landing() {
  return (
    <div className="landing">
      <div className="aside-container zi-3">
        <Sidebar />
      </div>

      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Landing;
