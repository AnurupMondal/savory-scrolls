import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Use Link instead of <a>
import { Search } from "lucide-react";
import "../styles/Navbar.css";
import logo from "../assets/sitelogo.png";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setScrolling(false);
        setScrollDirection(null);
      } else {
        setScrolling(true);
        if (currentScrollY > lastScrollY) {
          setScrollDirection("down"); // Hides navbar
        } else {
          setScrollDirection("up"); // Shows navbar
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "floating" : "top"} ${scrollDirection === "down" ? "hidden" : "visible"}`}>
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Savory Scrolls Logo" className="logo-image" />
      </Link>

      <div className="navbar-links">
        {["Home", "Recipes", "Popular", "Buy"].map((item) => (
          <Link key={item} to={`/${item.toLowerCase()}`} className="nav-link">
            {item}
          </Link>
        ))}
      </div>

      <div className="navbar-actions">
        <Search className="search-icon" />
        <button className="p-2" onClick={() => navigate("/signup")}>
          Login/Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;