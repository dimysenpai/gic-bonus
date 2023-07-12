import React from "react";
import Sort from "../components/Sort";
import TrainingCard from "../components/TrainingCard";

const Training = () => {
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
    {
      trainingName: "Intelligence artificielle et apprentissage automatique",
      trainingDescription:
        "Apprentissage des concepts et des techniques d'IA et de ML pour développer des systèmes intelligents et automatisés",
    },
    {
      trainingName: "Gestion de projet informatique",
      trainingDescription:
        "Apprentissage des compétences en gestion de projet pour planifier, organiser et contrôler les projets informatiques",
    },
    {
      trainingName: "Réseaux et systèmes",
      trainingDescription:
        "Apprentissage des compétences pour concevoir, configurer et gérer les réseaux et les systèmes informatiques de l'entreprise",
    },
  ];

  return (
    <div className="training">
      <Sort />

      <h1>Toutes Les Formations</h1>

      <div>
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
      </div>
    </div>
  );
};

export default Training;
