import React from 'react'
import styled from 'styled-components'

const IconStyled = styled.div`
    svg{
        width: 30px;
        height: 30px;
        color: #610e15;
    }
    svg:hover{
        color: #610e99;
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
