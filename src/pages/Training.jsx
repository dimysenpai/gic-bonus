import React from "react";
import Sort from "../components/Sort";
import TrainingCard from "../components/TrainingCard";

const Training = () => {
  return (
    <div className="training">
      <Sort />

      <h1>Toutes Les Formations</h1>

      <div>
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
      </div>
    </div>
  );
};

export default Training;
