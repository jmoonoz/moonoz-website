import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../style/navStyles.css";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const [scroll, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" fixed="top" className={scroll ? "scrolled" : ""}>
      <Container fluid>
        <Navbar.Brand href="/">Moonoz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {/* <span className="navbar-toggle-icon">

                    </span> */}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="vr" />
            <Nav.Link
              href="/"
              className={
                activeLink === "/" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("/")}
            >
              <div className="hvr-underline-from-left">Home</div>
            </Nav.Link>
            <Nav.Link
              href="/About"
              className={
                activeLink === "/About" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("/About")}
            >
              <div className="hvr-underline-from-left">About</div>
            </Nav.Link>
            <Nav.Link
              href="/Projects"
              className={
                activeLink === "/Projects"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("/Projects")}
            >
              <div className="hvr-underline-from-left">Projects</div>
            </Nav.Link>
            <Nav.Link
              href="/Contact"
              className={
                activeLink === "/Contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("/Contact")}
            >
              <div className="hvr-underline-from-left">Contact</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
