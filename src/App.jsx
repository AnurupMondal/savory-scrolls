import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "./features/recipeSlice"; // ✅ Ensure this is properly exported
import Navbar from "./components/Navbar";
import RecipeHeader from "./components/RecipeHeader";
import FreshRecipes from "./components/FreshRecipes";
import RecipeDetails from "./components/RecipeDetails";
import IngredientsList from "./components/IngredientsList";
import NutritionFacts from "./components/NutritionFacts";
import NewsletterSignup from "./components/NewsletterSignup";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const loading = useSelector((state) => state.recipes.loading);
  const error = useSelector((state) => state.recipes.error);

  useEffect(() => {
    dispatch(fetchRecipes()); // ✅ Fetch recipes when app loads
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!recipes.length) return <div>No recipes found</div>;

  const recipe = recipes[0]; // Display first recipe for now

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <RecipeHeader
          title={recipe.title}
          author={recipe.author}
          postedDate={recipe.postedDate}
          ratings={recipe.ratings}
          reviews={recipe.reviews}
          description={recipe.description}
        />

        <div className="recipe-image-container">
          <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className="recipe-image" />
        </div>

        <RecipeDetails prepTime={recipe.prepTime} cookTime={recipe.cookTime} servings={recipe.servings} />

        <div className="recipe-content">
          <div className="recipe-main">
            <IngredientsList ingredients={recipe.ingredients} />
          </div>
          <div className="recipe-sidebar">
            <NutritionFacts nutrition={recipe.nutrition} />
            <FreshRecipes /> {/* ✅ Added Fresh Recipes Component */}
            <NewsletterSignup />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;