import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Hero() {
    return (
        <section className="hero-section align-items-center" id="Home">
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        col 1
                    </Col>
                    <Col>
                        col 2
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
