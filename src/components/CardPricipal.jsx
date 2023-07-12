import React from "react";
import { Link } from "react-router-dom";

const CardPricipal = (props) => {
  return (
    <div className="product-card">
      <Link to={props.url}>
        <img src={props.urlName} alt="Product Image" />
      </Link>
      <div className="product-info">
        <h2 className="product-name">{props.imgName}</h2>
        <p className="product-price">{props.price}</p>
        <button className="product-button">{props.cta}</button>
      </div>
    </div>
  );
};

export default CardPricipal;
