import React from "react";
import TitleSection from "./TitleSection";
import PText from "./PText";
import styled from "styled-components";
import Btn from "./Btn";
import { Container, Row, Col } from "react-bootstrap";

const HomeSectionStyled = styled.div`
  padding-top: 5rem;
`;

function HomeSection({ pageName, pageLink, bodyText }) {
  return (
    <HomeSectionStyled>
      <Container>
        <Row>
          <Col xs={1} md={2} xl={1.5}></Col>
          <Col xs={10} md={6} xl={4}>
            <TitleSection titleName={pageName} />
            <PText>{bodyText}</PText>
            <Btn variant="outline-light" text={pageName} link={pageLink} />
          </Col>
          <Col xs={1} md={2} xl={6}></Col>
        </Row>
      </Container>
    </HomeSectionStyled>
  );
}

export default HomeSection;
