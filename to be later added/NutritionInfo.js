import React from "react";
import styles from "./NutritionInfo.module.css";

const NutritionInfo = ({ nutrition }) => {
  return (
    <div className={styles.nutritionInfo}>
      <h2>Nutrition Facts</h2>
      <ul>
        {nutrition.map((item, index) => (
          <li key={index}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.value}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NutritionInfo;