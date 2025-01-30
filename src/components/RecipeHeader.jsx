import PropTypes from "prop-types";
import { Share2, Bookmark, Calendar, MessageCircle } from "lucide-react";
import Rating from "./Rating"; // Import the new reusable component
import "../styles/RecipeHeader.css";
import authorAvatar from "/assets/author-avatar.png"; // Ensure correct path

const RecipeHeader = ({ title, author, postedDate, initialRatings, reviews, description }) => {
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

        {/* Use the new Rating component */}
        <Rating initialRating={initialRatings} />
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