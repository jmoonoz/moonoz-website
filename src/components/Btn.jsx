import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'

const BtnStyled = styled.div`
    .btn{
        border-radius: 30px;
        padding-right: 30px;
        padding-left: 30px;
    }   
    .btn-light{
        color: #DA3849;
    }
`

export default function Btn({ variant, text }) {
    return (
        <BtnStyled>
            <Button variant={variant} >
                {text}
            </Button>
        </BtnStyled>
    )
}
