import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Slides from "../Images/background2.png";
import Footer from "../Components/Footer";

export default function SectionTemplate({ idName, children }) {
  return (
    <section id={idName} className="section-style">
      <div className="section-Height">
        <Container>{children}</Container>
      <Footer />
      </div>
    </section>
  );
}
