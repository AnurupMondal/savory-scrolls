import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Home/Hero.css";
import HeroImage from "../../assets/Hero.png";
import trend from "../../assets/trend.png";
import arrow from "../../assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={HeroImage} alt="Chole Bhature" />
      </div>
      <div className="hero-content">
        <span className="hero-stats">
          <img src={trend} alt="trend-logo" />
          85% would make this again
        </span>
        <h2>Fluffy Chole Bhature</h2>
        <p>A plate where comfort meets indulgence, and every bite is a celebration of spice, soul, and satisfaction.</p>
        
        {/* Use Link instead of <a> to avoid page reload */}
        <Link to="/recipeDetail" className="expandable-link">
          <img src={arrow} alt="redirect" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
