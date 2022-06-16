import React, { useState } from "react";
import About from "../components/About/About";
import { aboutObjOne, discoverObjOne, guideObjOne } from "../components/About/Data.js";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Topbar from "../components/Topbar/Topbar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About {...aboutObjOne} />
      <About {...discoverObjOne} />
      <Services/>
      <About {...guideObjOne} />
    </>
  );
};

export default Home;
