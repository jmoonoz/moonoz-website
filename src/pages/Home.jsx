import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Hero from "../Components/Hero";
import AboutPhoto from "../Images/Joel-disney.png";
import Contact from "../Components/ContactSection";
import ProjectSection from "../Components/ProjectSection";


export default function Home() {
  return (
      <div>
        <Hero />
        {/* About */}
        {/* <section className="home-about" id="About">
          <Container>
            <Row className="justify-content-between">
              <Col xl={6} lg={6} className="hx-about-content">
                <div className="col-about">
                  <div className="hx-site-title">
                    <span>Expert Web Developer & Designer</span>
                    <h2 className="section-title">Get to Know Me</h2>
                  </div>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum by injected humour, or randomised
                    words which don't look even slightly believable. If you are
                    going to use a passage of Lorem Ipsum
                  </p>
                  <p>
                    There isn't anything embarrassing hidden in the middle of
                    text. All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary you need to be sure
                  </p>
                  <div className="btns">
                    <Button variant="outline-light">Download CV</Button>
                  </div>
                </div>
              </Col>
              <Col className="col-img" lg={5} xl={5}>
                <div className="hx-about-img">
                  <img src={AboutPhoto} />
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        {/* Services */}
        {/* <section id="Services">
          <Container>
            <div className="section-title-alignment">
              <span>My Services</span>
              <h2 className="section-title-center">
                The Ultimate Creative Techie
              </h2>
              <Row>
                <Col></Col>
              </Row>
            </div>
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </section> */}
        {/* <Portfolio /> */}
        {/* <ProjectSection /> */}
        {/* Contact */}
        {/* <Contact /> */}
      </div>

  );
}
