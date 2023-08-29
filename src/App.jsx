import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/App.css";
import "./Style/Responsive.css";
import SocialMenu from "./Components/SocialMenu";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <Router>
          <NavBar />
          <SocialMenu />
          <Routes key={location.pathname} >
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
