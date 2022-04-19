import React, { useState } from "react";
import NavBar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import HeroSection from "../component/HeroSection";
import InfoSection from "../component/InfoSection";
import { homeObjOne } from "../component/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
    </>
  );
};

export default Home;
