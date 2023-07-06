import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Sort from "../components/Sort";
import Card from "../components/card";

const Store = () => {
  return (
    <div className="store">
      <Sort />
      <section className="cards_store">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default Store;
