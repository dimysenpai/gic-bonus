import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <header className="header">
      <div className="topbar-up">
        <a className="title-site" href="#">
          <h1>Gic Bonus</h1>
        </a>
        <div className="search">
          <input type="search" placeholder="Rechercher..." />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="content-option">
          <div className="icon-notif">
            <div className="notif">
              <i className="fa fa-bell"></i>
              <span>2</span>
            </div>
            <div className="paner">
              <i className="fa fa-shopping-bag"></i>
              <span>2</span>
            </div>
          </div>

          <div className="menu">
            <div className="profils">
              <img src="./images/senpai.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <nav className="topbar-down">
        <div className="down-left">
          <Link to={"/"}>Accueil</Link>
          <Link to={"/store"}>Boutique</Link>
          <Link to={"/service"}>Services</Link>
          <Link to={"/training"}>Formations</Link>
          <Link to={"/about"}>A Propos</Link>
        </div>
        <div className="down-right">
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
          <Link to={"/signin"}>
            <button>Signin</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
