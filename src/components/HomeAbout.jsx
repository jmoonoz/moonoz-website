import React from "react";
import TopSectionDivider from "./TopSectionDivider";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";
import Btn from "./Btn";

const HeroAboutStyled = styled.div`
  .hero-Name {
    display: flexbox;
    flex-direction: row;
  }
  .padding-Bottom {
    width: 50%;
    border-bottom: 1px solid;
    color: #cacaca;
    opacity: 0.75;
    margin-bottom: 5%;
    margin-left: 15px;
  }
`;

export default function HomeAbout() {
  return (
    <HeroAboutStyled>
      <Container>
        {/* <TopSectionDivider /> */}
        <Row>
          <Col xs={2} md={2} xl={2}></Col>
          <Col xs={10} md={6} xl={4} className="hero-Name">
            <Title sectionTitle="About Me" />
            <div className="padding-Bottom"></div>
          </Col>
        </Row>
        <Row>
        <Col xs={2} md={2} xl={2}></Col>
          <Col xs={10} md={6} xl={4} >
            <p>Over 5+ years experince in software progrmaing and grapbhics designs, I enjoy making the internet more fun! </p>
            <Btn variant="outline-light" text="About Me" link="/About" />
          </Col>
        </Row>
      </Container>
    </HeroAboutStyled>
  );
}
