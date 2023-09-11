import React, { useState } from "react";
import { Col, Card, Button, Container, Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import Profile from "../Asset/gallery/profileWebsite.png";

const CardItemStyled = styled.div`

.example {
  height: 250px;
  position: relative;
  overflow: hidden;
  width: auto;
  text-align: center;
}
.fadedbox {
  background-color: #666666;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  -webkit-transition: all 300ms ease-out;
  -moz-transition: all 300ms ease-out;
  -o-transition: all 300ms ease-out;
  -ms-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
  opacity: 0;
  width: auto;
  height: 225px;
  padding: 130px 20px;
}
.example:hover .fadedbox {
  opacity: 0.8;
}
.example .text {
  -webkit-transition: all 300ms ease-out;
  -moz-transition: all 300ms ease-out;
  -o-transition: all 300ms ease-out;
  -ms-transition: all 300ms ease-out;
  transition: all 300ms ease-out;
  transform: translateY(30px);
  -webkit-transform: translateY(30px);
}
.example .title {
  font-size: 2.5em;
  text-transform: uppercase;
  opacity: 0;
  transition-delay: 0.2s;
  transition-duration: 0.3s;
}
.example:hover .title,
.example:focus .title {
  opacity: 1;
  transform: translateY(0px);
  -webkit-transform: translateY(0px);
}
  @media only screen and (max-width: 768px) {
    .cardColor {
      width: 100%;
      
    }
`;

export default function CardItem({
  title = "Project Name",
  // img = ProjectImg,
  desc = "sadfasf",
  link = "https://www.moonoz.co",
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <CardItemStyled>
      <div class="example" onClick={handleShow}>
        <img src={Profile} width="400px" height="300px" alt="house" />
        <div class="fadedbox">
          <div class="title text"> {title} </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </CardItemStyled>
  );
}
