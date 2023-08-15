import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div>
        <Header />
        <HeroImg2 heading = "Contact Us" text = "Contact Us section" />
        <ContactForm/>
        <Footer />
      </div>
      
    </>
  );
};

export default Contact;
