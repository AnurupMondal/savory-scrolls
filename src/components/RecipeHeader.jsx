import PropTypes from "prop-types";
import { useState } from "react";
import { Star, Share2, Bookmark, Calendar, MessageCircle } from "lucide-react";
import "../styles/RecipeHeader.css";
import authorAvatar from "/assets/author-avatar.png"; // Ensure correct path

const RecipeHeader = ({ title, author, postedDate, initialRatings, reviews, description }) => {
  const [rating, setRating] = useState(initialRatings);
  const [hover, setHover] = useState(null);

  // Function to update rating
  const handleRatingClick = (newRating) => {
    setRating(newRating);
    localStorage.setItem("userRating", newRating); // Store rating locally (Can be replaced with API call)
  };

  return (
    <div className="recipe-header">
      {/* Title and Action Icons */}
      <div className="recipe-title-actions">
        <h1 className="recipe-title">{title}</h1>
        <div className="recipe-actions">
          <Share2 className="action-icon" />
          <Bookmark className="action-icon" />
        </div>
      </div>

      {/* Meta Information */}
      <div className="recipe-meta">
        <div className="author-info">
          <img src={authorAvatar} alt="Author Avatar" className="author-avatar" />
          <span className="author-name">{author}</span>
        </div>

        <div className="meta-item">
          <Calendar className="meta-icon" />
          <span>{postedDate}</span>
        </div>

        <div className="meta-item">
          <MessageCircle className="meta-icon" />
          <span>{reviews}</span>
        </div>

        {/* Interactive Rating Bar */}
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
      </div>

      {/* Description */}
      <hr className="divider" />
      <p className="recipe-description">{description}</p>
    </div>
  );
};

// PropTypes Validation
RecipeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired,
  initialRatings: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecipeHeader;
