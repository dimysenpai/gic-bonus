import React from "react";

const BreadCrumb = () => {
  return (
    <div className="breadcrumb">
      <span className="not_current">
        <a href="#">Accueil</a>
      </span>
      <span className="separator"> / </span>
      <span className="current">
        <a href="#">Produit</a>
      </span>
    </div>
  );
};

export default BreadCrumb;
