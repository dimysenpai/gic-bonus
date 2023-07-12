import React from "react";
import HeroTop from "../components/HeroTop";
import TrainingCard from "../components/TrainingCard";
import Space from "../components/Space";
import CardPricipal from "../components/CardPricipal";

const Home = () => {
  const jsonCardInfos = [
    {
      url: "elegant-smartphone-composition.jpg",
      name: "image 1",
      price: "10 000 F",
    },
    {
      url: "kitchen_quattro.png",
      name: "image 2",
      price: "5 000 F",
    },
    {
      url: "pexels-alex-andrews-1983037.jpg",
      name: "image 3",
      price: "8 000 F",
    },
    {
      url: "pexels-barthy-bonhomme-185030.jpg",
      name: "image 4",
      price: "15 000 F",
    },
    {
      url: "pexels-jess-bailey-designs-788946.jpg",
      name: "image 5",
      price: "18 000 F",
    },
  ];

  const jsonServices = [
    {
      faIcon: "fa-code",
      serviceName: "Développement de logiciels",
      serviceDescription:
        "Création de logiciels personnalisés pour répondre aux besoins spécifiques des entreprises",
    },
    {
      faIcon: "fa-globe",
      serviceName: "Conception de sites web",
      serviceDescription:
        "Création de sites web pour présenter l'entreprise, ses produits et services, et pour engager avec les clients",
    },
    {
      faIcon: "fa-wrench",
      serviceName: "Maintenance et support informatique",
      serviceDescription:
        "Assistance pour la maintenance et la résolution des problèmes informatiques, ainsi que pour la gestion des mises à jour de sécurité",
    },
    {
      faIcon: "fa-hdd",
      serviceName: "Solutions de stockage et de sauvegarde de données",
      serviceDescription:
        "Stockage et sauvegarde de données en toute sécurité, en utilisant des solutions de stockage en ligne ou des services de sauvegarde de données",
    },
    {
      faIcon: "fa-cloud",
      serviceName: "Services de cloud computing",
      serviceDescription:
        "Hébergement des applications et données en ligne en utilisant des plateformes telles que Amazon Web Services, Microsoft Azure et Google Cloud Platform",
    },
    {
      faIcon: "fa-shield-alt",
      serviceName: "Sécurité informatique",
      serviceDescription:
        "Solutions de sécurité informatique pour se protéger contre les cyberattaques, les virus et les logiciels malveillants",
    },
    {
      faIcon: "fa-graduation-cap",
      serviceName: "Formation en informatique",
      serviceDescription:
        "Formation pour le personnel sur l'utilisation de logiciels, la sécurité informatique, l'analyse de données et d'autres sujets informatiques pertinents",
    },
    {
      faIcon: "fa-lightbulb",
      serviceName: "Conseil en informatique",
      serviceDescription:
        "Conseils pour déterminer les meilleures solutions informatiques pour les besoins commerciaux, ainsi que pour planifier et mettre en œuvre des stratégies informatiques efficaces",
    },
  ];

  const jsonTrainings = [
    {
      trainingName: "Programmation",
      trainingDescription:
        "Apprentissage des langages de programmation tels que Java, Python, C++, etc., pour développer des logiciels et des applications",
    },
    {
      trainingName: "Développement Web",
      trainingDescription:
        "Apprentissage des langages de programmation web tels que HTML, CSS, JavaScript, etc., pour développer des sites web et des applications web",
    },
    {
      trainingName: "Bases de données",
      trainingDescription:
        "Apprentissage de la conception, de la mise en œuvre et de la gestion de bases de données pour stocker et gérer les données de l'entreprise",
    },
    {
      trainingName: "Sécurité informatique",
      trainingDescription:
        "Apprentissage des techniques de sécurité informatique pour protéger les systèmes informatiques contre les cyberattaques et les menaces",
    },
    {
      trainingName: "Analyse de données",
      trainingDescription:
        "Apprentissage des techniques d'analyse de données pour extraire des informations utiles à partir de grands ensembles de données",
    },
  ];

  return (
    <>
      <HeroTop />
      <div className="home">
        <section className="section">
          <h1>Articles de la boutique</h1>
          <div className="cards">
            {jsonCardInfos.map((jsonCardInfo, key) => {
              return (
                <CardPricipal
                  key={key}
                  url={"/detailsService"}
                  urlName={`./images/${jsonCardInfo.url}`}
                  imgName={jsonCardInfo.name}
                  price={jsonCardInfo.price}
                  cta={"Ajouter au panier"}
                />
              );
            })}
          </div>
          <Space />
        </section>

        <section className="section section-blue">
          <h1>Listes des Services</h1>
          <div className="services">
            {jsonServices.map((jsonService, key) => {
              return (
                <div id={key} className="service">
                  <div className="ico">
                    <i className={`fas ${jsonService.faIcon}`}></i>
                  </div>
                  <h1>{jsonService.serviceName}</h1>
                  <p>{jsonService.serviceDescription}</p>
                </div>
              );
            })}
          </div>
          {/* <Space /> */}
        </section>

        <section className="section">
          <h1>Formations</h1>
          <div className="formations">
            {jsonTrainings.map((jsonTraining, key) => {
              return (
                <TrainingCard
                  id={key}
                  trainingName={jsonTraining.trainingName}
                  trainingDescription={jsonTraining.trainingDescription}
                />
              );
            })}
            ;
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
