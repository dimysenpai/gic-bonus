import React from "react";
import TrainingCard from "../components/TrainingCard";
import Space from "../components/Space";

const DetailsTraining = () => {
  return (
    <div className="detailsTraining">
      <section className="details">
        <div className="images">
          <img src="./images/belt.png" alt="image" />
        </div>
        <div className="training-info">
          <h2>Nom Produit</h2>
          <h3>30000 F</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            adipisci? Facere ab deleniti tempore reiciendis? Culpa voluptates
            dicta obcaecati officiis tempora odio quae! Omnis aliquid architecto
            et animi blanditiis unde!
          </p>
          <button type="button">Passer Une Commande</button>
        </div>
      </section>

      <section className="sujection">
        <h1>Similaires</h1>
        <div>
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
          <TrainingCard />
        </div>
        <Space />
      </section>
    </div>
  );
};

export default DetailsTraining;
