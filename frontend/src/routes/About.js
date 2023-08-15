import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Whoarewe from "../components/Whoarewe";

const About = () => {
  return (
    <>
      <div>
        <Header />
        <HeroImg2 heading="About Us" text="About us section" />
        <Whoarewe />
        <Footer />
      </div>
    </>
  );
};

export default About;
