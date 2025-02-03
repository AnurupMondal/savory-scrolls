import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Home from "./pages/Home";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import RecipeForm from "./pages/RecipeForm";
import "./App.css";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        <Route path="/recipe-form" element={<RecipeForm />} />
      </Routes>
    </div>
  );
}

export default App;
