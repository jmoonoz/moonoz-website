import React from "react";
import PageHero from "../Components/PageHero";
import ContactSection from "../Components/ContactSection";
import { Container, Col, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <PageHero heroTitle={"Reach Me Here"} />
      <ContactSection />
      
    </div>
  );
}
