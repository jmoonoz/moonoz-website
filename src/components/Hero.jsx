import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Btn from './Btn'
import styled from 'styled-components'
import SocialMenu from './SocialMenu'
import { useState, useEffect } from 'react'

const HeroStyled = styled.div`
    .center-items{
        margin: 0 auto; 
    }
    .left-Col{
        line-height: 5;  
    }   
    
    .hero-Name{
        display: flex;
        flow-direction: row;
        text-align: center;
    }
    .hero-section{
        margin-top: 0;
        padding: 260px 0 100px 0;
    }
    .hero-text{
        padding: 0 10px;
        margin: 0 auto;
    }
    .btn-alignment{
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        justify-content: space-around;
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
            <SocialMenu />
            <Container className="hero-section" id="Home" >

                <Row className=''>
                    {/* extra col for spacing */}
                    <Col xs={0} md={1} xl={1}></Col>
                    <Col xs={12} md={6} xl={7} className="left-Col" centered>
                        <div className="hero-Name text-center">
                            <h1>Hey, I'm Joel Muñoz</h1>
                            {/* <h1>{`Im Joel Muñoz`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1> */}
                            <div className="vr" />
                        </div>
                        <div className="text-center">
                            <p>Creative Front End Web Developer with 5+ years experince.</p>
                        </div>
                        <div className="btn-alignment center-items">
                            <Btn variant="danger" text="About Me" />
                            <Btn variant="light" text="Hire Me" />
                        </div>
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
