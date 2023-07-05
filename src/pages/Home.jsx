import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeProject from "../components/HomeProject";
import HomeSection from "../components/HomeSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeSection
        pageName="About"
        pageLink="/About"
        bodyText="Over 5+ years experince in software progrmaing and grapbhics
              designs, I enjoy making the internet more fun!"
      />
      <HomeSection
        pageName="Projects"
        pageLink="/Project"
        bodyText="See some of the work I have created"
      />
      <Container>
        
      </Container>
    </div>
  );
}
