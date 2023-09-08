import React from "react";
import AboutPhoto from "../Images/Joel-disney.png";
import PageHero from "../Components/PageHero";
import { Button, Container, Col, Row } from "react-bootstrap";
import SectionTemplate from "../Components/SectionTemplate";
import { motion } from "framer-motion";

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
              <span >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum by injected humour, or randomised words which don't look
                even slightly believable. If you are going to use a passage of
                Lorem Ipsum
              </span>
              <span >
                There isn't anything embarrassing hidden in the middle of text.
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary you need to be sure
              </span>
            </p>
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
      {/* </motion.div> */}
    </SectionTemplate>
    // <div>
    //   <PageHero heroTitle={"The Person Behind the Profile"} />
    //   <AboutStyled>
    //     <section className="home-about" id="About">
    //       <Container>

    //       </Container>
    //     </section>
    //   </AboutStyled>
    // </div>
  );
}

{
  /* <div>
<PageHero heroTitle={"The Person Behind the Profile"} />
<AboutStyled>
  <section className="home-about" id="About">
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
  </section>
</AboutStyled>
</div> */
}
