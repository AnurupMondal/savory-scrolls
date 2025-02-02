import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Home from "./pages/Home";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Home/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main className="main-content"> {/* Wrapper for routed content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
