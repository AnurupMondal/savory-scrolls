import PropTypes from "prop-types";
import "../styles/NutritionFacts.css";

const NutritionFacts = ({ nutrition }) => {
  return (
    <div className="nutrition-facts">
      <h2 className="nutrition-title">Nutritional Facts</h2>
      <div className="nutrition-list">
        {Object.entries(nutrition).map(([name, value]) => (
          <div key={name} className="nutrition-item">
            <span className="nutrition-name">{name}</span>
            <span className="nutrition-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

//PropTypes Validation
NutritionFacts.propTypes = {
  nutrition: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default NutritionFacts;
