import React from "react";
import Header from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Whoarewe from "../components/Whoarewe";
import FeaturedProjects from "../components/FeaturedProjects";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <HeroImg />
        <Whoarewe />
        <FeaturedProjects/>
        <Footer/> 
      </div>
    </>
  );
};

export default Home;
