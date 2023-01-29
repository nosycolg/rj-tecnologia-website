import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Login from "./pages/login";
import { motion } from "framer-motion";

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
        <Route path="services" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="sign-up" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
