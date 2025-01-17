import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/home";
import Prices from "./Pages/Prices/Prices.js";
import Faq from "./Pages/FAQ&Support/FAQnSupport.js";
import Contact from "./Pages/Contact/Contact.js";
import About from "./Pages/AboutUs/AboutUs.js";
import Services from "./Pages/Services/Services.js";
import IndustrialVariables from "./Pages/IndustrialVariables/IndustrialVariables.js";
import ProductionMetrics from "./Pages/ProductionMetrics/ProductionMetrics.js";
import HowItWorks from "./Pages/HowItWorks/HowItWorks.js";
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
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/industrial-variables" element={<IndustrialVariables />} />
          <Route path="/services/production-metrics" element={<ProductionMetrics />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
