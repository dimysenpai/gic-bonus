import React from "react";
import Sort from "../components/Sort";
import Card from "../components/card";
import Space from "../components/Space";

const Service = () => {
  return (
    <div className="service">
      <Sort />

      <section className="section">
        <h1>Banderoles </h1>
        <div className="content-item">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section className="section">
        <h1>Carte de visite </h1>
        <div className="content-item">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section className="section">
        <h1>flyers </h1>
        <div className="content-item">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section className="section">
        <h1>Logo </h1>
        <div className="content-item">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <Space />
    </div>
  );
};

export default Service;
