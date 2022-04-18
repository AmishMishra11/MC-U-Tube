import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signupUser } from "../../Services/User/signupAPI";

function Signup() {
  const EMAIL_REGEX = new RegExp(
    "^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$"
  );

  const navigate = useNavigate();
  const location = useLocation();

  const [tempUserDetail, setTempUserDetail] = useState({
    tempFirstName: "",
    tempLastName: "",
    tempEmail: "",
    tempPassword: "",
  });

  const handleChange = (e) => {
    setTempUserDetail({
      ...tempUserDetail,
      [e.target.name]: e.target.value,
    });
  };

  const [varifyPassword, setVarifyPassword] = useState("");

  const { dispatchAuth } = useAuth();

  const { tempFirstName, tempLastName, tempEmail, tempPassword } =
    tempUserDetail;

  return (
    <div className="container-login con-signup flex-c">
      <h1>Signup</h1>

      <div className="first-name">
        <label htmlFor="first-name-id"> First Name </label>
        <input
          className="border-radius-S"
          type="text"
          id="first-name-id"
          placeholder="First_Name"
          name="tempFirstName"
          onChange={handleChange}
        />
      </div>

      <div className="second-name">
        <label htmlFor="second-name-id"> Last Name </label>
        <input
          className="border-radius-S"
          type="text"
          id="second-name-id"
          placeholder="Last_Name"
          name="tempLastName"
          onChange={handleChange}
        />
      </div>

      <div className="email">
        <label htmlFor="email-id"> Email address</label>
        <input
          className="border-radius-S"
          type="text"
          id="email-id"
          placeholder="name@company.com"
          name="tempEmail"
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
          onChange={handleChange}
        />
      </div>

      <div className="password">
        <label htmlFor="password-id">Varify Password</label>
        <input
          className="border-radius-S"
          type="password"
          id="varify-password-id"
          placeholder="**********"
          name="varifyPassword"
          onChange={(e) => setVarifyPassword(e.target.value)}
        />
      </div>

      <div className="container-extra">
        <div className="container-reminder flex-r">
          <label className="checkbox">
            <input className="check-input" type="checkbox" />
            <span className="check-msg">I accept all Terma & Conditions </span>
          </label>
        </div>
      </div>

      <div
        className="login-btn border-radius-S"
        onClick={() =>
          tempFirstName && tempLastName && tempEmail && tempPassword
            ? !EMAIL_REGEX.test(tempEmail)
              ? alert("Please Enter Valid Email")
              : tempPassword === varifyPassword
              ? signupUser(
                  tempFirstName,
                  tempLastName,
                  tempEmail,
                  tempPassword,
                  dispatchAuth,
                  navigate,
                  location
                )
              : alert("Password do not match")
            : alert("Please fill all the fields")
        }
      >
        <div>Create New Account</div>
      </div>
      <Link className="login-btn btn-secondary border-radius-S" to="/login">
        <div> Already have an account</div>
      </Link>
    </div>
  );
}

export default Signup;
