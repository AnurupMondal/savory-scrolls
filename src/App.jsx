import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Home from './pages/Home';
import './App.css';
import RecipeDetailsPage from './pages/RecipeDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Redirect from "/" to "/home" */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/recipeDetail" element={<RecipeDetailsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
