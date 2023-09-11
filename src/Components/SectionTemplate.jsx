import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

export default function SectionTemplate({ idName, children }) {
  return (
    <AnimatePresence>
      <section id={idName} className="section-style">
        <div className="section-Height">
          <motion.div
            key="wait"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Container>
              {children}
              <Footer />
            </Container>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
}
