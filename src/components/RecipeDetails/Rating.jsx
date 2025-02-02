import { useState } from "react";
import PropTypes from "prop-types";
import { Star } from "lucide-react";
import "../../Styles/RecipeDetails/Rating.css";

const Rating = ({ initialRating = 0, onRatingChange }) => { // Default to 0
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
    localStorage.setItem("userRating", newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="ratings-container">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        return (
          <Star
            key={i}
            className={`star-icon ${starValue <= (hover || rating) ? "active" : ""}`}
            onClick={() => handleRatingClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
          />
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  initialRating: PropTypes.number,
  onRatingChange: PropTypes.func,
};

export default Rating;