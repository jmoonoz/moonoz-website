import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";


export default function SectionTemplate({ idName, children }) {
  return (
    <AnimatePresence>
      <section id={idName} className="section-style">
        <div className="section-Height">
          <Container>
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ delayChildren: .2, staggerChildren: 0.2 }}
            >
              {children}
              <Footer />
            </motion.div>
          </Container>
        </div>
      </section>
    </AnimatePresence>
  );
}
