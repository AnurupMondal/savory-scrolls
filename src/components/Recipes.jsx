import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data/recipes.json";
import "../styles/Recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="recipes-container">
      <h1 className="recipes-title">All Recipes</h1>
      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <h2 className="recipe-name">{recipe.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
