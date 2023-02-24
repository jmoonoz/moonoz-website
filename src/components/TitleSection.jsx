import React from "react";
import styled from "styled-components";
import Title from "./Title";

const TitleStyled = styled.div`
  .title-section {
    display: inline-flex;
    width: 100%;
    flex-direction: row !important;
  }
  .padding-Bottom {
    width: 100%;
    border-bottom: 1px solid;
    color: #cacaca;
    opacity: 0.75;
    margin-bottom: 5%;
    margin-left: 15px;
  }
`;

export default function TitleSection({ titleName }) {
  return (
    <TitleStyled>
      <div className="title-section">
        <Title sectionTitle={titleName} />
        <div className="padding-Bottom"></div>
      </div>
    </TitleStyled>
  );
}
