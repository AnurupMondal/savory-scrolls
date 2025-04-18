import { Bookmark } from "lucide-react";
import { useState } from "react";
import Pagination from "./Pagination";
import "../../Styles/Home/Browse.css";
import butterMasala from "../../assets/Browse/Butter-Masala.png";
import alooGobhi from "../../assets/Browse/Aloogobhi.png";
import Lassi from "../../assets/Browse/Lassi.png";
import Samosa from "../../assets/Browse/Samosa.png";

const recipes = [
  { id: 1, name: "Paneer Butter Masala", image: butterMasala, rating: 4.5, description: "A rich and creamy tomato-based curry with paneer." },
  { id: 2, name: "Aloo Gobhi", image: alooGobhi, rating: 5.0, description: "A classic Indian dish made with potatoes and cauliflower." },
  { id: 3, name: "Mango Lassi", image: Lassi, rating: 4.0, description: "A sweet and creamy yogurt-based mango drink." },
  { id: 4, name: "Samosa", image: Samosa, rating: 4.2, description: "A crispy and spicy deep-fried pastry filled with potatoes and peas." },
  { id: 5, name: "Paneer Tikka", image: "https://source.unsplash.com/200x200/?paneer-tikka", rating: 4.8, description: "Marinated and grilled paneer cubes with spices." },
  { id: 6, name: "Chole Bhature", image: "https://source.unsplash.com/200x200/?chole-bhature", rating: 4.6, description: "Spicy chickpea curry served with fluffy fried bread." },
  { id: 7, name: "Dal Makhani", image: "https://source.unsplash.com/200x200/?dal-makhani", rating: 4.7, description: "Slow-cooked black lentils in a creamy butter sauce." },
  { id: 8, name: "Rasgulla", image: "https://source.unsplash.com/200x200/?rasgulla", rating: 4.3, description: "Soft and spongy cottage cheese balls in sugar syrup." },
  { id: 9, name: "Gulab Jamun", image: "https://source.unsplash.com/200x200/?gulab-jamun", rating: 4.9, description: "Sweet, deep-fried dumplings soaked in sugar syrup." },
  { id: 10, name: "Pav Bhaji", image: "https://source.unsplash.com/200x200/?pav-bhaji", rating: 4.4, description: "Spicy mashed vegetable curry served with buttered bread." },
  { id: 11, name: "Dosa", image: "https://source.unsplash.com/200x200/?dosa", rating: 4.5, description: "A crispy, thin pancake made from fermented rice and lentil batter." },
  { id: 12, name: "Vada Pav", image: "https://source.unsplash.com/200x200/?vada-pav", rating: 4.1, description: "Mumbai's favorite street food—spicy potato fritter in a bun." },
];

const itemsPerPage = 4;

const Browse = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarked, setBookmarked] = useState({});

  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedRecipes = recipes.slice(startIndex, startIndex + itemsPerPage);

  const toggleBookmark = (id) => {
    setBookmarked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="star-rating">
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </div>
    );
  };

  return (
    <div className="browse-container">
      <h2>Browse Recipes</h2>
      {displayedRecipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <div className="bookmark-icon" onClick={() => toggleBookmark(recipe.id)}>
            <Bookmark
              color={bookmarked[recipe.id] ? "#FFD700" : "#000"}
              fill={bookmarked[recipe.id] ? "#FFD700" : "none"}
              size={24}
            />
          </div>
          <img src={recipe.image} alt={recipe.name} className="recipe-image" />
          <div className="sub-card">
            <h3 className="recipe-name">{recipe.name}</h3>
            <p className="recipe-description">{recipe.description}</p>
            {renderStars(recipe.rating)}
          </div>
        </div>
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      <div className="orange-line"></div>
    </div>
  );
};

export default Browse;
