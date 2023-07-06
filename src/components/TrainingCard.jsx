import React from "react";
import { Link } from "react-router-dom";

const TrainingCard = () => {
  return (
    <div className="formation">
      <div className="img"></div>
      <div className="details">
        <h2>Infographie</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          similique ipsa, sapiente placeat cum eos!
        </p>
        <Link to={"/detailsTraining"}>
          <button>details</button>
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;
