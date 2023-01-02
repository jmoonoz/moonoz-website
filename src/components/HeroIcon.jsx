import React from 'react'
import styled from 'styled-components'

const IconStyled = styled.div`
   a { 
    color: #DA3849;
   } 
   a:hover {
    color: #FFFFFF;
    transition: 0.3s ease-in-out;
   }
   a .hero-icon-item{
    width:42px;
    height: 42px;
    ${'' /* height: 42px; */}
    background: transparent;
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);
   }
   a .hero-icon-item::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #DA3849;
    border-radius: 50%;
    transform: scale(0);
	transition: 0.3s ease-in-out;
}
a .hero-icon-item:hover::before{
    transform: scale(1);
}

svg{
    width: 20px;
    height: 20px;
    transform: rotate(-90deg);
}

`


export default function HeroIcon({ icon, link }) {
    return (
        <IconStyled>
            <a href={link} target="_blank">
                <div class="hero-icon-item">
                    {icon}
                </div>
            </a>
        </IconStyled>
    )
}
