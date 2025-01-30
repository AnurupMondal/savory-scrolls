import PropTypes from "prop-types";
import "../styles/IngredientsList.css";

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="ingredients-list">
      <h2 className="ingredients-title">Ingredients</h2>
      {Object.entries(ingredients).map(([section, items]) => (
        <div key={section} className="ingredient-section">
          <h3 className="section-title">{section}</h3>
          <div className="ingredients">
            {items.map((item, index) => (
              <label key={index} className="ingredient-item">
                <input type="checkbox" className="ingredient-checkbox" />
                <span className="ingredient-text">{item}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// PropTypes Validation
IngredientsList.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default IngredientsList;