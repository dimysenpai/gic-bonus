import React, { useState } from "react";

const TopBar = () => {
  const [colorSvg, setColorSvg] = useState("#fff");

  return (
    <header className="topbar">
      <div className="top">
        <div className="logotext">Gic Bonus</div>
        <div className="search-container">
          <input type="search" value="#" />
        </div>
        <div className="actions">
          <div className="notification">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                stroke={colorSvg}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>2</div>
          </div>
          <div className="panier">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z"
                stroke={colorSvg}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div>2</div>
          </div>
          {/* <div className="profil-container">
            <img className="icon-profil" src="./senpai.png" alt="#" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke={colorSvg}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="profil-menu">azerrt</div>
          </div> */}
        </div>
      </div>
      <div className="bottom">
        <div className="links">
          <a href="/">Acceuil</a>
          <a href="/">Boutique</a>
          <a href="/">Services</a>
          <a href="/">Formations</a>
          <a href="/">A Propos</a>
        </div>
        <div className="cta-log">
          <button className="signin">Inscription</button>
          <button className="login">Connexion</button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
