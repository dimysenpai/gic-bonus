import React from "react";

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Accueil</a>
        </li>
        <span className="separator">/ </span>
        <li className="breadcrumb-item">
          <a href="#">Catégorie 1</a>
        </li>
        <span className="separator">/ </span>
        <li className="breadcrumb-item active" aria-current="page">
          Sous-catégorie 1
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
