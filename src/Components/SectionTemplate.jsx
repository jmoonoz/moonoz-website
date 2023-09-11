import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Slides from "../Images/background2.png";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

export default function SectionTemplate({ idName, children }) {
  return (
    <AnimatePresence>
      <section id={idName} className="section-style">
        <div className="section-Height">
          <Container>
            {children}
            <Footer />
          </Container>
        </div>
      </section>
    </AnimatePresence>
  );
}
