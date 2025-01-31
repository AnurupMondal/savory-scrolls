import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "../styles/Navbar.css";
import logo from "./assets/savoryscrolls.png";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

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
      <a href="/" className="navbar-logo">
        <img src={logo} alt="Savory Scrolls Logo" className="logo-image" />
      </a>

      <div className="navbar-links">
        {["Homepage", "Recipes", "Popular", "Buy"].map((item) => (
          <a key={item} href={`/${item.toLowerCase()}`} className="nav-link">
            {item}
          </a>
        ))}
      </div>

      <div className="navbar-actions">
        <Search className="search-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
