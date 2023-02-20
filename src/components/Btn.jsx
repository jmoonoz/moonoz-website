import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const BtnStyled = styled.div`
    .btn{
        padding-right: 30px;
        padding-left: 30px;
    }    
`

export default function Btn({ variant, text, link }) {
    return (
        <BtnStyled>
            <Button variant={variant} href={link} >
                {text}
            </Button>
        </BtnStyled>
    )
}
