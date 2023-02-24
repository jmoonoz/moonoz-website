import React from "react";
import TitleSection from "./TitleSection";
import Btn from "./Btn";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const HomeProjectStyled = styled.div``;

function HomeProject() {
  return (
    <HomeProjectStyled>
      <Container>
        <Row>
          <Col xs={2} md={2} xl={2}></Col>
          <Col xs={10} md={6} xl={4}>
            <TitleSection titleName="Projects" />
            <Btn variant="outline-light" text="Projects" link="/Project" />
          </Col>
        </Row>
      </Container>
    </HomeProjectStyled>
  );
}

export default HomeProject;
