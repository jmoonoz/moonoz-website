import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeroIcon from './HeroIcon'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
import styled from 'styled-components'

const HeroStyled = styled.div`
.icon-align{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    ${'' /* margin: 0 1rem; */}
}


`

export default function Hero() {
    return (
        <HeroStyled>
            {/* <section > */}
                <Container className="hero-section align-items-center" id="Home" >
                    <Row className='align-items-center'>
                        <Col>
                            <div className='icon-align'>
                                <HeroIcon icon={<FaLinkedinIn />} link='https://www.linkedin.com/in/moonoz/' />
                                <HeroIcon icon={<AiFillGithub />} link='https://github.com/jmoonoz' />
                                <HeroIcon icon={<GrInstagram />} link='https://www.instagram.com/moonozdisenoz/' />
                            </div>
                            <h1>Joel Munoz</h1>
                        </Col>
                        <Col>
                            col 2
                        </Col>
                    </Row>
                </Container>
            {/* </section> */}
        </HeroStyled>
    )
}
