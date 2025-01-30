import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
// import Categories from "../components/Home/Categories";
// import Newsletter from "../components/Home/Newsletter";
// import Recipes from "../components/Home/Recipes";
// import Pagination from "../components/Home/Pagination";
// import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <Categories />
      <Newsletter />
      <Recipes />
      <Pagination />
      <Footer /> */}
    </div>
  );
};

export default Home;
