import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import SocialMenu from "./components/SocialMenu";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <SocialMenu />
        <Routes>
          <Route path="/Blog" element={<Projects />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
