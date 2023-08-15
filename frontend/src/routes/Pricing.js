import React from "react";
import Header from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <>
      <div>
        <Header />
        <HeroImg2
          heading="Pricing"
          text="You will find details about our packages on this page"
        />
        <h1 className="d-flex justify-content-center">Packages</h1>
        <PricingCard />
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
