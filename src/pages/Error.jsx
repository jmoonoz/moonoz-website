import React from 'react'
import SectionTemplate from '../Components/SectionTemplate'
import PageHero from '../Components/PageHero'
import { Button } from 'react-bootstrap'

function Error() {
  return (
    <SectionTemplate >
        <PageHero heroTitle='404' />
        <h2>you look a little lost, lets help you find your way back</h2>
        <Button variant='outline-light' href="/Home">Home</Button>

    </SectionTemplate>
    
  )
}

export default Error