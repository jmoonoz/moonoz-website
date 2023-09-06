import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { AnimatePresence } from "framer-motion";

function AnimatedRoute() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/Blog" element={<Projects />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoute;
