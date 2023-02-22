import React from "react";
import styled from "styled-components";

const TitleStyled = styled.div`
  .title-name {
    color: #fff;
    font-weight: 600;
    opacity: 0.9;
    clamp(26px,5vw,32px)
  }
  .title-name:after{
    width: 100%;
    border-bottom: 1px solid;
    color: #cacaca;
    opacity: 0.75;
  }
`;

function Title({ sectionTitle }) {
  return (
    <TitleStyled>
      <h2 className="title-name">{sectionTitle}</h2>
    </TitleStyled>
  );
}

export default Title;
