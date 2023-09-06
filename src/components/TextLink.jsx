import React from "react";
import styled from "styled-components";

const TextLinkStyled = styled.div`
  .title-Link {
    transition: all .1 ease-in-out;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  .title-Link:hover {
    color: rgba(0, 0, 0, 0.0);
    font-style: italic;
    -webkit-text-stroke: 1px white;
  }
`;

export default function TextLink({link, title}) {
  return (
    <TextLinkStyled>
      <a href={link}>
        <h2 className="title-Link">{title}</h2>
      </a>
    </TextLinkStyled>
  );
}
