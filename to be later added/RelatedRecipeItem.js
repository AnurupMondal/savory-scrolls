import React from "react";
import styles from "./RelatedRecipeItem.module.css";

const RelatedRecipeItem = ({ recipe }) => {
  return (
    <div className={styles.recipeCard}>
      <img src={recipe.imageUrl} alt={recipe.title} className={styles.image} />
      <p className={styles.title}>{recipe.title}</p>
    </div>
  );
};

export default RelatedRecipeItem;