import React from "react";
import "../style/profile.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LeftComp from "../components/profileComp/leftComponent";
import RightComp from "../components/profileComp/rightComp";

export default function ProfilePage() {
  return (
    <div className="Profile">
      <header className="Profile-header">
        <nav className="Nav-profile">
          <div className="Nav">
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} className="arrow" />
            </Link>
            <h1>PROFILE PAGE</h1>
          </div>
        </nav>

        <div className="Profile-content">
          <LeftComp />
          <RightComp />
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
