import PropTypes from "prop-types"
import { Clock } from "lucide-react"
import "../../Styles/RecipeDetails/RecipeDetails.css"

const RecipeDetails = ({ prepTime, cookTime, servings }) => {
  return (
    <div className="recipe-details">
      <div className="detail-item">
        <Clock className="detail-icon" />
        <div>
          <div className="detail-label">PREP TIME</div>
          <div>{prepTime}</div>
        </div>
      </div>
      <div className="detail-item">
        <Clock className="detail-icon" />
        <div>
          <div className="detail-label">COOK TIME</div>
          <div>{cookTime}</div>
        </div>
      </div>
      <div className="detail-item">
        <div>
          <div className="detail-label">SERVES</div>
          <div>{servings}</div>
        </div>
      </div>
    </div>
  )
}

RecipeDetails.propTypes = {
  prepTime: PropTypes.string.isRequired,
  cookTime: PropTypes.string.isRequired,
  servings: PropTypes.string.isRequired,
}

export default RecipeDetails