import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/App.css"
import "./Style/Responsive.css";
import SocialMenu from "./Components/SocialMenu";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import AnimatedRoute from "./Components/AnimatedRoute";

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <Router>
        <NavBar />
        <SocialMenu />
        <AnimatedRoute />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
