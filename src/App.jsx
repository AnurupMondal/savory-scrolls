import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Home from "./pages/Home";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import RecipeForm from "./pages/RecipeForm";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "243186405987-c4cmf94q6qf1v1kjirbnu3h2vt4shdir.apps.googleusercontent.com";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={clientId}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="/recipe-form" element={<RecipeForm />} />
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
