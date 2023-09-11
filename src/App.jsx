import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css"
import "./style/Responsive.css";
import SocialMenu from "./Home/Components/SocialMenu";
import NavBar from "./Home/Components/NavBar";
import Footer from "./Home/Components/Footer";
import AnimatedRoute from "./Home/Components/AnimatedRoute";

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
