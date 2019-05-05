import React from 'react'

import { Container, Section } from '../components/layout'
import { Speaker } from '../components'

import speakers from '../data/speakers'

const Speakers = () => {
  return (
    <Section title='Speakers' className='speakers'>
      <Container>
        {speakers.map((speaker, index) => (
          <Speaker {...speaker} key={index} />
        ))}
      </Container>
    </Section>
  )
}

export default Speakers
