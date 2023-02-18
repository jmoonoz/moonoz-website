import React from 'react'
import TopSectionDivider from './TopSectionDivider'
import styled from 'styled-components'

const HeroAboutStyled = styled.div`
    height: 1000px;
`

export default function HomeAbout() {
    return (
        <HeroAboutStyled>
            {/* <TopSectionDivider /> */}
            <div>HeroAbout</div>
        </HeroAboutStyled>

    )
}
