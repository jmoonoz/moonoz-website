import React from "react";
import styled from "styled-components";
import HeroIcon from "./HeroIcon";
import SocialMediaArrow from "../images/social-media-arrow.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";

const SocialMenuStyled = styled.div`
  .icon-align {
    z-index: 2px !important;
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 30px;
    top: 65%;
    height: 260px;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    img {
      color: #cacaca;
      height: 80px;
      rotate: 180deg;
    }
  }
  @media only screen and (max-width: 768px) {
    .icon-align {
      left: 10px;
    }
  }
`;

export default function SocialMenu() {
  return (
    <SocialMenuStyled>
      <div className="icon-align">
        <HeroIcon
          icon={<FaLinkedinIn />}
          link="https://www.linkedin.com/in/moonoz/"
        />
        <HeroIcon icon={<AiFillGithub />} link="https://github.com/jmoonoz" />
        <HeroIcon
          icon={<GrInstagram />}
          link="https://www.instagram.com/moonozdisenoz/"
        />
        <img src={SocialMediaArrow} alt="social media arrow"></img>
      </div>
    </SocialMenuStyled>
  );
}
