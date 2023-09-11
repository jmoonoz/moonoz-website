import React from "react";
import AboutPhoto from "../Images/Joel-disney.png";
import PageHero from "../Components/PageHero";
import { Button, Col, Row } from "react-bootstrap";
import SectionTemplate from "../Components/SectionTemplate";
import { motion } from "framer-motion";
import FadeInLeft from "../Components/FadeInLeft";

export default function About() {
  return (
    <SectionTemplate idName={"about"}>
      <PageHero heroTitle="Get to Know Me" />
      <Row className="justify-content-between">
        <Col xl={6} lg={6} className="hx-about-content">
          <div className="col-about">
            <div className="hx-site-title">
              <span>Expert Web Developer & Designer</span>
              <h2 className="section-title">Get to Know Me</h2>
            </div>
            <p>
              <FadeInLeft seconds={2}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum by injected humour, or randomised words which don't look
                even slightly believable. If you are going to use a passage of
                Lorem Ipsum
              </FadeInLeft>
            </p>
            <motion.p
            key="wait"
              initial={{ x: "-100%" , opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100$", opacity: 0 }}
              transition={{ duration: 2 }}
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
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className="hx-about-img"
          >
            <motion.img
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              src={AboutPhoto}
            />
          </motion.div>
        </Col>
      </Row>
    </SectionTemplate>
  );
}
