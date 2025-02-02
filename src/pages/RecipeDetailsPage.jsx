import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import RecipeHeader from "../components/RecipeDetails/RecipeHeader";
import IngredientsList from "../components/RecipeDetails/IngredientsList";
import NutritionFacts from "../components/RecipeDetails/NutritionFacts";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import Instructions from "../components/RecipeDetails/Instructions";
import NewsletterSignup from "../components/RecipeDetails/NewsletterSignup";
import "../Styles/RecipeDetails/RecipeDetailsPage.css";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const recipes = useSelector((state) => state.recipes.recipes); // Get recipes from Redux store

  // Convert id to a number and ensure it matches
  const recipe = recipes?.find((r) => Number(r.id) === Number(id));

  console.log("Recipe Data in Details Page:", recipe); // Debugging log

  if (!recipe) {
    return (
      <div className="error-message">
        <h2>Recipe not found</h2>
        <p>Sorry, the recipe you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="recipe-details-page">
      <RecipeHeader
        title={recipe.title}
        author={recipe.author}
        postedDate={recipe.postedDate}
        ratings={recipe.ratings}
        reviews={recipe.reviews}
        description={recipe.description}
      />

      <div className="recipe-image-container">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      </div>

      <div className="recipe-content">
        {/* Left Main Content */}
        <div className="recipe-main">
          <RecipeDetails
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
            servings={recipe.servings}
          />
          <h2>Ingredients</h2>
          <IngredientsList ingredients={recipe.ingredients} />

          <h2>Instructions</h2>
          {recipe.instructions && recipe.instructions.length > 0 ? (
            <Instructions steps={recipe.instructions} />
          ) : (
            <p className="error-message">No instructions available.</p>
          )}
        </div>

        {/* Right Sidebar */}
        <aside className="recipe-sidebar">
          <NutritionFacts nutrition={recipe.nutrition} />
          <NewsletterSignup />
        </aside>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;