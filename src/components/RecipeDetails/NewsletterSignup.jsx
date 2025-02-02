import { useState } from "react";
import "../../Styles/RecipeDetails/NewsletterSignup.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  // Strict Email Validation: Ensures format "<text>@<text>.com"
  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isValidEmail(email)) {
      setMessage({ text: "Email must be in the format example@domain.com", type: "error" });
      return;
    }
  
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
  
      setMessage({ text: "Thank you for subscribing!", type: "success" });
      setEmail(""); 
    } catch (error) {
      console.error("Newsletter signup failed:", error); // Logs the error
      setMessage({ text: "Something went wrong. Please try again.", type: "error" });
    }
  };  

  return (
    <div className="newsletter-signup">
      <h2 className="newsletter-title">Deliciousness to your inbox</h2>
      <p className="newsletter-description">Enjoy weekly hand-picked recipes and recommendations</p>

      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage({ text: "", type: "" }); // Clear message when user starts typing
          }}
          placeholder="Email address"
          className="newsletter-input"
          required
        />
        <button type="submit" className="newsletter-button">
          Join
        </button>
      </form>

      {/* Message Display */}
      {message.text && <p className={`newsletter-message ${message.type}`}>{message.text}</p>}
    </div>
  );
};

export default NewsletterSignup;
