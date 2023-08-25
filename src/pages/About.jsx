import React from "react";
import TopSectionDivider from "../Components/TopSectionDivider";
import HomeAbout from "../Components/HomeAbout";
import styled from "styled-components";
import PageHero from "../Components/PageHero";

const AboutStyled = styled.div``;

export default function About() {
  return (
    <div>
      <PageHero heroTitle={"The Person Behind the Profile"} />
      <AboutStyled></AboutStyled>
    </div>
  );
}
