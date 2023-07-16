import React from "react";
import Space from "../components/Space";
import CardPricipal from "../components/CardPricipal";

const DetailsProduct = () => {
  const jsonCardInfos = [
    {
      url: "elegant-smartphone-composition.jpg",
      name: "image 1",
      price: "10 000 F",
    },
    {
      url: "kitchen_quattro.png",
      name: "image 2",
      price: "5 000 F",
    },
    {
      url: "pexels-alex-andrews-1983037.jpg",
      name: "image 3",
      price: "8 000 F",
    },
    {
      url: "pexels-barthy-bonhomme-185030.jpg",
      name: "image 4",
      price: "15 000 F",
    },
    {
      url: "pexels-jess-bailey-designs-788946.jpg",
      name: "image 5",
      price: "18 000 F",
    },
  ];
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
          {jsonCardInfos.map((jsonCardInfo, key) => {
            return (
              <CardPricipal
                key={key}
                url={"/detailsService"}
                urlName={`./images/${jsonCardInfo.url}`}
                imgName={jsonCardInfo.name}
                price={jsonCardInfo.price}
                cta={"Ajouter au panier"}
              />
            );
          })}
        </div>
        <Space />
      </section>
    </div>
  );
};

export default DetailsProduct;
