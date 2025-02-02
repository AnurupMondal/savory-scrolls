import "../../Styles/Home/Categories.css"
import northIndian from "../../assets/Categories/north-indian.png";
import paratha from "../../assets/Categories/Paratha.png";
import dessert from "../../assets/Categories/Dessert.png";
import breakfast from "../../assets/Categories/Breakfast.png";
import chinese from "../../assets/Categories/Chinese.png";
import pasta from "../../assets/Categories/Pasta.png";

const categories = [
    { name: "North Indian", image: northIndian },
    { name: "Paratha", image: paratha },
    { name: "Dessert", image: dessert },
    { name: "Breakfast", image: breakfast },
    { name: "Chinese", image: chinese },
    { name: "Pasta", image: pasta },
];

const Popular = () => {
    return (
        <div className="popular-container">
            <div className="Pop">
                <h2>Popular Categories</h2>
                <button className="add-recipe-btn">+ ADD A RECIPE</button>
            </div>
            <div className="popular-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <img src={category.image} alt={category.name} className="category-image" />
                        <p className="category-name">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Popular;
