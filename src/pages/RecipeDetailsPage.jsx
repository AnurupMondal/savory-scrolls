import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import RecipeHeader from "../components/RecipeDetails/RecipeHeader";
import IngredientsList from "../components/RecipeDetails/IngredientsList";
import NutritionFacts from "../components/RecipeDetails/NutritionFacts";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import Instructions from "../components/RecipeDetails/Instructions";
import NewsletterSignup from "../components/RecipeDetails/NewsletterSignup";
import "../Styles/RecipeDetailsPage.css";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const recipes = useSelector((state) => state.recipes.recipes);
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <div className="error-message">Recipe not found</div>;
  }

  return (
    <div className="recipe-details-page">
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
          <img
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            className="recipe-image"
          />
        </div>

        <RecipeDetails
          prepTime={recipe.prepTime}
          cookTime={recipe.cookTime}
          servings={recipe.servings}
        />

        <div className="recipe-content">
          {/* Left Main Content */}
          <div className="recipe-main">
            <IngredientsList ingredients={recipe.ingredients} />

            <h2>Instructions</h2>
            {recipe.instructions && recipe.instructions.length > 0 ? (
              <Instructions steps={recipe.instructions} />
            ) : (
              <p className="error-message">No instructions available.</p>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="recipe-sidebar">
            <NutritionFacts nutrition={recipe.nutrition} />
            <NewsletterSignup />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetailsPage;
