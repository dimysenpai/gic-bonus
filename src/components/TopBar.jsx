import React from "react";

const TopBar = () => {
  return (
    <header className="topbar">
      <div className="top">
        <span className="logotext">Gic Bonus</span>
        <div className="search-container">
          <input type="search" value="#" />
        </div>
        <div className="actions">
          <span className="notification">
            <img src="./ico/Outline/bell.svg" alt="bell icon" />
            <span>2</span>
          </span>
          <span className="panier">
            <img src="./ico/Outline/shopping-bag.svg" alt="bell icon" />
            <span>2</span>
          </span>
          <div className="profil-container">
            <img className="icon-profil" src="./senpai.png" alt="#" />
            <img src="./ico/Outline/chevron-down.svg" alt="bell icon" />
            {/* <div className="profil-menu">azerrt</div> */}
          </div>
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
