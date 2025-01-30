import React from "react";
import "../../Styles/Hero.css";
import HeroImage from "../../assets/Hero.png";
import trend from "../../assets/trend.png";

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-image">
        <img src={HeroImage} alt="Chole Bhature" />
      </div>
      <div className="hero-content">
      <span className="hero-stats">
        <img src={trend} alt="trend-logo"/>
         85% would make this again
         </span>
        <h2>Fluffy Chole Bhature</h2>
        <p>A plate where comfort meets indulgence, and every bite is a celebration of spice, soul, and satisfaction.</p>
        
      </div>
      
    </section>
  );
};

export default Hero;
