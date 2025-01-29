import React from "react";
import styles from "./RelatedRecipes.module.css";
import RelatedRecipeItem from "./RelatedRecipeItem";

const RelatedRecipes = ({ recipes }) => {
  return (
    <div className={styles.relatedRecipes}>
      <h2>Fresh Recipes</h2>
      <div className={styles.list}>
        {recipes.map((recipe, index) => (
          <RelatedRecipeItem key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RelatedRecipes;