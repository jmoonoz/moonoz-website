import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Hero from "../Components/Hero";
import Contact from "../Components/ContactSection";
import ProjectSection from "../Components/ProjectSection";
import transition from "../transition";

function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
export default transition(Home);
