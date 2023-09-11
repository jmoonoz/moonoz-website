import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Hero from "../Components/Hero";
import Contact from "../Components/ContactSection";
import ProjectSection from "../Components/ProjectSection";

export default function Home() {
  const newURL = window.location.pathname;
  console.log(newURL);
  return (
    <div>
      <Hero />
    </div>
  );
}
