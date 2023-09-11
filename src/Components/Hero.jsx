import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Btn from "./Btn";
import "../Style/hero.css";
import "../Style/Responsive.css";

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
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
