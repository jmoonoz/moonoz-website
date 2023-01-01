import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import HeroIcon from './HeroIcon'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const HeroStyled = styled.div`
    .icon-align{
        width: 75%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        justify-content: space-around;
        ${'' /* margin: 0 1rem; */}
    }
    .hero-Name{
        display: flex;
        flow-direction: row;
    }
    .hero-section{
        margin-top: 0;
        padding: 260px 0 100px 0;
    }
    .col{
        justify-content: center;
    }
`

export default function Hero() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Front End Developer", "Graphics Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <HeroStyled>
            {/* <section > */}
            <Container className="hero-section" id="Home" >
                <Row className='align-items-center'>
                <Col xs={0} md={1} xl={1}></Col>
                    <Col xs={12} md={6} xl={7}>
                        <div className='icon-align '>
                            <HeroIcon icon={<FaLinkedinIn />} link='https://www.linkedin.com/in/moonoz/' />
                            <HeroIcon icon={<AiFillGithub />} link='https://github.com/jmoonoz' />
                            <HeroIcon icon={<GrInstagram />} link='https://www.instagram.com/moonozdisenoz/' />
                        </div>
                        <div className="hero-Name">
                            <h1>{`Im Joel Muñoz`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                            <div className="vr" />
                        </div>
                        <p>djlk alsdkjf lakjdf</p>
                        <Button variant="danger">Danger</Button>
                    </Col>
                    <Col xs={12} md={4} xl={4}>
                        col 2
                    </Col>
                </Row>
            </Container>
            {/* </section> */}
        </HeroStyled>
    )
}
