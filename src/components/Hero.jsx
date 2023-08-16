import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Btn from "./Btn";
import styled from "styled-components";
import PText from "./PText";
import Slides from "../Images/slide-2.jpg";
import "../Style/hero.css";
// import "../index.css"

export default function Hero() {
  return (
    <section id="Home" className="hero hero-slider-wrapper hero-style-1">
      <div className="hero-slider">
        <div className="slide">
          <div className="slider-image">
            <img src={Slides} />
          </div>
          <Container>
            <Row>
              <Col sm={12} md={8} className="slide-caption">
                <div className="slide-subtitle col-direction">
                  <h4 className="name-title">I Am Joel Muñoz</h4>
                  <div className="title-line"></div>
                </div>
                <div className="slide-title">
                  <h2>Creative Designer</h2>
                </div>
                <div className="btn-alignment col-direction">
                    <Btn
                      variant="outline-danger"
                      text="About Me"
                      link="/About"
                    />
                    <Btn variant="outline-light" text="Hire Me" link="/" />
                  </div>
                {/* <div className="btns">
                  <a href="#contact" className="theme-btn go-contact-area">
                    Contact Me
                  </a>
                </div> */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}
