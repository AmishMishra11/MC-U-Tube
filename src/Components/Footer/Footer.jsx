import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer zi-4">
      <div className="footer-main">
        <div className="footer-nav">
          <div className="footer-logo flex-c">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="footer-links">
          <h3>Open Source</h3>

          <div className="discription">
            We're open-sourced on GitHub.
            <br />
            Contributions and feedback are welcome!
          </div>
          <div className="menu contribute">
            <a
              target="_blank"
              className="border-radius-S"
              href="https://github.com/AmishMishra11"
            >
              Contribute on GitHub
            </a>
          </div>

          <p>© Mercart, 2022 All rights reserved.</p>

          <h4>Socials</h4>
          <div className="footer-social">
            <ul className="menu flex-r">
              <li>
                <a
                  target="_blank"
                  className="border-radius-S"
                  href="https://www.linkedin.com/in/amish-mishra-98b43221a/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="border-radius-S"
                  href="https://twitter.com/The_Scarcastic1"
                >
                  <i className="fab fa-twitter-square"></i>
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  className="border-radius-S"
                  href="mailto: amishmishra11@gmail.com"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  className="border-radius-S"
                  href="https://www.instagram.com/amish_mishra11/?hl=en"
                >
                  <i className="fab fa-instagram-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <h5>Designed with 💕 By Amish Mishra</h5>
        </div>

        <div className="footer-help">
          <h3>Videos</h3>

          <ul className="footer-help-list">
            <li>
              <Link className="border-radius-S" to="/explore">
                Explore
              </Link>
            </li>
            <li>
              <Link className="border-radius-S" to="/playlist">
                My Playlist
              </Link>
            </li>
            <li>
              <Link className="border-radius-S" to="/liked">
                Liked Videos
              </Link>
            </li>
          </ul>

          <h4>© Credits</h4>
          <p>Marvel</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
