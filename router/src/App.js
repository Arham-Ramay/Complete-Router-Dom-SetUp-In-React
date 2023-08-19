// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

//useNavigation Hook
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
