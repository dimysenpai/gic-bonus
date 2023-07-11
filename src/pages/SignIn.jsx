import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    let modalAlert = document.querySelector(".modal-alert");

    axios({
      method: "post",
      url: `${import.meta.env.VITE_APP_API_URL}user/create`,
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: new URLSearchParams({
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          console.log(response.data.message);
          // window.location = "/";
        }
        if (response.data.status === "error") {
          modalAlert.innerText = response.data.message;
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="signIn">
      <div className="modal-alert"></div>
      <div className="signIn-container">
        <div className="welcome">
          <img src="./images/gic-bonus.png" alt="" />
          <h2>Gic Bonus</h2>
          <p>Bienvenue dans l'aventure gic bonus</p>
        </div>
        <form onSubmit={handleSignin} id="signIn-form" className="signIn-form">
          <h1>Connectez-Vous</h1>

          <div className="field">
            <label htmlFor="firstname">Nom</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Votre Nom"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
            />
          </div>

          <div className="field">
            <label htmlFor="lastname">Prenom</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Votre Prenom"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Votre Téléphone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>

          <div className="field">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Votre Nom d'utilisateur"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>

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
            <Link to={"/login"}>J'ai déjà un Compte !</Link>
          </div>

          <button type="submit" className="signIn-submit">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
