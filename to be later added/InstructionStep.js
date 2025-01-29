import React from "react";
import styles from "./InstructionStep.module.css";

const InstructionStep = ({ stepNumber, instruction }) => {
  return (
    <div className={styles.instructionStep}>
      <div className={styles.stepNumber}>{stepNumber}</div>
      <p>{instruction}</p>
    </div>
  );
};

export default InstructionStep;