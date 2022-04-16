import React from 'react';
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar, Navbartwo } from './components';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Home from "../src/Payment/pages";


const App = () => {
  return (
    <Router>
      {/* <Navbartwo />
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer /> */}
    <Home />
    

  </Router>
  )
}

export default App