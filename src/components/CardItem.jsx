import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
// import Profile from "../Images/profileWebsite.png";

const CardItemStyled = styled.div`
  .card {
    border: none;
    border-radius: 0;
  }
  .card-body {
    background-color: #111;
  }
  .card-img-top {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .card-link {
    color: #ffffff;
    display: flex;
    gap: 5px;
  }
  a > svg {
    height: 30px;
    width: 30px;
  }
  .card-icon-area {
    display: flex;
    justify-content: center;
  }
  .card-icon:hover {
    color: #da3849;
  }
`;

export default function CardItem({
  title = "Project Name",
  img = ProjectImg,
  desc = "sadfasf",
  link = "https://www.moonoz.co",
}) {
  return (
    <CardItemStyled>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <div className="card-icon-area">
            <a className="card-link" href={link} target="_blank">
              <AiFillGithub className="card-icon" />
            </a>
          </div>
        </Card.Body>
      </Card>
    </CardItemStyled>
  );
}
