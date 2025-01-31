import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../redux/recipeSlice"; // Import Redux action
import { Link } from "react-router-dom";
import "../styles/Recipes.css";

const Recipes = () => {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state) => state.recipes);

  // debugging
  console.log("Redux Recipes Data:", recipes);

  useEffect(() => {
    dispatch(fetchRecipes()); // Fetch recipes from Redux store
  }, [dispatch]);

  return (
    <div className="recipes-container">
      <h1 className="recipes-title">All Recipes</h1>

      {/* Loading and Error Handling */}
      {loading && <p className="loading-message">Loading recipes...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <h2 className="recipe-name">{recipe.title}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;