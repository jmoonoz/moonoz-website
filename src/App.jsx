import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects';
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
