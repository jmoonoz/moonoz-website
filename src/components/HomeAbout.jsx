import React from "react";
import TopSectionDivider from "./TopSectionDivider";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const HeroAboutStyled = styled.div`
  height: 1000px;
`;

export default function HomeAbout() {
  return (
    <HeroAboutStyled>
      <Container>
        {/* <TopSectionDivider /> */}
        <div>HeroAbout</div>
      </Container>
    </HeroAboutStyled>
  );
}
