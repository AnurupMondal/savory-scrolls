import React, { useState } from "react";
import styles from "./IngredientsList.module.css";
import IngredientItem from "./IngredientItem";

const IngredientsList = ({ ingredients, title }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (ingredient) => {
    setCheckedItems((prev) => ({
      ...prev,
      [ingredient]: !prev[ingredient],
    }));
  };

  return (
    <div className={styles.ingredientsList}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {ingredients.map((ingredient, index) => (
          <IngredientItem
            key={index}
            ingredient={ingredient}
            checked={checkedItems[ingredient] || false}
            onCheck={handleCheck}
          />
        ))}
      </div>
    </div>
  );
};

export default IngredientsList;

