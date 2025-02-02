import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/SignUp.css";
import facebookLogo from "../../assets/facebooklogo.png";
import googleLogo from "../../assets/googlelogo.png";
import logo1 from "../../assets/sitelogo.png";

const Signup = () => {
    const [isSignup, setIsSignup] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="login-signup-page">
            <div className={`login-signup-container ${isSignup ? "signup-mode" : "login-mode"}`}>
                <div className="left-section">
                    <h1>
                        <div className="brand">
                            <img src={logo1} alt="Savory Scrolls Logo" className="brand-logo" />
                        </div>
                    </h1>
                    <p className="tagLine">
                        {isSignup
                            ? "Join us on a flavorful adventure! Sign up now to explore irresistible recipes and create personalized culinary memories."
                            : "Welcome back! Let’s dive into more delicious discoveries and unforgettable cooking moments together!"}
                    </p>
                </div>
                <div className="right-section">
                    <div className="close-button">
                    <button onClick={() => navigate("/")}>✖</button>
                    </div>
                    <h2>{isSignup ? "Create an Account" : "Log In"}</h2>
                    <div className="social-login-container">
                        <img src={facebookLogo} alt="Facebook" className="social-logo" />
                        <img src={googleLogo} alt="Google" className="social-logo" />
                    </div>
                    <div className="or-divider-container">
                        <div className="line"></div>
                        <p className="or-divider">OR</p>
                        <div className="line"></div>
                    </div>
                    <form className={isSignup ? "expanded-form" : "compact-form"}>
                        {isSignup && (
                            <div className="input-group">
                                <label htmlFor="full-name">Full Name</label>
                                <input id="full-name" type="text" placeholder="Enter your full name" required />
                            </div>
                        )}
                        <div className="input-group">
                            <label htmlFor="email">E-mail Address</label>
                            <input id="email" type="email" placeholder="Enter your e-mail" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" placeholder="Enter password" required />
                        </div>
                        {isSignup && (
                            <div className="input-group">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input id="confirm-password" type="password" placeholder="Confirm password" required />
                            </div>
                        )}
                        <button type="submit">{isSignup ? "Sign Up" : "Log In"}</button>
                    </form>
                    <p className="toggle-auth">
                        {isSignup ? "Already have an account?" : "Don't have an account?"} {" "}
                        <span onClick={() => setIsSignup(!isSignup)} className="small-login-btn">
                            {isSignup ? "Log In" : "Sign Up"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
