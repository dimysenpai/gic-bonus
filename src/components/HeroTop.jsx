import React, { useState, useEffect, useRef } from "react";

const HeroTop = () => {
  // Initialisez le compteur de l'élément actif
  const [counter, setCounter] = useState(0);

  // Sélectionnez les éléments du DOM
  const carouselRef = useRef(null);
  const carouselItemsRef = useRef([]);
  const heroTopRef = useRef(null);

  // Définissez la fonction pour changer l'élément actif
  function setActiveItem() {
    // Masquez tous les éléments du carrousel
    carouselItemsRef.current.forEach((item) => {
      item.classList.remove("active");
    });

    // Affichez l'élément actif
    carouselItemsRef.current[counter].classList.add("active");
  }

  // Définissez la fonction pour avancer le carrousel
  function nextItem() {
    // Incrémentez le compteur
    setCounter((prevCounter) =>
      prevCounter === carouselItemsRef.current.length - 1 ? 0 : prevCounter + 1
    );
  }

  // Définissez l'effet pour mettre à jour l'élément actif
  useEffect(() => {
    // Changez l'élément actif
    setActiveItem();
  }, [counter]);

  // Définissez l'effet pour définir l'intervalle pour changer les éléments du carrousel
  useEffect(() => {
    const interval = setInterval(nextItem, 5000);
    return () => clearInterval(interval);
  }, []);

  // Définissez l'effet pour redimensionner le carrousel pour remplir l'élément .hero-top
  useEffect(() => {
    function resizeCarousel() {
      carouselRef.current.style.width = `${heroTopRef.current.offsetWidth}px`;
    }
    resizeCarousel();
    window.addEventListener("resize", resizeCarousel);
    return () => window.removeEventListener("resize", resizeCarousel);
  }, []);

  return (
    <div className="hero-top" ref={heroTopRef}>
      <div className="container">
        <h1>Gic Bonus</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <a href="#" className="btn btn-primary">
          Call to action
        </a>
      </div>
      <div className="carousel" ref={carouselRef}>
        <div
          className="carousel-item active"
          ref={(ref) => (carouselItemsRef.current[0] = ref)}
        >
          <img
            src="./images/mailchimp-Hv9CS6KZayQ-unsplash.jpg"
            alt="Image 1"
          />
        </div>
        <div
          className="carousel-item"
          ref={(ref) => (carouselItemsRef.current[1] = ref)}
        >
          <img src="./images/pexels-pixabay-273238.jpg" alt="Image 2" />
        </div>
        <div
          className="carousel-item"
          ref={(ref) => (carouselItemsRef.current[2] = ref)}
        >
          <img
            src="./images/flat-lay-workstation-with-copy-space-laptop.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTop;
