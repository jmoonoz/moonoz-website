import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "../components/Hero";
import AboutPhoto from "../Images/about.png";
import HomeAbout from "../Components/HomeAbout";
import HomeProject from "../components/HomeProject";
import HomeSection from "../components/HomeSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="home-about" id="about">
        <Container>
          <Row className="justify-content-between">
            <Col xl={6} lg={6} className="hx-about-content" >
              <div className="col-about">
                <div className="hx-site-title">
                  <span>Expert Web Developer & Designer</span>
                  <h2>About Me</h2>
                  <div className="about-line"></div>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum by injected humour, or randomised words which
                  don't look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum
                </p>
                <p>
                  There isn't anything embarrassing hidden in the middle of
                  text. All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined chunks as necessary you need to be sure
                </p>
                <div className="btns">
                  <a href="#" className="theme-btn">
                    Download CV
                  </a>
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
      </section>
      <Container></Container>
    </div>
  );
}
