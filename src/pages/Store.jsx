import React from "react";
import Sort from "../components/Sort";
import CardPricipal from "../components/CardPricipal";

const Store = () => {
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
    <div className="store">
      <Sort />
      <section className="cards_store">
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
      </section>
    </div>
  );
};

export default Store;
