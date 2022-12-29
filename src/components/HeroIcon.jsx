import React from 'react'
import styled from 'styled-components'

const IconStyled = styled.div`


`


export default function HeroIcon({ icon, link }) {
    return (
        <IconStyled>
            <a href={link} target="_blank">
                {icon}
            </a>
        </IconStyled>
    )
}
