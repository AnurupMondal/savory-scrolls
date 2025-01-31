import React, { useState } from "react";
import "../../Styles/Newsletter.css";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubscribe = () => {
        if (validateEmail(email)) {
            setMessage("Thank you for subscribing!");
            setEmail("");
        } else {
            setMessage("Please enter a valid email address.");
        }
    };

    return (
        <div className="newsletter-container">
            <h2 className="newsletter-title">Deliciousness to your inbox</h2>
            <p className="newsletter-subtitle">
                Enjoy weekly hand-picked recipes and recommendations
            </p>
            <div className="newsletter-form">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="newsletter-input" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="newsletter-button" onClick={handleSubscribe}>JOIN</button>
            </div>
            {message && <p className="newsletter-message">{message}</p>}
            <p className="newsletter-terms">
                By joining our newsletter you agree to our{" "}
                <a href="#" className="terms-link">Terms and Conditions</a>
            </p>
        </div>
    );
};

export default Newsletter;