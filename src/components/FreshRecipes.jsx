import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Rating from "./Rating";
import "../styles/FreshRecipes.css";

const RecipeCard = ({ title, ratings, image }) => {
  return (
    <div className="recipe-card">
      <img src={image || "/placeholder.svg"} alt={title} className="recipe-card__image" />
      <div className="recipe-card__content">
        <div className="recipe-card__rating">
          <Rating initialRating={ratings} />
        </div>
        <p className="recipe-card__title">{title}</p>
      </div>
    </div>
  );
};

// PropTypes for RecipeCard
RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

const FreshRecipes = () => {
  const recipes = useSelector((state) => state.recipes?.recipes || []);

  if (!recipes.length) return <p>No fresh recipes available.</p>;

  return (
    <div className="fresh-recipes">
      <h3 className="fresh-recipes__title">Fresh Recipes</h3>
      <div className="fresh-recipes__list">
        {recipes.slice(0, 2).map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default FreshRecipes;
