import { Route, Routes } from "react-router-dom";
import "./index.css";
import React from "react"
import Home from "./routes/Home";
import About from "./routes/About";
import Publications from "./routes/Publications";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/about" element={<About />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
