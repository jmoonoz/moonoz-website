import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Btn from "./Btn";
// import Slides from "../Images/background2.png";
// import TextLink from "./TextLink";
import "../style/hero.css";
import "../style/Responsive.css";

export default function Hero() {
  return (
    <section id="Home" className="hero hero-style-1">
      <div className="slide">

        <Container>
          <Row>
            <Col sm={12} md={8} className="slide-caption">
              <div className="slide-subtitle col-direction">
                <h4 className="name-title">Joel Muñoz</h4>
                <div className="title-line"></div>
              </div>
              <div className="slide-title">
                <h2>Creative Designer</h2>
              </div>
              <div className="btn-alignment col-direction">
                <Btn variant="outline-danger" text="About Me" link="/About" />
                <Btn variant="outline-light" text="Hire Me" link="/" />
              </div>
              {/* <TextLink link="/About" title="About" />
            <TextLink link="/Project" title="Project" />
            <TextLink link="/Contact" title="Contact" /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
