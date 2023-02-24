import React from "react";
import styled from "styled-components";

const PTextStyled = styled.div`
  p {
    line-height: 1.5;
    font-weight: 100;
  }
  @media only screen and (max-width: 768px) {
    p{
      width: 85%;
    }
  }
`;

function PText(props) {
  return (
    <PTextStyled>
      <p className="paragraph-Text">{props.children}</p>
    </PTextStyled>
  );
}

export default PText;
