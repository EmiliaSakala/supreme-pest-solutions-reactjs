import React from "react";
import {Routes, Route} from 'react-router-dom'; 
import Home from "./components/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
