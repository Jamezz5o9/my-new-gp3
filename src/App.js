import React from 'react';
// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar, Navbartwo } from './components';
import './App.css';
import NavBar from './Payment/component/Navbar';
import {BrowserRouter as Router} from "react-router-dom"

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

    <NavBar />

  </Router>
  )
}

export default App