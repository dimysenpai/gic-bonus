import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let modalAlert = document.querySelector(".modal-alert");

    axios({
      method: "post",
      url: `${import.meta.env.VITE_APP_API_URL}user/login`,
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: new URLSearchParams({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.data.status === "success") {
          Cookies.set("id_user", response.data.user.id_user);
          Cookies.set("firstname", response.data.user.firstname);
          Cookies.set("lastname", response.data.user.lastname);
          Cookies.set("phone", response.data.user.phone);
          Cookies.set("role", response.data.user.role);

          window.location = "/";
        }
        if (response.data.status === "error") {
          modalAlert.innerText = response.data.message;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login">
      <div className="modal-alert"></div>
      <div className="login-container">
        <div className="welcome">
          <img src="./images/gic-bonus.png" alt="" />
          <h2>Gic Bonus</h2>
          <p>Bienvenue dans l'aventure gic bonus</p>
        </div>
        <form onSubmit={handleLogin} id="login-form" className="login-form">
          <h1>Connectez-Vous</h1>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Votre Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="field">
            <label htmlFor="password">Mot de Passe</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Votre Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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

          <button type="submit" className="login-submit">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
