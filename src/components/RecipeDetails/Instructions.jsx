import PropTypes from "prop-types";
import "../../Styles/RecipeDetails/Instructions.css";

const Instructions = ({ steps }) => {
  return (
    <div className="instructions">
      <div className="instructions-list">
        <h2>Instructions</h2>
        {steps.map((step, index) => (
          <div key={index} className="instruction-item">
            <span className="instruction-step">{index + 1}</span>
            <p className="instruction-text">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes Validation
Instructions.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Instructions;
