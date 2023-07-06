import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signIn">
      <div className="signIn-container">
        <div className="welcome">
          <img src="./images/gic-bonus.png" alt="" />
          <h2>Gic Bonus</h2>
          <p>Bienvenue dans l'aventure gic bonus</p>
        </div>
        <form method="Post" className="signIn-form">
          <h1>Connectez-Vous</h1>

          <div className="field">
            <label htmlFor="firstname">Nom</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Votre Nom"
            />
          </div>

          <div className="field">
            <label htmlFor="lastname">Prenom</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Votre Prenom"
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Votre Téléphone"
            />
          </div>

          <div className="field">
            <label htmlFor="pseudo">Nom d'utilisateur</label>
            <input
              type="text"
              id="pseudo"
              name="pseudo"
              placeholder="Votre Nom d'utilisateur"
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
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
            <Link to={"/login"}>J'ai déjà un Compte !</Link>
          </div>

          <button className="signIn-submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
