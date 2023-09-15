import React from "react";
import AboutPhoto from "../Images/Joel-disney.png";
import PageHero from "../Components/PageHero";
import { Button, Container, Col, Row } from "react-bootstrap";
import SectionTemplate from "../Components/SectionTemplate";
import { motion } from "framer-motion";
import FadeInLeft from "../Components/FadeInLeft";

export default function About() {
  return (
    <SectionTemplate idName={"about"}>
      <PageHero heroTitle="Get to Know Me" />
      <Row >
        <Col xl={6} lg={6} className="hx-about-content col-hidden">
          <div className="col-about">
            <div className="hx-site-title">
              <span>Expert Web Developer & Designer</span>
              <h2 className="section-title">Get to Know Me</h2>
            </div>
            <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum by injected humour, or randomised words which don't look
                even slightly believable. If you are going to use a passage of
                Lorem Ipsum
            </p>
            <motion.p
              key="wait"
              initial={{ x: "-100%", filter: "blur(5px)" }}
              animate={{ x: 0, filter: "blur(0px)" }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 1.25,
                delay: 0.5,
                ease: [0, 0.61, 0.2, 1.01],
              }}
              className="animation-dur"
            >
              There isn't anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary you need to be sure
            </motion.p>
            <div className="btns">
              <Button variant="outline-light">Download CV</Button>
            </div>
          </div>
        </Col>
        <Col className="col-img" lg={5} xl={5}>
          <motion.div
            initial={{ x: "300%" }}
            animate={{ x: 0 }}
            exit={{ x: "300" }}
            transition={{ duration: 1 }}
            className="hx-about-img"
          >
            <motion.img
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
              src={AboutPhoto}
            />
          </motion.div>
        </Col>
      </Row>
    </SectionTemplate>
  );
}
