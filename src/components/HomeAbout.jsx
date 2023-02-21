import React from "react";
import TopSectionDivider from "./TopSectionDivider";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";

const HeroAboutStyled = styled.div`
  height: 1000px;
`;

export default function HomeAbout() {
  return (
    <HeroAboutStyled>
      <Container>
        {/* <TopSectionDivider /> */}
        <Row>
          <Col xs={2} md={2} xl={2}></Col>
          <Col xs={10} md={3} xl={4} className="hero-Name">
            <Title sectionTitle="About Me" />
            </Col>
        </Row>
      </Container>
    </HeroAboutStyled>
  );
}
