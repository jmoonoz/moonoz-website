import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";


const HeroAboutStyled = styled.div`
  .hero-Name {
    display: flex;
    flex-direction: column;
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
    <section id="About">
      <HeroAboutStyled>
        <Container>
          {/* <TopSectionDivider /> */}
          <Row>
            <Col xs={2} md={2} xl={2}></Col>
            <Col xs={10} md={6} xl={4}>
              <TitleSection titleName="About me" />
              <PText>
                Over 5+ years experince in software progrmaing and grapbhics
                designs, I enjoy making the internet more fun!{" "}
              </PText>
              <Btn variant="outline-light" text="About Me" link="/About" />
            </Col>
          </Row>
        </Container>
      </HeroAboutStyled>
    </section>
  );
}
