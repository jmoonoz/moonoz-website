import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import HeroIcon from "./HeroIcon";
import styled from "styled-components";

const FooterStyled = styled.div``;

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  // console.log(date.getFullYear());

  return (
    <section className="footer-section">
      <Container>
        <Row>
          <Col className="footer-icon" sm={12} md={12} lg={12} xl={12}>
            <HeroIcon
              icon={<FaLinkedinIn />}
              link="https://www.linkedin.com/in/moonoz/"
            />
            <HeroIcon
              icon={<AiFillGithub />}
              link="https://github.com/jmoonoz"
            />
            <HeroIcon
              icon={<GrInstagram />}
              link="https://www.instagram.com/moonozdisenoz/"
            />
          </Col>
          <Col sm={12} md={12} lg={12} xl={12}>
            <div className="footer-sub">
              <p>
                <i className="fa fa-copyright"></i>©{year}
                <span> Developed and Designed by Joel Muñoz</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
