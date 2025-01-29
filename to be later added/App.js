import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </Router>
  );
};

const RecipePage = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;