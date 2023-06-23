import React from "react";
import { Link } from "react-router-dom";
import "../style/profile.css";
import MyPict from "../assets/profile/myPict.png";
import instagram from "../assets/sosmed/instagram.png";
import whatsapp from "../assets/sosmed/whatsapp.png";
import github from "../assets/sosmed/github.png";

export default function ProfilePage() {
  return (
    <div className="Profile">
      <header className="Profile-header">
        <nav className="Nav-profile">
          <Link to="/">
            <button>Back to Main</button>
          </Link>
          <h1>PROFILE PAGE</h1>
        </nav>

        <div className="Profile-content">
          <div className="left-content">
            <div className="img_profile">
              <img src={MyPict} alt="profile" />
              <h1>ARIEFMB</h1>
            </div>
            <div className="sosmed">
              <ul>
                <li>
                  <a href="https://instagram.com/ariefmuh._" target="_blank">
                    <img src={instagram} alt="" />
                    <h3>ariefmuh._</h3>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <img src={whatsapp} alt="" />
                    <h3>0856xxxx</h3>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ariefmb" target="_blank">
                    <img src={github} alt="" />
                    <h3>ariefmb</h3>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-content">
            <div className="bio">
              <div className="bio-card">
                <h2>First Name</h2>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="bio-card">
                <h2>Mid Name</h2>
                <input type="text" placeholder="Mid Name" />
              </div>
              <div className="bio-card">
                <h2>Last Name</h2>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <footer className="Profile-footer">
        &copy;2023. <b>Arief Budiman</b>
      </footer>
    </div>
  );
}
