import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="welcome">
          <img src="./images/gic-bonus.png" alt="" />
          <h2>Gic Bonus</h2>
          <p>Bienvenue dans l'aventure gic bonus</p>
        </div>
        <form method="Post" className="login-form">
          <h1>Connectez-Vous</h1>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre Email"
            />
          </div>

          <div className="field">
            <label htmlFor="password">Mot de Passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Votre Mot de passe"
            />
          </div>

          <div className="extra">
            <div className="remember">
              <input type="checkbox" id="remember" name="remember" />{" "}
              <span>Se Souvenir de moi</span>
            </div>
            <Link to={""}>Mot de Passe ?</Link>
          </div>

          <div className="s">
            <Link to={"/signin"}>Je n'ai pas encore de Compte !</Link>
          </div>

          <button className="login-submit">Connexion</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
