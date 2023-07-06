import React from "react";
import Card from "../components/card";
import Space from "../components/Space";

const DetailsProduct = () => {
  return (
    <div className="detailsProduct">
      <section className="details">
        <div className="images">
          <img src="./images/belt.png" alt="image" />
        </div>
        <div className="product-info">
          <h2>Nom Produit</h2>
          <h3>30000 F</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            adipisci? Facere ab deleniti tempore reiciendis? Culpa voluptates
            dicta obcaecati officiis tempora odio quae! Omnis aliquid architecto
            et animi blanditiis unde!
          </p>
          <button type="button">Ajouter au panier</button>
        </div>
      </section>

      <section className="sujection">
        <h1>Similaires</h1>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Space />
      </section>
    </div>
  );
};

export default DetailsProduct;
