import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Btn from "./Btn";
import styled from "styled-components";

import { useState, useEffect } from "react";

const HeroStyled = styled.div`
  .center-items {
    margin: 0 auto;
  }
  .left-Col {
    line-height: 5;
  }

  .hero-Name {
    display: flex;
    flow-direction: row;
    text-align: center;
  }
  .hero-section {
    margin-top: 0;
    padding: 260px 0 100px 0;
    height: 100vh;
  }
  .hero-text {
    padding: 0 10px;
    margin: 0 auto;
  }
  .btn-alignment {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-around;
  }
  .name {
    color: #fff;
    font-weight: 600;
    font-size: clamp(40px, 8vw, 80px);
  }
  h6 {
    font-family: var(--font-mono);
    font-weight: 400;
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    opacity: 0.95;
  }
  p {
    line-height: 1.5;
    width: 65%;
    font-weight: 200;
  }
`;

export default function Hero() {
  return (
    <HeroStyled>
      {/* <section > */}
      <Container className="hero-section" id="Home">
        <Row className="">
          {/* extra col for spacing */}
          <Col xs={0} md={2} xl={1}></Col>
          <Col xs={12} md={5} xl={7} className="left-Col" >
            <div className="hero-Name">
              <h6>Hola, I'm </h6>
              {/* <div className="vr" /> */}
            </div>
            <h1 className="name">Joel Muñoz</h1>
            <h1>Software Engineer / Graphic Designer</h1>
            <p>
              Creative software engineer with heavy experience as a Front End
              Web Developer. I enjoy creating digital art from writing
              scriptures to modifying the perfect node curve.
            </p>
            <div className="btn-alignment">
              <Btn variant="outline-danger" text="About Me" link="/About" />
              <Btn variant="outline-light" text="Hire Me" link="/" />
            </div>
          </Col>
          <Col xs={12} md={6.5} xl={4}>
            
          </Col>
        </Row>
      </Container>
      {/* </section> */}
    </HeroStyled>
  );
}
