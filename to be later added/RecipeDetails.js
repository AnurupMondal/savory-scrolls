import React, { useState, useEffect } from "react";
import RecipeTitle from "./RecipeTitle";
import RecipeImage from "./RecipeImage";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import NutritionInfo from "./NutritionInfo";
import RelatedRecipes from "./RelatedRecipes";
import SubscriptionCTA from "./SubscriptionCTA";
import styles from "./RecipeDetails.module.css";

const RecipeDetails = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/recipes.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === recipeId);
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [recipeId]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className={styles.recipePage}>
      <RecipeTitle title={recipe.title} author={recipe.author} category={recipe.category} rating={recipe.rating} />
      <RecipeImage imageUrl={recipe.imageUrl} altText={`Image of ${recipe.title}`} />

      <div className={styles.content}>
        <div className={styles.mainSection}>
          <IngredientsList title="Ingredients" ingredients={recipe.ingredients} />
          <Instructions title="Cooking Instructions" steps={recipe.instructions} />
        </div>

        <aside className={styles.sidebar}>
          <NutritionInfo nutrition={recipe.nutrition} />
          <RelatedRecipes recipes={recipe.relatedRecipes} />
          <SubscriptionCTA />
        </aside>
      </div>
    </div>
  );
};

export default RecipeDetails;
