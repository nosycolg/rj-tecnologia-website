import React, { useState, useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Footer from "./components/Footer/footer";
import logo from "./images/logo.png";
import {motion as m} from 'framer-motion';
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="LoadScene">
        <m.img src={logo} 
          className="imgloading"
          initial={{ opacity: 0, width: "60%" }}
          animate={{ opacity: 100, width: "40%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}       
        />
        </div>
      ) : (
        <div className="app">
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
        </div>
      )}
    </>
  );
}

export default App;
