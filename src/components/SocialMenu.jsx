import React from 'react'
import styled from 'styled-components'
import HeroIcon from './HeroIcon'
import SocialMediaArrow from '../images/social-media-arrow.svg'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'

const SocialMenuStyled = styled.div`
    .icon-align{
            position: absolute;
            display: flex;
            flex-direction: column;
            left: 50px;
            top: 30%;
            height: 40%;
            justify-content:space-around;
            align-items:center;
            img{
                max-height: 45px;
                width: 16px;
            }
    }

`

export default function SocialMenu() {
    return (
        <SocialMenuStyled >
            <div className='icon-align'>
                <img src={SocialMediaArrow} alt="social media arrow"></img>
                <HeroIcon icon={<FaLinkedinIn />} link='https://www.linkedin.com/in/moonoz/' />
                <HeroIcon icon={<AiFillGithub />} link='https://github.com/jmoonoz' />
                <HeroIcon icon={<GrInstagram />} link='https://www.instagram.com/moonozdisenoz/' />
            </div>
        </SocialMenuStyled>

    )
}
