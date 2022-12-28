import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('/');
    return (
        <Navbar fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href="/">Moonoz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div className="vr" />
                        <Nav.Link href="/" className={activeLink === '/' ? "active navbar-link" : "navbar-link"}>Home</Nav.Link>
                        <Nav.Link href="/About" className={activeLink === '/About' ? "active navbar-link" : "navbar-link"}>About</Nav.Link>
                        <Nav.Link href="/Projects" className={activeLink === '/Projects' ? "active navbar-link" : "navbar-link"}>Projects</Nav.Link>
                        <Nav.Link href="/Contact" className={activeLink === '/Contact' ? "active navbar-link" : "navbar-link"}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
