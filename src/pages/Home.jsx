import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import "../Styles/Home/Home.css"
import Categories from "../components/Home/Categories";
import Newsletter from "../components/Home/Newsletter";
import Browse from "../components/Home/Browse";
// import Pagination from "../components/Home/Pagination";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Categories />
      <Newsletter />
      <Browse />
      {/* <Pagination /> */}
      <Footer />
    </div>
  );
};

export default Home;
