import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import Redux selector
import "../../Styles/Home/Hero.css";
import trend from "../../assets/trend.png";
import arrow from "../../assets/arrow.png";

const Hero = () => {
  const recipes = useSelector((state) => state.recipes.recipes); // Get recipes from Redux store
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
    if (recipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setRandomRecipe(recipes[randomIndex]);
    }
  }, [recipes]); // Runs when Redux store updates

  if (!randomRecipe) {
    return <div className="hero-container">Loading...</div>; // Show loading while fetching recipe
  }

  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={randomRecipe.image} alt={randomRecipe.title} />
      </div>
      <div className="hero-content">
        <span className="hero-stats">
          <img src={trend} alt="trend-logo" />
          85% would make this again
        </span>
        <h2>{randomRecipe.title}</h2>
        <p>{randomRecipe.description}</p>

        {/* Dynamic redirect to recipe details */}
        <Link to={`/recipe/${randomRecipe.id}`} className="expandable-link">
          <img src={arrow} alt="redirect" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;