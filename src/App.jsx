import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/footer.jsx";

import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Values from "./components/values/values.jsx";
import Services from "./components/services/Services.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx";


// ---------------------------------PAGES----------------///////////////////////////////////////////////////////////////////////-----------------
import Aboutpage from "./pages/aboutus/Aboutus.jsx";
import Servicespage from "./pages/services/services.jsx"; 
import Contactpage from "./pages/contact/contact.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Values />
              <Services />
              <Testimonials />
            </>
          }
        />

        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicespage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
