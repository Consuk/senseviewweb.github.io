import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/home";
import Prices from "./Pages/Prices/Prices.js";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <Navbar />
        <div className="main-content">
          {/* Other Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Prices />} />
            <Route path="/faq" element={<div>Preguntas Frecuentes</div>} />
            <Route path="/contact" element={<div>Contacto</div>} />
            <Route path="/about" element={<div>Sobre Nosotros</div>} />
          </Routes>
        </div>
        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}


export default App;

