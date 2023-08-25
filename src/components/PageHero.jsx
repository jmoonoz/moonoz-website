import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Slides from "../Images/background2.png";

export default function PageHero({ heroTitle = "" }) {
  return (
    <section className="hero hero-style-1">
      <div className="slide">
        <div className="slider-image">
          <img src={Slides} />
        </div>
        <Container>
          <Row>
            <Col sm={12} md={8} className="slide-caption">
              <div className="slide-title">
                <h2>{heroTitle}</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
