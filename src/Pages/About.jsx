import React from "react";
import AboutPhoto from "../Images/Joel-disney.png";
import PageHero from "../Components/PageHero";
import { Button, Container, Col, Row } from "react-bootstrap";
import SectionTemplate from "../Components/SectionTemplate";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "../animation";

export default function About() {
  return (
    <SectionTemplate idName={"about"}>
      <PageHero heroTitle="Get to Know Me" />
      <Row>
        <Col xl={6} lg={6} className="hx-about-content col-hidden">
          <div className="col-about">
            <div className="hx-site-title">
              <motion.div variants={slideInLeft}>
                <span>Expert Web Developer & Designer</span>
                <h2 className="section-title">Get to Know Me</h2>
              </motion.div>
            </div>
            <motion.div variants={slideInLeft}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum by injected humour, or randomised words which don't look
                even slightly believable. If you are going to use a passage of
                Lorem Ipsum
              </p>
              <p>
                There isn't anything embarrassing hidden in the middle of text.
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary you need to be sure
              </p>
            </motion.div>
            <motion.div variants={slideInLeft} className="btns">
              <Button variant="outline-light">Download CV</Button>
            </motion.div>
          </div>
        </Col>
        <Col className="col-img" lg={5} xl={5}>
          <motion.div variants={slideInRight} className="hx-about-img">
            <motion.img
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              // transition={{ duration: 0.5 }}
              src={AboutPhoto}
            />
          </motion.div>
        </Col>
      </Row>
    </SectionTemplate>
  );
}
