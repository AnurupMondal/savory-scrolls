import React from "react";
import styles from "./IngredientItem.module.css";

const IngredientItem = ({ ingredient, checked, onCheck }) => {
  return (
    <div className={styles.ingredientItem}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onCheck(ingredient)}
      />
      <span className={checked ? styles.checkedText : ""}>{ingredient}</span>
    </div>
  );
};

export default IngredientItem;