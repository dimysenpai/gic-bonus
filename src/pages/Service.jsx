import React from "react";
import Sort from "../components/Sort";
import Space from "../components/Space";
import CardPricipal from "../components/CardPricipal";

const Service = () => {
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
  ];
  return (
    <div className="service">
      <Sort />

      <section className="section">
        <h1>Banderoles </h1>
        <div className="content-item">
          {jsonCardInfos.map((jsonCardInfo, key) => {
            return (
              <CardPricipal
                id={key}
                url={"/detailsService"}
                urlName={`./images/${jsonCardInfo.url}`}
                imgName={jsonCardInfo.name}
                price={jsonCardInfo.price}
                cta={"Ajouter au panier"}
              />
            );
          })}
        </div>
      </section>

      <section className="section">
        <h1>Carte de visite </h1>
        <div className="content-item">
          {jsonCardInfos.map((jsonCardInfo, key) => {
            return (
              <CardPricipal
                id={key}
                url={"/detailsService"}
                urlName={`./images/${jsonCardInfo.url}`}
                imgName={jsonCardInfo.name}
                price={jsonCardInfo.price}
                cta={"Ajouter au panier"}
              />
            );
          })}
        </div>
      </section>

      <section className="section">
        <h1>flyers </h1>
        <div className="content-item">
          {jsonCardInfos.map((jsonCardInfo, key) => {
            return (
              <CardPricipal
                id={key}
                url={"/detailsService"}
                urlName={`./images/${jsonCardInfo.url}`}
                imgName={jsonCardInfo.name}
                price={jsonCardInfo.price}
                cta={"Ajouter au panier"}
              />
            );
          })}
        </div>
      </section>

      <section className="section">
        <h1>Logo </h1>
        <div className="content-item">
          {jsonCardInfos.map((jsonCardInfo, key) => {
            return (
              <CardPricipal
                id={key}
                url={"/detailsService"}
                urlName={`./images/${jsonCardInfo.url}`}
                imgName={jsonCardInfo.name}
                price={jsonCardInfo.price}
                cta={"Ajouter au panier"}
              />
            );
          })}
        </div>
      </section>
      <Space />
    </div>
  );
};

export default Service;
