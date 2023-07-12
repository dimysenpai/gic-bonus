import React from "react";
import HeroTop from "../components/HeroTop";
import TrainingCard from "../components/TrainingCard";
import Space from "../components/Space";
import CardPricipal from "../components/CardPricipal";

const Home = () => {
  return (
    <>
      <HeroTop />
      <div className="home">
        <section className="section">
          <h1>Articles de la boutique</h1>
          <div className="cards">
            <CardPricipal />
            <CardPricipal />
            <CardPricipal />
            <CardPricipal />
            <CardPricipal />
            <CardPricipal />
            <CardPricipal />
          </div>
          <Space />
        </section>

        <section className="section section-blue">
          <h1>Listes des Services</h1>
          <div className="services">
            <div className="service">
              <div className="ico">
                <i className="fa fa-user"></i>
              </div>
              <h1>Infographie</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem deleniti molestias vero sunt sequi doloribus.
                Expedita culpa nesciunt iste dolorem voluptatibus at ad numquam?
                Minima reiciendis deleniti rerum doloremque repellat.
              </p>
            </div>
            {/* <div className="service">
              <div className="ico">
                <i className="fa fa-user"></i>
              </div>
              <h1>Infographie</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="service">
              <div className="ico">
                <i className="fa fa-user"></i>
              </div>
              <h1>Infographie</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="service">
              <div className="ico">
                <i className="fa fa-user"></i>
              </div>
              <h1>Infographie</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="service">
              <div className="ico">
                <i className="fa fa-user"></i>
              </div>
              <h1>Infographie</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div> */}
          </div>
          {/* <Space /> */}
        </section>

        <section className="section">
          <h1>Formations</h1>
          <div className="formations">
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
            <TrainingCard />
            <div className="btn_content">
              <button>Voir Plus</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
