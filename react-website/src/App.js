import React, { useState, useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Login from "./pages/login";
import PulseLoader from "react-spinners/PulseLoader";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const override: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  };
  return (
    <>
      {loading ? (
        <PulseLoader
          color={"#f91600"}
          loading={loading}
          cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
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
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
