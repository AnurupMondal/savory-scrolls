import React from "react";
import styles from "./RecipeTitle.module.css";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const RecipeTitle = ({ title, author, category, rating }) => {
  return (
    <div className={styles.recipeTitle}>
      <div className={styles.titleSection}>
        <h1>{title}</h1>
        <div className={styles.metaInfo}>
          <span>By {author}</span> • <span>{category}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.rating}>
          <span className={styles.starRating}>⭐ {rating}</span>
        </div>
        <div className={styles.icons}>
          <FaShareAlt className={styles.icon} />
          <FaRegBookmark className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default RecipeTitle;