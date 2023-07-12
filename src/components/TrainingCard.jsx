import React from "react";
import { Link } from "react-router-dom";

const TrainingCard = (props) => {
  return (
    <div className="formation">
      <div className="img"></div>
      <div className="details">
        <h2>{props.trainingName}</h2>
        <p>{props.trainingDescription}</p>
        <Link to={"/detailsTraining"}>
          <button>details</button>
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;
