import { useParams } from "react-router-dom";
import recipesData from "../data/recipes.json";
import RecipeHeader from "../components/RecipeHeader";
import IngredientsList from "../components/IngredientsList";
import NutritionFacts from "../components/NutritionFacts";
import RecipeDetails from "../components/RecipeDetails";
import NewsletterSignup from "../components/NewsletterSignup";
import "../styles/RecipeDetailsPage.css";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div className="error-message">Recipe not found</div>;
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
        </div>

        {/* Right Sidebar */}
        <div className="recipe-sidebar">
          <NutritionFacts nutrition={recipe.nutrition} />
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;