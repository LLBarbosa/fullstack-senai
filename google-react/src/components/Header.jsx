import "../styles/Header.css";
import apps from "../images/apps.png";
import logoPersonal from "../images/logoPersonal.png";

import React from "react";

function Header() {
  return (
    <div className="Header">
      <ul className="Menu">
        <li>
            <a href="https://mail.google.com/">Gmail</a>
        </li>
        <li>
            <a href="https://www.google.com/maps/">Maps</a>
        </li>
        <li>
            <img className="Menu-icon" src={apps} alt="menu" />
        </li>
        <li>
            <img className="Profile-icon" src={logoPersonal} alt="profile" />
        </li>
      </ul>

    </div>
  );
}

export default Header;