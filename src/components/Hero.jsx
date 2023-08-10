import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Btn from "./Btn";
import styled from "styled-components";
import PText from "./PText";
import "../style/hero.css";

const HeroStyled = styled.div``;

export default function Hero() {
  return (
    <HeroStyled>
      <section className="hero hero-slider-wrapper hero-style-1">
        <div className="hero-slider">
          <div className="slide">
            {/* <div className="slider-image">
              <img src={Slides} />
            </div> */}
            <Container className="hero-section" id="Home">
              <Row className="">
                <Col sm={12} md={8} className="slide-caption">
                  <div className="slide-subtitle">
                    <h4>I am Joel Muñoz</h4>
                  </div>
                  <div className="slide-title">
                    <div>Creative Designer</div>
                  </div>
                  <div className="btn-alignment">
                    <Btn
                      variant="outline-danger"
                      text="About Me"
                      link="/About"
                    />
                    <Btn variant="outline-light" text="Hire Me" link="/" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </HeroStyled>
  );
}
