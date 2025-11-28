import React from "react";
import {Routes, Route} from 'react-router-dom'; 
import Home from "./components/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";
// import Stats from "./components/stats/stats.jsx";
import Values from "./components/values/values.jsx";
import Services from "./components/services/Services.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Values />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
