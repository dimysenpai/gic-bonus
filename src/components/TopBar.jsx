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
            <i className="fa fa-bell"></i>
            <div>2</div>
          </div>
          <div className="panier">
            <i className="fa fa-shopping-bag"></i>
            <div>2</div>
          </div>
          {/* <div className="profil-container">
            <img className="icon-profil" src="./senpai.png" alt="#" />
            <i className="fa fa-chevron-down"></i>
            <div className="profil-menu">azerrt</div>
          </div> */}
        </div>
      </div>
      <div className="bottom">
        <div className="links">
          <a href="/">Acceuil</a>
          <a href="/store">Boutique</a>
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
