import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import RecipeHeader from "./components/RecipeHeader"
import RecipeDetails from "./components/RecipeDetails"
import IngredientsList from "./components/IngredientsList"
import NutritionFacts from "./components/NutritionFacts"
import NewsletterSignup from "./components/NewsletterSignup"
import recipesData from "./data/recipes.json"
import "./App.css"

const App = () => {
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    // In a real app, you might fetch this based on route params
    setRecipe(recipesData.recipes[0])
  }, [])

  if (!recipe) return <div>Loading...</div>

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <RecipeHeader
          title={recipe.title}
          author={recipe.author}
          postedDate={recipe.postedDate}
          ratings={recipe.ratings}
          reviews={recipe.reviews}
          description={recipe.description}
        />

        <div className="recipe-image-container">
          <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className="recipe-image" />
        </div>

        <RecipeDetails prepTime={recipe.prepTime} cookTime={recipe.cookTime} servings={recipe.servings} />

        <div className="recipe-content">
          <div className="recipe-main">
            <IngredientsList ingredients={recipe.ingredients} />
          </div>
          <div className="recipe-sidebar">
            <NutritionFacts nutrition={recipe.nutrition} />
            <NewsletterSignup />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App