import React from "react";
import styles from "./RecipeRating.module.css";

const RecipeRating = ({ rating, totalReviews }) => {
  return (
    <div className={styles.recipeRating}>
      <span className={styles.star}>⭐</span>
      <span className={styles.ratingValue}>{rating}</span>
      <span className={styles.reviewCount}>({totalReviews} Reviews)</span>
    </div>
  );
};

export default RecipeRating;