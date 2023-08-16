import React from "react";
import TopSectionDivider from "../Components/TopSectionDivider";
import HomeAbout from "../Components/HomeAbout";
import styled from "styled-components";

const AboutStyled = styled.div`
  .dummy-banner {
    height: 1000px;
  }
  .dummysection {
    height: 1000px;
    background-color: #fff;
  }
`;

export default function About() {
  return (
    <AboutStyled>
      <div className="dummy-banner"></div>
      <div className="dummysection">
        <TopSectionDivider />
      </div>
    </AboutStyled>
  );
}
