import "../Styles/Footer.css";
import logo1 from "../assets/sitelogo.png";
import twitterIcon from "../assets/Twitter.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import youtubeIcon from "../assets/Youtube.png";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2 className="footer-logo">
                        <img src={logo1} alt="Savory Scrolls Logo" />
                    </h2>
                    <p className="footer-description">
                        Cooking is more than just a recipe; it’s an art, a story, and a connection to cultures 
                        and traditions. Share, explore, and savor the joy of flavors from every corner of the world.
                    </p>
                </div>
                <div>
                <div className="footer-links">
                    
                    <div className="footer-column">
                        <h3 className="footer-heading">Savory Scrolls</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Feedback</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading">Legal</h3>
                        <ul>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Conditions</a></li>
                            <li><a href="#">Cookies</a></li>
                            <li><a href="#">Copyright</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading">Follow</h3>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Youtube</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social-icons">
                            <img src={facebookIcon} alt="Facebook" className="social-icon" />
                            <img src={twitterIcon} alt="Twitter" className="social-icon" />
                            <img src={instagramIcon} alt="Instagram" className="social-icon" />
                            <img src={youtubeIcon} alt="YouTube" className="social-icon" />
                  </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Savory Scrolls - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
