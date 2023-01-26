import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";

function App() {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="services" element={<services />} />
      </Routes>
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
