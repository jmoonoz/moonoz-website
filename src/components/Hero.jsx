import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroIcon from './HeroIcon'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import styled from 'styled-components'

const HeroStyled = styled.div`
.icon-align{
    display: inline-block;
}

`

export default function Hero() {
    return (
        <HeroStyled>
            <section className="hero-section align-items-center" id="Home">
                <Container>
                    <Row className='align-items-center'>
                        <Col>
                            <div className='icon-align'>
                                <HeroIcon icon={<FaLinkedinIn />} link='https://www.linkedin.com/in/moonoz/' />
                                <HeroIcon icon={<GrInstagram />} link='https://www.instagram.com/moonozdisenoz/' />
                            </div>
                        </Col>
                        <Col>
                            col 2
                        </Col>
                    </Row>
                </Container>
            </section>
        </HeroStyled>
    )
}
