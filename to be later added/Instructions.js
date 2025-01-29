import React from "react";
import styles from "./Instructions.module.css";
import InstructionStep from "./InstructionStep";

const Instructions = ({ steps, title }) => {
  return (
    <div className={styles.instructions}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {steps.map((step, index) => (
          <InstructionStep key={index} stepNumber={index + 1} instruction={step} />
        ))}
      </div>
    </div>
  );
};

export default Instructions;