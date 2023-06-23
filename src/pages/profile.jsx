import React from "react";
import "../style/profile.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
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
            <FontAwesomeIcon icon={faArrowLeft} className="arrow" />
          </Link>
          <h1>PROFILE PAGE</h1>
        </nav>

        <div className="Profile-content">
          <div className="left-content">
            <div className="img-profile">
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
                <input type="text" value="Muhammad" readOnly />
              </div>
              <div className="bio-card">
                <h2>Mid Name</h2>
                <input type="text" value="Arief" readOnly />
              </div>
              <div className="bio-card">
                <h2>Last Name</h2>
                <input type="text" value="Budiman" readOnly />
              </div>
              <div className="bio-card">
                <h2>Born</h2>
                <input type="date" id="born" />
              </div>
              <div className="bio-card">
                <h2>Description</h2>
                <textarea
                  rows="5"
                  cols="83"
                  placeholder="Description..."
                ></textarea>
              </div>
            </div>
            <div className="submit">
              <button id="submit-btn">SUBMIT</button>
              <button id="cancel-btn">CANCEL</button>
            </div>
          </div>
        </div>

        <div className="logout">
          <button id="logout-btn">LOGOUT</button>
        </div>
      </header>

      <footer className="Profile-footer">
        &copy;2023. <b> Arief Budiman</b>
      </footer>
    </div>
  );
}
