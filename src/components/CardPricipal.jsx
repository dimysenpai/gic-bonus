import React from "react";
import { Link } from "react-router-dom";

const CardPricipal = () => {
  return (
    <div className="product-card">
      <Link to={"/detailsService"}>
        <img src="./images/belt.png" alt="Product Image" />
      </Link>
      <div className="product-info">
        <h2 className="product-name">Nom du produit</h2>
        <p className="product-price">99,99 €</p>
        <button className="product-button">Ajouter au panier</button>
      </div>
    </div>
  );
};

export default CardPricipal;
