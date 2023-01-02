import React from 'react'
import styled from 'styled-components'

const IconStyled = styled.div`
   a{ 
    color: #DA3849;
   } 
   svg{
            width: 30px;
            height: 30px;
            color: ##DA3849;
            transform: rotate(-90deg);
        }
    svg:hover{
        color: #DA3849;
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
