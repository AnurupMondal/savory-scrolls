import React from "react";
import styles from "./RecipeImage.module.css";

const RecipeImage = ({ imageUrl, altText }) => {
  return (
    <div className={styles.recipeImage}>
      <img src={imageUrl} alt={altText} className={styles.image} />
    </div>
  );
};

export default RecipeImage;
