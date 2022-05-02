import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../../Services/User/loginAPI";
import { toast } from "react-toastify";
function Login() {
  const EMAIL_REGEX = new RegExp(
    "^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$"
  );

  const navigate = useNavigate();
  const location = useLocation();

  const [tempUserDetail, setTempUserDetail] = useState({
    tempEmail: "",
    tempPassword: "",
  });

  const handleChange = (e) => {
    setTempUserDetail({
      ...tempUserDetail,
      [e.target.name]: e.target.value,
    });
  };

  const { dispatchAuth } = useAuth();

  const { tempEmail, tempPassword } = tempUserDetail;

  return (
    <div className="container-login flex-c">
      <h1>Login</h1>

      <div className="email">
        <label htmlFor="email-id"> Email address</label>
        <input
          className="border-radius-S"
          type="text"
          id="email-id"
          placeholder="name@company.com"
          name="tempEmail"
          value={tempEmail}
          onChange={handleChange}
        />
      </div>

      <div className="password">
        <label htmlFor="password-id"> Password</label>
        <input
          className="border-radius-S"
          type="password"
          id="password-id"
          placeholder="**********"
          name="tempPassword"
          value={tempPassword}
          onChange={handleChange}
        />
      </div>

      <div className="container-extra">
        <div className="container-reminder flex-r">
          <label className="checkbox">
            <input className="check-input" type="checkbox" />
            <span className="check-msg">Remember Me</span>
          </label>
        </div>

        <div className="forgot">
          <a href="/">Forgot Your Password</a>
        </div>
      </div>

      <div
        className="login-btn border-radius-S"
        onClick={() =>
          tempEmail && tempPassword
            ? !EMAIL_REGEX.test(tempEmail)
              ? toast.error("Please Enter Valid Email")
              : loginUser(
                  tempEmail,
                  tempPassword,
                  dispatchAuth,
                  navigate,
                  location
                )
            : toast.error("Please fill all the fields")
        }
      >
        Login
      </div>
      <div
        className="login-btn btn-secondary border-radius-S"
        onClick={() =>
          setTempUserDetail({
            tempEmail: "test@gmail.com",
            tempPassword: "test",
          })
        }
      >
        Guest Credentials
      </div>
      <Link className="login-btn btn-secondary border-radius-S" to="/signup">
        Create New Account
      </Link>
    </div>
  );
}

export default Login;
