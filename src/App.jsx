import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/App.css";
import "./Style/Responsive.css";
import SocialMenu from "./Components/SocialMenu";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import AnimatedRoute from "./Components/AnimatedRoute";

function App() {

  return (
    <Router>
      <NavBar />
      <SocialMenu />
      <AnimatedRoute />
    </Router>
  );
}

export default App;
