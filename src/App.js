import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/home";
import Prices from "./Pages/Prices/Prices.js";
import Faq from "./Pages/FAQ&Support/FAQnSupport.js"
import Contact from "./Pages/Contact/Contact.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      <div className="main-content">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Prices />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<div>Sobre Nosotros</div>} />
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
