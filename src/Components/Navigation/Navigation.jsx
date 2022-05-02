import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./navigation.css";
import { toast } from "react-toastify";
function Navigation() {
  const navigate = useNavigate();

  const { stateAuth, dispatchAuth } = useAuth();
  const { isAuth } = stateAuth;

  const handleLogout = () => {
    dispatchAuth({ type: "USER_LOGOUT" });
    localStorage.removeItem("token");
    navigate("/");
    toast.success("User Logged Out");
  };

  return (
    <div className="container-nav zi-5">
      <nav className="nav">
        <header>
          <div className="title">
            <img className="logo" src={Logo} alt="Logo " />
            <Link className="brand-link" to="/">
              <h2 className="name">MC-U-Tube</h2>
            </Link>
          </div>

          <ul className="menu">
            <li>
              {isAuth ? (
                <div className="login border-radius-S" onClick={handleLogout}>
                  Logout
                </div>
              ) : (
                <div
                  className="login border-radius-S"
                  onClick={() => navigate("/login")}
                >
                  Login
                </div>
              )}
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
}

export { Navigation };
